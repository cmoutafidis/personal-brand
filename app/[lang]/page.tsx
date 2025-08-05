import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import { getTranslations } from '@/lib/translations';

interface HomePageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = params;
  
  if (lang !== 'en' && lang !== 'el') {
    return {};
  }

  const t = getTranslations(lang as 'en' | 'el');
  const canonicalUrl = lang === 'en' ? 'https://fijisolutions.net/en' : 'https://fijisolutions.net/el';

  return {
    title: t('seo.home.title'),
    description: t('seo.home.description'),
    keywords: t('seo.home.keywords'),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: t('seo.home.title'),
      description: t('seo.home.description'),
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

export default function HomePage({ params }: HomePageProps) {
  const { lang } = params;
  
  if (lang !== 'en' && lang !== 'el') {
    notFound();
  }

  return (
    <>
      <Hero lang={lang as 'en' | 'el'} />
      <Challenges lang={lang as 'en' | 'el'} />
      <Solutions lang={lang as 'en' | 'el'} />
      <Contact lang={lang as 'en' | 'el'} />
    </>
  );
}