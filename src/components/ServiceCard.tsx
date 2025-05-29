import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} className="text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;