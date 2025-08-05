'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Language, getTranslations } from '@/lib/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check URL path for language
    const path = pathname;
    if (path.startsWith('/en/') || path === '/en') {
      setLanguageState('en');
    } else if (path.startsWith('/el/') || path === '/el') {
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
    const currentPath = pathname;
    let newPath;

    if (lang === 'en') {
      if (currentPath.startsWith('/en/')) {
        newPath = currentPath;
      } else if (currentPath.startsWith('/el/')) {
        newPath = currentPath.replace('/el', '/en');
      } else if (currentPath === '/el') {
        newPath = '/en';
      } else {
        newPath = `/en${currentPath === '/' ? '' : currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/el/')) {
        newPath = currentPath;
      } else if (currentPath.startsWith('/en/')) {
        newPath = currentPath.replace('/en', '/el');
      } else if (currentPath === '/en') {
        newPath = '/el';
      } else {
        newPath = `/el${currentPath === '/' ? '' : currentPath}`;
      }
    }

    if (newPath !== currentPath) {
      router.push(newPath);
    }
  };

  const t = getTranslations(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};