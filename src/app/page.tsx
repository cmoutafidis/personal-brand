import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Fiji Solutions | We help your business grow online',
  description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
  alternates: {
    canonical: 'https://www.fijisolutions.net/',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/',
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

export default function HomePage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <>
      <Hero t={t}/>
      <Challenges t={t}/>
      <Solutions t={t}/>
      <Contact t={t}/>
      <Footer t={t}/>
    </>
  );
}