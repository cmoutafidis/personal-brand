import type { Metadata } from 'next';
import Link from 'next/link';
import { createTranslationFunction } from '@/translations';
import Footer from '@/components/Footer';

const siteUrl = 'https://www.fijisolutions.net';

export const metadata: Metadata = {
  title: 'Snowflake Consulting Greece | Snowflake Partner | Fiji Solutions',
  description: 'We provide Snowflake consulting in Greece as a Snowflake AI Data Cloud Select Partner. Data warehouse design, migration, ETL/ELT pipelines, BI, and analytics.',
  keywords: 'Snowflake consulting Greece, Snowflake partner Greece, Snowflake AI Data Cloud Greece, Snowflake data engineering Greece, Snowflake migration Greece, data warehouse Greece, BI Snowflake Greece',
  alternates: {
    canonical: `${siteUrl}/en/services/snowflake-consulting-greece`,
    languages: {
      en: `${siteUrl}/en/services/snowflake-consulting-greece`,
      el: `${siteUrl}/el/services/snowflake-consulting-greece`,
      'x-default': `${siteUrl}/en/services/snowflake-consulting-greece`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/en/services/snowflake-consulting-greece`,
    title: 'Snowflake Consulting Greece | Fiji Solutions',
    description: 'Snowflake AI Data Cloud consulting, data warehouse design, migration, ETL/ELT, and BI for Greek businesses.',
    images: [{ url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: 'Snowflake consulting Greece' }],
  },
};

const services = ['Snowflake data warehouse architecture', 'ETL/ELT pipeline design and implementation', 'Migration from legacy databases or spreadsheets', 'BI dashboards and analytics models on Snowflake'];

export default function SnowflakeConsultingGreecePage() {
  const t = createTranslationFunction('en');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Snowflake Consulting Greece',
    serviceType: 'Snowflake AI Data Cloud consulting',
    provider: { '@type': 'ProfessionalService', name: 'Fiji Solutions', url: siteUrl },
    areaServed: { '@type': 'Country', name: 'Greece' },
    description: 'Snowflake consulting, data warehouse implementation, ETL/ELT pipelines, BI, and analytics for Greek businesses.',
  };

  return (
    <div className="min-h-screen bg-white pt-20 dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Snowflake AI Data Cloud Select Partner</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">Snowflake consulting and data engineering in Greece</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
            We help businesses implement, migrate to, and optimize Snowflake AI Data Cloud so teams can work with trusted data, scalable pipelines, and reliable BI dashboards.
          </p>
          <Link href="/en/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">
            Talk about Snowflake
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Snowflake services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">We design data workflows with practical governance, reporting needs, and future analytics use cases in mind.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Need a safer Snowflake plan?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Tell us where your data is today and what decisions your team cannot make fast enough. We will suggest a practical next step within 48 hours.
          </p>
          <Link href="/en/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">Book a free consultation</Link>
        </div>
      </section>
      <Footer t={t} />
    </div>
  );
}
