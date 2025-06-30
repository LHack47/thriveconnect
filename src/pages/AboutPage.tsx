import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ACLogo from "../assets/ACLogo.png";
import ENLogo from "../assets/ENLogo.jpg";
import RBILogo from "../assets/RBILogo.png";

const AboutPage: React.FC = () => {
  const backboneOrganizations = [
    {
      name: "AnnieCannons",
      logo: ACLogo,
      description: "AnnieCannons is dedicated to training, preparing, and connecting individuals who have experienced human trafficking to sustainable careers in tech. Through comprehensive coding bootcamps and ongoing support, they provide survivors with the technical skills and professional development needed to thrive in the technology sector.",
      website: "https://anniecannons.com"
    },
    {
      name: "Empowered Network",
      logo: ENLogo,
      description: "Empowered Network (EN) has been collaborating with trafficking survivors beyond the crisis to achieve their economic freedom. They provide comprehensive support services including job training, placement assistance, and ongoing mentorship to help survivors build sustainable careers and independent lives.",
      website: "https://empowerednetwork.org"
    },
    {
      name: "Elevate Academy",
      logo: RBILogo,
      description: "Elevate Academy provides online classes, coaching, and a supportive community to help survivors achieve 'job readiness' after escape, regardless of their location. Their flexible, accessible programs ensure that survivors can access career preparation resources no matter where they are in their journey.",
      website: "https://elevateacademy.org"
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
                About Us
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Learn about the organizations driving change and the collective impact initiative transforming lives.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Backbone Organizations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Our Backbone Organizations
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Three leading organizations working together to create comprehensive pathways from crisis to career for survivors of human trafficking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {backboneOrganizations.map((org, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <motion.img
                    src={org.logo}
                    alt={`${org.name} logo`}
                    className="h-20 w-auto mx-auto mb-4 object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{org.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {org.description}
                </p>
                
                <motion.a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Visit Website
                  <ExternalLink size={16} className="ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Impact Initiative Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Collective Impact Initiative
              </h2>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our Collective Impact Initiative brings together leading nonprofit organizations, corporate partners, and technology solutions to create a comprehensive ecosystem for survivor employment. By combining our unique strengths and expertise, we're addressing the complex challenges that survivors face when transitioning to meaningful careers.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                This collaborative approach ensures that survivors receive holistic support - from initial job readiness training through long-term career advancement - while providing companies with the tools and support needed to connect successfully with non-traditional candidates.
              </p>

              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-3">Coming Soon</h3>
                <p className="text-primary-700">
                  We're currently developing comprehensive metrics and milestones to track our collective impact. Future updates will include detailed goals, success stories, and opportunities for additional investment and partnership. Stay tuned for exciting developments as we launch our pilot program in 2025.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;