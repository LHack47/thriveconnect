import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10"></div>
      
      {/* Animated Shapes */}
      <motion.div 
        className="absolute top-20 right-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.1, 0.9, 1],
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "loop"
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-40 right-60 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 0.9, 1.1, 1],
          x: [0, -20, 30, 0],
          y: [0, 20, -50, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "loop",
          delay: 2
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connecting Survivors to{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Meaningful Careers
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              A tech-enabled ecosystem linking survivors of human trafficking to meaningful career paths with best-in-class companies committed to inclusive hiring.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button size="lg">
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="group">
                  Learn More
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Empowering careers" 
              className="rounded-xl shadow-2xl w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Stats Overlay */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex items-center space-x-6">
                <div>
                  <motion.p 
                    className="text-3xl font-bold text-primary-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    500+
                  </motion.p>
                  <p className="text-gray-600 text-sm">Annual Impact</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <motion.p 
                    className="text-3xl font-bold text-secondary-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    2025
                  </motion.p>
                  <p className="text-gray-600 text-sm">Pilot Launch</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;