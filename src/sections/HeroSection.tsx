import React from 'react';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-60 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 right-20 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connecting Communities for a{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Thriving Future
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              Empowering individuals and organizations to build meaningful connections, 
              foster growth, and create positive change in communities worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="group">
                Learn More
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="People collaborating" 
              className="rounded-xl shadow-2xl w-full transform transition-all duration-500 hover:scale-105"
            />
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-3xl font-bold text-primary-600">30k+</p>
                  <p className="text-gray-600 text-sm">Communities</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <p className="text-3xl font-bold text-secondary-500">98%</p>
                  <p className="text-gray-600 text-sm">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;