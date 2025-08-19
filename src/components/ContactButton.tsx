'use client';

import React from 'react';
import {ArrowDown} from 'lucide-react';

interface ContactButtonProps {
  label: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({label}) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-lg cursor-pointer"
    >
      {label}
      <ArrowDown className="ml-2 h-5 w-5"/>
    </button>
  );
};

export default ContactButton;