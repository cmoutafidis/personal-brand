import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import ServicePage from '@/components/ServicePage';

const siteUrl = 'https://www.fijisolutions.net';
const path = '/services/custom-software-development-greece';

export const metadata: Metadata = {
  title: "Custom Software Development Greece | Process Automation | Fiji Solutions",
  description: "We build the internal tools, system connections and automations that remove work your team repeats every week.",
  keywords: "custom software development Greece, business process automation Greece, internal tools Greece, system integration Greece, workflow automation Greece, software company Thessaloniki",
  alternates: buildAlternates(path),
  openGraph: {
    type: 'website',
    url: `${siteUrl}/en${path}`,
    title: "Custom Software Development Greece | Process Automation | Fiji Solutions",
    description: "We build the internal tools, system connections and automations that remove work your team repeats every week.",
    images: [{url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: "Custom Software Development Greece"}],
  },
};

export default function Page() {
  return (
    <ServicePage
      lang="en"
      eyebrow={"Custom software Greece"}
      h1={"The work your team repeats every week, done by software"}
      lead={"Someone in your business copies the same data into a second system, chases approvals by email, or rebuilds the same file every Monday morning. That is the work we remove — not the job, the retyping."}
      heroCta={"Get the free process audit"}
      outcomesTitle={"What we build"}
      outcomes={[{title: "Systems that pass data to each other", body: "Your shop, your accounting system and your spreadsheet stop being three places the same order gets typed. It is entered once and appears everywhere."}, {title: "Internal tools built around your process", body: "Not a platform you bend your business around. A tool shaped to the way the work already runs, minus the parts nobody should be doing by hand."}, {title: "Approvals that leave the inbox", body: "Who approved what, when, and what is still waiting — visible, timestamped, and chasing itself instead of you chasing it."}, {title: "Scheduled work that runs itself", body: "The weekly export, the monthly reconciliation, the reminder someone has to remember. Set once, then it happens without anyone."}]}
      closingH2={"Not sure which process to start with?"}
      closingBody={"That is what the audit is for. Thirty minutes on a call, then a written map of the three processes costing you the most, in hours and euros."}
      closingCta={"Get the free process audit"}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: "Custom Software Development Greece",
        serviceType: "Custom software development and process automation",
        provider: {'@type': 'ProfessionalService', name: 'Fiji Solutions', url: siteUrl},
        areaServed: {'@type': 'Country', name: 'Greece'},
        description: "Internal tools, system integration and workflow automation for businesses in Greece.",
      }}
    />
  );
}
