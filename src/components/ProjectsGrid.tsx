import Link from 'next/link';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import {HOME_PROJECTS} from '@/data/projects';
import SectionHeading, {SECTION_PAD} from '@/components/SectionHeading';

// The projects grid of both homepages, `id="projects"`, the target of the hero's second button. Added
// 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1 row 8 and §4.4). The first six projects
// of src/data/projects.ts by `order`, each with its client and card line, then "All projects". Each card links
// its project page (BR-G06).
//
// Server component: `language` comes in as a prop.

export default function ProjectsGrid({language}: {language: Language}) {
  const copy = HOME[language].projects;

  return (
    <section id="projects" className={`scroll-mt-24 bg-[#f7faff] dark:bg-gray-950 ${SECTION_PAD}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={HOME[language].labels.projects}
          heading={copy.heading}
          line={copy.line}
          link={{href: `/${language}/projects`, label: copy.all}}
        />
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {HOME_PROJECTS.map((p, i) => (
            <li key={p.slug} data-reveal={String((i % 3) * 100)} className="w-[80%] flex-shrink-0 snap-start sm:w-auto">
              <Link
                href={`/${language}/projects/${p.slug}`}
                className="group flex h-full flex-col rounded-[20px] border-[1.5px] border-gray-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-primary-600 hover:shadow-[0_8px_32px_rgba(0,134,255,0.12)] dark:border-gray-700 dark:bg-gray-900 dark:hover:border-primary-400 p-6"
              >
                <h3 className="mb-3 font-display text-xl font-extrabold tracking-[-0.01em] text-gray-950 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                  {p.client.name}
                </h3>
                <p className="flex-1 leading-7 text-gray-600 dark:text-gray-300">{p.copy[language].cardLine}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
