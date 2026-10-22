import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import {HOME_PROJECTS} from '@/data/projects';

// The projects grid of both homepages, `id="projects"`, the target of the hero's second button. Added
// 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1 row 8 and §4.4). The first six projects
// of src/data/projects.ts by `order`, each with its client and card line, then "All projects". The
// /[locale]/projects routes arrive in BR-G06, before the deploy.
//
// Server component: `language` comes in as a prop.

export default function ProjectsGrid({language}: {language: Language}) {
  const copy = HOME[language].projects;

  return (
    <section id="projects" className="scroll-mt-24 bg-gray-50 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-[2rem]">{copy.heading}</h2>
          <p className="mx-auto max-w-[65ch] text-lg leading-8 text-gray-700 dark:text-gray-300">{copy.line}</p>
        </div>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_PROJECTS.map((p) => (
            <li key={p.slug} className="w-[80%] flex-shrink-0 snap-start sm:w-auto">
              <Link
                href={`/${language}/projects/${p.slug}`}
                className="group flex h-full flex-col rounded-xl border border-gray-200/80 bg-white p-5 lg:p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700/80 dark:bg-gray-800 md:p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-950 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                  {p.client.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 lg:text-sm">{p.cardLine[language]}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <Link href={`/${language}/projects`} className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400">
            {copy.all}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
