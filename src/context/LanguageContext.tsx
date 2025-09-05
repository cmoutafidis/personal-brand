'use client';

import React, {createContext, useContext, useEffect, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {Language} from '@/types/language';
import {blogData} from '@/data/blogs';

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

    // Check if current path is a blog post
    const blogPostMatch = pathname.match(/^\/(en|el)\/blog\/(.+)$/);
    
    let newPath;
    
    if (blogPostMatch) {
      // Handle blog post URL
      const currentLang = blogPostMatch[1] as Language;
      const currentSlug = blogPostMatch[2];
      
      // Find the current blog post by slug
      const currentPost = blogData[currentLang]?.find(post => post.slug === currentSlug);
      
      if (currentPost) {
        // Find the corresponding post in the target language by ID
        const targetPost = blogData[lang]?.find(post => post.id === currentPost.id);
        
        if (targetPost) {
          // Use the target language's slug
          newPath = `/${lang}/blog/${targetPost.slug}`;
        } else {
          // Fallback to blog index if post doesn't exist in target language
          newPath = `/${lang}/blog`;
        }
      } else {
        // Fallback to blog index if current post not found
        newPath = `/${lang}/blog`;
      }
    } else {
      // Handle non-blog post URLs with existing logic
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