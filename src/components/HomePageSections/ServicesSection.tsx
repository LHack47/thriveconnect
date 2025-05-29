import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { 
  Users, 
  Briefcase, 
  Lightbulb, 
  LineChart,
  Globe,
  HeartHandshake
} from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.FC<{ size: number; className: string }>;
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, backgroundColor: "#e0e7ff" }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={24} className="text-primary-600" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Technology Platform',
      description: 'A secure ecosystem where survivor-friendly job listings are posted, tracked, and facilitated through one central platform.',
      icon: Globe
    },
    {
      title: 'Corporate Partnerships',
      description: 'Connecting with leading organizations committed to inclusive hiring and career advancement opportunities.',
      icon: Briefcase
    },
    {
      title: 'Trauma-Informed Training',
      description: 'Equipping hiring managers and corporate partners with the framework to support survivors effectively.',
      icon: Users
    },
    {
      title: 'Impact Measurement',
      description: 'Comprehensive evaluation system tracking engagement, placements, retention, and career advancement.',
      icon: LineChart
    },
    {
      title: 'Innovation Programs',
      description: 'Developing creative solutions and partnerships to address systemic challenges in survivor employment.',
      icon: Lightbulb
    },
    {
      title: 'Resource Network',
      description: 'Building a collaborative network of nonprofits, government entities, and corporate partners.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Services"
          subtitle="Comprehensive solutions designed to create meaningful career pathways for survivors through technology and partnerships."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;