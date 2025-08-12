import type { Metadata } from 'next';
import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';

export const metadata: Metadata = {
  title: 'Η Δουλειά μας | Fiji Solutions',
  description: 'Η δουλειά μας - Πράγματα που φτιάξαμε για τους πελάτες μας. Ανάπτυξη λογισμικού, λύσεις AI και εταιρική συμβουλευτική.',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/portfolio',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/el/portfolio',
    title: 'Η Δουλειά μας | Fiji Solutions',
    description: 'Η δουλειά μας - Πράγματα που φτιάξαμε για τους πελάτες μας. Ανάπτυξη λογισμικού, λύσεις AI και εταιρική συμβουλευτική.',
    images: [
      {
        url: '/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions',
      },
    ],
  },
};

export default function GreekPortfolioPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services />
      <Technologies />
      <Industries />
      <Projects />
    </div>
  );
}