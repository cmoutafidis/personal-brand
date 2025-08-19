'use client';

import React from 'react';
import {ChevronUp} from 'lucide-react';

interface FooterButtonProps {
  label: string;
}

const FooterButton: React.FC<FooterButtonProps> = ({label}) => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <button
      onClick={scrollToTop}
      className="p-4 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors cursor-pointer"
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6"/>
    </button>
  );
};

export default FooterButton;