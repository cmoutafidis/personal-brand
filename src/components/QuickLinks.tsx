'use client';

import React from 'react';
import Link from 'next/link';
import {useLanguage} from '@/context/LanguageContext';
import {createTranslationFunction} from '@/translations';

// The audit page and the privacy policy were both missing from here until 2026-08-15 — the first
// was unreachable from anywhere on the site, the second was reachable only by typing the URL
// while every page loaded a visitor-identification tag and an advertising tag.

const QuickLinks: React.FC = () => {
  const {language} = useLanguage();
  const t = createTranslationFunction(language);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const links: { label: string; href: string }[] = [
    {label: t('nav.home'), href: `/${language}`},
    {label: t('nav.audit'), href: `/${language}/business-process-audit`},
    {label: t('nav.portfolio'), href: `/${language}/portfolio`},
    {label: t('nav.snowflake'), href: `/${language}/services/snowflake-consulting-greece`},
    // The blog is a content surface, not a service. It goes here and NOT in the navbar: the
    // navbar's four items are the whole menu, and the eight offer pages are kept out of every
    // menu for the same reason (see CLAUDE.md).
    {label: t('nav.blog'), href: `/${language}/blog`},
    {label: t('nav.contact'), href: `/${language}/contact`},
    {label: t('nav.privacy'), href: `/${language}/privacy-policy`},
    {label: t('nav.legal'), href: `/${language}/legal`},
  ];

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default QuickLinks;
