import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Software Company Thessaloniki | IT Consulting Services',
  description: 'Tell us which process is costing you the most. We reply within one business day with a practical first step.',
  keywords: 'software company Thessaloniki contact, IT consulting Thessaloniki, custom software development company Thessaloniki, web development company Thessaloniki, mobile app development Greece, managed IT services Greece, software development services Greece, ERP implementation Thessaloniki, custom CRM solutions Greece',
  alternates: buildAlternates('/contact'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/contact',
    title: 'Contact Fiji Solutions | Free Consultation Thessaloniki',
    description: 'Tell us which process is costing you the most. We reply within one business day.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Contact Fiji Solutions, Thessaloniki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Contact Fiji Solutions | Free Consultation Thessaloniki',
    description: 'Tell us which process is costing you the most. We reply within one business day.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishContactPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Contact t={t} element={"h1"}/>
      <Footer t={t}/>
    </div>
  );
}
