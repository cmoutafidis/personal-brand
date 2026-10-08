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

  // The blog does not go through ROUTES, because ROUTES emits every path in BOTH locales and the
  // blog is not symmetrical: blogData.el has posts, blogData.en is empty and /en/blog is noindex.
  // Listing an English post URL that does not exist is the failure this file was rewritten to stop.
  for (const post of blogData.el) {
    entries.push({
      url: `${SITE}/el/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  entries.push({
    url: `${SITE}/el/blog`,
    lastModified: '2026-09-01',
    changeFrequency: 'weekly',
    priority: 0.6,
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
