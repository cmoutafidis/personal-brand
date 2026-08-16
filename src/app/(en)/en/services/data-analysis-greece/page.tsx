import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import ServicePage from '@/components/ServicePage';

const siteUrl = 'https://www.fijisolutions.net';
const path = '/services/data-analysis-greece';

export const metadata: Metadata = {
  title: "Data Analysis Services Greece | BI Dashboards | Fiji Solutions",
  description: "If a report takes two days to assemble and two people disagree about the number at the end, we rebuild the pipeline so it assembles itself.",
  keywords: "data analysis services Greece, business intelligence Greece, BI dashboards Greece, analytics consulting Greece, KPI dashboards Greece, reporting automation Greece",
  alternates: buildAlternates(path),
  openGraph: {
    type: 'website',
    url: `${siteUrl}/en${path}`,
    title: "Data Analysis Services Greece | BI Dashboards | Fiji Solutions",
    description: "If a report takes two days to assemble and two people disagree about the number at the end, we rebuild the pipeline so it assembles itself.",
    images: [{url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: "Data Analysis Services Greece"}],
  },
};

export default function Page() {
  return (
    <ServicePage
      lang="en"
      eyebrow={"Data analysis Greece"}
      h1={"Reports that build themselves"}
      lead={"If a report takes two days to assemble, and two people disagree about the number at the end of it, the problem is not the spreadsheet. It is that the number has three sources and no owner."}
      heroCta={"Get the free process audit"}
      outcomesTitle={"What we build"}
      outcomes={[{title: "Reports that build themselves", body: "The Monday file that someone assembles by hand, rebuilt so it is ready before anyone arrives."}, {title: "One number, one source", body: "When two reports disagree, work stops until someone reconciles them. We make the number come from one place so there is nothing to reconcile."}, {title: "Alerts before it costs you", body: "You find out that stock is short, a margin slipped or an invoice is overdue while it is still cheap to act on, not at month end."}, {title: "History you can query", body: "The data you already generate, kept somewhere you can ask questions of, instead of being overwritten every month."}]}
      closingH2={"Send us the report your team builds by hand"}
      closingBody={"We will tell you what it costs to keep assembling it, and what it would take to stop. In writing, within a week of the call."}
      closingCta={"Get the free process audit"}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: "Data Analysis Services Greece",
        serviceType: "Data analysis and business intelligence",
        provider: {'@type': 'ProfessionalService', name: 'Fiji Solutions', url: siteUrl},
        areaServed: {'@type': 'Country', name: 'Greece'},
        description: "Automated reporting, BI dashboards and analytics pipelines for the owner whose business runs on retyped data, late follow-ups, and one person who knows how everything works.",
      }}
    />
  );
}
