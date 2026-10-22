import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {Language} from '@/types/language';
import {PROJECTS_COPY} from '@/data/projects';

// The line on /portfolio that links /[locale]/projects. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G06,
// PLAN.md §4.2): it takes the place of the old Projects section, whose crypto card and "Fiji Analytics Dashboard"
// card left the site that day. Copy from offer-os `companies/fiji-solutions/site/03-copy-home.md`, "Portfolio".
//
// Server component: `lang` comes in as a prop.

export default function PortfolioProjectsLink({lang}: {lang: Language}) {
  const c = PROJECTS_COPY[lang];
  return (
    <section className="bg-white pb-16 dark:bg-gray-900 md:pb-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {c.portfolioLine}{' '}
          <Link href={`/${lang}/projects`} className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400">
            {c.all}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true"/>
          </Link>
        </p>
      </div>
    </section>
  );
}
