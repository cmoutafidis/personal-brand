import type {MetadataRoute} from 'next';

// Generated, not hand-maintained.
//
// public/sitemap.xml was written by hand and had drifted: /en/blog carried lastmod 2025-01-30
// while the posts it listed were published in September and November 2025, twelve of twenty
// entries pointed x-default at a URL that 301s, and both privacy-policy pages were missing
// entirely while every page loaded an advertising tag. Deriving it from the route list means a
// route and its sitemap entry can no longer disagree.

const SITE = 'https://www.fijisolutions.net';

// The eight /offers/* routes are Google Ads landing pages. They are deliberately absent from the
// navigation and from every internal link list except the one back-link on each page. They belong
// here anyway: a page that is indexable but missing from the sitemap is a page you are half
// publishing, and organic search finds these too. Priority sits below the audit page, which is
// still the offer the site leads with.
// ⚠️ lastmod IS HAND-MAINTAINED PER ROUTE. Bump the ONE line you actually changed.
//
// Until 2026-09-01 this file computed `const now = new Date()` and stamped it on all 34 entries,
// so every URL claimed to have changed at the same instant — and again on the very next deploy,
// whether or not a word had moved. Google uses lastmod only when it is "consistently and
// verifiably accurate"; a sitemap that reports 34 simultaneous changes per deploy is how the
// field gets ignored for the whole site. That matters here specifically: five URLs sit in
// "discovered - currently not indexed", which is the bucket for pages Google knows about from
// the sitemap and has not judged worth fetching, and an untrustworthy lastmod removes the one
// signal that would change its mind.
//
// The seed dates below are the real last content change, read from git rather than guessed —
// note the page content lives in components, so the date is the component's, not the route
// file's: the homepage and the audit page both move with 73ec38d (2026-08-30), not with their
// own page.tsx.
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; lastmod: string }[] = [
  {path: '', priority: 1.0, changeFrequency: 'weekly', lastmod: '2026-08-30'},
  {path: '/business-process-audit', priority: 0.9, changeFrequency: 'weekly', lastmod: '2026-08-30'},
  {path: '/offers/app-prototype', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-31'},
  {path: '/offers/software-prototype', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-31'},
  {path: '/offers/ai-prototype', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-31'},
  {path: '/offers/process-automation', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-31'},
  {path: '/offers/ai-agent', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-31'},
  {path: '/offers/ai-development-sprint', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-31'},
  {path: '/offers/website-seo', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-31'},
  {path: '/offers/website-google-ads', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-31'},
  {path: '/portfolio', priority: 0.8, changeFrequency: 'monthly', lastmod: '2026-08-30'},
  {path: '/services/custom-software-development-greece', priority: 0.8, changeFrequency: 'monthly', lastmod: '2026-08-17'},
  {path: '/services/data-analysis-greece', priority: 0.8, changeFrequency: 'monthly', lastmod: '2026-08-17'},
  {path: '/services/snowflake-consulting-greece', priority: 0.8, changeFrequency: 'monthly', lastmod: '2026-08-17'},
  {path: '/contact', priority: 0.7, changeFrequency: 'monthly', lastmod: '2026-08-15'},
  {path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly', lastmod: '2026-08-15'},
  {path: '/legal', priority: 0.3, changeFrequency: 'yearly', lastmod: '2026-08-15'},
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const r of ROUTES) {
    for (const lang of ['en', 'el'] as const) {
      entries.push({
        url: `${SITE}/${lang}${r.path}`,
        lastModified: r.lastmod,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
        alternates: {
          languages: {
            en: `${SITE}/en${r.path}`,
            el: `${SITE}/el${r.path}`,
          },
        },
      });
    }
  }

  return entries;
}
