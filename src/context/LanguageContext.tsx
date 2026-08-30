'use client';

import React, {createContext, useContext} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {Language} from '@/types/language';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {
  },
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Derived during render, NOT held in state and corrected in an effect.
  //
  // It used to be `useState('en')` plus a `useEffect`, which meant the server — and any crawler
  // that does not execute JS — saw an English navbar on every Greek page, with every href
  // pointing at /en. The URL is the only source of truth for the locale; read it directly.
  const language: Language = pathname?.startsWith('/el') ? 'el' : 'en';

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem('language', lang);
    } catch {
      /* private mode */
    }

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
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};