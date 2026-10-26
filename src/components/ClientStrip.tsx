import Link from 'next/link';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import {CLIENTS, PARTNER_BADGE} from '@/data/clients';

// The client strip of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.5
// and §9), names from src/data/clients.ts. A static wrapped row, no marquee. With no cleared logo a name
// renders as text in the heading font; a cleared logo renders at about 40px, greyscale, coloured on hover, with
// a dark variant (BR-G25, live since 2026-10-26). A logo that is a mark alone carries the name beside it. A name
// or logo links to its project page where one exists. The Snowflake Select badge
// closes the row as the partner item and links Snowflake's own directory entry.
//
// Server component: `language` comes in as a prop.

export default function ClientStrip({language}: {language: Language}) {
  const copy = HOME[language].clients;
  const nameClass = 'text-lg font-semibold text-gray-500 transition-colors group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-400';

  return (
    <section className="bg-white pb-10 pt-2 dark:bg-gray-900 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
          {copy.heading}
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-5">
          {CLIENTS.map((c) => {
            const mark = c.logo ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo.src} alt={c.logo.withName ? '' : c.name} width={c.logo.width} height={c.logo.height} className={`grayscale transition group-hover:grayscale-0 ${c.logo.darkSrc ? 'dark:hidden' : ''}`}/>
                {c.logo.darkSrc && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={c.logo.darkSrc} alt={c.logo.withName ? '' : c.name} width={c.logo.width} height={c.logo.height} className="hidden grayscale transition group-hover:grayscale-0 dark:block"/>
                )}
                {c.logo.withName && <span className={nameClass}>{c.name}</span>}
              </>
            ) : (
              <span className={nameClass}>{c.name}</span>
            );
            return (
              <li key={c.id} className="flex h-10 items-center">
                {c.projectSlug ? (
                  <Link href={`/${language}/projects/${c.projectSlug}`} className="group flex items-center gap-2">
                    {mark}
                  </Link>
                ) : (
                  <span className="flex items-center gap-2">{mark}</span>
                )}
              </li>
            );
          })}
          <li className="flex h-10 items-center">
            <a href={PARTNER_BADGE.href} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PARTNER_BADGE.src} alt={copy.badgeAlt} className="h-10 w-auto"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
