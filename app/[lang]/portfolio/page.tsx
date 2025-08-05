import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import { getTranslations } from '@/lib/translations';

interface PortfolioPageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { lang } = params;
  
  if (lang !== 'en' && lang !== 'el') {
    return {};
  }

  const t = getTranslations(lang as 'en' | 'el');
  const canonicalUrl = lang === 'en' ? 'https://fijisolutions.net/en/portfolio' : 'https://fijisolutions.net/el/portfolio';

  return {
    title: t('seo.portfolio.title'),
    description: t('seo.portfolio.description'),
    keywords: t('seo.portfolio.keywords'),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: t('seo.portfolio.title'),
      description: t('seo.portfolio.description'),
      url: canonicalUrl
    }
  };
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'el' }
  ];
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
  const { lang } = params;
  
  if (lang !== 'en' && lang !== 'el') {
    notFound();
  }

  return (
    <>
      <Services lang={lang as 'en' | 'el'} />
      <Technologies lang={lang as 'en' | 'el'} />
      <Industries lang={lang as 'en' | 'el'} />
      <Projects lang={lang as 'en' | 'el'} />
    </>
  );
}