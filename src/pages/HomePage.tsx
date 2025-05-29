import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HomePageSections/HeroSection';
import AboutSection from '../components/HomePageSections/AboutSection';
import ServicesSection from '../components/HomePageSections/ServicesSection';
import TestimonialsSection from '../components/HomePageSections/TestimonialsSection';
import TeamSection from '../components/HomePageSections/TeamSection';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
    </motion.div>
  );
};

export default HomePage;