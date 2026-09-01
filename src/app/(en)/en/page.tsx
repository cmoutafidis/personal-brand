import type {Metadata} from 'next';
import {FIRST_FIX_DAYS} from '@/lib/offer';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Solutions from '@/components/Solutions';
import Local from '@/components/Local';
import AuditFormSection from '@/components/AuditFormSection';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `One process automated in ${FIRST_FIX_DAYS} days from build start | Fiji Solutions`,
  description: `We map how your business runs, put a euro figure on the three bottlenecks costing you most, and automate the first one within ${FIRST_FIX_DAYS} days of the build starting.`,
  alternates: buildAlternates(''),
  openGraph: {
    type: 'website',
    title: `One process automated in ${FIRST_FIX_DAYS} days from build start | Fiji Solutions`,
    // Audience, 2026-08-16: the buyer who signs is the owner. Named here by the symptom the
    // audit page already describes him by, not by country — "businesses in Greece" was nobody
    // in particular. Company size, sector and trigger event are still unstated, so nothing here
    // implies one.
    description: 'Custom software, automations, reporting tools, and Snowflake data systems for the owner whose business runs on retyped data, late follow-ups, and one person who knows how everything works.',
    url: 'https://www.fijisolutions.net/en',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions, Thessaloniki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: `One process automated in ${FIRST_FIX_DAYS} days from build start | Fiji Solutions`,
    description: 'Custom software, automations, reporting tools, and Snowflake data systems for the owner whose business runs on retyped data, late follow-ups, and one person who knows how everything works.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishHomePage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <>
      <Hero t={t}/>
      <Challenges t={t}/>
      <Solutions t={t}/>
      {/* The English homepage keeps its promise-led title and description on purpose. English in
          Greece is measured dead — `software company thessaloniki`, `software development greece`
          and `custom software development greece` all return no data
          (offer-os/gtm/keyword-research-2026-09-01.md), so there is no local ranking to win here
          and nothing to trade the headline for. The section renders anyway: the address, the phone
          and the map are true on this page too, and it is what gives /en/offers/website-seo and
          /en/offers/website-google-ads their first inbound internal link. */}
      <Local t={t} language={language}/>
      <AuditFormSection language={language} presetQuestion="homepage-process-audit"/>
      <Footer t={t}/>
    </>
  );
}
