// The review slot of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §9,
// decision BR-D27). Until a real review arrives (BR-G29) the slot is one honest placeholder: no stars, no
// quote, no avatar. A real review is shown word for word with its date and source link, never as a count or
// an average, and no state of this slot ever emits review or rating markup.

export type Review =
  | {kind: 'placeholder'}
  | {kind: 'google'; author: string; date: string; text: string; url: string}
  | {kind: 'quote'; author: string; role: string; org: string; date: string; text: string; consent: string}
  | {kind: 'video'; author: string; org: string; date: string; src: string; poster: string; transcript: string; consent: string};

export const REVIEWS: readonly Review[] = [{kind: 'placeholder'}];

/**
 * The Fiji Business Profile's own review link. Read 2026-10-22 in his Chrome from the profile's "Ask for
 * reviews" dialog (https://g.page/r/CZ45-PsVktkSEBM/review), which redirects to this place id. Written in the
 * same form as Peak Code's link.
 */
export const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJix6dwQk_qBQRnjn4-xWS2RI';
