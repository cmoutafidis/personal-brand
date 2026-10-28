import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';
import Footer from '@/components/Footer';
import {buildAlternates, defaultOgImage} from '@/lib/alternates';

const DESC =
  'What www.fijisolutions.net collects, why, who it is shared with, and how to change your cookie choice.';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: DESC,
  alternates: buildAlternates('/privacy-policy'),
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: 'https://www.fijisolutions.net/en/privacy-policy',
    title: 'Privacy Policy',
    description: DESC,
    images: [{url: defaultOgImage('en'), width: 1200, height: 630, alt: 'Fiji Solutions'}],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Privacy Policy',
    description: DESC,
    images: [defaultOgImage('en')],
  },
};

export default function EnglishPrivacyPolicyPage() {
  const t = createTranslationFunction('en');

  return (
    <>
      <PrivacyPolicyContent lang="en"/>
      <Footer t={t}/>
    </>
  );
}
