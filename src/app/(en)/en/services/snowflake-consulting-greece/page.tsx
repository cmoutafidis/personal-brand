import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import ServicePage from '@/components/ServicePage';
import {OFFERS_BY_SERVICE} from '@/data/offerLinks';
import {ORGANISATION_ID} from '\@/lib/person';

const siteUrl = 'https://www.fijisolutions.net';
const path = '/services/snowflake-consulting-greece';

export const metadata: Metadata = {
  title: "Snowflake Consulting Greece | Select Partner | Fiji Solutions",
  description: "Snowflake AI Data Cloud implementation, migration and tuning. We are a Snowflake AI Data Cloud Select Partner.",
  keywords: "Snowflake consulting Greece, Snowflake partner Greece, Snowflake migration Greece, data warehouse Greece, ETL ELT Greece, data engineering Greece",
  alternates: buildAlternates(path),
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: `${siteUrl}/en${path}`,
    title: "Snowflake Consulting Greece | Select Partner | Fiji Solutions",
    description: "Snowflake AI Data Cloud implementation, migration and tuning. We are a Snowflake AI Data Cloud Select Partner.",
    images: [{url: `${siteUrl}/og/fiji-solutions-en.png`, width: 1200, height: 630, alt: "Snowflake Consulting Greece"}],
  },
};

export default function Page() {
  return (
    <ServicePage
      lang="en"
      eyebrow={"Snowflake Greece"}
      h1={"Snowflake consulting in Greece: implementation, migration and tuning"}
      lead={"Fiji Solutions is a software company in Thessaloniki, Greece, and a Snowflake AI Data Cloud Select Partner. We set up Snowflake data platforms, load your data into them on a schedule, and build the reports your team reads there. You talk directly to the engineer who builds it."}
      heroCta={"Book a free 30-minute call about your Snowflake setup"}
      outcomesTitle={"What we do"}
      outcomes={[{title: "Data warehouse build", body: "Warehouses, database, schemas, file formats and roles, set up as code."}, {title: "ETL/ELT pipelines", body: "Scheduled loads from the databases and tools you already use into Snowflake, with recovery procedures for the day a run fails."}, {title: "Migration onto Snowflake", body: "Your data and reports moved onto Snowflake from the system they run on now, as one scope we agree with you in writing."}, {title: "Cost and performance tuning", body: "Snowflake bills compute in credits for the time a warehouse runs. We help you size and schedule your warehouses for the work they do."}]}
      engagementsTitle={"Typical engagements"}
      engagements={[{title: "A first Snowflake workspace", body: "Warehouses, database, schema, file formats and table stages, with read-only, read-write and analyst roles and grants on current and future tables. All of it is written as code. We set up the workspace this way for Alumil, a Greek maker of aluminium systems for windows, doors and facades."}, {title: "Nightly loads from several sources", body: "Scheduled jobs that bring data from your own systems into Snowflake. For New Era Learning, an online education company in the United Arab Emirates, jobs copy data every night from PostgreSQL, PostHog and ClickHouse into Snowflake. A monthly load runs too, with recovery procedures, and derived tables track payments, retention and movement between programs."}, {title: "Dashboards inside Snowflake", body: "Streamlit dashboards that run in Snowflake and open in Snowflake's web interface. New Era Learning's owner, staff and instructors read customer and revenue figures there, with view-only access to the dashboards and no access to the tables. Each dashboard has a glossary, and a daily digest email is built from the same figures."}, {title: "A proof of concept on your data", body: "One question tested on real records before a larger build. For Alumil we loaded extrusion and defect records from an Oracle source system through Azure Blob Storage into Snowflake, analysed them together in Snowpark and registered a first model in Snowflake's model registry."}]}
      processTitle={"How a Snowflake project runs"}
      process={[{title: "Free 30-minute call", body: "You tell us where your data lives today and what you want to read from it. You talk directly to the engineer who builds it."}, {title: "Scope and price in writing", body: "We agree in writing what we build and what it costs, before the work starts: the sources, the tables, the roles and the reports. The same document says who owns the code, the data and the accounts."}, {title: "Build", body: "We build what we agreed, and you see it take shape as we go. For Alumil, the workspace setup was written as code, so it can be read and run again."}, {title: "Launch, then care", body: "Once it is live, we keep it running for you, or you take it over on the terms we agreed in writing. For New Era Learning, the loads and dashboards refresh overnight, weekly or monthly."}]}
      integrationsTitle={"Tools and systems we work with"}
      integrationsIntro={"These are the tools and systems from the two Snowflake projects on this page."}
      integrations={["Snowflake", "Snowpark", "Streamlit in Snowflake", "COPY INTO", "Table stages", "Stored procedures", "Scheduled tasks", "Roles and grants", "Model registry", "PostgreSQL", "PostHog", "ClickHouse", "Oracle", "Azure Blob Storage", "Python", "SQL", "pandas", "scikit-learn", "XGBoost"]}
      pricingTitle={"How the work is priced"}
      howPriced={["Every project has a fixed fee for an agreed scope, written down before work starts.", "Larger builds usually start with a prototype or a sprint, so the first step is small and tested on your own data. For Alumil, the work was a proof of concept on its own production records."]}
      questions={[{q: "Is Fiji Solutions a Snowflake partner in Greece?", a: "Yes. Snowflake lists Fiji Solutions in its own partner directory as a Snowflake AI Data Cloud Select Partner, with headquarters in Greece. Snowflake's services partner network has three tiers, Select, Premier and Elite, above the Registered level. That status belongs to the company, and you can check the listing on Snowflake's site."}, {q: "How does Snowflake billing work?", a: "Snowflake bills compute in credits and storage at a flat monthly rate per terabyte. A warehouse is billed per second while it runs, with a 60-second minimum each time it starts. For standard warehouses, each size step doubles the credits used per hour. Bringing data in is free. Moving it to another region or cloud platform is charged."}, {q: "What does a Snowflake project with Fiji Solutions cost?", a: "Each project has a fixed fee for an agreed scope, which we write down with you before the work starts. We set it once the scope is clear, after the free 30-minute call. Larger builds usually start with a prototype or a sprint, so the first fee covers a small, tested step."}, {q: "Can we start with a Snowflake proof of concept?", a: "Yes. A proof of concept tests one question on your own data before a larger build. For Alumil we loaded production records into Snowflake under role-based access, trained a first model relating extrusion data to defect percentages, and set out the findings, the data limits and the next steps on a one-page results summary."}]}
      closingH2={"Planning Snowflake, or already running on it?"}
      closingBody={"Book a free 30-minute call and tell us where your data lives, what runs on Snowflake today and what you want to read from it. We work with businesses in Greece and abroad."}
      closingCta={"Book a free 30-minute call about your Snowflake setup"}
      cta="booking"
      offers={OFFERS_BY_SERVICE['services/snowflake-consulting-greece']}
      path={path}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: "Snowflake Consulting Greece",
        serviceType: "Snowflake consulting and data engineering",
        provider: {'@id': ORGANISATION_ID},
        areaServed: {'@type': 'Country', name: 'Greece'},
        description: "Snowflake AI Data Cloud implementation, migration, pipelines and cost tuning for the owner whose business runs on retyped data, late follow-ups, and one person who knows how everything works.",
      }}
    />
  );
}
