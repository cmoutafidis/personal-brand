import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';
import Footer from '@/components/Footer';
import {buildAlternates} from '@/lib/alternates';

const DESC =
  'Τι συλλέγει το www.fijisolutions.net, γιατί, με ποιους μοιράζεται και πώς αλλάζεις την επιλογή σου για τα cookies.';

export const metadata: Metadata = {
  title: 'Πολιτική Απορρήτου',
  description: DESC,
  alternates: buildAlternates('/privacy-policy', 'el'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/privacy-policy',
    title: 'Πολιτική Απορρήτου',
    description: DESC,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Πολιτική Απορρήτου',
    description: DESC,
  },
};

export default function GreekPrivacyPolicyPage() {
  const t = createTranslationFunction('el');

  return (
    <>
      <PrivacyPolicyContent lang="el"/>
      <Footer t={t}/>
    </>
  );
}
