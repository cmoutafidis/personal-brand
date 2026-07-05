import type {Metadata} from 'next';
import BusinessProcessAuditLanding from '@/components/BusinessProcessAuditLanding';

export const metadata: Metadata = {
  title: 'Free Business Process Audit | Fiji Solutions',
  description: 'We analyse your workflows for free, find bottlenecks that cost money, and build custom AI-based software with a 3 to 6 month payback guarantee.',
  keywords: 'free business process audit, workflow optimisation Greece, AI software solutions, business process automation, custom software Greece, revenue optimisation',
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
    description: 'Find the workflow bottlenecks costing your business money and get custom AI-based software backed by a 3 to 6 month payback guarantee.',
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
    description: 'Find revenue leaks in your workflows and fix them with custom AI-based software backed by a payback guarantee.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishBusinessProcessAuditPage() {
  return <BusinessProcessAuditLanding language="en" />;
}
