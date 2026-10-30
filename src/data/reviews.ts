import type {Language} from '@/types/language';

// The review slot of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §9,
// decision BR-D27). The placeholder card it held left both homepages on 2026-10-26 (BR-G25), his answer that day:
// "Remove this section from the website where you prompt people to give us a google review, makes no sense". So
// the list stays empty and the slot renders nothing until the first real review arrives with its date and source
// (BR-G29). A real review is shown word for word, never as a count or an average, and no state of this slot ever
// emits review or rating markup.
//
// 2026-10-30 (offer-os gtm/seo-plan-2026-10 D13, D-129, audit CONT-6): a review may name the `project` it is about,
// a slug of src/data/projects.ts. Both homes show every review. An offer or service page shows the reviews whose
// project is among the projects that page already links as its work (WORK_DONE in src/data/workDone.ts; for
// /offers/sheet-to-app, the case study lines of its S09). The project's own page, /[locale]/projects/<slug>, shows
// it too (ProjectPages.tsx reads this list; the `quote` field projects.ts carried for that left it the same day, so
// a review is recorded here and nowhere else). A review with no project shows on the homes only. So the first real
// review is one entry here, word for word with its date and source (BR-D27), and nothing else changes.
// Asking clients for reviews stays his (D-129, BR-D41, BR-D43); nobody writes an entry here for him.
//
// `consent` is the record of the client's yes. It is internal and never rendered. `project` is checked against the
// live projects when the site builds, and a slug that matches none fails the build. A video's `captions` is the
// path of its WebVTT file under public/, rendered as a captions track when set; the transcript shows either way.

export type Review =
  | {kind: 'google'; author: string; date: string; text: string; url: string; project?: string}
  | {kind: 'quote'; author: string; role: string; org: string; date: string; text: string; consent: string; project?: string}
  | {kind: 'video'; author: string; org: string; date: string; src: string; poster: string; transcript: string; captions?: string; consent: string; project?: string};

export const REVIEWS: readonly Review[] = [];

// The words of the slot, shown only once a review exists. Written 2026-10-30 in offer-os gtm/seo-plan-2026-10 D13;
// offer-os carries no copy row for them yet: `companies/fiji-solutions/site/03-copy-home.md` has none, so add a
// "Reviews" row there before changing them. They live here, not in HOME[lang].labels (src/data/home.ts), because
// home.ts holds only that contract's words and these are shown on the offer, service and project pages too.
// `label` is the small line over the home heading, like HOME[lang].labels; `source` is the link text of a Google
// review's source link; `transcript` heads a video's transcript.
export const REVIEWS_COPY: Record<Language, {label: string; heading: string; source: string; transcript: string}> = {
  en: {label: 'Reviews', heading: 'What clients say', source: 'Read it on Google', transcript: 'Transcript'},
  el: {label: 'Κριτικές', heading: 'Τι λένε οι πελάτες', source: 'Δες τη στο Google', transcript: 'Απομαγνητοφώνηση'},
};

/**
 * The Fiji Business Profile's own review link, kept on record; no page links it since 2026-10-26. Read 2026-10-22 in his Chrome from the profile's "Ask for
 * reviews" dialog (https://g.page/r/CZ45-PsVktkSEBM/review), which redirects to this place id. Written in the
 * same form as Peak Code's link.
 */
export const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJix6dwQk_qBQRnjn4-xWS2RI';
