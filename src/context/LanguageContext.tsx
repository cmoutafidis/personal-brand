'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Language } from '@/types/language';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check URL path for language
    if (pathname.startsWith('/en/') || pathname === '/en') {
      setLanguageState('en');
    } else if (pathname.startsWith('/el/') || pathname === '/el') {
      setLanguageState('el');
    } else {
      // Default to English for any other path
      setLanguageState('en');
    }
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Update URL without reload
    let newPath;

    if (lang === 'en') {
      if (pathname.startsWith('/en/')) {
        newPath = pathname;
      } else if (pathname.startsWith('/el/')) {
        newPath = pathname.replace('/el', '/en');
      } else if (pathname === '/el') {
        newPath = '/en';
      } else {
        newPath = `/en${pathname === '/' ? '' : pathname}`;
      }
    } else {
      if (pathname.startsWith('/el/')) {
        newPath = pathname;
      } else if (pathname.startsWith('/en/')) {
        newPath = pathname.replace('/en', '/el');
      } else if (pathname === '/en') {
        newPath = '/el';
      } else {
        newPath = `/el${pathname === '/' ? '' : pathname}`;
      }
    }

    if (newPath !== pathname) {
      router.push(newPath);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};