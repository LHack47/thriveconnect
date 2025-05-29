import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitSuccess && (
        <motion.div 
          className="bg-success-50 border border-success-200 text-success-700 px-4 py-3 rounded-lg mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for your message! We'll get back to you soon.
        </motion.div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-sm text-error-500">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-error-500">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <motion.select
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Partnership">Partnership</option>
          <option value="Support">Support</option>
          <option value="Other">Other</option>
        </motion.select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
          placeholder="Your message here..."
        />
        {errors.message && <p className="mt-1 text-sm text-error-500">{errors.message}</p>}
      </div>
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full"
          onClick={() => validate()}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.div>
    </form>
  );
};

export default ContactForm;