import React from 'react';
import Link from 'next/link';
import {ArrowRight, Mail, MapPin, Phone} from 'lucide-react';
import {Language} from '@/types/language';

// The local section on both homepages. Added 2026-09-01, on the first demand data this site has
// ever had (offer-os/gtm/keyword-research-2026-09-01.md).
//
// WHY IT EXISTS. DataForSEO measured the vocabulary this homepage is written in — «αυτοματοποίηση
// διαδικασιών», «εξατομικευμένο λογισμικό», «ψηφιακός μετασχηματισμός» — at no measurable volume in
// Greek, and the vocabulary it does not use at 2,900/mo (κατασκευή ιστοσελίδων), a climbing
// προώθηση ιστοσελίδων and ~1,100/mo across the Θεσσαλονίκη spelling variants, all LOW competition.
// ⚠️ CORRECTED 2026-09-06. This line used to say 1,600/mo for προώθηση ιστοσελίδων. That number is
// WITHDRAWN, per blogs.ts since 2026-09-02: it is a twelve month average of 210 390 260 320 210 210
// 170 260 390 1000 5400 9900, flat for ten months and then vertical. Quote the trajectory. The
// category phrase «εταιρεία λογισμικού» (260/mo) was in this site's metadata and in the audit
// page's founder story, but never in a homepage H2. cylicom.gr ranks #1 for the local term from a
// homepage with ten ranked keywords; this site ranked for zero.
//
// WHY IT IS NOT THE SERVICE LIST COMING BACK. CLAUDE.md used to say «Nothing links to them»: the
// /offers/* pages were Google Ads destinations, one campaign per page. Google Ads was dropped on
// 2026-09-01 and organic search is the whole strategy, so orphaning them now only means they cannot
// rank. Charis approved linking them from inside the BODY of a page — never a navigation menu, a
// footer link list or a hub. This is that link: two, in prose, in one section, below the audit
// argument. Do not add a third, do not turn this into a grid, and do not put any of it in
// Navbar.tsx, QuickLinks.tsx or Footer.tsx.
//
// Server component — it takes `language` as a prop rather than calling useLanguage(), which is what
// keeps both homepages statically prerendered. The address and phone come from the SAME translation
// keys the contact page renders, so the homepage cannot state a different address from /contact.

interface LocalProps {
  t: (key: string) => string;
  language: Language;
}

// A Google Maps search URL built from the published address. It carries no coordinates, so unlike
// a `geo` node it cannot silently point at the wrong municipality.
const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Fiji%20Solutions%2C%20Nikiforou%20Ouranou%2015%2C%20Thessaloniki%2054627';

export default function Local({t, language}: LocalProps) {
  const offerLinks = [
    {label: t('local.website.seo'), href: `/${language}/offers/website-seo`},
    {label: t('local.website.ads'), href: `/${language}/offers/website-google-ads`},
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
            {t('local.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('local.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm p-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <MapPin className="h-6 w-6"/>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    {t('contact.location')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('contact.address.street')}<br/>
                    {t('contact.address.city')}
                  </p>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {t('local.map')}
                    <ArrowRight className="ml-1 h-4 w-4"/>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <Phone className="h-6 w-6"/>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    {t('contact.phone')}
                  </h3>
                  <a
                    href="tel:+302311070108"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +30 231 107 0108
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <Mail className="h-6 w-6"/>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h3>
                  <a
                    href="mailto:info@fijisolutions.net"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    info@fijisolutions.net
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {t('local.website.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('local.website.description')}
            </p>
            <ul className="space-y-3">
              {offerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {link.label}
                    <ArrowRight className="ml-2 h-4 w-4"/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
