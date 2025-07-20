import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, DollarSign, Users, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import jobScrapingService, { Job } from '../services/jobScrapingService';

const UPSCareersPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);



  // Simulate API call for job scraping
  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Use the job scraping service (currently returns mock data)
      // In production, this would call the real scraping API
      const response = await jobScrapingService.getMockJobs();
      
      setJobs(response.jobs);
      setLastUpdated(new Date(response.lastUpdated));
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError('Failed to fetch job listings. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Load jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  // Filter jobs based on search and location
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === '' || 
                           job.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              UPS Engineering Careers
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Discover entry-level engineering opportunities at UPS, where innovation meets global logistics
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm opacity-80">
              <Users size={16} />
              <span>Powered by ThriveConnect</span>
              {lastUpdated && (
                <>
                  <span>•</span>
                  <span>Updated: {lastUpdated.toLocaleTimeString()}</span>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Jobs
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title or keywords..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  placeholder="Filter by location..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <Button
              onClick={fetchJobs}
              disabled={loading}
              className="h-12"
            >
              {loading ? (
                <>
                  <RefreshCw className="animate-spin mr-2" size={16} />
                  Refreshing...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2" size={16} />
                  Refresh Jobs
                </>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-center"
          >
            <AlertCircle className="text-red-600 mr-3" size={20} />
            <p className="text-red-700">{error}</p>
          </motion.div>
        )}

        {/* Job Listings */}
        <div className="space-y-6">
          <SectionHeading
            title={`${filteredJobs.length} Entry Level Engineering Positions Found`}
            subtitle="Opportunities to launch your engineering career with a global leader"
          />

          {loading ? (
            <div className="grid grid-cols-1 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {job.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          job.experienceLevel === 'Entry Level' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {job.experienceLevel}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {formatDate(job.postingDate)}
                        </div>
                        {job.salaryRange && (
                          <div className="flex items-center">
                            <DollarSign size={14} className="mr-1" />
                            {job.salaryRange}
                          </div>
                        )}
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {job.jobType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-gray-500">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg text-base px-6 py-3 flex-1 sm:flex-none"
                    >
                      Apply Now
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                    <Button
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText(job.url);
                        // You could add a toast notification here
                      }}
                      className="flex-1 sm:flex-none"
                    >
                      Copy Link
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Implementation Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6"
        >
          <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
            <AlertCircle className="mr-2" size={20} />
            Implementation Notes
          </h3>
          <div className="text-blue-700 text-sm space-y-2">
            <p>
              This page currently displays mock data. To implement real scraping functionality, you'll need:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>A backend API server to handle web scraping (client-side scraping is blocked by CORS)</li>
              <li>Tools like Puppeteer or Playwright for JavaScript-rendered content</li>
              <li>Proper rate limiting and caching to avoid being blocked</li>
              <li>Regular updates to handle website structure changes</li>
            </ul>
            <p>
              Consider using job aggregation APIs or partnering with UPS directly for more reliable data access.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UPSCareersPage; 