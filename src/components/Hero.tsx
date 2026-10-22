import React from 'react';
import {ArrowRight} from 'lucide-react';
import VapiWidget from './VapiWidget';
import TrackedLink from '@/components/TrackedLink';
import {assistantId, vapiApiKey} from '@/types/language';
import type {Language} from '@/types/language';
import {HOMEPAGE_VOICE_ON} from '@/lib/landing';
import {BOOKING_URL} from '@/lib/booking';
import {BOOKING_CLICK_EVENT} from '@/utils/gtag';
import {HOME} from '@/data/home';
import {translations} from '@/translations';

// The hero of both homepages. Rewritten 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1
// row 2, H1 approved in BR-D28), copy from src/data/home.ts. Eyebrow, H1, sub line, then two buttons: the
// Calendly event (`booking_click`, `cta_location: 'home-hero'`) and "See our projects" to #projects. One
// centred column until a screenshot of our own work is cleared (BR-G26).
//
// The voice button stays behind HOMEPAGE_VOICE_ON (src/lib/landing.ts), false until BR-G10 makes the Vapi
// script broad. Server component: `language` comes in as a prop, which keeps both homepages static.

export const PRIMARY_BUTTON_CLASS =
  'inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-center text-lg font-medium text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900';

const SECONDARY_BUTTON_CLASS =
  'inline-flex items-center justify-center rounded-lg border border-primary-600 px-8 py-4 text-center text-lg font-medium text-primary-700 transition-colors hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900';

export default function Hero({language}: {language: Language}) {
  const copy = HOME[language].hero;

  return (
    <section id="hero" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 md:pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
            {copy.eyebrow}
          </p>
          <h1 className="mb-5 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl" style={{lineHeight: '1.1'}}>
            {copy.h1}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-7 md:text-lg md:leading-8 text-gray-700 dark:text-gray-300 md:text-xl">
            {copy.sub}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TrackedLink
              event={BOOKING_CLICK_EVENT}
              params={{cta_location: 'home-hero', locale: language}}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={PRIMARY_BUTTON_CLASS}
            >
              {copy.primary}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true"/>
            </TrackedLink>
            <a href="#projects" className={SECONDARY_BUTTON_CLASS}>
              {copy.secondary}
            </a>
            {HOMEPAGE_VOICE_ON && (
              <VapiWidget
                apiKey={vapiApiKey}
                assistantId={assistantId}
                className="text-lg px-8 py-4"
                buttonText={translations[language]['hero.talk']}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
