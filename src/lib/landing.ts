// Routes that render as a single-goal landing page: the Navbar shows the logo and the theme toggle
// only, and the Vapi chat bubble does not load. Added 2026-09-30 (G19) for the sheet-to-app offer,
// whose record asks for one thing to do on the page (offer.yaml page.attention_ratio_notes).
//
// This list lives here, and Navbar imports it. Since 2026-10-08 (F16, F-D132) Navbar.tsx names one
// offer route, sheet-to-app, as its second link; CLAUDE.md's check allows that one and, since
// 2026-10-18 (offer-os gtm/atlas/DECISIONS.md AT-D8), the Atlas link after "Services", and no other.

// 2026-10-18: the two Atlas routes join, per offer-os offers/fiji-solutions--atlas/offer.yaml
// page.attention_ratio_notes (one destination, the application form).
export const LANDING_PATHS: readonly string[] = [
  '/en/offers/sheet-to-app',
  '/el/offers/sheet-to-app',
  '/en/offers/atlas',
  '/el/offers/atlas',
];

export function isLandingPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return LANDING_PATHS.includes(path);
}

// The two audit pages, where every call to action points at the page's own #consultation-form.
// Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G04, decision BR-D9).
export const AUDIT_PATHS: readonly string[] = ['/en/business-process-audit', '/el/business-process-audit'];

// True where the top banner and the navbar's "Book a free call" button do not render: the
// single-goal landing pages and the two audit pages (BR-D9). Each of those pages has one
// destination of its own, and a second booking link would compete with it.
export function isBookingPromptHiddenPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  if (isLandingPath(pathname)) return true;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return AUDIT_PATHS.includes(path);
}

// The two homepages hide the Vapi voice button in the hero and the Vapi chat bubble. Added
// 2026-09-30 (G20): the Vapi assistant behind both still pitches the process audit and its
// Pays-For-Itself Guarantee, and the homepage names one guarantee (offer-os D53). The offer's
// homepage contract, 03-copy-homepage.md (the hero.talk note, Findings 13), allows G20 to deploy
// with both hidden. Once G23's new assistant script is live in the Vapi dashboard, set
// HOMEPAGE_VOICE_ON to true and both come back on /en and /el.
// 2026-10-04: the new script is live (Vapi assistant version v5, which also hears and speaks Greek),
// so both are back on /en and /el.
// 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G04, PLAN.md §4.1 row 2): off again. The broad
// homepages describe six kinds of work, and the v5 script still pitches the sheet-to-app prototype.
// BR-G10 makes the script broad, test calls it, and sets this back to true.
// 2026-10-25 (BR-G10): the broad script is live (Vapi assistant version v7, offer-os
// companies/fiji-solutions/site/vapi-assistant-script.md), tested by text chat, so both are back on.
export const HOMEPAGE_VOICE_ON = true;

export const HOMEPAGE_PATHS: readonly string[] = ['/en', '/el'];

function normalisePath(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

// True where the chat bubble must not load: the single-goal landing pages always, and the two
// homepages while HOMEPAGE_VOICE_ON is false.
export function isChatSuppressedPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  if (isLandingPath(pathname)) return true;
  return !HOMEPAGE_VOICE_ON && HOMEPAGE_PATHS.includes(normalisePath(pathname));
}
