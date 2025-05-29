import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  imageUrl,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="mb-4">
        <svg width="32\" height="32\" viewBox="0 0 32 32\" fill="none\" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.667 13.333H5.33366C5.33366 8 9.33366 8 10.667 8C10.667 5.333 8.66699 2.667 5.33366 2.667C2.00033 2.667 0.666992 6.667 0.666992 8H2.66699C2.66699 7.333 3.33366 4.667 5.33366 4.667C7.33366 4.667 8.66699 6.667 8.66699 8C6.66699 8 3.33366 8 3.33366 13.333V16H10.667V13.333ZM24.0003 13.333H18.667C18.667 8 22.667 8 24.0003 8C24.0003 5.333 22.0003 2.667 18.667 2.667C15.3337 2.667 14.0003 6.667 14.0003 8H16.0003C16.0003 7.333 16.667 4.667 18.667 4.667C20.667 4.667 22.0003 6.667 22.0003 8C20.0003 8 16.667 8 16.667 13.333V16H24.0003V13.333Z\" fill="#3B82F6"/>
        </svg>
      </div>
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;