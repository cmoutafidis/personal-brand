import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // 2026-10-08 (F16, offer-os gtm/followups-and-search/PLAN.md F-D135): the Contact page leads with
  // the 7-day prototype. Copy from offer-os offers/fiji-solutions--sheet-to-app/derived/site/F16-COPY.md.
  title: 'Επικοινωνία | Πρωτότυπο 7 μέρες μετά την πρώτη κλήση',
  description: 'Πες μας σε ποιο Excel τρέχει η δουλειά της ομάδας σου. Πρωτότυπο της εφαρμογής σου 7 μέρες μετά την πρώτη κλήση των 30 λεπτών. Πληρώνεις μόνο αν σου αρέσει. Απαντάμε μέσα σε μία εργάσιμη ημέρα.',
  keywords: 'επικοινωνία Fiji Solutions, εφαρμογή από Excel, εταιρεία λογισμικού Θεσσαλονίκη',
  alternates: buildAlternates('/contact', 'el'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/contact',
    title: 'Επικοινωνία | Πρωτότυπο 7 μέρες μετά την πρώτη κλήση',
    description: 'Πες μας σε ποιο Excel τρέχει η δουλειά της ομάδας σου. Πρωτότυπο της εφαρμογής σου 7 μέρες μετά την πρώτη κλήση των 30 λεπτών. Πληρώνεις μόνο αν σου αρέσει. Απαντάμε μέσα σε μία εργάσιμη ημέρα.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Επικοινωνία με τη Fiji Solutions, εταιρεία λογισμικού στη Θεσσαλονίκη',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Επικοινωνία | Πρωτότυπο 7 μέρες μετά την πρώτη κλήση',
    description: 'Πες μας σε ποιο Excel τρέχει η δουλειά της ομάδας σου. Πρωτότυπο της εφαρμογής σου 7 μέρες μετά την πρώτη κλήση των 30 λεπτών. Πληρώνεις μόνο αν σου αρέσει. Απαντάμε μέσα σε μία εργάσιμη ημέρα.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekContactPage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Contact t={t} element={"h1"} lang="el"/>
      <Footer t={t}/>
    </div>
  );
}
