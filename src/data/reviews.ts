// The review slot of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §9,
// decision BR-D27). The placeholder card it held left both homepages on 2026-10-26 (BR-G25), his answer that day:
// "Remove this section from the website where you prompt people to give us a google review, makes no sense". So
// the list stays empty and the slot renders nothing until the first real review arrives with its date and source
// (BR-G29). A real review is shown word for word, never as a count or an average, and no state of this slot ever
// emits review or rating markup.

export type Review =
  | {kind: 'google'; author: string; date: string; text: string; url: string}
  | {kind: 'quote'; author: string; role: string; org: string; date: string; text: string; consent: string}
  | {kind: 'video'; author: string; org: string; date: string; src: string; poster: string; transcript: string; consent: string};

export const REVIEWS: readonly Review[] = [];

/**
 * The Fiji Business Profile's own review link, kept on record; no page links it since 2026-10-26. Read 2026-10-22 in his Chrome from the profile's "Ask for
 * reviews" dialog (https://g.page/r/CZ45-PsVktkSEBM/review), which redirects to this place id. Written in the
 * same form as Peak Code's link.
 */
export const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJix6dwQk_qBQRnjn4-xWS2RI';
