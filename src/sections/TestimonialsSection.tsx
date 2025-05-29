import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';

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