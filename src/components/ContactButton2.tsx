'use client';

import React from 'react';
import {useLanguage} from "@/context/LanguageContext";
import {createTranslationFunction} from "@/translations";

interface ContactButtonProps2 {
  label: string;
}

const ContactButton2: React.FC<ContactButtonProps2> = ({label}) => {
  const {language} = useLanguage();

  const t = createTranslationFunction(language);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
    >
      {t('solutions.cta.button')}
    </button>
  );
};

export default ContactButton2;