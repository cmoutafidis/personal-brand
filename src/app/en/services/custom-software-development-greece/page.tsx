import type { Metadata } from 'next';
import Link from 'next/link';
import { createTranslationFunction } from '@/translations';
import Footer from '@/components/Footer';

const siteUrl = 'https://www.fijisolutions.net';

export const metadata: Metadata = {
  title: 'Custom Software Development Greece | Fiji Solutions',
  description: 'Custom software development in Greece for business applications, internal tools, web platforms, integrations, workflow automation, and reporting systems.',
  keywords: 'custom software development Greece, custom software solutions Greece, software company Greece, software company Thessaloniki, business software Greece, web application development Greece',
  alternates: {
    canonical: `${siteUrl}/en/services/custom-software-development-greece`,
    languages: {
      en: `${siteUrl}/en/services/custom-software-development-greece`,
      el: `${siteUrl}/el/services/custom-software-development-greece`,
      'x-default': `${siteUrl}/en/services/custom-software-development-greece`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/en/services/custom-software-development-greece`,
    title: 'Custom Software Development Greece | Fiji Solutions',
    description: 'Business applications, internal tools, integrations, workflow automation, and reporting systems for Greek companies.',
    images: [{ url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: 'Custom software development Greece' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Custom Software Development Greece | Fiji Solutions',
    description: 'Custom business software and integrations for companies in Greece.',
    images: [`${siteUrl}/fijisolutions.png`],
  },
};

const capabilities = [
  'Custom business applications and internal tools',
  'Web platforms, customer portals, and dashboards',
  'API integrations with CRM, ERP, payment, and data systems',
  'Workflow automation that reduces repetitive manual work',
];

export default function CustomSoftwareDevelopmentGreecePage() {
  const t = createTranslationFunction('en');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Software Development Greece',
    serviceType: 'Custom software development',
    provider: { '@type': 'ProfessionalService', name: 'Fiji Solutions', url: siteUrl },
    areaServed: { '@type': 'Country', name: 'Greece' },
    description: 'Custom software development for Greek businesses, including business applications, integrations, dashboards, and automation.',
  };

  return (
    <div className="min-h-screen bg-white pt-20 dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Custom Software Greece</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">Custom software solutions for Greek businesses</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
            Fiji Solutions designs and builds software around your operations: internal tools, customer portals, integrations, reporting, and automation that fit your business instead of forcing your team into generic tools.
          </p>
          <Link href="/en/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">
            Discuss your project
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What we build</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability} className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{capability}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">We focus on maintainable architecture, clear business value, and systems your team can use every day.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Want to know what we would build first?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Send us the process, spreadsheet, or internal tool that slows your team down. We will reply with a practical first step within 48 hours.
          </p>
          <Link href="/en/contact" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">Book a free consultation</Link>
        </div>
      </section>
      <Footer t={t} />
    </div>
  );
}
