import type { Metadata } from 'next';
import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';

export const metadata: Metadata = {
  title: 'Portfolio | Fiji Solutions',
  description: 'Our work - Projects we have done with our existing clients. Software development, AI solutions, and enterprise consulting.',
  alternates: {
    canonical: 'https://fijisolutions.net/en/portfolio',
  openGraph: {
    url: 'https://fijisolutions.net/en/portfolio',
    title: 'Portfolio | Fiji Solutions',
    description: 'Our work - Projects we have done with our existing clients. Software development, AI solutions, and enterprise consulting.',
  },
};

export default function EnglishPortfolioPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services />
      <Technologies />
      <Industries />
      <Projects />
    </div>
  );
}