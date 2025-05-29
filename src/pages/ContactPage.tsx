import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactPageSections/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg">
              Have questions or ready to start a conversation? We're here to help you connect and thrive.
            </p>
          </motion.div>
        </div>
      </div>
      <ContactSection />
    </motion.div>
  );
};

export default ContactPage;