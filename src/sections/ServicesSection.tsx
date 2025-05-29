import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { 
  Users, 
  Briefcase, 
  Lightbulb, 
  LineChart,
  Globe,
  HeartHandshake
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Community Building',
      description: 'Develop strong, resilient communities through our proven engagement strategies and tools.',
      icon: Users
    },
    {
      title: 'Strategic Partnerships',
      description: 'Connect with like-minded organizations to amplify your impact and reach.',
      icon: Briefcase
    },
    {
      title: 'Innovation Programs',
      description: 'Foster creative solutions to community challenges through collaborative innovation.',
      icon: Lightbulb
    },
    {
      title: 'Impact Measurement',
      description: 'Track and analyze your community impact with our comprehensive metrics framework.',
      icon: LineChart
    },
    {
      title: 'Global Networking',
      description: 'Expand your reach and learn from diverse perspectives across our worldwide network.',
      icon: Globe
    },
    {
      title: 'Resource Sharing',
      description: 'Access and contribute to a pool of resources designed to strengthen communities.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Pilot"
          subtitle="Comprehensive solutions designed to strengthen communities and foster meaningful connections."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
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