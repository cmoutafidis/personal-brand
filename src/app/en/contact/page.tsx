import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Contact from '../../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Us | Fiji Solutions',
  description: 'Get in touch with Fiji Solutions for a free consultation. We help businesses grow online with custom software development and IT consulting.',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/contact',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/en/contact',
    title: 'Contact Us | Fiji Solutions',
    description: 'Get in touch with Fiji Solutions for a free consultation. We help businesses grow online with custom software development and IT consulting.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions',
      },
    ],
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