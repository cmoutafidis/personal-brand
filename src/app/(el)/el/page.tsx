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
// for the 7-Day Sheet-to-App Prototype. The local title «Εταιρεία λογισμικού στη Θεσσαλονίκη»,
// set on 2026-09-01, is struck by D66: every title opens with the 7-day prototype and «Πληρώνεις
// μόνο αν σου αρέσει». The city stays in the description and in the Local section. The anchor of
// the 7 days («μετά την πρώτη κλήση») does not fit in the title, so it rides in both descriptions.
// No figure in any of these strings (D68).
//
// ⚠️ `locale` and `siteName` are re-declared below on purpose. Next replaces the layout's whole
// `openGraph` object when a page declares its own.
export const metadata: Metadata = {
  title: 'Το πρωτότυπό σου σε 7 μέρες. Πληρώνεις μόνο αν σου αρέσει',
  description: 'Πρωτότυπο της εφαρμογής σου 7 μέρες μετά την πρώτη κλήση, από τα ονόματα των στηλών του Excel σου. Πληρώνεις μόνο αν σου αρέσει. Είμαστε στη Θεσσαλονίκη.',
  alternates: buildAlternates('', 'el'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el',
    locale: 'el_GR',
    siteName: 'Fiji Solutions',
    title: 'Το πρωτότυπό σου σε 7 μέρες. Πληρώνεις μόνο αν σου αρέσει',
    description: 'Το πρωτότυπο της εφαρμογής σου, 7 μέρες μετά την πρώτη κλήση, με μια οθόνη για κάθε ρόλο. Πληρώνεις μόνο αν σου αρέσει.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions, εταιρεία λογισμικού στη Θεσσαλονίκη',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Το πρωτότυπό σου σε 7 μέρες. Πληρώνεις μόνο αν σου αρέσει',
    description: 'Το πρωτότυπο της εφαρμογής σου, 7 μέρες μετά την πρώτη κλήση, με μια οθόνη για κάθε ρόλο. Πληρώνεις μόνο αν σου αρέσει.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekHomePage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <>
      <Hero t={t}/>
      <Challenges t={t}/>
      <Solutions t={t} language={language}/>
      {/* Where we are and the two website offers, then the sheet-to-app form. Both homepage
          buttons scroll to that form (2026-09-30, G20, D5). See Local.tsx for why this section
          exists. */}
      <Local t={t} language={language}/>
      {/* 2026-09-30 (G20, D5): the homepage's own form for the sheet-to-app offer. It takes the
          slot the audit form held. */}
      <SheetToAppFormSection language={language}/>
      {/* The long-form block. VISIBLE, not collapsed: audit §9 item 18 says so and gives the
          reason. It is also the only route from the home page into twelve of the fourteen Greek
          articles (the myDATA and accessibility links left the Greek block on 2026-09-30, G20, as
          compliance text; the blog index and other articles still link them) and into /services/custom-software-development-greece and /services/data-analysis-greece,
          which are in neither the navigation nor the footer. */}
      <HomeLongForm copy={homeLongForm.el}/>
      {/* FAQPage, built from the SAME array HomeLongForm renders, so the marked-up questions and
          the visible ones cannot drift. This page had no FAQPage at all before 2026-09-02, while
          peakcodeconsulting.ch's home page has one. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'el',
            mainEntity: homeLongForm.el.faqs.map((faq) => ({
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
