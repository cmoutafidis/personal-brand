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
// Calendly event (`booking_click`, `cta_location: 'home-hero'`) and "See our projects" to #projects. Two
// columns since BR-D45, see below.
//
// The voice button stays behind HOMEPAGE_VOICE_ON (src/lib/landing.ts), true again since 2026-10-25, when BR-G10
// made the Vapi script broad. Server component: `language` comes in as a prop, which keeps both homepages static.

export const PRIMARY_BUTTON_CLASS =
  'inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-center text-lg font-medium text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900';

// The hero of BR-D45 (2026-10-26, after ignitech.ch): one centred column (his answer the same day: *"I dont like
// that the header is 2 columns. Revert it to 1 column as it was"*), set large and heavy, with the end of the h1
// (`h1Accent`) in the accent colour. The stats follow the hero as their own bar, where IgniTech has its stats bar.
const HERO_PRIMARY_CLASS =
  'inline-flex items-center justify-center rounded-lg bg-primary-600 px-7 py-3.5 text-center text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900';

const HERO_SECONDARY_CLASS =
  'inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-center text-base font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:hover:border-primary-400 dark:focus:ring-offset-gray-900';

function Headline({h1, accent}: {h1: string; accent: string}) {
  if (!h1.endsWith(accent)) return <>{h1}</>;
  return (
    <>
      {h1.slice(0, h1.length - accent.length)}
      <span className="text-primary-600 dark:text-primary-400">{accent}</span>
    </>
  );
}

export default function Hero({language}: {language: Language}) {
  const copy = HOME[language].hero;

  return (
    <section id="hero" className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-[#f4f8ff] dark:from-gray-900 dark:to-gray-950"></div>
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 md:pt-32 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-5xl text-center" data-reveal="">
          <p className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary-700 dark:text-primary-300">
            <span className="inline-block h-0.5 w-[18px] rounded bg-primary-600 dark:bg-primary-400" aria-hidden="true"/>
            {copy.eyebrow}
          </p>
          {/* A headline longer than 75 characters (the Greek one) steps down one size, so it keeps to four lines. */}
          <h1 className={`mb-6 font-extrabold leading-[1.06] text-gray-950 dark:text-white ${copy.h1.length > 75 ? 'tracking-[-0.01em] text-[2.1rem] sm:text-[2.6rem] lg:text-[3.25rem]' : 'tracking-[-0.025em] text-[2.4rem] sm:text-5xl lg:text-[3.75rem]'}`}>
            <Headline h1={copy.h1} accent={copy.h1Accent}/>
          </h1>
          <p className="mx-auto mb-9 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            {copy.sub}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <TrackedLink
              event={BOOKING_CLICK_EVENT}
              params={{cta_location: 'home-hero', locale: language}}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={HERO_PRIMARY_CLASS}
            >
              {copy.primary}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true"/>
            </TrackedLink>
            <a href="#projects" className={HERO_SECONDARY_CLASS}>
              {copy.secondary}
            </a>
            {HOMEPAGE_VOICE_ON && (
              <VapiWidget
                apiKey={vapiApiKey}
                assistantId={assistantId}
                className="px-7 py-3.5 text-base"
                buttonText={translations[language]['hero.talk']}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
