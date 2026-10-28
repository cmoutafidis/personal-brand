import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // 2026-10-08 (F16, offer-os gtm/followups-and-search/PLAN.md F-D135): the Contact page led with
  // the 7-day prototype. 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G07, BR-D22): the title leads
  // with the action and the page is broad, copy from offer-os companies/fiji-solutions/site/03-copy-home.md,
  // "Contact"; the spreadsheet keywords string is removed.
  title: 'Κλείσε δωρεάν κλήση 30 λεπτών | Fiji Solutions',
  description: 'Κλείσε δωρεάν κλήση 30 λεπτών ή στείλε μας μήνυμα για το λογισμικό, την εφαρμογή, τον αυτοματισμό ή την ιστοσελίδα που χρειάζεσαι. Απαντάμε μέσα σε μία εργάσιμη ημέρα.',
  alternates: buildAlternates('/contact', 'el'),
  openGraph: {
    locale: 'el_GR',
    type: 'website',
    url: 'https://www.fijisolutions.net/el/contact',
    title: 'Κλείσε δωρεάν κλήση 30 λεπτών | Fiji Solutions',
    description: 'Κλείσε δωρεάν κλήση 30 λεπτών ή στείλε μας μήνυμα για το λογισμικό, την εφαρμογή, τον αυτοματισμό ή την ιστοσελίδα που χρειάζεσαι. Απαντάμε μέσα σε μία εργάσιμη ημέρα.',
    images: [
      {
        url: 'https://www.fijisolutions.net/og/fiji-solutions-el.png',
        width: 1200,
        height: 630,
        alt: 'Επικοινωνία με τη Fiji Solutions, εταιρεία λογισμικού στη Θεσσαλονίκη',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Κλείσε δωρεάν κλήση 30 λεπτών | Fiji Solutions',
    description: 'Κλείσε δωρεάν κλήση 30 λεπτών ή στείλε μας μήνυμα για το λογισμικό, την εφαρμογή, τον αυτοματισμό ή την ιστοσελίδα που χρειάζεσαι. Απαντάμε μέσα σε μία εργάσιμη ημέρα.',
    images: ['https://www.fijisolutions.net/og/fiji-solutions-el.png'],
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
