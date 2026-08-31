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
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  {path: '', priority: 1.0, changeFrequency: 'weekly'},
  {path: '/business-process-audit', priority: 0.9, changeFrequency: 'weekly'},
  {path: '/offers/app-prototype', priority: 0.7, changeFrequency: 'monthly'},
  {path: '/offers/software-prototype', priority: 0.7, changeFrequency: 'monthly'},
  {path: '/offers/ai-prototype', priority: 0.7, changeFrequency: 'monthly'},
  {path: '/offers/process-automation', priority: 0.7, changeFrequency: 'monthly'},
  {path: '/offers/ai-agent', priority: 0.7, changeFrequency: 'monthly'},
  {path: '/offers/ai-development-sprint', priority: 0.7, changeFrequency: 'monthly'},
  {path: '/offers/website-seo', priority: 0.7, changeFrequency: 'monthly'},
  {path: '/offers/website-google-ads', priority: 0.7, changeFrequency: 'monthly'},
  {path: '/portfolio', priority: 0.8, changeFrequency: 'monthly'},
  {path: '/services/custom-software-development-greece', priority: 0.8, changeFrequency: 'monthly'},
  {path: '/services/data-analysis-greece', priority: 0.8, changeFrequency: 'monthly'},
  {path: '/services/snowflake-consulting-greece', priority: 0.8, changeFrequency: 'monthly'},
  {path: '/contact', priority: 0.7, changeFrequency: 'monthly'},
  {path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly'},
  {path: '/legal', priority: 0.3, changeFrequency: 'yearly'},
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const r of ROUTES) {
    for (const lang of ['en', 'el'] as const) {
      entries.push({
        url: `${SITE}/${lang}${r.path}`,
        lastModified: now,
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
