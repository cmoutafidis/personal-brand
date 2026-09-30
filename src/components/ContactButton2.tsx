'use client';

import React from 'react';
import {useLanguage} from '@/context/LanguageContext';
import {createTranslationFunction} from '@/translations';
import TrackedLink from '@/components/TrackedLink';
import {CTA_CLICK_EVENT} from '@/utils/gtag';

// The button of the Solutions box on both homepages. 2026-09-30 (G20, D5): it scrolls to the
// homepage's sheet-to-app form, as ContactButton.tsx does, with `cta_location` 'home-solutions-box'.
const ContactButton2: React.FC = () => {
  const {language} = useLanguage();
  const t = createTranslationFunction(language);

  return (
    <TrackedLink
      event={CTA_CLICK_EVENT}
      params={{cta_location: 'home-solutions-box', locale: language, offer_slug: 'sheet-to-app'}}
      href="#sheet-to-app-form"
      className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
    >
      {t('solutions.cta.button')}
    </TrackedLink>
  );
};

export default ContactButton2;
