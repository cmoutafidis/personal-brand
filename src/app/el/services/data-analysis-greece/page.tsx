import type { Metadata } from 'next';
import Link from 'next/link';
import { createTranslationFunction } from '@/translations';
import Footer from '@/components/Footer';

const siteUrl = 'https://www.fijisolutions.net';

export const metadata: Metadata = {
  title: 'Ανάλυση Δεδομένων Ελλάδα | BI Dashboards | Fiji Solutions',
  description: 'Υπηρεσίες ανάλυσης δεδομένων στην Ελλάδα για BI dashboards, KPI reporting, reporting automation, analytics pipelines και business intelligence.',
  keywords: 'ανάλυση δεδομένων Ελλάδα, business intelligence Ελλάδα, BI dashboards Ελλάδα, analytics consulting Ελλάδα, KPI dashboards Ελλάδα, reporting automation Ελλάδα',
  alternates: {
    canonical: `${siteUrl}/el/services/data-analysis-greece`,
    languages: {
      en: `${siteUrl}/en/services/data-analysis-greece`,
      el: `${siteUrl}/el/services/data-analysis-greece`,
      'x-default': `${siteUrl}/en/services/data-analysis-greece`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/el/services/data-analysis-greece`,
    title: 'Ανάλυση Δεδομένων Ελλάδα | Fiji Solutions',
    description: 'BI dashboards, KPI reporting, reporting automation και analytics pipelines για ελληνικές επιχειρήσεις.',
    images: [{ url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: 'Ανάλυση δεδομένων Ελλάδα' }],
  },
};

const outcomes = ['Executive KPI dashboards', 'Αυτοματοποιημένα reporting pipelines', 'Οικονομική και επιχειρησιακή ανάλυση', 'Data quality checks και single source of truth'];

export default function DataAnalysisGreecePageEL() {
  const t = createTranslationFunction('el');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ανάλυση Δεδομένων Ελλάδα',
    serviceType: 'Data analysis and business intelligence',
    provider: { '@type': 'ProfessionalService', name: 'Fiji Solutions', url: siteUrl },
    areaServed: { '@type': 'Country', name: 'Greece' },
    description: 'Ανάλυση δεδομένων, BI dashboards, KPI reporting και analytics automation για ελληνικές επιχειρήσεις.',
  };

  return (
    <div className="min-h-screen bg-white pt-20 dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Data Analysis Ελλάδα</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">Ανάλυση δεδομένων και BI dashboards για καλύτερες αποφάσεις</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
            Βοηθάμε ελληνικές επιχειρήσεις να μετατρέψουν διάσπαρτα επιχειρησιακά δεδομένα σε dashboards, reports και analytics workflows που μπορούν να εμπιστευτούν διοίκηση και ομάδες.
          </p>
          <Link href="/el/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">
            Σχεδιασμός data project
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Αποτελέσματα που παραδίδουμε</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome} className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{outcome}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">Συνδέουμε data sources, καθαρίζουμε βασικά metrics και φτιάχνουμε reporting flows που μειώνουν τη χειροκίνητη δουλειά σε spreadsheets.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Θες πιο καθαρό reporting χωρίς περισσότερα spreadsheets;</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Στείλε μας τα reports που ετοιμάζει χειροκίνητα η ομάδα σου. Θα σου δείξουμε πού μπορεί ένα dashboard ή automation να βοηθήσει πιο γρήγορα.
          </p>
          <Link href="/el/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">Κλείσε δωρεάν συζήτηση</Link>
        </div>
      </section>
      <Footer t={t} />
    </div>
  );
}
