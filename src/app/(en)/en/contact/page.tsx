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
  title: 'Book a free 30-minute call | Fiji Solutions',
  description: 'Book a free 30-minute call or send us a message about the software, app, automation or website you need. We reply within one business day.',
  alternates: buildAlternates('/contact'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/contact',
    title: 'Book a free 30-minute call | Fiji Solutions',
    description: 'Book a free 30-minute call or send us a message about the software, app, automation or website you need. We reply within one business day.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Contact Fiji Solutions, software company in Thessaloniki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Book a free 30-minute call | Fiji Solutions',
    description: 'Book a free 30-minute call or send us a message about the software, app, automation or website you need. We reply within one business day.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishContactPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Contact t={t} element={"h1"} lang="en"/>
      <Footer t={t}/>
    </div>
  );
}
