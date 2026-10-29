import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import ServicePage from '@/components/ServicePage';
import {OFFERS_BY_SERVICE} from '@/data/offerLinks';
import {ORGANISATION_ID} from '\@/lib/person';

const siteUrl = 'https://www.fijisolutions.net';
const path = '/services/data-analysis-greece';

export const metadata: Metadata = {
  title: "Data Analysis Services Greece | BI Dashboards | Fiji Solutions",
  description: "If a report takes two days to assemble and two people disagree about the number at the end, we rebuild the pipeline so it assembles itself.",
  keywords: "data analysis services Greece, business intelligence Greece, BI dashboards Greece, analytics consulting Greece, KPI dashboards Greece, reporting automation Greece",
  alternates: buildAlternates(path),
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: `${siteUrl}/en${path}`,
    title: "Data Analysis Services Greece | BI Dashboards | Fiji Solutions",
    description: "If a report takes two days to assemble and two people disagree about the number at the end, we rebuild the pipeline so it assembles itself.",
    images: [{url: `${siteUrl}/og/fiji-solutions-en.png`, width: 1200, height: 630, alt: "Data Analysis Services Greece"}],
  },
};

export default function Page() {
  return (
    <ServicePage
      lang="en"
      eyebrow={"Data analysis Greece"}
      h1={"Data analysis and BI reporting for businesses in Greece"}
      lead={"If a report takes days to assemble and two people disagree about the number at the end of it, the number comes from more than one place and nobody owns it. We bring the sources into one place, give each figure one definition, and build the reports your team reads on top of it."}
      heroCta={"Book a free 30-minute call about your reports"}
      outcomesTitle={"What we build"}
      outcomes={[{title: "Reports that build themselves", body: "The report someone assembles by hand, rebuilt so scheduled jobs prepare it from your own systems, overnight, weekly or monthly."}, {title: "One number, one source", body: "When two reports disagree, work stops until someone reconciles them. We bring the data into one place and write down what each term means, in a glossary that sits with the dashboard, so both reports read from the same source."}, {title: "A daily summary in your inbox", body: "The figures you check every morning, sent as a daily email built from the same numbers as your dashboards."}, {title: "History, month by month", body: "The data your systems already produce, kept in one place as history, month by month, so the dashboards can show how it changed."}]}
      engagementsTitle={"Typical engagements"}
      engagements={[{title: "Dashboards on the data you already have", body: "Your payments, product usage and message reactions sit in separate systems. We load them into Snowflake every night and build dashboards on top: monthly and daily performance, retention, revenue, refunds and cancellations. That is what we built for New Era Learning, an online education company in the United Arab Emirates."}, {title: "A proof of concept on production data", body: "You want to see how two sets of production records relate before you commit to a full project. For Alumil, from September to December 2025, we loaded extrusion and defect records from an Oracle source into Snowflake, analysed them together and trained a first model. The work stayed at the proof of concept stage."}, {title: "Reports inside the software you use every day", body: "Sometimes the report belongs in the system your staff already work in. The CRM we built for PAP Center in Thessaloniki, which its staff use every day, has a Reports screen with outstanding balances and monthly or yearly income, expenses and net."}, {title: "One AI use case on your own data", body: "When the question is whether AI can take over one piece of work on your own data, the AI prototype for one use case, in the offers below, is the way to test that first."}]}
      processTitle={"How a reporting project runs"}
      process={[{title: "Free 30-minute call", body: "You tell us which report is the problem and where its numbers live today. You talk directly to the engineer who would build it."}, {title: "Scope and price in writing", body: "We agree in writing which sources we connect, which reports or dashboards we build, who owns the code, the data and the accounts, and what it costs, before the work starts."}, {title: "Load the data", body: "We connect your sources and load them into one place on a schedule. At Alumil, files already loaded were skipped, and the New Era Learning loads have recovery procedures."}, {title: "Build the reports", body: "We turn raw records into tables with clear definitions and build the dashboards on them. At New Era Learning each dashboard has a glossary of its terms. You see them take shape as we go."}, {title: "Launch, then care", body: "Once it is live, the reports refresh on the schedule we agreed. We keep it running for you, or you take it over on the terms we agreed in writing."}]}
      integrationsTitle={"Systems and tools we work with"}
      integrationsIntro={"These are the sources and tools in data work we have delivered. Fiji Solutions is a Snowflake AI Data Cloud Select Partner. We read from the systems you already run, and we propose replacing one only when it allows no connection at all."}
      integrations={["Snowflake", "Streamlit in Snowflake", "Snowpark", "Snowflake model registry", "SQL stored procedures", "Python", "pandas", "scikit-learn", "XGBoost", "PostgreSQL", "PostHog", "ClickHouse", "Oracle", "Azure Blob Storage", "React"]}
      pricingTitle={"How data work is priced"}
      howPriced={["Every project has a fixed fee for an agreed scope. The sources, the reports and the fee are written down before work starts. Data work has no list price. The fee follows the agreed scope.", "Larger builds usually start with a prototype or a sprint. The first 30-minute call is free."]}
      questions={[{q: "What does a data analysis project with Fiji Solutions include?", a: "It includes loading your data into one place, turning it into tables with clear definitions, and building the reports or dashboards your team reads. For New Era Learning that meant nightly loads into Snowflake and dashboards with a glossary each. The exact list of sources and reports goes into the written scope before work starts."}, {q: "Do I have to replace the systems I already use?", a: "Usually not. More often the gap is a connection between systems, so we read from what you already run. We have loaded data from PostgreSQL, PostHog, ClickHouse and Oracle. We propose replacing a system only when it allows no connection at all, and we say so in the written scope."}, {q: "Which dashboard tool do you build in?", a: "The New Era Learning dashboards run as Streamlit apps inside Snowflake, so the team opens them in Snowflake's web interface. For the Alumil proof of concept we built a one-page results dashboard in React, with findings, data limits and next steps. We agree the tool for your project in the written scope."}, {q: "Who can see our data?", a: "The people you choose, with the access we agree. At New Era Learning the owner, staff and instructors open the dashboards with view-only access and no access to the tables. For Alumil we set up read-only, read-write and analyst roles. Who owns the code, the data and the accounts is agreed in writing first."}]}
      closingH2={"Tell us about the report your team builds by hand"}
      closingBody={"Bring the report, the systems its numbers come from and the question you want it to answer. On a free 30-minute call you talk directly to the engineer who would build it. We are in Thessaloniki and work with businesses in Greece and abroad."}
      closingCta={"Book a free 30-minute call about your reports"}
      cta="booking"
      offers={OFFERS_BY_SERVICE['services/data-analysis-greece']}
      path={path}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: "Data Analysis Services Greece",
        serviceType: "Data analysis and business intelligence",
        provider: {'@id': ORGANISATION_ID},
        areaServed: {'@type': 'Country', name: 'Greece'},
        description: "Automated reporting, BI dashboards and analytics pipelines for the owner whose business runs on retyped data, late follow-ups, and one person who knows how everything works.",
      }}
    />
  );
}
