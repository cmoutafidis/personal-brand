'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useLanguage} from '@/context/LanguageContext';
import {readConsent, writeConsent} from '@/lib/useConsent';

const TEXT = {
  en: {
    body: 'We use analytics and advertising cookies to see which pages bring enquiries. Nothing loads until you choose.',
    policy: 'Privacy policy',
    accept: 'Accept',
    decline: 'Decline',
  },
  el: {
    body: 'Χρησιμοποιούμε cookies ανάλυσης και διαφήμισης για να βλέπουμε ποιες σελίδες φέρνουν αιτήματα. Τίποτα δεν φορτώνει πριν επιλέξεις.',
    policy: 'Πολιτική απορρήτου',
    accept: 'Αποδοχή',
    decline: 'Απόρριψη',
  },
} as const;

const CookieConsent: React.FC = () => {
  const {language} = useLanguage();
  const [visible, setVisible] = useState(false);
  const t = TEXT[language];

  useEffect(() => {
    setVisible(readConsent() === 'unknown');
  }, []);

  if (!visible) return null;

  const choose = (value: 'granted' | 'denied') => {
    writeConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.policy}
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95"
    >
      <div
        className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm text-gray-700 dark:text-gray-300">
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
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {t.decline}
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="rounded-lg bg-[#0086ff] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#006add]"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
