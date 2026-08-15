'use client';

import React from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {useLanguage} from '@/context/LanguageContext';

interface ContactButtonProps {
  label: string;
}

// This used to scroll to the contact form further down the same page. It now goes to the offer.
//
// The homepage asked for a stranger's details before telling them what they get; the audit page
// is where the deliverable, the timeline, the guarantee and the booking link are. Sending the
// primary CTA there is the single change the audit ranked first for this site.
const ContactButton: React.FC<ContactButtonProps> = ({label}) => {
  const {language} = useLanguage();

  return (
    <Link
      href={`/${language}/business-process-audit`}
      className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-lg cursor-pointer"
    >
      {label}
      <ArrowRight className="ml-2 h-5 w-5"/>
    </Link>
  );
};

export default ContactButton;
