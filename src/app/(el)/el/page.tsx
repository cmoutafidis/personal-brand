import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Solutions from '@/components/Solutions';
import Local from '@/components/Local';
import AuditFormSection from '@/components/AuditFormSection';
import Footer from "@/components/Footer";
import HomeLongForm from '@/components/HomeLongForm';
import {homeLongForm} from '@/data/homeLongForm';

// Retargeted 2026-09-01 on the first demand data either company has ever had
// (offer-os/gtm/keyword-research-2026-09-01.md).
//
// The old title was «Μία διαδικασία αυτοματοποιημένη σε 30 μέρες υλοποίησης» — 71 characters built
// out of «αυτοματοποίηση διαδικασιών», which DataForSEO reports at NO measurable volume in Greek,
// alongside αυτοματοποίηση επιχειρήσεων, ψηφιακός μετασχηματισμός, εξατομικευμένο λογισμικό and
// λογισμικό για επιχειρήσεις. The description was 202 characters and truncated in every SERP.
// «εταιρεία λογισμικού» returns 260/mo at LOW competition.
//
// ⛔ THE H1 IS NOT TOUCHED. translations.ts 'hero.title' (el) stands as written — Charis was shown
// the conflict on 2026-08-30 and chose to leave it. Only the title tag moves. Retargeting the H1 at
// «κατασκευή ιστοσελίδων» would make this site claim to be a web agency, and that is a positioning
// decision only he can take.
//
// «τιμες» carries real volume (κατασκευή ιστοσελίδων θεσσαλονίκη τιμες, 90/mo) and rule 7 forbids
// publishing a price. The description answers the intent without breaking the rule: it says the
// price is agreed in writing, not what it is.
//
// ⚠️ `locale` and `siteName` are re-declared below on purpose. Next replaces the layout's whole
// `openGraph` object when a page declares its own, so this page shipped with no og:locale and no
// og:site_name until today.
export const metadata: Metadata = {
  title: 'Εταιρεία λογισμικού στη Θεσσαλονίκη | Fiji Solutions',
  description: 'Εταιρεία λογισμικού στη Θεσσαλονίκη: λογισμικό, αυτοματισμοί και κατασκευή ιστοσελίδων. Ξεκίνα με δωρεάν έλεγχο διαδικασιών. Την τιμή τη συμφωνούμε γραπτά.',
  alternates: buildAlternates('', 'el'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el',
    locale: 'el_GR',
    siteName: 'Fiji Solutions',
    title: 'Εταιρεία λογισμικού στη Θεσσαλονίκη | Fiji Solutions',
    description: 'Λογισμικό, αυτοματισμοί και κατασκευή ιστοσελίδων, από τη Θεσσαλονίκη. Ξεκίνα με δωρεάν έλεγχο διαδικασιών και γραπτό πλάνο μιας σελίδας.',
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
    title: 'Εταιρεία λογισμικού στη Θεσσαλονίκη | Fiji Solutions',
    description: 'Λογισμικό, αυτοματισμοί και κατασκευή ιστοσελίδων, από τη Θεσσαλονίκη. Ξεκίνα με δωρεάν έλεγχο διαδικασιών και γραπτό πλάνο μιας σελίδας.',
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
      <Solutions t={t}/>
      {/* The audit argument (leaks → how it works) completes first, then where we are and the two
          website offers, then the form. Both homepage CTAs navigate to /business-process-audit,
          so no click path is interrupted. See Local.tsx for why this section exists. */}
      <Local t={t} language={language}/>
      <AuditFormSection language={language} presetQuestion="homepage-process-audit"/>
      {/* The long-form block. VISIBLE, not collapsed: audit §9 item 18 says so and gives the
          reason. It is also the only route from the home page into the fourteen Greek articles
          and into /services/custom-software-development-greece and /services/data-analysis-greece,
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
