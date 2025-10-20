import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import PrivacyPolicyContent from './PrivacyPolicyContent';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Πολιτική Απορρήτου',
  description: 'Πολιτική Απορρήτου για τις εφαρμογές κινητών της Fiji Solutions. Μάθετε πώς χειριζόμαστε τις πληροφορίες σας και προστατεύουμε το απόρρητό σας.',
  keywords: 'Fiji Solutions πολιτική απορρήτου, απόρρητο εφαρμογής κινητού, προστασία δεδομένων, απόρρητο χρήστη, πολιτική απορρήτου εφαρμογής, προστασία προσωπικών δεδομένων',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/privacy-policy',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/privacy-policy',
    title: 'Πολιτική Απορρήτου',
    description: 'Πολιτική Απορρήτου για τις εφαρμογές κινητών της Fiji Solutions. Μάθετε πώς χειριζόμαστε τις πληροφορίες σας και προστατεύουμε το απόρρητό σας.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Πολιτική Απορρήτου Fiji Solutions - Πληροφορίες Απορρήτου Εφαρμογής Κινητού',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Πολιτική Απορρήτου',
    description: 'Πολιτική Απορρήτου για τις εφαρμογές κινητών της Fiji Solutions. Μάθετε πώς χειριζόμαστε τις πληροφορίες σας και προστατεύουμε το απόρρητό σας.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekPrivacyPolicyPage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <>
      <PrivacyPolicyContent/>
      <Footer t={t}/>
    </>
  );
}
