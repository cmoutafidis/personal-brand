import type { Metadata } from 'next';
import Contact from '../../../components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Fiji Solutions',
  description: 'Get in touch with Fiji Solutions for a free consultation. We help businesses grow online with custom software development and IT consulting.',
  alternates: {
    canonical: 'https://fijisolutions.net/en/contact',
  },
  openGraph: {
    url: 'https://fijisolutions.net/en/contact',
    title: 'Contact Us | Fiji Solutions',
    description: 'Get in touch with Fiji Solutions for a free consultation. We help businesses grow online with custom software development and IT consulting.',
  },
};

export default function EnglishContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Contact />
    </div>
  );
}