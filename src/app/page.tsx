import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'BEST Software Company Thessaloniki - Enterprise software development - Application development - IT consulting',
  description: 'Leading software development company in Thessaloniki. Software development, web development, mobile app development & IT consulting services in Greece.',
  keywords: 'software company Thessaloniki, top software companies in Thessaloniki, custom software development company Thessaloniki, software development services Greece, web development company Thessaloniki, mobile app development Greece, IT consulting Thessaloniki, software developers Greece, IT company, custom software, software development',
  alternates: {
    canonical: 'https://www.fijisolutions.net/',
  },
  openGraph: {
    type: 'website',
    title: 'BEST Software Company Thessaloniki - Enterprise software development - Application development - IT consulting',
    description: 'Fiji Solutions: IT consulting & custom software development in Thessaloniki. Web development, AI solutions, cloud services & blockchain.',
    url: 'https://www.fijisolutions.net/',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions - Software Company in Thessaloniki, Greece specializing in IT consulting and custom software development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'BEST Software Company Thessaloniki - Enterprise software development - Application development - IT consulting',
    description: 'Fiji Solutions: IT consulting & custom software development in Thessaloniki. Web development, AI solutions, cloud services & blockchain.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
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
      <Contact t={t} element={"h2"}/>
      <Footer t={t}/>
    </>
  );
}