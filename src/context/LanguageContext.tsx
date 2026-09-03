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

/**
 * Where the locale switcher should send a reader who is on `pathname` and picks `lang`.
 *
 * ⚠️ EXPORTED, AND BOTH THE CLICK AND THE href MUST USE IT. Until 2026-09-03 the switcher was a
 * dropdown whose options were only rendered once it was open, and each option was a <button>
 * calling setLanguage(). A crawler follows hrefs, so there was nothing to follow and nothing even
 * in the HTML to look at. Measured that day by crawling the live site from the home page: 17 of 49
 * published pages were reachable, and the 32 that were not were the ENTIRE GREEK SITE, including
 * all fourteen Greek articles. The root redirects to /en, so a crawler enters the English tree and
 * can never leave it. The Greek tree is well linked once you are inside it; the break is the door.
 *
 * That also explains a separate measurement: Bing has about 13 pages of this site and /el/blog is
 * not among them.
 *
 * ⚠️ THE GREEK BLOG HAS NO ENGLISH TWIN and a naive prefix swap sends readers to a 404.
 * blogData.en is empty, /en/blog is noindex, and /en/blog/<greek-slug> answers 404, verified live.
 * So a Greek article maps to /en, not to /en/blog: the English blog index is an empty noindex page
 * reading "No blog posts available yet", which is a worse destination than the home page. That is
 * the same call the sibling repo made on 2026-09-01.
 */
export function localeTarget(pathname: string, lang: Language): string {
  if (pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)) return pathname;
  if (lang === 'en' && pathname.startsWith('/el/blog')) return '/en';
  if (pathname.startsWith('/el/') || pathname.startsWith('/en/')) return `/${lang}${pathname.slice(3)}`;
  if (pathname === '/el' || pathname === '/en') return `/${lang}`;
  return `/${lang}${pathname === '/' ? '' : pathname}`;
}


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

    const newPath = localeTarget(pathname, lang);
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