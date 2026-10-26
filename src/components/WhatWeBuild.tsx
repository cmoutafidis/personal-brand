import Link from 'next/link';
import {ArrowRight, Bot, Code2, Database, Globe, Smartphone, Workflow, type LucideIcon} from 'lucide-react';
import SectionHeading, {SECTION_PAD} from '@/components/SectionHeading';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import {SERVICES, type Service} from '@/data/services';
import {OFFER_BY_SLUG, SERVICE_LABEL, type ServiceSlug} from '@/data/offerLinks';
import {projectBySlug} from '@/data/projects';

// "What we build" on both homepages: the six cards of src/data/services.ts. Added 2026-10-22 (offer-os
// gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1 row 5 and §4.3, decision BR-D3). Each card links its service
// page, with that page's own phrase as anchor text (SERVICE_LABEL), or its offer, with the offer's eyebrow
// (offerLinks.ts). Since 2026-10-22 (BR-G06) the apps card also links the Catalytics project page, with that
// page's H1 as anchor text. No anchor text is typed here, and no price.
//
// Server component: `language` comes in as a prop.

type CardLink = {href: string; label: string};

function serviceLink(href: Record<Language, string>, language: Language): CardLink {
  const slug = href[language].replace(/^\/(en|el)\//, '') as ServiceSlug;
  return {href: href[language], label: SERVICE_LABEL[slug][language]};
}

function linksOf(s: Service, language: Language): CardLink[] {
  const links: CardLink[] = [];
  if (s.serviceHref) links.push(serviceLink(s.serviceHref, language));
  if (s.secondServiceHref) links.push(serviceLink(s.secondServiceHref, language));
  if (s.offerHref) links.push({href: `/${language}/${s.offerHref}`, label: OFFER_BY_SLUG[s.offerHref].copy[language].eyebrow});
  const project = s.projectSlug ? projectBySlug(s.projectSlug) : undefined;
  if (project) links.push({href: `/${language}/projects/${project.slug}`, label: project.copy[language].h1});
  return links;
}

// Since BR-D45 (2026-10-26, after ignitech.ch): a labelled heading on the left, and larger cards with an icon
// tile, a number from 01, a heavier title and a lift on hover. No photos (his answer).
const ICON: Record<Service['key'], LucideIcon> = {
  'custom-software': Code2,
  apps: Smartphone,
  automation: Workflow,
  'ai-agents': Bot,
  websites: Globe,
  data: Database,
};

export default function WhatWeBuild({language}: {language: Language}) {
  const copy = HOME[language].build;

  return (
    <section id="what-we-build" className={`bg-[#f7faff] dark:bg-gray-950 ${SECTION_PAD}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={HOME[language].labels.build} heading={copy.heading} line={copy.line}/>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICON[s.key];
            return (
              <li
                key={s.key}
                data-reveal={String((i % 3) * 100)}
                className="flex flex-col rounded-[20px] border-[1.5px] border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-primary-600 hover:shadow-[0_8px_32px_rgba(0,134,255,0.12)] dark:border-gray-700 dark:bg-gray-900 dark:hover:border-primary-400"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${i % 2 ? 'bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-300' : 'bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-300'}`}>
                    <Icon className="h-6 w-6" aria-hidden="true"/>
                  </span>
                  <span className="text-xs font-bold text-gray-400" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mb-3 font-display text-xl font-extrabold tracking-[-0.01em] text-gray-950 dark:text-white">{s.copy[language].title}</h3>
                <p className="mb-4 flex-1 leading-7 text-gray-600 dark:text-gray-300">{s.copy[language].line}</p>
                <ul className="space-y-1.5">
                  {linksOf(s, language).map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="inline-flex items-center font-semibold text-primary-600 hover:underline dark:text-primary-400">
                        {l.label}
                        <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" aria-hidden="true"/>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
