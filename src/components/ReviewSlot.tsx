import type {Language} from '@/types/language';
import SectionHeading, {SECTION_PAD} from '@/components/SectionHeading';
import {projectBySlug} from '@/data/projects';
import {REVIEWS, REVIEWS_COPY, type Review} from '@/data/reviews';
import {WORK_DONE, type WorkDonePage} from '@/data/workDone';
import sheetToApp from '@/data/offers/sheet-to-app';
import {formatIsoDate} from '@/lib/formatDate';

// The review slot of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.5
// and §9, decision BR-D27). Its placeholder card, which asked visitors for a Google review, left both homepages on
// 2026-10-26 (BR-G25, his answer that day). The slot renders nothing until BR-G29
// builds the card for the first real review: the text word for word, its date and its source link, no stars, no
// count or average, and no review or rating markup in any state.
//
// 2026-10-30 (offer-os gtm/seo-plan-2026-10 D13, D-129, audit CONT-6): the card is built, and the slot also sits on
// every offer and service page that shows a project list, after that list. With no `page` (the homes) it shows
// every review in src/data/reviews.ts. With a `page` it shows only the reviews whose `project` that page already
// links: WORK_DONE for the pages WorkDone renders on, and the S09 case study lines for /offers/sheet-to-app, read
// from its data file so the two cannot drift. No match, or no review at all, renders null, as before. Atlas gets no
// slot: it names no client (offer-os gtm/atlas AT-D19, seo-plan-2026-10 D-92). On every offer page the slot sits
// below the form, with the page's other body links: a Google review's card links off site. Each project page shows
// the reviews that name it through ReviewCard (ProjectPages.tsx), so reviews.ts is the one place a review lives.
//
// Each card: the text word for word in a blockquote; the author, and role and org where the entry has them; the
// date in the page's locale; for 'google' its source link; for 'video' the video and its transcript. Never stars,
// a count or an average, and never Review or AggregateRating JSON-LD or microdata. `consent` is not rendered.
//
// Server component, like WorkDone: the review and project data stay out of the browser bundle.

export type ReviewPage = WorkDonePage | 'offers/sheet-to-app';

const LINK_CLASS = 'font-medium text-primary-600 hover:underline dark:text-primary-400';

/** Every review, once its `project` is checked against the live projects. A wrong slug fails the build loudly,
 *  as WorkDone does, rather than dropping the review from its pages without a word. */
function checkedReviews(): readonly Review[] {
  for (const r of REVIEWS) {
    if (r.project && !projectBySlug(r.project)) throw new Error(`ReviewSlot: no live project ${r.project} in src/data/projects.ts`);
  }
  return REVIEWS;
}

/** The project slugs the sheet-to-app S09 case study lines link. Each href must be exactly a live project's page. */
function sheetToAppProjects(lang: Language): string[] {
  return sheetToApp.copy[lang].sections.flatMap((section) =>
    section.kind === 'content'
      ? section.blocks.flatMap((b) => {
          if (b.type !== 'caseStudy') return [];
          const slug = b.href.split('/').pop() ?? '';
          if (b.href !== `/${lang}/projects/${slug}` || !projectBySlug(slug)) {
            throw new Error(`ReviewSlot: sheet-to-app case study link ${b.href} is not a live project page`);
          }
          return [slug];
        })
      : [],
  );
}

/** The project slugs a page links as its work: WORK_DONE, or the sheet-to-app S09 case study links. */
function linkedProjects(page: ReviewPage, lang: Language): readonly string[] {
  if (page === 'offers/sheet-to-app') return sheetToAppProjects(lang);
  const slugs = WORK_DONE[page];
  if (!slugs) throw new Error(`ReviewSlot: no entry for ${page} in src/data/workDone.ts`);
  return slugs;
}

function reviewsFor(page: ReviewPage | undefined, lang: Language): readonly Review[] {
  const reviews = checkedReviews();
  if (!page) return reviews;
  const projects = linkedProjects(page, lang);
  return reviews.filter((r) => r.project !== undefined && projects.includes(r.project));
}

/** The reviews that name one project, for its own page (ProjectPages.tsx). */
export function reviewsOfProject(slug: string): readonly Review[] {
  return checkedReviews().filter((r) => r.project === slug);
}

/** One review card. Exported for the project pages, which show the reviews of their project. */
export function ReviewCard({review, lang}: {review: Review; lang: Language}) {
  const c = REVIEWS_COPY[lang];
  const who = [review.author, review.kind === 'quote' ? review.role : undefined, review.kind === 'google' ? undefined : review.org]
    .filter(Boolean)
    .join(', ');
  return (
    <figure className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8">
      {review.kind === 'video' ? (
        <>
          {/* Named by who speaks; the transcript under it carries the words, and `captions` adds a track when on file. */}
          <video controls preload="none" poster={review.poster} src={review.src} aria-label={who} className="w-full rounded-xl">
            {review.captions && <track kind="captions" src={review.captions} srcLang={lang} label={lang === 'el' ? 'Ελληνικά' : 'English'} default/>}
          </video>
          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">{c.transcript}</h3>
          <blockquote className="mt-2 whitespace-pre-line text-lg leading-8 text-gray-800 dark:text-gray-200">{review.transcript}</blockquote>
        </>
      ) : (
        <blockquote className="whitespace-pre-line text-lg leading-8 text-gray-800 dark:text-gray-200">{review.text}</blockquote>
      )}
      <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
        {who}, <time dateTime={review.date}>{formatIsoDate(review.date, lang)}</time>
        {review.kind === 'google' && (
          <>
            {', '}
            <a href={review.url} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
              {c.source}
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}

export default function ReviewSlot({language, page}: {language: Language; page?: ReviewPage}) {
  const reviews = reviewsFor(page, language);
  if (reviews.length === 0) return null;
  const c = REVIEWS_COPY[language];
  // The list is static and in file order, so the index keeps keys unique even when one author has two reviews
  // on the same day.
  const cards = (
    <div className="mt-6 grid gap-6">
      {reviews.map((r, i) => (
        <ReviewCard key={`${i}-${r.kind}-${r.date}`} review={r} lang={language}/>
      ))}
    </div>
  );

  // The homes: a home section, opened by SectionHeading like its neighbours (BR-D45). It takes the tint of
  // ProjectsGrid, which it follows, so it reads as the end of that band and HowWeWork stays the next white band.
  if (!page) {
    return (
      <section id="reviews" className={`bg-[#f7faff] dark:bg-gray-950 ${SECTION_PAD}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.label} heading={c.heading}/>
          <div className="max-w-3xl">{cards}</div>
        </div>
      </section>
    );
  }

  // An offer or service page: a border-top band like WorkDone, so it sits under the project list in any banding.
  // Each page renders the slot once, so the id is unique on it.
  return (
    <section id="reviews" className="border-t border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white md:text-3xl">{c.heading}</h2>
        {cards}
      </div>
    </section>
  );
}
