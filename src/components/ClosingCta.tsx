import {ArrowRight, ChevronDown} from 'lucide-react';
import type {Language} from '@/types/language';
import ContactForm from '@/components/ContactForm';
import TrackedLink from '@/components/TrackedLink';
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

// Since BR-D45 (2026-10-26, after ignitech.ch): a full width band in strong blue, heading and button on the
// left, the button white. The form opens in a white card under it.
export default function ClosingCta({language}: {language: Language}) {
  const copy = HOME[language].closing;

  return (
    <section id="contact-us" className="bg-primary-700 py-14 dark:bg-primary-900 md:py-[72px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-reveal="">
        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary-100">
          <span className="inline-block h-0.5 w-[18px] rounded bg-primary-100" aria-hidden="true"/>
          {HOME[language].labels.closing}
        </p>
        <h2 className="mb-8 max-w-4xl text-[1.9rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[2.5rem]">{copy.heading}</h2>
        <TrackedLink
          event={BOOKING_CLICK_EVENT}
          params={{cta_location: 'home-closing', locale: language}}
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-center text-base font-semibold text-primary-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
        >
          {copy.button}
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true"/>
        </TrackedLink>
        <details className="group mt-6">
          <summary className="inline-flex cursor-pointer list-none items-center text-lg font-semibold text-white hover:underline [&::-webkit-details-marker]:hidden">
            {copy.formLine}
            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true"/>
          </summary>
          <div className="mt-6 max-w-3xl rounded-[20px] bg-white p-6 text-left shadow-lg dark:bg-gray-900 md:p-8">
            <ContactForm languageOverride={language} hideTitle compact presetQuestion={HOME_FORM_MARKER}/>
          </div>
        </details>
      </div>
    </section>
  );
}
