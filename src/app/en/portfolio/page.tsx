import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Portfolio & Projects | Fiji Solutions | Software Development Work in Thessaloniki, Greece',
  description: 'Explore Fiji Solutions portfolio of successful software development projects in Thessaloniki, Greece. See our custom software applications, AI solutions, mobile apps, web development, and enterprise consulting work for clients across various industries.',
  keywords: 'Fiji Solutions portfolio, Fiji Solutions projects, software development portfolio Thessaloniki, custom software projects Greece, AI solutions portfolio, mobile app development projects, web development work Thessaloniki, enterprise software projects, blockchain development portfolio, IT consulting case studies Greece',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/portfolio',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/en/portfolio',
    title: 'Portfolio & Projects | Fiji Solutions | Software Development Work in Thessaloniki',
    description: 'Explore our portfolio of successful software development projects, AI solutions, and IT consulting work delivered from Thessaloniki, Greece.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Portfolio - Software Development Projects from Thessaloniki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Portfolio & Projects | Fiji Solutions | Software Development Work in Thessaloniki',
    description: 'Explore our portfolio of successful software development projects, AI solutions, and IT consulting work delivered from Thessaloniki, Greece.',
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