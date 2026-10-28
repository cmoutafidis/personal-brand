import type {MetadataRoute} from 'next';
import {blogData} from '@/data/blogs';
import {hreflangMap} from '@/lib/alternates';
import {ROUTES} from '@/lib/routes';

// Generated, not hand-maintained.
//
// public/sitemap.xml was written by hand and had drifted: /en/blog carried lastmod 2025-01-30
// while the posts it listed were published in September and November 2025, twelve of twenty
// entries pointed x-default at a URL that 301s, and both privacy-policy pages were missing
// entirely while every page loaded an advertising tag. Deriving it from the route list means a
// route and its sitemap entry can no longer disagree.

const SITE = 'https://www.fijisolutions.net';

// The route list, with its lastmod rules, lives in src/lib/routes.ts since 2026-10-08 (F17).


export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // The blog does not go through ROUTES, because ROUTES emits every path in BOTH locales and a post
  // exists in one locale only. Each post is listed under its own locale, with NO hreflang annotation:
  // a post has no cross-locale twin, so its page declares a self-referential set and the parity gate
  // reads "sitemap silent, page self-referential" as agreement. Since 2026-10-12 blogData.en carries
  // the two English answer articles (F20 of offer-os gtm/followups-and-search), so the English posts
  // and the /en/blog index are listed too. Listing a URL that does not exist is still the failure this
  // file guards against, so both loops are driven by the real post lists.
  for (const post of blogData.el) {
    entries.push({
      url: `${SITE}/el/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  for (const post of blogData.en) {
    entries.push({
      url: `${SITE}/en/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  // 2026-10-28 (offer-os gtm/seo-plan-2026-10 C1, TECH-4): each index's lastmod is the newest post date across BOTH
  // locales, since each index is one page in two languages. They were fixed strings ('2026-09-01', '2026-10-12') and
  // fell behind every post the blog loop added.
  const newestPost = [...blogData.el, ...blogData.en]
    .map((p) => p.updatedAt ?? p.publishedAt)
    .reduce((a, b) => (b > a ? b : a));
  // The two blog index pages ARE twins and use buildAlternates('/blog', ...), so each page head declares
  // en, el and x-default. These sitemap entries carry the same map, or the parity gate goes red on a set
  // mismatch. hreflangMap is already the one shared source the ROUTES loop below uses.
  entries.push({
    url: `${SITE}/el/blog`,
    lastModified: newestPost,
    changeFrequency: 'weekly',
    priority: 0.6,
    alternates: {languages: hreflangMap('/blog')},
  });
  entries.push({
    url: `${SITE}/en/blog`,
    lastModified: newestPost,
    changeFrequency: 'weekly',
    priority: 0.6,
    alternates: {languages: hreflangMap('/blog')},
  });

  for (const r of ROUTES) {
    for (const lang of ['en', 'el'] as const) {
      entries.push({
        url: `${SITE}/${lang}${r.path}`,
        lastModified: r.lastmod,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
        // ⚠️ THIS USED TO BE A SECOND COPY OF THE MAP and the copy was short one value: it listed
        // en and el and omitted x-default, so every page published three hreflang values and the
        // sitemap published two for the same URL, on all 34 route entries. Call the shared
        // function; do not rebuild the map here.
        alternates: {
          languages: hreflangMap(r.path),
        },
      });
    }
  }

  return entries;
}
