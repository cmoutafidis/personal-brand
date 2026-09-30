'use client';

import React, {useEffect, useState} from 'react';
import TrackedLink from '@/components/TrackedLink';
import {CTA_CLICK_EVENT} from '@/utils/gtag';
import type {Language} from '@/types/language';

// The sticky mobile bar of the sheet-to-app page (02-architecture.md, CTA plan: "a sticky bar with
// the same button, shown once the hero scrolls out"). Phones only. It hides again once the form
// section is on screen, so it never covers the form it points at. It sits at z-40, below the
// cookie banner (z-60), so the banner stays readable while it is open.

export default function SheetToAppStickyCta({
  label,
  heroId,
  formId,
  language,
  offerSlug
}: {
  label: string;
  heroId: string;
  formId: string;
  language: Language;
  offerSlug: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const form = document.getElementById(formId);
    if (!hero || !form) return;

    const update = () => {
      const heroOut = hero.getBoundingClientRect().bottom <= 0;
      const formReached = form.getBoundingClientRect().top < window.innerHeight;
      setVisible(heroOut && !formReached);
    };

    update();
    window.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [heroId, formId]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-200 dark:border-gray-800 dark:bg-gray-900/95 md:hidden ${
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      }`}
    >
      <TrackedLink
        event={CTA_CLICK_EVENT}
        params={{cta_location: 'sticky-mobile', locale: language, offer_slug: offerSlug}}
        href={`#${formId}`}
        tabIndex={visible ? 0 : -1}
        className="flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-3 text-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        {label}
      </TrackedLink>
    </div>
  );
}
