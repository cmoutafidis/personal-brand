import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Portfolio & Projects | Fiji Solutions Thessaloniki',
  description: 'Explore Fiji Solutions portfolio: innovative web development, AI solutions, cloud services & blockchain projects from our Thessaloniki team.',
  keywords: 'Fiji Solutions portfolio, Fiji Solutions projects, software company Thessaloniki portfolio, web development projects, AI solutions portfolio, cloud services projects, mobile app development, blockchain technology projects, custom software development, IT consulting Thessaloniki, scalable solutions, tailored solutions',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/portfolio',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/portfolio',
    title: 'Portfolio & Projects | Fiji Solutions Thessaloniki',
    description: 'Explore Fiji Solutions portfolio: innovative web development, AI solutions, cloud services & blockchain projects from our Thessaloniki team.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Portfolio - Innovative software development projects from Thessaloniki specializing in web development, AI solutions, and blockchain technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Portfolio & Projects | Fiji Solutions Thessaloniki',
    description: 'Explore Fiji Solutions portfolio: innovative web development, AI solutions, cloud services & blockchain projects from our Thessaloniki team.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishPortfolioPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services t={t}/>
      <Technologies t={t}/>
      <Industries t={t}/>
      <Projects t={t}/>
      <Footer t={t}/>
    </div>
  );
}