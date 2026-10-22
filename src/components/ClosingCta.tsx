import {ArrowRight, ChevronDown} from 'lucide-react';
import type {Language} from '@/types/language';
import ContactForm from '@/components/ContactForm';
import TrackedLink from '@/components/TrackedLink';
import {PRIMARY_BUTTON_CLASS} from '@/components/Hero';
import {HOME} from '@/data/home';
import {BOOKING_URL} from '@/lib/booking';
import {BOOKING_CLICK_EVENT} from '@/utils/gtag';

// The closing band of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1
// row 13). The Calendly button (`booking_click`, `cta_location: 'home-closing'`), then the general form:
// `presetQuestion` 'homepage-general' is its lead source marker in the inbox and its GA4 `form_location`,
// and it sends no `offer_slug`, since the home sells no one offer. The form opens from its own line, "Or
// send us a message.", a native <details>, so the home stays inside its height target (PLAN.md §4.1).
//
// Server component: `language` comes in as a prop; ContactForm is the client part.

export const HOME_FORM_MARKER = 'homepage-general';

export default function ClosingCta({language}: {language: Language}) {
  const copy = HOME[language].closing;

  return (
    <section id="contact-us" className="bg-primary-50 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-gray-950 dark:text-white md:text-[2rem]">{copy.heading}</h2>
        <TrackedLink
          event={BOOKING_CLICK_EVENT}
          params={{cta_location: 'home-closing', locale: language}}
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={PRIMARY_BUTTON_CLASS}
        >
          {copy.button}
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true"/>
        </TrackedLink>
        <details className="group mt-6">
          <summary className="inline-flex cursor-pointer list-none items-center text-lg font-medium text-primary-700 hover:underline dark:text-primary-300 [&::-webkit-details-marker]:hidden">
            {copy.formLine}
            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true"/>
          </summary>
          <div className="mt-6 rounded-xl bg-white p-5 text-left shadow-sm dark:bg-gray-800 md:p-6">
            <ContactForm languageOverride={language} hideTitle compact presetQuestion={HOME_FORM_MARKER}/>
          </div>
        </details>
      </div>
    </section>
  );
}
