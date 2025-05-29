import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { Target, Users, Globe, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Empowering Economic Mobility",
      description: "Creating pathways to meaningful employment that foster stability, independence, and opportunities for survivors to shape their futures."
    },
    {
      icon: Users,
      title: "Scalability and Innovation",
      description: "Leveraging technology and collective impact to create a replicable model across multiple locations and corporate partners."
    },
    {
      icon: Globe,
      title: "Equity and Inclusion",
      description: "Addressing barriers specific to survivors and helping create inclusive corporate cultures through trauma-informed practices."
    },
    {
      icon: TrendingUp,
      title: "Long-term Social Impact",
      description: "Creating systemic change by standardizing trauma-informed hiring practices and fostering a supportive ecosystem."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <motion.img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our mission" 
              className="rounded-xl shadow-lg w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          
          <div className="md:w-1/2">
            <SectionHeading 
              title="Our Mission"
              subtitle="We're bridging the gap between survivors and meaningful career opportunities through innovative technology and partnerships."
              centered={false}
            />
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <motion.div 
                      className="bg-primary-100 p-3 rounded-lg"
                      whileHover={{ scale: 1.1, backgroundColor: "#e0e7ff" }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon size={20} className="text-primary-600" />
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;