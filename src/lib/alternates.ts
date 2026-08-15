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
