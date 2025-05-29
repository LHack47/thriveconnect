import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  imageUrl,
  index
}) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="mb-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.667 13.333H5.33366C5.33366 8 9.33366 8 10.667 8C10.667 5.333 8.66699 2.667 5.33366 2.667C2.00033 2.667 0.666992 6.667 0.666992 8H2.66699C2.66699 7.333 3.33366 4.667 5.33366 4.667C7.33366 4.667 8.66699 6.667 8.66699 8C6.66699 8 3.33366 8 3.33366 13.333V16H10.667V13.333ZM24.0003 13.333H18.667C18.667 8 22.667 8 24.0003 8C24.0003 5.333 22.0003 2.667 18.667 2.667C15.3337 2.667 14.0003 6.667 14.0003 8H16.0003C16.0003 7.333 16.667 4.667 18.667 4.667C20.667 4.667 22.0003 6.667 22.0003 8C20.0003 8 16.667 8 16.667 13.333V16H24.0003V13.333Z" fill="#3B82F6"/>
        </svg>
      </div>
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <motion.img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Thrive Connect transformed how our organization approaches community engagement. The results have been nothing short of remarkable.",
      name: "Sarah Johnson",
      title: "Executive Director, Community First",
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The strategies and support provided by Thrive Connect helped us build stronger relationships within our community and increase our impact tenfold.",
      name: "Michael Rodriguez",
      title: "Community Manager, Urban Initiative",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Working with Thrive Connect gave us the tools and confidence to launch initiatives that truly resonate with our community members.",
      name: "Aisha Patel",
      title: "Program Director, Future Leaders",
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="What People Say"
          subtitle="Hear from organizations and communities that have transformed through our partnership."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;