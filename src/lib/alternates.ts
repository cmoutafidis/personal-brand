import type {Metadata} from 'next';
import {Language} from '@/types/language';

const SITE = 'https://www.fijisolutions.net';

/**
 * Canonical + the full hreflang map, together, always.
 *
 * Next merges `metadata` shallowly per key, so a page that declares
 * `alternates: { canonical }` REPLACES the layout's alternates object wholesale and silently
 * deletes the hreflang map. Six of nine page pairs had lost their hreflang that way before
 * 2026-08-15. Never write a bare `canonical` again — call this instead.
 *
 * @param path route below the locale, with a leading slash and no trailing slash. '' for the home page.
 */
export function buildAlternates(path: string, lang: Language = 'en'): Metadata['alternates'] {
  const en = `${SITE}/en${path}`;
  const el = `${SITE}/el${path}`;
  return {
    canonical: lang === 'el' ? el : en,
    languages: {
      en,
      el,
      'x-default': en,
    },
  };
}

/**
 * Blog posts are the one place the two locales do not share a slug, so the hreflang pair has to be
 * resolved through the post id rather than the path. Falls back to the blog index in the other
 * locale when a post has no translation, which is better than claiming a URL that 404s.
 */
export function buildBlogAlternates(
  lang: Language,
  slug: string,
  byLang: Record<Language, { id: string | number; slug: string }[]>,
): Metadata['alternates'] {
  const here = byLang[lang]?.find((p) => p.slug === slug);
  const other: Language = lang === 'en' ? 'el' : 'en';
  const twin = here ? byLang[other]?.find((p) => p.id === here.id) : undefined;

  const selfUrl = `${SITE}/${lang}/blog/${slug}`;
  const otherUrl = twin ? `${SITE}/${other}/blog/${twin.slug}` : `${SITE}/${other}/blog`;

  return {
    canonical: selfUrl,
    languages: {
      [lang]: selfUrl,
      [other]: otherUrl,
      'x-default': lang === 'en' ? selfUrl : otherUrl,
    },
  };
}
