import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Heart, Building, Users } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ACLogo from "../assets/ACLogo.png";
import ENLogo from "../assets/ENLogo.jpg";
import RBILogo from "../assets/RBILogo.png";

const HomePage: React.FC = () => {
  const backboneOrganizations = [
    {
      name: "AnnieCannons",
      logo: ACLogo,
      description: "AnnieCannons is dedicated to training, preparing, and connecting individuals who have experienced human trafficking to sustainable careers in tech.",
      website: "https://anniecannons.com"
    },
    {
      name: "Empowered Network",
      logo: ENLogo,
      description: "Empowered Network (EN) has been collaborating with trafficking survivors beyond the crisis to achieve their economic freedom.",
      website: "https://empowerednetwork.org"
    },
    {
      name: "Elevate Academy",
      logo: RBILogo,
      description: "Elevate Academy provides online classes, coaching, and a supportive community to help survivors achieve 'job readiness' after escape.",
      website: "https://elevateacademy.org"
    }
  ];

  const fundingPartners = [
    {
      name: "The Jensen Project",
      description: "The Jensen Project is committed to supporting innovative solutions that address human trafficking and create sustainable pathways to freedom.",
      involvement: "Lead funding partner providing strategic investment and guidance for our pilot program launch.",
      impact: "Enabling the development of our technology platform and initial corporate partnerships, directly impacting 500+ survivors in our first year.",
      website: "https://thejensenproject.org"
    },
    {
      name: "The Life Story Initiative",
      subtitle: "A sponsored project of Rockefeller Philanthropy Advisors",
      description: "The Life Story Initiative focuses on supporting survivors of human trafficking through innovative programs that address their unique needs and challenges.",
      involvement: "Strategic funding partner providing both financial support and advisory services for program development and evaluation.",
      impact: "Supporting comprehensive program evaluation and helping establish best practices for trauma-informed corporate hiring.",
      website: "https://rockpa.org"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2)'
          }}
        ></div>
        
        {/* Animated Shapes */}
        <motion.div 
          className="absolute top-20 right-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "loop"
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Connecting Survivors to{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Meaningful Careers
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-200 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              A tech-enabled ecosystem linking survivors of human trafficking to meaningful career paths with best-in-class companies committed to inclusive hiring.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button size="lg" className="text-lg px-8 py-4">
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900"
                  onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              We envision a world where every survivor of human trafficking has access to meaningful career opportunities that provide not just employment, but pathways to economic independence, personal growth, and community integration. Through innovative technology and strategic partnerships, we're building bridges between survivors and companies committed to inclusive hiring practices, creating a sustainable ecosystem of support and opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us - Backbone Organizations Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Our Backbone Organizations
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Three leading organizations working together to create comprehensive pathways from crisis to career for survivors of human trafficking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {backboneOrganizations.map((org, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <motion.img
                    src={org.logo}
                    alt={`${org.name} logo`}
                    className="h-20 w-auto mx-auto mb-4 object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{org.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {org.description}
                </p>
                
                <motion.a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Visit Website
                  <ExternalLink size={16} className="ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Impact Initiative Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Collective Impact Initiative
              </h2>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our Collective Impact Initiative brings together leading nonprofit organizations, corporate partners, and technology solutions to create a comprehensive ecosystem for survivor employment. By combining our unique strengths and expertise, we're addressing the complex challenges that survivors face when transitioning to meaningful careers.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                This collaborative approach ensures that survivors receive holistic support - from initial job readiness training through long-term career advancement - while providing companies with the framework and resources they need to implement trauma-informed hiring practices successfully.
              </p>

              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-3">Coming Soon</h3>
                <p className="text-primary-700">
                  We're currently developing comprehensive metrics and milestones to track our collective impact. Future updates will include detailed goals, success stories, and opportunities for additional investment and partnership. Stay tuned for exciting developments as we launch our pilot program in 2025.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners - Funding Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Heart className="text-primary-600 mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Our Funding Partners
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Visionary organizations providing the financial foundation and strategic support that makes our work possible.
            </p>
          </motion.div>

          <div className="space-y-12">
            {fundingPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                    {partner.subtitle && (
                      <p className="text-primary-600 font-medium mb-4">{partner.subtitle}</p>
                    )}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {partner.description}
                    </p>
                    <motion.a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Visit Website
                      <ExternalLink size={16} className="ml-2" />
                    </motion.a>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Users size={18} className="text-primary-600 mr-2" />
                        Why They're Involved
                      </h4>
                      <p className="text-gray-600">{partner.involvement}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Building size={18} className="text-secondary-600 mr-2" />
                        Impact of Their Support
                      </h4>
                      <p className="text-gray-600">{partner.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Building className="text-primary-600 mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Corporate Partners
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Forward-thinking companies committed to inclusive hiring practices and creating meaningful career opportunities for survivors.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-12 shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We're currently building partnerships with leading companies across various industries who are committed to trauma-informed hiring practices and creating inclusive workplaces for survivors.
              </p>
              <p className="text-gray-600">
                Our corporate partner showcase will feature company logos, success stories, and information about their commitment to survivor employment. Stay tuned for exciting announcements as we finalize these partnerships.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operational Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="text-primary-600 mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Operational Partners
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Strategic partners providing specialized expertise and operational support to enhance our program effectiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Impact Rising</h3>
              <p className="text-primary-600 font-medium mb-4">Head of Monitoring and Evaluation</p>
              <p className="text-gray-600 leading-relaxed">
                A consulting company specializing in designing and leading collective impact initiatives, providing strategic guidance, shared impact measurement, and coordination to ensure alignment among partners.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Harvard Business School</h3>
              <p className="text-primary-600 font-medium mb-4">Pro Bono Corporate Partnership Liaison</p>
              <p className="text-gray-600 leading-relaxed">
                Pro bono consulting services tasked with representing the corporate lens during the pilot by facilitating focus groups, gathering actionable insights, and strategizing on the right companies and quantity for corporate partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;