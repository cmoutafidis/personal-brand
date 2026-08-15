import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import PrivacyPolicyContent from './PrivacyPolicyContent';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Fiji Solutions mobile applications. Learn how we handle your information and protect your privacy.',
  keywords: 'Fiji Solutions privacy policy, mobile app privacy, data protection, user privacy, app privacy policy, webview app privacy, personal data protection',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/privacy-policy',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/privacy-policy',
    title: 'Privacy Policy',
    description: 'Privacy Policy for Fiji Solutions mobile applications. Learn how we handle your information and protect your privacy.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Privacy Policy - Mobile Application Privacy Information',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Privacy Policy',
    description: 'Privacy Policy for Fiji Solutions mobile applications. Learn how we handle your information and protect your privacy.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishPrivacyPolicyPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <>
      <PrivacyPolicyContent/>
      <Footer t={t}/>
    </>
  );
}
