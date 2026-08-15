import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';
import Footer from '@/components/Footer';
import {buildAlternates} from '@/lib/alternates';

const DESC =
  'What www.fijisolutions.net collects, why, who it is shared with, and how to change your cookie choice.';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: DESC,
  alternates: buildAlternates('/privacy-policy'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/privacy-policy',
    title: 'Privacy Policy',
    description: DESC,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Privacy Policy',
    description: DESC,
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
