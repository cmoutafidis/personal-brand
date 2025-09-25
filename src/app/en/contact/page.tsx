import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Contact from '../../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Software Company Thessaloniki | IT Consulting Services',
  description: 'Contact top software development company in Thessaloniki for custom software, web development, mobile apps & IT consulting services in Greece.',
  keywords: 'software company Thessaloniki contact, IT consulting Thessaloniki, custom software development company Thessaloniki, web development company Thessaloniki, mobile app development Greece, managed IT services Greece, software development services Greece, ERP implementation Thessaloniki, custom CRM solutions Greece',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/contact',
    title: 'Contact Fiji Solutions | Free Consultation Thessaloniki',
    description: 'Contact Fiji Solutions for free consultation. IT consulting & custom software development in Thessaloniki. Web development, AI solutions & more.',
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
    title: 'Contact Fiji Solutions | Free Consultation Thessaloniki',
    description: 'Contact Fiji Solutions for free consultation. IT consulting & custom software development in Thessaloniki. Web development, AI solutions & more.',
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