import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactComponent from '@/components/Contact';
import { getTranslations } from '@/lib/translations';

interface ContactPageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { lang } = params;
  
  if (lang !== 'en' && lang !== 'el') {
    return {};
  }

  const t = getTranslations(lang as 'en' | 'el');
  const canonicalUrl = lang === 'en' ? 'https://fijisolutions.net/en/contact' : 'https://fijisolutions.net/el/contact';

  return {
    title: t('seo.contact.title'),
    description: t('seo.contact.description'),
    keywords: t('seo.contact.keywords'),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: t('seo.contact.title'),
      description: t('seo.contact.description'),
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

export default function ContactPage({ params }: ContactPageProps) {
  const { lang } = params;
  
  if (lang !== 'en' && lang !== 'el') {
    notFound();
  }

  return <ContactComponent lang={lang as 'en' | 'el'} />;
}