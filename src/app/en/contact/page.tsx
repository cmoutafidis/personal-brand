import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Contact from '../../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Fiji Solutions | Software Company in Thessaloniki, Greece | Free Consultation',
  description: 'Contact Fiji Solutions, the leading software company in Thessaloniki, Greece. Get a free consultation for custom software development, AI solutions, mobile apps, web development, and IT consulting services. Located at Marinou Antipa 40, Thessaloniki.',
  keywords: 'contact Fiji Solutions, Fiji Solutions Thessaloniki contact, software company contact Greece, free consultation Thessaloniki, custom software development consultation, IT consulting Thessaloniki, Marinou Antipa 40 Thessaloniki, software development quote Greece, AI solutions consultation',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/contact',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/en/contact',
    title: 'Contact Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Contact the leading software company in Thessaloniki for a free consultation on custom development, AI solutions, and IT consulting.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Contact Fiji Solutions - Software Company in Thessaloniki, Greece',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Contact Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Contact the leading software company in Thessaloniki for a free consultation on custom development, AI solutions, and IT consulting.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishContactPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Contact t={t}/>
      <Footer t={t}/>
    </div>
  );
}