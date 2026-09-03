'use client';

import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {ChevronDown} from 'lucide-react';
import {localeTarget, useLanguage} from '@/context/LanguageContext';
import {languages} from '@/types/language';

// ⚠️ THE OPTIONS ARE REAL <a href> ANCHORS AND THEY ARE ALWAYS IN THE HTML.
//
// Two separate things used to hide the Greek site from every crawler at once. The dropdown only
// RENDERED its options after a click, so there was nothing in the served HTML to read, and each
// option was a <button> calling setLanguage(), so there was no href to follow even once open.
//
// Measured 2026-09-03 by crawling the live site from the home page: 17 of 49 published pages were
// reachable, and the 32 that were not were the entire Greek tree, all fourteen articles included.
// The root redirects to /en, so a crawler enters English and can never leave. The Greek tree links
// itself properly. The break was the door.
//
// The list is now always rendered and hidden with a CSS class instead, the same technique the
// disclosure block on charismoutafidis.com uses and that its verify.sh checks for. next/link still
// navigates client side, so the dropdown behaves exactly as before for a human.

const LanguageSwitcher: React.FC = () => {
  const {language} = useLanguage();
  const pathname = usePathname() ?? '/';
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
      >
        <span className="mr-1">{currentLanguage?.flag}</span>
        <span>{currentLanguage?.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
      </button>

      <div
        className={`absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50 ${isOpen ? '' : 'hidden'}`}>
        <div className="py-1">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={localeTarget(pathname, lang.code)}
              hrefLang={lang.code}
              aria-current={language === lang.code ? 'true' : undefined}
              onClick={() => {
                try {
                  localStorage.setItem('language', lang.code);
                } catch {
                  /* private mode */
                }
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                language === lang.code
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <span className="mr-1">{lang.flag}</span>
              {lang.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;