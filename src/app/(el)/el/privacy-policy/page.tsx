import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';
import Footer from '@/components/Footer';
import {buildAlternates, defaultOgImage} from '@/lib/alternates';

const DESC =
  'Τι συλλέγει το www.fijisolutions.net, γιατί, με ποιους μοιράζεται και πώς αλλάζεις την επιλογή σου για τα cookies.';

export const metadata: Metadata = {
  title: 'Πολιτική Απορρήτου',
  description: DESC,
  alternates: buildAlternates('/privacy-policy', 'el'),
  openGraph: {
    locale: 'el_GR',
    type: 'website',
    url: 'https://www.fijisolutions.net/el/privacy-policy',
    title: 'Πολιτική Απορρήτου',
    description: DESC,
    images: [{url: defaultOgImage('el'), width: 1200, height: 630, alt: 'Fiji Solutions'}],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Πολιτική Απορρήτου',
    description: DESC,
    images: [defaultOgImage('el')],
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
