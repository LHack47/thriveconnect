import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, Building, Users } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const fundingPartners = [
    {
      name: "The Jensen Project",
      description: "The Jensen Project is committed to supporting innovative solutions that address human trafficking and create sustainable pathways to freedom. Their investment in ThriveConnect reflects their dedication to systemic change and evidence-based approaches to survivor support.",
      involvement: "Lead funding partner providing strategic investment and guidance for our pilot program launch.",
      impact: "Enabling the development of our technology platform and initial corporate partnerships, directly impacting 500+ survivors in our first year.",
      website: "https://thejensenproject.org"
    },
    {
      name: "The Life Story Initiative",
      subtitle: "A sponsored project of Rockefeller Philanthropy Advisors",
      description: "The Life Story Initiative focuses on supporting survivors of human trafficking through innovative programs that address their unique needs and challenges. As a sponsored project of Rockefeller Philanthropy Advisors, they bring extensive expertise in philanthropic strategy and impact measurement.",
      involvement: "Strategic funding partner providing both financial support and advisory services for program development and evaluation.",
      impact: "Supporting comprehensive program evaluation and helping establish best practices for trauma-informed corporate hiring.",
      website: "https://rockpa.org"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Header Section */}
      <div className="py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Our Partners
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the organizations and companies that make our mission possible through funding, collaboration, and shared commitment to creating opportunities for survivors.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Funding Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Heart className="text-primary-600 mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Funding Partners
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Visionary organizations providing the financial foundation and strategic support that makes our work possible.
            </p>
          </motion.div>

          <div className="space-y-12">
            {fundingPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                    {partner.subtitle && (
                      <p className="text-primary-600 font-medium mb-4">{partner.subtitle}</p>
                    )}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {partner.description}
                    </p>
                    <motion.a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Visit Website
                      <ExternalLink size={16} className="ml-2" />
                    </motion.a>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Users size={18} className="text-primary-600 mr-2" />
                        Why They're Involved
                      </h4>
                      <p className="text-gray-600">{partner.involvement}</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Building size={18} className="text-secondary-600 mr-2" />
                        Impact of Their Support
                      </h4>
                      <p className="text-gray-600">{partner.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Building className="text-primary-600 mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Corporate Partners
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Forward-thinking companies committed to making safe and successful workplaces accessible to survivors.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-12 shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We're currently building partnerships with leading companies across various industries who are committed to making safe and successful workplaces accessible to survivors.
              </p>
              <p className="text-gray-600">
                Our corporate partner showcase will feature company logos, success stories, and information about their commitment to survivor employment. Stay tuned for exciting announcements as we finalize these partnerships.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operational Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="text-primary-600 mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Operational Partners
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Strategic partners providing specialized expertise and operational support to enhance our program effectiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-50 rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Impact Rising</h3>
              <p className="text-primary-600 font-medium mb-4">Head of Monitoring and Evaluation</p>
              <p className="text-gray-600 leading-relaxed">
                A consulting company specializing in designing and leading collective impact initiatives, providing strategic guidance, shared impact measurement, and coordination to ensure alignment among partners.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Harvard Business School</h3>
              <p className="text-primary-600 font-medium mb-4">Pro Bono Corporate Partnership Liaison</p>
              <p className="text-gray-600 leading-relaxed">
                Pro bono consulting services tasked with representing the corporate lens during the pilot by facilitating focus groups, gathering actionable insights, and strategizing on the right companies and quantity for corporate partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PartnersPage;