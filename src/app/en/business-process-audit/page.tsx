import type {Metadata} from 'next';
import BusinessProcessAuditLanding from '@/components/BusinessProcessAuditLanding';

export const metadata: Metadata = {
  title: 'Free Business Process Audit | Fiji Solutions',
  description: 'Get a free Process Audit: a written map of the bottlenecks costing you money, then custom software backed by the Pays-For-Itself Guarantee — payback within 6 months of go-live or your build fee back.',
  keywords: 'free business process audit, workflow optimisation Greece, business process automation, custom software Greece, internal operations fix, AI software solutions',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/business-process-audit',
    languages: {
      en: 'https://www.fijisolutions.net/en/business-process-audit',
      el: 'https://www.fijisolutions.net/el/business-process-audit',
    },
  },
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
  return <BusinessProcessAuditLanding language="en" />;
}
