import type { Metadata } from 'next';
import Link from 'next/link';
import { createTranslationFunction } from '@/translations';
import Footer from '@/components/Footer';

const siteUrl = 'https://www.fijisolutions.net';

export const metadata: Metadata = {
  title: 'Εξατομικευμένο Λογισμικό Ελλάδα | Fiji Solutions',
  description: 'Εξατομικευμένη ανάπτυξη λογισμικού στην Ελλάδα για επιχειρησιακές εφαρμογές, εσωτερικά εργαλεία, web platforms, integrations, αυτοματοποίηση και reporting.',
  keywords: 'εξατομικευμένο λογισμικό Ελλάδα, custom software Ελλάδα, εταιρεία λογισμικού Ελλάδα, εταιρεία λογισμικού Θεσσαλονίκη, εφαρμογές επιχειρήσεων Ελλάδα',
  alternates: {
    canonical: `${siteUrl}/el/services/custom-software-development-greece`,
    languages: {
      en: `${siteUrl}/en/services/custom-software-development-greece`,
      el: `${siteUrl}/el/services/custom-software-development-greece`,
      'x-default': `${siteUrl}/en/services/custom-software-development-greece`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/el/services/custom-software-development-greece`,
    title: 'Εξατομικευμένο Λογισμικό Ελλάδα | Fiji Solutions',
    description: 'Επιχειρησιακές εφαρμογές, εσωτερικά εργαλεία, integrations, αυτοματοποίηση και reporting για ελληνικές επιχειρήσεις.',
    images: [{ url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: 'Εξατομικευμένο λογισμικό Ελλάδα' }],
  },
};

const capabilities = [
  'Εξατομικευμένες επιχειρησιακές εφαρμογές και εσωτερικά εργαλεία',
  'Web platforms, customer portals και dashboards',
  'API integrations με CRM, ERP, πληρωμές και data systems',
  'Αυτοματοποίηση workflows που μειώνει τη χειροκίνητη επαναλαμβανόμενη εργασία',
];

export default function CustomSoftwareDevelopmentGreecePageEL() {
  const t = createTranslationFunction('el');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Εξατομικευμένη Ανάπτυξη Λογισμικού Ελλάδα',
    serviceType: 'Custom software development',
    provider: { '@type': 'ProfessionalService', name: 'Fiji Solutions', url: siteUrl },
    areaServed: { '@type': 'Country', name: 'Greece' },
    description: 'Εξατομικευμένη ανάπτυξη λογισμικού για ελληνικές επιχειρήσεις, με εφαρμογές, integrations, dashboards και αυτοματοποίηση.',
  };

  return (
    <div className="min-h-screen bg-white pt-20 dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Custom Software Ελλάδα</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">Εξατομικευμένες λύσεις λογισμικού για ελληνικές επιχειρήσεις</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
            Η Fiji Solutions σχεδιάζει και υλοποιεί λογισμικό γύρω από τη λειτουργία της επιχείρησής σας: εσωτερικά εργαλεία, customer portals, integrations, reporting και αυτοματοποίηση.
          </p>
          <Link href="/el/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">
            Συζήτηση για το έργο σας
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Τι υλοποιούμε</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability} className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{capability}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">Εστιάζουμε σε συντηρήσιμη αρχιτεκτονική, καθαρή επιχειρησιακή αξία και συστήματα που η ομάδα σας μπορεί να χρησιμοποιεί καθημερινά.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Θες να δεις τι θα φτιάχναμε πρώτο;</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Στείλε μας τη διαδικασία, το spreadsheet ή το εσωτερικό εργαλείο που καθυστερεί την ομάδα σου. Θα σου απαντήσουμε με πρακτικό πρώτο βήμα σε 48 ώρες.
          </p>
          <Link href="/el/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">Κλείσε δωρεάν συζήτηση</Link>
        </div>
      </section>
      <Footer t={t} minimal />
    </div>
  );
}
