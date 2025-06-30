import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../assets/TCLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img src={Logo} alt="ThriveConnect Logo" width={32} className="mr-2"/>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              ThriveConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>About Us</NavLink>
            <NavLink to="/partners" active={location.pathname === '/partners'}>Partners</NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>Contact Us</NavLink>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none focus:text-primary-600"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg absolute left-4 right-4 top-14"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-4">
              <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
              <NavLink to="/about" active={location.pathname === '/about'}>About Us</NavLink>
              <NavLink to="/partners" active={location.pathname === '/partners'}>Partners</NavLink>
              <NavLink to="/contact" active={location.pathname === '/contact'}>Contact Us</NavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, active }) => {
  return (
    <Link
      to={to}
      className={`relative font-medium transition-colors duration-300 ${
        active ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
      }`}
    >
      {children}
      {active && (
        <motion.div 
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
          layoutId="navIndicator"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default Navbar;