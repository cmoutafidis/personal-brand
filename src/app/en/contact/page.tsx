import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Contact from '../../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Fiji Solutions | Free Consultation Thessaloniki',
  description: 'Contact Fiji Solutions for free consultation. IT consulting & custom software development in Thessaloniki. Web development, AI solutions & more.',
  keywords: 'contact Fiji Solutions, Fiji Solutions Thessaloniki contact, software company Thessaloniki contact, free consultation, IT consulting consultation, custom software development consultation, web development consultation, AI solutions consultation, cloud services consultation, mobile app development consultation, blockchain technology consultation, Marinou Antipa 40 Thessaloniki',
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