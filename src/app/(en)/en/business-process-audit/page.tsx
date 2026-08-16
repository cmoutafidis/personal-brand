import type {Metadata} from 'next';
import BusinessProcessAuditLanding from '@/components/BusinessProcessAuditLanding';
import Footer from '@/components/Footer';
import {createTranslationFunction} from '@/translations';
import {buildAlternates} from '@/lib/alternates';
import {GUARANTEE_WINDOW_MONTHS} from '@/lib/offer';

export const metadata: Metadata = {
  title: 'Free Business Process Audit | Fiji Solutions',
  description: `Get a free Process Audit: a written map of the bottlenecks costing you money, then custom software backed by the Pays-For-Itself Guarantee. Payback within ${GUARANTEE_WINDOW_MONTHS} months of go-live or your build fee back.`,
  keywords: 'free business process audit, workflow optimisation Greece, business process automation, custom software Greece, internal operations fix, AI software solutions',
  alternates: buildAlternates('/business-process-audit'),
  openGraph: {
    type: 'website',
    title: 'Free Business Process Audit | Fiji Solutions',
    description: 'Find the workflow bottlenecks costing your business money and fix them with custom software backed by the Pays-For-Itself Guarantee.',
    url: 'https://www.fijisolutions.net/en/business-process-audit',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions - Free business process audit and custom AI software solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Free Business Process Audit | Fiji Solutions',
    description: 'Find the money leaks in your workflows and fix them with custom software backed by the Pays-For-Itself Guarantee.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishBusinessProcessAuditPage() {
  const t = createTranslationFunction('en');

  return (
    <>
      <BusinessProcessAuditLanding language="en"/>
      {/* Added 2026-08-15. These two routes were the ONLY ones in the repo that did not
          render a Footer, so the one page that collects a name and an email was also the
          one page with no link to the privacy policy. */}
      <Footer t={t}/>
    </>
  );
}
