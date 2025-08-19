'use client';

import React from 'react';
import Link from 'next/link';
import {useLanguage} from "@/context/LanguageContext";
import {createTranslationFunction} from "@/translations";

interface QuickLinksProps {
  label: string;
}

const QuickLinks: React.FC<QuickLinksProps> = ({label}) => {
  const {language} = useLanguage();

  const t = createTranslationFunction(language);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <ul className="space-y-2">
      <li>
        <Link
          href={language === 'en' ? '/en' : '/el'}
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {t('nav.home')}
        </Link>
      </li>
      <li>
        <Link
          href={language === 'en' ? '/en/portfolio' : '/el/portfolio'}
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {t('nav.portfolio')}
        </Link>
      </li>
      <li>
        <Link
          href={language === 'en' ? '/en/contact' : '/el/contact'}
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {t('nav.contact')}
        </Link>
      </li>
      <li>
        <Link
          href={language === 'en' ? '/en/legal' : '/el/legal'}
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {t('nav.legal')}
        </Link>
      </li>
    </ul>
  );
};

export default QuickLinks;