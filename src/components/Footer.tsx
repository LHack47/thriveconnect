import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, LifeBuoy } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <LifeBuoy size={24} className="text-primary-500 mr-2" />
              <span className="text-xl font-bold">Thrive Connect</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering connections and fostering growth in communities worldwide.
            </p>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <li className="flex items-center">
                <Mail size={18} className="text-primary-500 mr-2" />
                <span className="text-gray-400">info@thriveconnect.com</span>
              </li>
            {/* <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <ul className="space-y-3">
              {/* <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 mr-2 mt-1" />
                <span className="text-gray-400">123 Innovation Way, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-500 mr-2" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li> */}
              
            </ul>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md focus:outline-none text-gray-800 w-full"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Newsletter
          <div>
            
          </div> */}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Thrive Connect. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;