import Link from 'next/link';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import {CLIENTS, PARTNER_BADGE} from '@/data/clients';

// The client strip of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.5
// and §9), names from src/data/clients.ts. ~~A static wrapped row, no marquee.~~ A moving row since BR-D45, see
// below. With no cleared logo a name renders as text in the heading font; a cleared logo renders ~~at about 40px,
// greyscale, coloured on hover,~~ at 48px in colour since BR-D45, with a dark variant (BR-G25, live since 2026-10-26). A logo that is a mark alone carries the name beside it. A name
// or logo links to its project page where one exists. The Snowflake Select badge
// closes the row as the partner item and links Snowflake's own directory entry.
//
// Server component: `language` comes in as a prop.

// Since BR-D45 (2026-10-26, after ignitech.ch) the row scrolls sideways without end, 38 seconds a loop, logos at
// 48px in greyscale that take their own colours on hover (his ask, 2026-10-26), edges fading out, a hover pausing it (CSS in globals.css). The list renders twice;
// the second copy is hidden from screen readers and from the tab order, and with reduced motion it is not shown.
function Items({language, copy}: {language: Language; copy: boolean}) {
  const text = HOME[language].clients;
  const nameClass = 'whitespace-nowrap font-display text-xl font-bold text-gray-500 transition-colors group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-400';
  const tab = copy ? {tabIndex: -1} : {};

  return (
    <ul className={`flex flex-shrink-0 items-center gap-14 pr-14 ${copy ? 'marquee-copy' : ''}`} aria-hidden={copy || undefined}>
      {CLIENTS.map((c) => {
        const mark = c.logo ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.logo.src} alt={copy || c.logo.withName ? '' : c.name} width={c.logo.width} height={c.logo.height} className={`h-12 w-auto max-w-[180px] object-contain opacity-60 grayscale transition duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 ${c.logo.darkSrc ? 'dark:hidden' : ''}`}/>
            {c.logo.darkSrc && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={c.logo.darkSrc} alt={copy || c.logo.withName ? '' : c.name} width={c.logo.width} height={c.logo.height} className="hidden h-12 w-auto max-w-[180px] object-contain opacity-60 grayscale transition duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 dark:block"/>
            )}
            {c.logo.withName && <span className={nameClass}>{c.name}</span>}
          </>
        ) : (
          <span className={nameClass}>{c.name}</span>
        );
        return (
          <li key={c.id} className="flex h-16 flex-shrink-0 items-center">
            {c.projectSlug ? (
              <Link href={`/${language}/projects/${c.projectSlug}`} className="group flex items-center gap-2" {...tab}>
                {mark}
              </Link>
            ) : (
              <span className="group flex items-center gap-2">{mark}</span>
            )}
          </li>
        );
      })}
      <li className="flex h-16 flex-shrink-0 items-center">
        <a href={PARTNER_BADGE.href} target="_blank" rel="noopener noreferrer" className="group" {...tab}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PARTNER_BADGE.src} alt={copy ? '' : text.badgeAlt} className="h-14 w-auto opacity-60 grayscale transition duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"/>
        </a>
      </li>
    </ul>
  );
}

export default function ClientStrip({language}: {language: Language}) {
  const copy = HOME[language].clients;

  return (
    <section className="border-b border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-primary-700 dark:text-primary-300">
          {copy.heading}
        </h2>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          <Items language={language} copy={false}/>
          <Items language={language} copy/>
        </div>
      </div>
    </section>
  );
}
