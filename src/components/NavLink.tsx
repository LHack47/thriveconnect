import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
    >
      {children}
    </a>
  );
};