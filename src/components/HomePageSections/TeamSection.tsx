import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ACLogo from "../../assets/ACLogo.png"
import ENLogo from "../../assets/ENLogo.jpg"
import RBILogo from "../../assets/RBILogo.png"

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  bio,
  socialLinks,
  index
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden">
        <motion.img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-64 object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="p-4 flex space-x-4 mb-2">
            {socialLinks?.linkedin && (
              <motion.a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Linkedin size={18} />
              </motion.a>
            )}
            {socialLinks?.twitter && (
              <motion.a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Twitter size={18} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Elevate Academy",
      role: "Nonprofit Lead",
      imageUrl: RBILogo,
      bio: "Elevate Academy provides online classes, coaching, and a supportive community to help survivors achieve 'job readiness' after escape, regardless of their location.",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Empowered Network",
      role: "Nonprofit Lead",
      imageUrl: ENLogo,
      bio: "Empowered Network (EN) has been collaborating with trafficking survivors beyond the crisis to achieve their economic freedom.",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "AnnieCannons",
      role: "Nonprofit Lead",
      imageUrl: ACLogo,
      bio: "AnnieCannons is dedicated to training, prepare, and connecting individuals who have experienced human trafficking to sustainable careers in tech.",
      socialLinks: {
        linkedin: "#"
      }
    },
    {
      name: "Impact Rising",
      role: "Head of Monitoring and Evaluation",
      imageUrl: "",
      bio: "A consulting company specializing in designing and leading collective impact initiatives, providing strategic guidance, shared impact measurement, and coordination to ensure alignment among partners.",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "HBS",
      role: "Pro Bono Corporate Partnership Liason",
      imageUrl: "",
      bio: "Pro bono consulting services tasked with representing the corporate lens during the pilot by facilitating focus groups, gathering actionable insights, and strategizing on the right companies and quantity for corporate partnerships.",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Meet Our Team"
          subtitle="Passionate professionals dedicated to empowering communities and fostering connections."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              index={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              bio={member.bio}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;