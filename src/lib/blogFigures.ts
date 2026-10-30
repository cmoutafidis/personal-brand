import figures from '@/data/blog-figures.json';
import type {Language} from '@/types/language';

// 2026-10-30 (offer-os gtm/seo-plan-2026-10 D10, AI-4, IMG-6): the diagrams a post can show. A post names one by
// id, as its `hero` (shown under the title, D-116) or in a `figure` block; everything else about it lives once,
// here, in src/data/blog-figures.json:
//   lang      the locale its words are in; a post shows only figures of its own locale
//   width, height   the pixel size of public/blog/figures/<id>.webp (written by the plan's d10-render.py)
//   alt       what the diagram shows, for a reader who cannot see it
//   caption   the line printed under it
//   use       when a post may show it, for the SEO loop's writer (offer-os gtm/seo-loop-2026-10 rules/writer.md)
// A hero also has public/blog/figures/<id>.og.jpg, the diagram on a 1200x630 card: the post's share image and the
// first Article image. The SVG source of each is design/blog-figures/<id>.svg. scripts/seo-content-check.py refuses
// an id that is not in the JSON, and the loop's gate refuses one of another locale.

export interface BlogFigure {
  lang: Language;
  width: number;
  height: number;
  alt: string;
  caption: string;
  use: string;
}

const FIGURES = figures as Record<string, BlogFigure>;

const SITE = 'https://www.fijisolutions.net';

export const figureSrc = (id: string) => `/blog/figures/${id}.webp`;
/** The share card of a hero figure, 1200x630. */
export const figureCard = (id: string) => `${SITE}/blog/figures/${id}.og.jpg`;

/** The figure of this id. Throws on an unknown id, so a typo fails the build instead of shipping a broken image. */
export function blogFigure(id: string): BlogFigure {
  const f = FIGURES[id];
  if (!f) throw new Error(`blog figure "${id}" is not in src/data/blog-figures.json`);
  return f;
}

/** The figure as a schema.org ImageObject, for an Article's `image`. */
export function figureImage(id: string) {
  const f = blogFigure(id);
  return {'@type': 'ImageObject', url: `${SITE}${figureSrc(id)}`, width: f.width, height: f.height, caption: f.alt};
}
