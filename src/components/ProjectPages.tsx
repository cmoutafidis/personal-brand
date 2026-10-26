import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft, ArrowRight, ExternalLink} from 'lucide-react';
import type {Language} from '@/types/language';
import TrackedLink from '@/components/TrackedLink';
import {PRIMARY_BUTTON_CLASS} from '@/components/Hero';
import {buildAlternates} from '@/lib/alternates';
import {BOOKING_URL} from '@/lib/booking';
import {BOOKING_CLICK_EVENT} from '@/utils/gtag';
import {LIVE_PROJECTS, PROJECTS_COPY, type Project} from '@/data/projects';
import {SERVICES} from '@/data/services';
import {OFFER_BY_SLUG, SERVICE_LABEL, type ServiceSlug} from '@/data/offerLinks';

// The projects index, /[locale]/projects, and the project pages, /[locale]/projects/<slug>. Added 2026-10-22
// (offer-os gtm/broad-home-2026-10 BR-G06, PLAN.md §4.4). Every string comes from src/data/projects.ts, which
// copies offer-os `companies/fiji-solutions/site/03-copy-home.md`, "Projects", word for word. Metadata is built
// here from the same object the page renders, so the title, description and H1 cannot drift apart.
//
// No page level JSON-LD (PLAN.md §4.4 and ~~the GEO rule 3 in CLAUDE.md~~): the site-level nodes in RootShell stay
// the only ones. No price, no rating, no count of clients. The gallery renders the project's cleared `images`,
// those marked `mockData: true` or `publicPage: true` (BR-G26; the first, Seaflows, since 2026-10-26). The quote
// slot renders `quote` word for word with its author, role, date and source link once BR-G29 sets one, with no
// stars and no Review markup (BR-D27); it renders nothing today.
//
// Superseded 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-13): the GEO rule 3 struck above was the per page
// markup freeze, which D-13 narrows: fix broken markup, fix slow pages, and add schema types Google itself
// uses, such as BreadcrumbList and Article images, to project pages; nothing is added only for AI tools. Goals C5, C10 and C14 carry it out; until then the page renders no page level JSON-LD.
//
// Server components: `lang` comes in as a prop.

const BASE = 'https://www.fijisolutions.net';
const OG_IMAGE = `${BASE}/fijisolutions.png`;

function metadataFor(lang: Language, path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: buildAlternates(path, lang),
    openGraph: {
      type: 'website',
      url: `${BASE}/${lang}${path}`,
      title,
      description,
      images: [{url: OG_IMAGE, width: 1200, height: 630, alt: title}],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@fiji_solutions',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function projectsIndexMetadata(lang: Language): Metadata {
  const c = PROJECTS_COPY[lang];
  return metadataFor(lang, '/projects', c.indexTitle, c.indexDescription);
}

export function projectMetadata(lang: Language, p: Project): Metadata {
  const c = p.copy[lang];
  return metadataFor(lang, `/projects/${p.slug}`, c.metaTitle, c.metaDescription);
}

export function ProjectsIndex({lang}: {lang: Language}) {
  const c = PROJECTS_COPY[lang];

  return (
    <div className="min-h-screen bg-white pb-16 pt-28 dark:bg-gray-900 md:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-primary-600 dark:text-primary-400 md:text-4xl">{c.indexH1}</h1>
        <p className="mb-10 max-w-3xl text-lg text-gray-700 dark:text-gray-300">{c.indexIntro}</p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {LIVE_PROJECTS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/${lang}/projects/${p.slug}`}
                className="group flex h-full flex-col rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700/80 dark:bg-gray-800 md:p-6"
              >
                <h2 className="mb-2 text-xl font-semibold text-gray-950 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                  {p.client.name}
                </h2>
                <p className="flex-1 text-gray-700 dark:text-gray-300">{p.copy[lang].cardLine}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type PageLink = {href: string; label: string};

/** The live, store and further links of a project, in that order. The live link reads as its host unless the
 *  project gives it a label. */
function linksOf(p: Project, lang: Language): PageLink[] {
  const out: PageLink[] = [];
  const {live, liveLabel, appStore, googlePlay, more} = p.links;
  if (live) out.push({href: live, label: liveLabel ? liveLabel[lang] : new URL(live).host});
  if (appStore) out.push({href: appStore, label: 'App Store'});
  if (googlePlay) out.push({href: googlePlay, label: 'Google Play'});
  for (const m of more ?? []) out.push({href: m.href, label: m.label[lang]});
  return out;
}

function serviceLink(href: Record<Language, string>, lang: Language): PageLink {
  const slug = href[lang].replace(/^\/(en|el)\//, '') as ServiceSlug;
  return {href: href[lang], label: SERVICE_LABEL[slug][lang]};
}

/** "See also": the pages of the project's services, then its related service and offer, each once. Anchor text
 *  is the destination's own phrase (SERVICE_LABEL, or the offer's eyebrow), as everywhere in offerLinks.ts. */
function relatedOf(p: Project, lang: Language): PageLink[] {
  const out: PageLink[] = [];
  const add = (l: PageLink) => {
    if (!out.some((o) => o.href === l.href)) out.push(l);
  };
  for (const key of p.services) {
    const s = SERVICES.find((x) => x.key === key);
    if (!s) continue;
    if (s.serviceHref) add(serviceLink(s.serviceHref, lang));
    if (s.secondServiceHref) add(serviceLink(s.secondServiceHref, lang));
    if (s.offerHref) add({href: `/${lang}/${s.offerHref}`, label: OFFER_BY_SLUG[s.offerHref].copy[lang].eyebrow});
  }
  if (p.relatedService) add({href: `/${lang}/${p.relatedService}`, label: SERVICE_LABEL[p.relatedService][lang]});
  if (p.relatedOffer) add({href: `/${lang}/${p.relatedOffer}`, label: OFFER_BY_SLUG[p.relatedOffer].copy[lang].eyebrow});
  return out;
}

function formatDate(iso: string, lang: Language): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function ProjectDetail({lang, project: p}: {lang: Language; project: Project}) {
  const c = PROJECTS_COPY[lang];
  const pc = p.copy[lang];
  const links = linksOf(p, lang);
  const related = relatedOf(p, lang);
  const gallery = p.images.filter((img) => img.mockData || img.publicPage);
  const sections: {heading: string; body: string[]}[] = [
    {heading: c.situation, body: pc.situation},
    {heading: c.built, body: pc.built},
    {heading: c.result, body: pc.result},
  ];

  return (
    <div className="min-h-screen bg-white pb-16 pt-28 dark:bg-gray-900 md:pb-24">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}/projects`} className="mb-6 inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true"/>
          {c.all}
        </Link>
        <h1 className="mb-8 text-3xl font-bold text-primary-600 dark:text-primary-400 md:text-4xl">{pc.h1}</h1>

        <dl className="mb-10 grid gap-x-6 gap-y-4 rounded-xl border border-gray-200/80 bg-gray-50 p-5 dark:border-gray-700/80 dark:bg-gray-800 sm:grid-cols-2 lg:grid-cols-3">
          {pc.facts.map((f) => (
            <div key={f.label}>
              <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">{f.label}</dt>
              <dd className="text-gray-950 dark:text-white">{f.value}</dd>
            </div>
          ))}
        </dl>

        {gallery.length > 0 && (
          <div className={`mb-10 grid gap-4 ${gallery.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {gallery.map((img) => (
              <Image key={img.src} src={img.src} alt={img.alt[lang]} width={1200} height={750} sizes={gallery.length > 1 ? '(min-width: 640px) 50vw, 100vw' : '(min-width: 896px) 896px, 100vw'} className="h-auto w-full rounded-xl border border-gray-200/80 dark:border-gray-700/80"/>
            ))}
          </div>
        )}

        {sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{s.heading}</h2>
            {s.body.map((para) => (
              <p key={para} className="mb-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">{para}</p>
            ))}
          </section>
        ))}

        {p.quote && (
          <figure className="mb-10 rounded-xl border border-gray-200/80 bg-gray-50 p-6 dark:border-gray-700/80 dark:bg-gray-800">
            <blockquote className="mb-4 text-lg text-gray-800 dark:text-gray-200">{p.quote.text}</blockquote>
            <figcaption className="text-sm text-gray-600 dark:text-gray-400">
              {p.quote.author}, {p.quote.role}, <time dateTime={p.quote.date}>{formatDate(p.quote.date, lang)}</time>
              {p.quote.url && (
                <>
                  {', '}
                  <a href={p.quote.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 hover:underline dark:text-primary-400">
                    {new URL(p.quote.url).host}
                  </a>
                </>
              )}
            </figcaption>
          </figure>
        )}

        {links.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{c.links}</h2>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400">
                    {l.label}
                    <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true"/>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{c.related}</h2>
            <ul className="space-y-2">
              {related.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400">
                    {l.label}
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" aria-hidden="true"/>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-10 rounded-xl bg-primary-50 p-6 text-center dark:bg-gray-950 md:p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-950 dark:text-white">{c.ctaHeading}</h2>
          <TrackedLink
            event={BOOKING_CLICK_EVENT}
            params={{cta_location: `project-${p.slug}`, locale: lang}}
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={PRIMARY_BUTTON_CLASS}
          >
            {c.ctaButton}
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true"/>
          </TrackedLink>
        </section>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          {c.updated}: <time dateTime={p.lastmod}>{formatDate(p.lastmod, lang)}</time>
        </p>
      </article>
    </div>
  );
}
