import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import ServicePage from '@/components/ServicePage';
import {OFFERS_BY_SERVICE} from '@/data/offerLinks';
import {ORGANISATION_ID} from '\@/lib/person';

const siteUrl = 'https://www.fijisolutions.net';
const path = '/services/custom-software-development-greece';

export const metadata: Metadata = {
  title: "Custom Software Development Greece | Process Automation | Fiji Solutions",
  description: "We build the internal tools, system connections and automations that remove work your team repeats every week.",
  keywords: "custom software development Greece, business process automation Greece, internal tools Greece, system integration Greece, workflow automation Greece, software company Thessaloniki",
  alternates: buildAlternates(path),
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: `${siteUrl}/en${path}`,
    title: "Custom Software Development Greece | Process Automation | Fiji Solutions",
    description: "We build the internal tools, system connections and automations that remove work your team repeats every week.",
    images: [{url: `${siteUrl}/og/fiji-solutions-en.png`, width: 1200, height: 630, alt: "Custom Software Development Greece"}],
  },
};

export default function Page() {
  return (
    <ServicePage
      lang="en"
      eyebrow={"Custom software Greece"}
      h1={"Custom software and process automation for businesses in Greece"}
      lead={"Someone in your business copies the same data into a second system, chases approvals by email, or rebuilds the same file every Monday morning. That is the work we remove. The retyping goes and the job stays."}
      heroCta={"Get the free process audit"}
      outcomesTitle={"What we build"}
      outcomes={[{title: "Systems that pass data to each other", body: "Your shop, your accounting system and your spreadsheet stop being three places the same order gets typed. It is entered once and appears everywhere."}, {title: "Internal tools built around your process", body: "A tool shaped to the way the work already runs in your business, with the steps nobody should be doing by hand taken out."}, {title: "Approvals that leave the inbox", body: "Who approved what, when, and what is still waiting, all of it visible and timestamped. The reminders go out on their own, so nobody has to chase anyone."}, {title: "Scheduled work that runs itself", body: "The weekly export, the monthly reconciliation, the reminder someone has to remember. Set once, then it happens without anyone."}]}
      engagementsTitle={"Typical engagements"}
      engagements={[{title: "A new system in place of an old program", body: "PAP Center, a hair-loss centre in Thessaloniki, ran customers, stock, expenses and reports on an old program built for Windows XP that no longer worked properly. We built a custom web CRM with a Greek interface. It has been live since September 2026, and the staff use it every day."}, {title: "A platform with an API and a mobile app", body: "For Catalytics, an analytics platform, we built the data ingest, the background jobs, the API and the mobile app, working with a partner who built most of the web interface. The app is live on the App Store and on Google Play."}, {title: "Work inside a larger platform", body: "Some of our work is one part of a much larger platform. We helped build Hapimag's online platform, where members book holiday apartments with residence points. At Jupiter we were technical lead of the DevRel Working Group and wrote the official Python SDK."}, {title: "One process, one prototype or one release", body: "When the job is smaller and clear, it starts as a fixed scope with a date on it: one business process automated, an AI agent for one process, a software prototype, a spreadsheet turned into an app, or one release built in an AI development sprint. Each one is linked further down. We work with businesses across Greece and abroad."}]}
      processTitle={"How a custom software project runs"}
      process={[{title: "Free process audit", body: "A 30-minute call where we walk through how work flows through your business: who types what, where, how often, and what breaks. You talk directly to the engineer who builds it."}, {title: "A written map", body: "After the call you get a one-page map of your three most expensive bottlenecks, with an estimate of the hours and euros each one costs you per month. It is yours to keep whether or not we work together."}, {title: "Scope and price in writing", body: "We agree in writing what we build and what it costs, before the work starts. If a system you already use allows no connection at all and has to be replaced, the reason goes into that scope too."}, {title: "Build", body: "We build what we agreed, and you see it take shape as we go. AI drafts the code, and we review it, test it against real cases and correct it. At PAP Center a front-end demo on mock data came first, in June 2026, and the production build began in July."}, {title: "Launch, then care", body: "Once it is live, we keep it running for you, or you take it over on the terms we agreed in writing. PAP Center went live in September 2026, and changes have kept shipping every week since, with the work ongoing."}]}
      integrationsTitle={"Tools and systems in our projects"}
      integrationsIntro={"Every name below was used in one of the projects this page links, from the CRM at PAP Center to the Catalytics mobile app."}
      integrations={["Next.js", "React", "Angular", "TypeScript", "Tailwind", "Expo / React Native", "Python / FastAPI", "Bun / Elysia", "PostgreSQL", "MongoDB", "Redis", "AWS", "Amazon Cognito", "Vercel", "Kubernetes", "Terraform", "GitHub Actions", "Jira", "App Store", "Google Play"]}
      pricingTitle={"How a project is priced"}
      howPriced={["Every project has a fixed fee for an agreed scope, written down before work starts. We quote it in writing once the scope is agreed, against what your process actually needs.", "Larger builds usually start with a prototype or a sprint. A sprint ends with a presentation day and the next steps in writing."]}
      questions={[{q: "How much does custom software cost in Greece?", a: "Each project is priced as a fixed fee for an agreed scope, written down before work starts. The fee depends on that scope, so there is no single answer before we have seen your process. The free process audit is where the scope starts, and the written quote follows once the scope is agreed."}, {q: "How long does a custom software project take?", a: "Each fixed offer further down has its own date. An AI agent goes live one week from the kickoff workshop. A process automation or a software prototype is ready two weeks from the kickoff workshop. A larger build takes longer: at PAP Center the build began in July 2026 and went live in September."}, {q: "Do I have to replace the software I already use?", a: "Usually not. We propose replacement when the existing system allows no connection at all, and we write the reason into the scope we agree with you. More often the gap is a connection between two systems that each work well on their own, or a small tool between them."}, {q: "Who owns the code, the data and the accounts at the end?", a: "We put it in writing with you before the build starts: who owns the code, the data and the accounts. Some offers set their terms on their own page. With the software prototype, the source code sits in your repository from the first commit. With process automation, the platform accounts are in your name."}]}
      closingH2={"Not sure which process to start with?"}
      closingBody={"That is what the audit is for. Thirty minutes on a call, then a written map of the three processes costing you the most, in hours and euros. We reply within one business day."}
      closingCta={"Get the free process audit"}
      offers={OFFERS_BY_SERVICE['services/custom-software-development-greece']}
      path={path}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: "Custom Software Development Greece",
        serviceType: "Custom software development and process automation",
        provider: {'@id': ORGANISATION_ID},
        areaServed: {'@type': 'Country', name: 'Greece'},
        description: "Internal tools, system integration and workflow automation for the owner whose business runs on retyped data, late follow-ups, and one person who knows how everything works.",
      }}
    />
  );
}
