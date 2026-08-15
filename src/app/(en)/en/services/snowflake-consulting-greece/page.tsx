import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import ServicePage from '@/components/ServicePage';

const siteUrl = 'https://www.fijisolutions.net';
const path = '/services/snowflake-consulting-greece';

export const metadata: Metadata = {
  title: "Snowflake Consulting Greece | Select Partner | Fiji Solutions",
  description: "Snowflake AI Data Cloud implementation, migration and tuning. We are a Snowflake AI Data Cloud Select Partner.",
  keywords: "Snowflake consulting Greece, Snowflake partner Greece, Snowflake migration Greece, data warehouse Greece, ETL ELT Greece, data engineering Greece",
  alternates: buildAlternates(path),
  openGraph: {
    type: 'website',
    url: `${siteUrl}/en${path}`,
    title: "Snowflake Consulting Greece | Select Partner | Fiji Solutions",
    description: "Snowflake AI Data Cloud implementation, migration and tuning. We are a Snowflake AI Data Cloud Select Partner.",
    images: [{url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: "Snowflake Consulting Greece"}],
  },
};

export default function Page() {
  return (
    <ServicePage
      lang="en"
      eyebrow={"Snowflake Greece"}
      h1={"Snowflake, implemented or repaired"}
      lead={"When the data outgrows spreadsheets, the next step is usually bought before it is designed — and then it is slow, expensive, or both. We implement it, migrate onto it, or fix the one you already have."}
      heroCta={"Get the free process audit"}
      outcomesTitle={"What we do"}
      outcomes={[{title: "Data warehouse build", body: "Designed around the questions you actually ask, not around a reference architecture from a vendor deck."}, {title: "ETL/ELT pipelines", body: "The loading that runs on schedule, fails loudly when it fails, and does not need someone watching it."}, {title: "Migration onto Snowflake", body: "Off whatever it is on now, with the reports still returning the same numbers on the other side."}, {title: "Cost and performance tuning", body: "Snowflake bills for what you run. Most estates are paying for queries nobody reads and warehouses nobody sized."}]}
      closingH2={"Already on Snowflake and paying more than you expected?"}
      closingBody={"Send us the bill and the heaviest query. That is usually enough to say where the money is going."}
      closingCta={"Get the free process audit"}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: "Snowflake Consulting Greece",
        serviceType: "Snowflake consulting and data engineering",
        provider: {'@type': 'ProfessionalService', name: 'Fiji Solutions', url: siteUrl},
        areaServed: {'@type': 'Country', name: 'Greece'},
        description: "Snowflake AI Data Cloud implementation, migration, pipelines and cost tuning for businesses in Greece.",
      }}
    />
  );
}
