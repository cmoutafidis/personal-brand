'use client';

import React from 'react';
import Link from 'next/link';
import {useLanguage} from "@/context/LanguageContext";
import {createTranslationFunction} from "@/translations";

const QuickLinks: React.FC = () => {
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
          href={language === 'en' ? '/en/services/custom-software-development-greece' : '/el/services/custom-software-development-greece'}
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {language === 'en' ? 'Custom Software' : 'Εξατομικευμένο Λογισμικό'}
        </Link>
      </li>
      <li>
        <Link
          href={language === 'en' ? '/en/services/data-analysis-greece' : '/el/services/data-analysis-greece'}
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {language === 'en' ? 'Data Analysis' : 'Ανάλυση Δεδομένων'}
        </Link>
      </li>
      <li>
        <Link
          href={language === 'en' ? '/en/services/snowflake-consulting-greece' : '/el/services/snowflake-consulting-greece'}
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          Snowflake
        </Link>
      </li>
      <li>
        <Link
          href={language === 'en' ? '/en/blog' : '/el/blog'}
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {t('nav.blog')}
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
