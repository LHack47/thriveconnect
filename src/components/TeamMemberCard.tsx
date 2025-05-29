import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageUrl,
  bio,
  socialLinks,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md group">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
          <div className="p-4 flex space-x-4 mb-2">
            {socialLinks?.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            )}
            {socialLinks?.twitter && (
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;