import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
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

export default function WhatWeBuild({language}: {language: Language}) {
  const copy = HOME[language].build;

  return (
    <section id="what-we-build" className="bg-gray-50 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-[2rem]">{copy.heading}</h2>
          <p className="mx-auto max-w-[65ch] text-lg leading-8 text-gray-700 dark:text-gray-300">{copy.line}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.key} className="flex flex-col rounded-xl border border-gray-200/80 bg-white p-4 sm:p-5 shadow-sm dark:border-gray-700/80 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-950 dark:text-white">{s.copy[language].title}</h3>
              <p className="mb-3 flex-1 text-gray-700 dark:text-gray-300 lg:text-sm">{s.copy[language].line}</p>
              <ul className="space-y-1">
                {linksOf(s, language).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400">
                      {l.label}
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" aria-hidden="true"/>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
