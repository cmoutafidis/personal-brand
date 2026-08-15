'use client';

import React from 'react';
import Link from 'next/link';
import {useLanguage} from '@/context/LanguageContext';
import {createTranslationFunction} from '@/translations';

// See ContactButton.tsx — this scrolled to the form too, and now goes to the offer page.
const ContactButton2: React.FC = () => {
  const {language} = useLanguage();
  const t = createTranslationFunction(language);

  return (
    <Link
      href={`/${language}/business-process-audit`}
      className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
    >
      {t('solutions.cta.button')}
    </Link>
  );
};

export default ContactButton2;
