'use client';

import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {useLanguage} from '@/context/LanguageContext';
import {readConsent, writeConsent} from '@/lib/useConsent';

const TEXT = {
  en: {
    body: 'We use analytics and advertising cookies to see which pages bring enquiries. None of them load until you choose.',
    policy: 'Privacy policy',
    accept: 'Accept',
    decline: 'Decline',
  },
  el: {
    body: 'Χρησιμοποιούμε cookies ανάλυσης και διαφήμισης για να βλέπουμε ποιες σελίδες φέρνουν αιτήματα. Κανένα δεν φορτώνει πριν επιλέξεις.',
    policy: 'Πολιτική απορρήτου',
    accept: 'Αποδοχή',
    decline: 'Απόρριψη',
  },
} as const;

const CookieConsent: React.FC = () => {
  const {language} = useLanguage();
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const t = TEXT[language];

  useEffect(() => {
    setVisible(readConsent() === 'unknown');
  }, []);

  // While the bar is open, <html> carries data-consent-open and --consent-h (the bar's height), so
  // globals.css can lift the Vapi chat bubble above it and it never covers Accept (ONP-1; offer-os
  // seo-plan-2026-10 C3, D-66, 2026-10-28).
  useEffect(() => {
    const bar = barRef.current;
    if (!visible || !bar) return;
    const root = document.documentElement;
    const measure = () => root.style.setProperty('--consent-h', `${bar.offsetHeight}px`);
    measure();
    root.dataset.consentOpen = '';
    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    return () => {
      observer.disconnect();
      delete root.dataset.consentOpen;
      root.style.removeProperty('--consent-h');
    };
  }, [visible]);

  if (!visible) return null;

  const choose = (value: 'granted' | 'denied') => {
    writeConsent(value);
    setVisible(false);
  };

  return (
    <div
      ref={barRef}
      role="dialog"
      aria-live="polite"
      aria-label={t.policy}
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95"
    >
      <div
        className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-4">
        {/* Phones get smaller type and full width buttons side by side: 163 px -> about 119 px at
            375 px wide, same words (ONP-4, D-67, 2026-10-28). */}
        <p className="text-xs leading-4 text-gray-700 dark:text-gray-300 sm:text-sm sm:leading-5">
          {t.body}{' '}
          <Link
            href={`/${language}/privacy-policy`}
            className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-white"
          >
            {t.policy}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm sm:flex-none font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {t.decline}
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="flex-1 rounded-lg bg-[#0086ff] px-4 py-2 text-sm sm:flex-none font-semibold text-white transition hover:bg-[#006add]"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
