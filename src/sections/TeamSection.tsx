import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TeamMemberCard from '../components/TeamMemberCard';

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