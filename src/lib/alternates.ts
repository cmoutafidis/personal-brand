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
    languages: hreflangMap(path),
  };
}

/**
 * The hreflang map for one route: both locales, plus x-default.
 *
 * ⚠️ EXPORTED SO THE SITEMAP USES THE SAME MAP THE PAGES USE. Until 2026-09-03 `src/app/sitemap.ts`
 * built its own, with `{en, el}` and nothing else, so every page published three hreflang values
 * and the sitemap published two for the same URL, with x-default missing on all 34 route entries.
 * ⚠️ CORRECTED 2026-09-06. This used to cite a sentence in the header of
 * `charismoutafidis-com/src/app/sitemap.ts` recording the defect. That sentence is not in that
 * file and a grep of that repo does not find it, so the citation sent a reader chasing nothing.
 * The substantive point stands and is the reason this function is exported: the map lived in two
 * places, neither could contradict the other inside one repo, and nothing here could go red.
 * `scripts/hreflang-reciprocity.py` now walks the BUILD in all three repos for exactly this.
 * One function now, called from both places.
 *
 * x-default is `en` because English is what this site serves a reader whose language matches
 * neither, and because the root redirects to /en.
 */
export function hreflangMap(path: string): Record<string, string> {
  return {
    en: `${SITE}/en${path}`,
    el: `${SITE}/el${path}`,
    'x-default': `${SITE}/en${path}`,
  };
}
