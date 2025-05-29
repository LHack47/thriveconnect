import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Target, Users, Globe, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our mission" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          
          <div className="md:w-1/2">
            <SectionHeading 
              title="Our Mission"
              subtitle="We're on a mission to transform how communities connect and thrive together."
              centered={false}
            />
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Target size={20} className="text-primary-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Purposeful Connections</h3>
                  <p className="text-gray-600">
                    We believe in the power of meaningful relationships to drive positive change
                    and create resilient, supportive communities.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Users size={20} className="text-primary-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Inclusive Growth</h3>
                  <p className="text-gray-600">
                    We're committed to ensuring that every individual and organization has the
                    opportunity to grow, learn, and contribute to their community.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Globe size={20} className="text-primary-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                  <p className="text-gray-600">
                    While we act locally, we think globally. Our approach aims to create ripple
                    effects that extend beyond immediate communities.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <TrendingUp size={20} className="text-primary-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Sustainable Progress</h3>
                  <p className="text-gray-600">
                    We're focused on creating lasting change through sustainable practices and
                    long-term thinking rather than quick fixes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;