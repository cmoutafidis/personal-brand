import type { Metadata } from 'next';
import Link from 'next/link';
import { createTranslationFunction } from '@/translations';
import Footer from '@/components/Footer';

const siteUrl = 'https://www.fijisolutions.net';

export const metadata: Metadata = {
  title: 'Data Analysis Services Greece | BI Dashboards | Fiji Solutions',
  description: 'Data analysis services in Greece for BI dashboards, KPI reporting, reporting automation, analytics pipelines, and business intelligence projects.',
  keywords: 'data analysis services Greece, business intelligence Greece, BI dashboards Greece, analytics consulting Greece, KPI dashboards Greece, reporting automation Greece, data visualization Greece',
  alternates: {
    canonical: `${siteUrl}/en/services/data-analysis-greece`,
    languages: {
      en: `${siteUrl}/en/services/data-analysis-greece`,
      el: `${siteUrl}/el/services/data-analysis-greece`,
      'x-default': `${siteUrl}/en/services/data-analysis-greece`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/en/services/data-analysis-greece`,
    title: 'Data Analysis Services Greece | Fiji Solutions',
    description: 'BI dashboards, KPI reporting, reporting automation, and analytics pipelines for businesses in Greece.',
    images: [{ url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: 'Data analysis services Greece' }],
  },
};

const outcomes = ['Executive KPI dashboards', 'Automated reporting pipelines', 'Financial and operational analytics', 'Data quality checks and single source of truth'];

export default function DataAnalysisGreecePage() {
  const t = createTranslationFunction('en');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Data Analysis Services Greece',
    serviceType: 'Data analysis and business intelligence',
    provider: { '@type': 'ProfessionalService', name: 'Fiji Solutions', url: siteUrl },
    areaServed: { '@type': 'Country', name: 'Greece' },
    description: 'Data analysis, BI dashboards, KPI reporting, and analytics automation for Greek businesses.',
  };

  return (
    <div className="min-h-screen bg-white pt-20 dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Data Analysis Greece</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">Data analysis and BI dashboards for better business decisions</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
            We help Greek companies turn scattered operational data into dashboards, reports, and analytics workflows that management and teams can trust.
          </p>
          <Link href="/en/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">
            Plan your data project
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Data outcomes we deliver</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome} className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{outcome}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">We connect data sources, clean key metrics, and build reporting flows that reduce manual spreadsheet work.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Want clearer reporting without more spreadsheet work?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Share the reports your team prepares manually. We will show where automation or a dashboard can create the fastest improvement.
          </p>
          <Link href="/en/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">Book a free consultation</Link>
        </div>
      </section>
      <Footer t={t} />
    </div>
  );
}
