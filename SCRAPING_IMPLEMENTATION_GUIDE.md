# UPS Job Scraping Implementation Guide

This guide explains how to implement the actual web scraping functionality for the UPS careers page. The current implementation uses mock data, but this document outlines the steps to create a real scraping solution.

## Table of Contents
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Backend Implementation](#backend-implementation)
4. [Deployment Options](#deployment-options)
5. [Legal and Ethical Considerations](#legal-and-ethical-considerations)
6. [Alternative Solutions](#alternative-solutions)

## Overview

The current frontend implementation (`src/pages/UPSCareersPage.tsx`) is designed to work with a backend API that handles web scraping. Direct client-side scraping is not possible due to:

- **CORS (Cross-Origin Resource Sharing) restrictions**
- **Anti-bot measures** implemented by UPS
- **JavaScript-rendered content** that requires a full browser engine

## Architecture

```
Frontend (React) → Backend API → Web Scraper → UPS Career Page
     ↓                ↓              ↓              ↓
   Display Jobs    Cache & Filter   Extract Data   Job Listings
```

### Components:
1. **Frontend**: React app with job listing UI
2. **Backend API**: Express.js/Node.js server with REST endpoints
3. **Web Scraper**: Puppeteer/Playwright for browser automation
4. **Database**: PostgreSQL/MongoDB for caching job data
5. **Scheduler**: Cron jobs for regular updates

## Backend Implementation

### 1. Setup Backend Server

```bash
mkdir ups-scraper-backend
cd ups-scraper-backend
npm init -y
npm install express cors helmet morgan dotenv
npm install puppeteer cheerio axios
npm install node-cron
npm install -D @types/node typescript ts-node nodemon
```

### 2. Basic Server Structure

```typescript
// server.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cron from 'node-cron';
import { scrapeUPSJobs } from './scrapers/upsCareerScraper';
import { jobRoutes } from './routes/jobs';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/scrape', scrapeRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Schedule job scraping every 4 hours
cron.schedule('0 */4 * * *', async () => {
  console.log('Starting scheduled job scraping...');
  try {
    await scrapeUPSJobs();
    console.log('Scheduled job scraping completed');
  } catch (error) {
    console.error('Scheduled job scraping failed:', error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 3. Web Scraper Implementation

```typescript
// scrapers/upsCareerScraper.ts
import puppeteer from 'puppeteer';
import { Job } from '../types/job';

const UPS_CAREERS_BASE_URL = 'https://careers.ups.com';
const SEARCH_URL = `${UPS_CAREERS_BASE_URL}/jobs`;

export class UPSCareerScraper {
  private browser: any;

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });
  }

  async scrapeJobs(filters: {
    experienceLevel?: string;
    department?: string;
    location?: string;
    limit?: number;
  } = {}): Promise<Job[]> {
    if (!this.browser) {
      await this.initialize();
    }

    const page = await this.browser.newPage();
    const jobs: Job[] = [];

    try {
      // Set user agent to avoid bot detection
      await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      );

      // Navigate to careers page
      await page.goto(SEARCH_URL, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      // Apply filters
      if (filters.department) {
        await this.applyDepartmentFilter(page, filters.department);
      }

      if (filters.experienceLevel) {
        await this.applyExperienceLevelFilter(page, filters.experienceLevel);
      }

      // Wait for job listings to load
      await page.waitForSelector('.job-listing', { timeout: 15000 });

      // Extract job data
      const jobElements = await page.$$('.job-listing');
      
      for (const jobElement of jobElements) {
        try {
          const job = await this.extractJobData(page, jobElement);
          if (job && this.isEngineeringRole(job)) {
            jobs.push(job);
          }
          
          if (filters.limit && jobs.length >= filters.limit) {
            break;
          }
        } catch (error) {
          console.error('Error extracting job data:', error);
          continue;
        }
      }

    } catch (error) {
      console.error('Error during scraping:', error);
      throw error;
    } finally {
      await page.close();
    }

    return jobs;
  }

  private async extractJobData(page: any, jobElement: any): Promise<Job | null> {
    try {
      // Extract basic job information
      const title = await jobElement.$eval('.job-title', (el: any) => el.textContent?.trim());
      const location = await jobElement.$eval('.job-location', (el: any) => el.textContent?.trim());
      const jobUrl = await jobElement.$eval('a', (el: any) => el.href);

      if (!title || !location || !jobUrl) {
        return null;
      }

      // Click on job to get detailed information
      const detailPage = await this.browser.newPage();
      await detailPage.goto(jobUrl, { waitUntil: 'networkidle2' });

      const description = await detailPage.$eval('.job-description', 
        (el: any) => el.textContent?.trim()
      ).catch(() => '');

      const requirements = await detailPage.$$eval('.requirements li', 
        (elements: any[]) => elements.map(el => el.textContent?.trim()).filter(Boolean)
      ).catch(() => []);

      const salaryElement = await detailPage.$('.salary-range');
      const salaryRange = salaryElement 
        ? await detailPage.evaluate((el: any) => el.textContent?.trim(), salaryElement)
        : undefined;

      await detailPage.close();

      return {
        id: this.generateJobId(jobUrl),
        title,
        location,
        department: this.extractDepartment(title, description),
        postingDate: new Date().toISOString().split('T')[0], // Today's date as fallback
        description,
        requirements,
        salaryRange,
        jobType: 'Full-time', // Default, could be extracted from page
        experienceLevel: this.determineExperienceLevel(title, description),
        url: jobUrl
      };

    } catch (error) {
      console.error('Error extracting job data:', error);
      return null;
    }
  }

  private async applyDepartmentFilter(page: any, department: string) {
    // Implementation depends on UPS website structure
    // This is a placeholder for department filtering
    try {
      await page.click('[data-filter="department"]');
      await page.waitForSelector(`[value*="${department}"]`, { timeout: 5000 });
      await page.click(`[value*="${department}"]`);
    } catch (error) {
      console.log('Could not apply department filter:', error);
    }
  }

  private async applyExperienceLevelFilter(page: any, level: string) {
    // Implementation for experience level filtering
    try {
      await page.click('[data-filter="experience"]');
      await page.waitForSelector(`[value*="${level}"]`, { timeout: 5000 });
      await page.click(`[value*="${level}"]`);
    } catch (error) {
      console.log('Could not apply experience level filter:', error);
    }
  }

  private isEngineeringRole(job: Job): boolean {
    const engineeringKeywords = [
      'engineer', 'engineering', 'developer', 'software', 'technical',
      'systems', 'data', 'analytics', 'programmer', 'architect'
    ];
    
    const titleLower = job.title.toLowerCase();
    const descriptionLower = job.description.toLowerCase();
    
    return engineeringKeywords.some(keyword => 
      titleLower.includes(keyword) || descriptionLower.includes(keyword)
    );
  }

  private determineExperienceLevel(title: string, description: string): string {
    const content = (title + ' ' + description).toLowerCase();
    
    if (content.includes('entry') || content.includes('junior') || 
        content.includes('graduate') || content.includes('new grad')) {
      return 'Entry Level';
    } else if (content.includes('senior') || content.includes('lead') || 
               content.includes('principal')) {
      return 'Senior Level';
    }
    
    return 'Mid Level';
  }

  private extractDepartment(title: string, description: string): string {
    // Logic to determine department based on title and description
    const content = (title + ' ' + description).toLowerCase();
    
    if (content.includes('software') || content.includes('web') || 
        content.includes('mobile')) {
      return 'Software Engineering';
    } else if (content.includes('data') || content.includes('analytics')) {
      return 'Data & Analytics';
    } else if (content.includes('system') || content.includes('infrastructure')) {
      return 'Systems Engineering';
    } else if (content.includes('industrial')) {
      return 'Operations Engineering';
    }
    
    return 'Engineering';
  }

  private generateJobId(url: string): string {
    // Extract job ID from URL or generate hash
    const match = url.match(/job\/(\d+)/);
    return match ? match[1] : Buffer.from(url).toString('base64').slice(0, 10);
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

export const scrapeUPSJobs = async (filters: any = {}) => {
  const scraper = new UPSCareerScraper();
  try {
    const jobs = await scraper.scrapeJobs(filters);
    // Save to database here
    return jobs;
  } finally {
    await scraper.close();
  }
};
```

### 4. API Routes

```typescript
// routes/jobs.ts
import express from 'express';
import { UPSCareerScraper } from '../scrapers/upsCareerScraper';
import { JobCache } from '../services/jobCache';

const router = express.Router();
const jobCache = new JobCache();

// Get cached UPS jobs
router.get('/ups-cached', async (req, res) => {
  try {
    const jobs = await jobCache.getCachedJobs('ups');
    res.json({
      jobs,
      lastUpdated: await jobCache.getLastUpdated('ups'),
      totalCount: jobs.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cached jobs' });
  }
});

// Scrape fresh UPS jobs
router.get('/scrape/ups-jobs', async (req, res) => {
  try {
    const { experienceLevel, department, limit } = req.query;
    
    const scraper = new UPSCareerScraper();
    const jobs = await scraper.scrapeJobs({
      experienceLevel: experienceLevel as string,
      department: department as string,
      limit: limit ? parseInt(limit as string) : undefined
    });
    
    // Cache the results
    await jobCache.cacheJobs('ups', jobs);
    
    res.json({
      jobs,
      lastUpdated: new Date().toISOString(),
      totalCount: jobs.length
    });
  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ error: 'Failed to scrape jobs' });
  }
});

// Search jobs
router.get('/search', async (req, res) => {
  try {
    const { q, location, source } = req.query;
    const jobs = await jobCache.searchJobs(q as string, {
      location: location as string,
      source: source as string
    });
    
    res.json({ jobs });
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
});

export { router as jobRoutes };
```

## Deployment Options

### 1. Heroku (Recommended for MVP)
```bash
# Install Heroku CLI
heroku create ups-job-scraper
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL=https://your-frontend.netlify.app
git push heroku main
```

### 2. AWS Lambda + API Gateway
- Use Puppeteer Lambda layer
- Implement scraping as serverless functions
- Use DynamoDB for caching

### 3. Docker Deployment
```dockerfile
FROM node:18-alpine

# Install Puppeteer dependencies
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Tell Puppeteer to use installed Chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3001
CMD ["npm", "start"]
```

## Legal and Ethical Considerations

### 1. Terms of Service
- Review UPS careers page terms of service
- Ensure compliance with their robot.txt file
- Respect rate limits and crawl delays

### 2. Best Practices
- Use reasonable request intervals (1-2 seconds between requests)
- Implement proper error handling and retry logic
- Cache results to minimize server load
- Include proper User-Agent headers
- Respect robots.txt directives

### 3. Data Usage
- Only scrape publicly available job listings
- Don't store personal information
- Provide attribution to UPS
- Consider reaching out to UPS for official API access

## Alternative Solutions

### 1. Official APIs
- **UPS Developer Portal**: Check if UPS offers career APIs
- **ATS Integration**: Many companies use Applicant Tracking Systems with APIs

### 2. Job Aggregation Services
- **Adzuna API**: Job search API with UPS listings
- **Jobs2Careers API**: Comprehensive job data
- **Reed API**: UK-focused but growing globally
- **GitHub Jobs API**: For tech-specific roles

### 3. Third-party Services
- **Apify**: Pre-built scrapers for job sites
- **ScrapingBee**: Managed scraping service
- **Bright Data**: Enterprise web scraping platform

## Testing the Implementation

### 1. Frontend Testing
```bash
cd your-react-app
npm run dev
# Visit http://localhost:5173/ups-careers
```

### 2. Backend Testing
```bash
cd ups-scraper-backend
npm run dev
# Test endpoints:
# GET http://localhost:3001/api/jobs/ups-cached
# GET http://localhost:3001/api/scrape/ups-jobs
```

### 3. Environment Variables
Create `.env` file:
```
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5173
DATABASE_URL=postgresql://localhost:5432/ups_jobs
SCRAPING_DELAY=2000
```

## Monitoring and Maintenance

### 1. Error Monitoring
- Implement logging with Winston
- Use Sentry for error tracking
- Monitor scraping success rates

### 2. Performance Monitoring
- Track scraping duration
- Monitor memory usage
- Set up alerts for failures

### 3. Regular Updates
- UPS website structure may change
- Update selectors and extraction logic
- Test regularly and implement fallbacks

## Next Steps

1. **Set up the backend server** following the structure above
2. **Implement basic scraping logic** for UPS careers page
3. **Test with small batches** of job listings
4. **Add caching and error handling**
5. **Deploy to production environment**
6. **Monitor and iterate** based on results

Remember to always respect the target website's terms of service and implement responsible scraping practices. 