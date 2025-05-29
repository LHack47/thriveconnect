import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import SectionHeading from '../SectionHeading';

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
          className="w-full h-64 object-cover"
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
      name: "Dr. Elena Martinez",
      role: "Founder & CEO",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With over 15 years of experience in community development, Elena founded Thrive Connect to bridge the gap between organizations and the communities they serve.",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Chen",
      role: "Chief Strategy Officer",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Marcus brings extensive experience in strategic planning and organizational development, helping communities maximize their impact.",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Olivia Washington",
      role: "Director of Programs",
      imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Olivia oversees our innovative programs, ensuring they meet the unique needs of diverse communities while driving measurable outcomes.",
      socialLinks: {
        linkedin: "#"
      }
    },
    {
      name: "James Okonkwo",
      role: "Head of Global Partnerships",
      imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "James builds and nurtures our network of global partners, creating opportunities for collaboration and knowledge exchange across borders.",
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