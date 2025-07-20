import axios from 'axios';

interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  postingDate: string;
  description: string;
  requirements: string[];
  salaryRange?: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experienceLevel: 'Entry Level' | 'Mid Level' | 'Senior Level';
  url: string;
}

interface JobScrapingResponse {
  jobs: Job[];
  lastUpdated: string;
  totalCount: number;
}

class JobScrapingService {
  private baseURL: string;

  constructor() {
    // In production, this would be your backend API URL
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
  }

  /**
   * Scrape UPS career page for entry-level engineering jobs
   * This method would call your backend API that handles the actual scraping
   */
  async scrapeUPSJobs(): Promise<JobScrapingResponse> {
    try {
      const response = await axios.get(`${this.baseURL}/scrape/ups-jobs`, {
        params: {
          experienceLevel: 'entry-level',
          department: 'engineering',
          limit: 50
        },
        timeout: 30000 // 30 second timeout for scraping operations
      });

      return response.data;
    } catch (error) {
      console.error('Error scraping UPS jobs:', error);
      throw new Error('Failed to fetch job listings from UPS');
    }
  }

  /**
   * Get cached job listings (faster response)
   */
  async getCachedUPSJobs(): Promise<JobScrapingResponse> {
    try {
      const response = await axios.get(`${this.baseURL}/jobs/ups-cached`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cached jobs:', error);
      throw new Error('Failed to fetch cached job listings');
    }
  }

  /**
   * Search and filter jobs
   */
  async searchJobs(searchTerm: string, location: string = ''): Promise<Job[]> {
    try {
      const response = await axios.get(`${this.baseURL}/jobs/search`, {
        params: {
          q: searchTerm,
          location,
          source: 'ups',
          experienceLevel: 'entry-level'
        }
      });

      return response.data.jobs;
    } catch (error) {
      console.error('Error searching jobs:', error);
      throw new Error('Failed to search job listings');
    }
  }

  /**
   * Get job details by ID
   */
  async getJobDetails(jobId: string): Promise<Job> {
    try {
      const response = await axios.get(`${this.baseURL}/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching job details:', error);
      throw new Error('Failed to fetch job details');
    }
  }

  /**
   * Mock data for development/demo purposes
   * Remove this when connecting to real API
   */
  getMockJobs(): Promise<JobScrapingResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          jobs: [
            {
              id: '1',
              title: 'Entry Level Software Engineer',
              location: 'Atlanta, GA',
              department: 'Engineering',
              postingDate: '2024-01-15',
              description: 'Join our dynamic engineering team as an entry-level software engineer. You\'ll work on innovative logistics solutions that impact millions of customers worldwide. This role offers excellent growth opportunities and comprehensive training.',
              requirements: [
                'Bachelor\'s degree in Computer Science, Software Engineering, or related field',
                'Knowledge of programming languages (Java, Python, JavaScript)',
                'Understanding of software development lifecycle',
                'Strong problem-solving and analytical skills',
                'Excellent communication and teamwork abilities'
              ],
              salaryRange: '$65,000 - $85,000',
              jobType: 'Full-time',
              experienceLevel: 'Entry Level',
              url: 'https://careers.ups.com/job/12345'
            },
            {
              id: '2',
              title: 'Junior Industrial Engineer',
              location: 'Louisville, KY',
              department: 'Operations Engineering',
              postingDate: '2024-01-18',
              description: 'Support our world-class logistics operations by analyzing processes, identifying improvements, and implementing engineering solutions. Perfect opportunity for new graduates to apply theoretical knowledge in a real-world environment.',
              requirements: [
                'Bachelor\'s degree in Industrial Engineering or related field',
                'Familiarity with Lean Six Sigma principles',
                'Basic knowledge of CAD software',
                'Strong analytical and mathematical skills',
                'Ability to work in fast-paced environment'
              ],
              salaryRange: '$62,000 - $78,000',
              jobType: 'Full-time',
              experienceLevel: 'Entry Level',
              url: 'https://careers.ups.com/job/12346'
            },
            {
              id: '3',
              title: 'Associate Systems Engineer',
              location: 'Mahwah, NJ',
              department: 'IT Systems',
              postingDate: '2024-01-20',
              description: 'Design, implement, and maintain enterprise-level systems that power UPS\'s global operations. Work with cutting-edge technology in cloud computing, automation, and data analytics.',
              requirements: [
                'Bachelor\'s degree in Computer Engineering, Information Systems, or related field',
                'Experience with Linux/Unix systems',
                'Knowledge of networking protocols and security',
                'Familiarity with cloud platforms (AWS, Azure)',
                'Strong troubleshooting skills'
              ],
              salaryRange: '$68,000 - $88,000',
              jobType: 'Full-time',
              experienceLevel: 'Entry Level',
              url: 'https://careers.ups.com/job/12347'
            },
            {
              id: '4',
              title: 'Entry Level Data Engineer',
              location: 'Remote',
              department: 'Data & Analytics',
              postingDate: '2024-01-22',
              description: 'Build and maintain data pipelines that process billions of shipping transactions daily. Learn from industry experts while working on big data solutions that drive business decisions.',
              requirements: [
                'Bachelor\'s degree in Computer Science, Data Science, or related field',
                'Basic knowledge of SQL and Python',
                'Understanding of data structures and algorithms',
                'Experience with version control (Git)',
                'Interest in big data technologies'
              ],
              salaryRange: '$70,000 - $90,000',
              jobType: 'Full-time',
              experienceLevel: 'Entry Level',
              url: 'https://careers.ups.com/job/12348'
            }
          ],
          lastUpdated: new Date().toISOString(),
          totalCount: 4
        });
      }, 2000); // Simulate API delay
    });
  }
}

export default new JobScrapingService();
export type { Job, JobScrapingResponse }; 