import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Contact from '../../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Fiji Solutions | Software Company in Thessaloniki, Greece | Free Consultation',
  description: 'Contact Fiji Solutions, a software company in Thessaloniki, Greece specializing in IT consulting and custom software development. Get a free consultation for web development, AI solutions, cloud services, mobile apps, and blockchain technology. Located at Marinou Antipa 40, Thessaloniki.',
  keywords: 'contact Fiji Solutions, Fiji Solutions Thessaloniki contact, software company Thessaloniki contact, free consultation, IT consulting consultation, custom software development consultation, web development consultation, AI solutions consultation, cloud services consultation, mobile app development consultation, blockchain technology consultation, Marinou Antipa 40 Thessaloniki',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/contact',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/en/contact',
    title: 'Contact Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Contact Fiji Solutions, a software company in Thessaloniki, Greece specializing in IT consulting and custom software development. Get a free consultation for innovative solutions to help your business grow online.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Contact Fiji Solutions - Software Company in Thessaloniki, Greece specializing in IT consulting and custom software development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Contact Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Contact Fiji Solutions, a software company in Thessaloniki, Greece specializing in IT consulting and custom software development. Get a free consultation for innovative solutions to help your business grow online.',
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