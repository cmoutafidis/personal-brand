import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Solutions from '@/components/Solutions';
import Local from '@/components/Local';
import SheetToAppFormSection from '@/components/SheetToAppFormSection';
import Footer from "@/components/Footer";
import HomeLongForm from '@/components/HomeLongForm';
import {homeLongForm} from '@/data/homeLongForm';

// 2026-09-30 (G20, offer-os gtm/sheet-to-app-rollout/PLAN.md D5, D66): the homepage is the hook
// for the 7-Day Sheet-to-App Prototype. Every title opens with the 7-day prototype and "pay only
// if you like it", and each description carries the anchor of the 7 days (the audit call). The
// brand suffix does not fit under 60 characters, so og:site_name carries it. No figure in any of
// these strings (D68): the homepage's figures sit in the Solutions box alone.
//
// ⚠️ `locale` and `siteName` are declared here because Next replaces the layout's whole
// `openGraph` object when a page declares its own. `en_US` is what RootShell emits for English.
export const metadata: Metadata = {
  title: 'Prototype 7 days after our call. Pay only if you like it',
  description: 'A prototype of your app 7 days after the audit call, made from the columns of the spreadsheet your team runs on. Pay only if you like it.',
  alternates: buildAlternates(''),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en',
    locale: 'en_US',
    siteName: 'Fiji Solutions',
    title: 'Prototype 7 days after our call. Pay only if you like it',
    description: 'A prototype of your app 7 days after the audit call, with a screen for each role and sample rows made from your column headers. Pay only if you like it.',
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
    title: 'Prototype 7 days after our call. Pay only if you like it',
    description: 'A prototype of your app 7 days after the audit call, with a screen for each role and sample rows made from your column headers. Pay only if you like it.',
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
      <Solutions t={t} language={language}/>
      {/* Where we are and the two website offers. The section renders on this page because the
          address, the phone and the map are true here too, and it gives /en/offers/website-seo
          and /en/offers/website-google-ads their first inbound internal link. */}
      <Local t={t} language={language}/>
      {/* 2026-09-30 (G20, D5): the homepage's own form for the sheet-to-app offer. Both homepage
          buttons scroll here (#sheet-to-app-form). It takes the slot the audit form held. */}
      <SheetToAppFormSection language={language}/>
      {/* The long-form block. VISIBLE, not collapsed: audit §9 item 18 says so and gives the
          reason. It is also the only route from the home page into twelve of the fourteen Greek
          articles (the myDATA and accessibility links left the Greek block on 2026-09-30, G20, as
          compliance text; the blog index and other articles still link them) and into /services/custom-software-development-greece and /services/data-analysis-greece,
          which are in neither the navigation nor the footer. */}
      <HomeLongForm copy={homeLongForm.en}/>
      {/* FAQPage, built from the SAME array HomeLongForm renders, so the marked-up questions and
          the visible ones cannot drift. This page had no FAQPage at all before 2026-09-02, while
          peakcodeconsulting.ch's home page has one. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'en',
            mainEntity: homeLongForm.en.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {'@type': 'Answer', text: faq.a},
            })),
          }),
        }}
      />
      <Footer t={t}/>
    </>
  );
}
