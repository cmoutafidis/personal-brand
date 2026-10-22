// The one booking link on this site: the 30-minute Calendly event every "Book a call" link opens.
//
// Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G04, PLAN.md §4.5). Until then the same URL
// was typed twice, as CALENDLY_URL in src/components/AuditFormSection.tsx and as
// SHEET_TO_APP_BOOKING_URL in src/data/offers/sheet-to-app.ts. Both names stay, as aliases of this
// constant, so their callers did not change. Change the event here and every link follows.
//
// The event keeps its title and description until the broad home ships (BR-G08), since the live
// sheet-to-app and audit pages and the outreach emails share it. Its slots are fitted to his hours
// in BR-G24a. No hours are published on the site.
//
// This module imports nothing, so data files that sitemap.ts and offerLinks.ts load can import it.
export const BOOKING_URL = 'https://calendly.com/charis-fijisolutions/30min';

/** The link as visible text, without the scheme (the About page prints it). */
export const BOOKING_URL_TEXT = BOOKING_URL.replace(/^https:\/\//, '');
