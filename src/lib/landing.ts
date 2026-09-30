// Routes that render as a single-goal landing page: the Navbar shows the logo and the theme toggle
// only, and the Vapi chat bubble does not load. Added 2026-09-30 (G19) for the sheet-to-app offer,
// whose record asks for one thing to do on the page (offer.yaml page.attention_ratio_notes).
//
// This list lives here, and Navbar imports it, so Navbar.tsx itself never names an offer route:
// CLAUDE.md's grep over the navigation files must keep printing nothing.

export const LANDING_PATHS: readonly string[] = ['/en/offers/sheet-to-app', '/el/offers/sheet-to-app'];

export function isLandingPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return LANDING_PATHS.includes(path);
}
