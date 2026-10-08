import type {MetadataRoute} from 'next';

// The route list the sitemap is generated from, moved here from src/app/sitemap.ts on 2026-10-08
// (F17 of offer-os gtm/followups-and-search) so a page can read its own lastmod. The sheet-to-app
// pages print it as their visible "Updated" date and emit it as `dateModified`, so the sitemap,
// the page and the JSON-LD state one date.

// The eight /offers/* routes were Google Ads landing pages until Ads was dropped on 2026-09-01;
// organic search is now the whole route to them, which is why they stopped being orphans that day.
// They are absent from the footer and QuickLinks, and the navbar links one of them, sheet-to-app
// (2026-10-08, F16, F-D132). They are linked from the BODY of their parent service page, from each
// other, and (the two website offers) from the audit page and the homepage. The whole graph is
// src/data/offerLinks.ts. They belong here anyway: a
// page that is indexable but missing from the sitemap is a page you are half publishing. Priority
// sits below the audit page. Since 2026-09-30 (G20, D5) the homepage leads with the sheet-to-app
// offer, links /offers/sheet-to-app in its body, and the audit page sells the audit.
// ⚠️ lastmod IS HAND-MAINTAINED PER ROUTE. Bump the ONE line you actually changed.
//
// Until 2026-09-01 this file computed `const now = new Date()` and stamped it on all 34 entries,
// so every URL claimed to have changed at the same instant, and again on the very next deploy,
// whether or not a word had moved. Google uses lastmod only when it is "consistently and
// verifiably accurate"; a sitemap that reports 34 simultaneous changes per deploy is how the
// field gets ignored for the whole site. That matters here specifically: five URLs sit in
// "discovered - currently not indexed", which is the bucket for pages Google knows about from
// the sitemap and has not judged worth fetching, and an untrustworthy lastmod removes the one
// signal that would change its mind.
//
// The seed dates below are the real last content change, read from git rather than guessed.
// The page content lives in components, so the date is the component's, not the route
// file's: the homepage and the audit page both move with 73ec38d (2026-08-30), not with their
// own page.tsx.
export const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; lastmod: string }[] = [
  // 2026-09-30 (G20): both homepages became the sheet-to-app hook. Deployed 2026-10-04, so lastmod is that date.
  {path: '', priority: 1.0, changeFrequency: 'weekly', lastmod: '2026-10-04'},
  // 2026-09-30 (G19): /business-process-audit gained its body link to sheet-to-app, and
  // software-prototype's sibling link now points there. /offers/app-prototype is retired and
  // redirects to /offers/sheet-to-app (next.config.ts), so its row is gone. Set the sheet-to-app
  // lastmod to the deploy date if the deploy lands on a later day.
  {path: '/business-process-audit', priority: 0.9, changeFrequency: 'weekly', lastmod: '2026-09-30'},
  // 2026-10-08 (F16): S09 names PAP Center and New Era Learning, the FAQ gains the US line.
  {path: '/offers/sheet-to-app', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-10-08'},
  {path: '/offers/software-prototype', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-09-30'},
  {path: '/offers/ai-prototype', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-09-01'},
  {path: '/offers/process-automation', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-09-01'},
  {path: '/offers/ai-agent', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-10-08'},
  {path: '/offers/ai-development-sprint', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-09-01'},
  {path: '/offers/website-seo', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-09-03'},
  {path: '/offers/website-google-ads', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-09-03'},
  {path: '/portfolio', priority: 0.8, changeFrequency: 'monthly', lastmod: '2026-10-08'},
  // 2026-10-08 (F16, F-D130): the about page, for a lead who checks who sent the email.
  {path: '/about', priority: 0.6, changeFrequency: 'monthly', lastmod: '2026-10-08'},
  {path: '/services/custom-software-development-greece', priority: 0.8, changeFrequency: 'monthly', lastmod: '2026-09-30'},
  {path: '/services/data-analysis-greece', priority: 0.8, changeFrequency: 'monthly', lastmod: '2026-09-03'},
  {path: '/services/snowflake-consulting-greece', priority: 0.8, changeFrequency: 'monthly', lastmod: '2026-09-03'},
  {path: '/contact', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-10-08'},
  {path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly', lastmod: '2026-10-08'},
  {path: '/legal', priority: 0.3, changeFrequency: 'yearly', lastmod: '2026-08-15'},
];

/** The sitemap lastmod of a route path such as '/offers/sheet-to-app'. A path missing from ROUTES is a build error. */
export function routeLastmod(path: string): string {
  const route = ROUTES.find((r) => r.path === path);
  if (!route) throw new Error(`routeLastmod: ${path} is not in ROUTES`);
  return route.lastmod;
}
