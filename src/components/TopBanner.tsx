'use client';

import React, {useEffect, useState} from 'react';
import {X} from 'lucide-react';
import {translations} from '@/translations';
import {BOOKING_URL} from '@/lib/booking';
import {BOOKING_CLICK_EVENT, trackEvent} from '@/utils/gtag';
import type {Language} from '@/types/language';

// The one line banner above the header. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G04,
// PLAN.md §4.1 row 0 and §4.5, copy from offer-os companies/fiji-solutions/site/03-copy-home.md,
// "Banner").
//
// - It links the Calendly event (BOOKING_URL) in a new tab and sends `booking_click` with
//   `cta_location: 'top-banner'`.
// - Navbar.tsx renders it, and only where isBookingPromptHiddenPath() is false: never on the
//   single-goal landing pages, never on the two audit pages (BR-D9).
// - It scrolls away with the page (PLAN.md: "not sticky"): it sits in the page flow above the fixed
//   header, and Navbar moves the header down by the part of TOP_BANNER_HEIGHT still on screen.
// - The × closes it for the rest of the tab, kept in sessionStorage. Every storage call sits in a
//   try/catch, since storage throws in some private windows; then the banner just closes for the
//   page view. The server renders it open, so a visitor who closed it may see it for a moment
//   before hydration, which costs less than a layout shift for everyone else.

/** The banner's height in px. One fixed height at every width, so the header offset is known
 *  before hydration: two lines of text-xs fit on a phone, one line of text-sm from sm up. */
export const TOP_BANNER_HEIGHT = 44;

const STORAGE_KEY = 'fiji-top-banner-closed';

/** Whether the banner is open, and the function the × calls. `hidden` is the path rule. */
export function useTopBanner(hidden: boolean): [boolean, () => void] {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === '1') setClosed(true);
    } catch {
      /* storage blocked: the banner stays open for this page view */
    }
  }, []);

  const close = () => {
    setClosed(true);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* storage blocked: closed for this page view only */
    }
  };

  return [!hidden && !closed, close];
}

export default function TopBanner({language, onClose}: {language: Language; onClose: () => void}) {
  const t = (key: string) => translations[language][key] || key;

  return (
    <div
      className="relative z-[51] flex items-center justify-center bg-primary-600 px-10 text-center text-xs leading-4 text-white sm:text-sm sm:leading-5 dark:bg-primary-700"
      style={{height: TOP_BANNER_HEIGHT}}
    >
      <p>
        {t('banner.text')}{' '}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent(BOOKING_CLICK_EVENT, {cta_location: 'top-banner', locale: language})}
          className="font-semibold underline underline-offset-2 hover:text-primary-100"
        >
          {t('banner.link')}
        </a>
      </p>
      <button
        type="button"
        onClick={onClose}
        aria-label={t('banner.close')}
        className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full hover:bg-primary-700 dark:hover:bg-primary-800"
      >
        <X className="h-4 w-4" aria-hidden="true"/>
      </button>
    </div>
  );
}
