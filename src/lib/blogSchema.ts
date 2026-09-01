import type {Metadata} from 'next';
import type {Language} from '@/types/language';
import type {BlogFaqBlock, BlogPost, BlogSourcesBlock} from '@/types/blog';

// Metadata and JSON-LD for blog posts, derived from the post object the page renders.
//
// Same reason as offerSchema.ts and lib/alternates.ts: a hand-written canonical is a chance to
// point at the wrong locale, and a hand-written FAQ schema is a chance to drift from the rendered
// FAQ. Both come from one place here.
//
// ⚠️ Unlike buildAlternates(), this does NOT emit both locales unconditionally. A post with no
// translation gets a self-referencing hreflang set: claiming an `en` twin that does not exist
// points Google at a URL that 404s.
// ⛔ No price anywhere, in copy or structured data (CLAUDE.md rule 7). No rating, no review.

const SITE = 'https://www.fijisolutions.net';

export function blogPostUrl(slug: string, lang: Language): string {
  return `${SITE}/${lang}/blog/${slug}`;
}

export function buildBlogPostMetadata(post: BlogPost, lang: Language): Metadata {
  const url = blogPostUrl(post.slug, lang);
  const title = post.metaTitle ?? `${post.title} | Fiji Solutions`;

  const languages: Record<string, string> = post.twinSlug
    ? {
      el: blogPostUrl(lang === 'el' ? post.slug : post.twinSlug, 'el'),
      en: blogPostUrl(lang === 'en' ? post.slug : post.twinSlug, 'en'),
      'x-default': blogPostUrl(lang === 'en' ? post.slug : post.twinSlug, 'en'),
    }
    : {[lang]: url, 'x-default': url};

  return {
    title,
    description: post.excerpt,
    keywords: `${post.tags.join(', ')}, Fiji Solutions`,
    authors: [{name: post.author ?? 'Fiji Solutions'}],
    alternates: {canonical: url, languages},
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.excerpt,
      locale: lang === 'el' ? 'el_GR' : 'en_US',
      siteName: 'Fiji Solutions',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      tags: post.tags,
      images: [{url: `${SITE}/fijisolutions.png`, width: 1200, height: 630, alt: post.title}],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@fiji_solutions',
      title: post.title,
      description: post.excerpt,
      images: [`${SITE}/fijisolutions.png`],
    },
  };
}

export function blogPostSchema(post: BlogPost, lang: Language) {
  const url = blogPostUrl(post.slug, lang);
  const faq = post.body.find((b): b is BlogFaqBlock => b.type === 'faq');
  const sources = post.body.find((b): b is BlogSourcesBlock => b.type === 'sources');
  const publisher = {
    '@type': 'Organization',
    name: 'Fiji Solutions',
    url: `${SITE}/${lang}`,
    logo: {'@type': 'ImageObject', url: `${SITE}/fijisolutions.png`},
  };

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      url,
      mainEntityOfPage: {'@type': 'WebPage', '@id': url},
      inLanguage: lang,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      author: post.author ? {'@type': 'Person', name: post.author, worksFor: publisher} : publisher,
      publisher,
      keywords: post.tags.join(', '),
      articleSection: post.tags[0],
      isAccessibleForFree: true,
      ...(sources
        ? {citation: sources.items.map((s) => ({'@type': 'CreativeWork', name: s.label, url: s.url}))}
        : {}),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {'@type': 'ListItem', position: 1, name: lang === 'el' ? 'Αρχική' : 'Home', item: `${SITE}/${lang}`},
        {'@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/${lang}/blog`},
        {'@type': 'ListItem', position: 3, name: post.title, item: url},
      ],
    },
  ];

  if (faq) {
    graph.push({
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {'@type': 'Answer', text: item.a},
      })),
    });
  }

  return {'@context': 'https://schema.org', '@graph': graph};
}
