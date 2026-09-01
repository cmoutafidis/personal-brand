import type {Language} from '@/types/language';

// The blog's content model. Deliberately a typed block list rather than a string of HTML or
// markdown: an article here has headings, tables, source lists and an FAQ, and each of those is
// rendered AND fed to structured data from the same object. A string cannot do the second half.

/** A run of text. `href` makes it a link, `strong` makes it bold. Never both. */
export type BlogInline = string | {text: string; href?: string; strong?: boolean};

export interface BlogHeadingBlock {type: 'heading'; text: string}
export interface BlogSubheadingBlock {type: 'subheading'; text: string}
export interface BlogParagraphBlock {type: 'paragraph'; text: BlogInline[]}
export interface BlogListBlock {type: 'list'; ordered?: boolean; items: BlogInline[][]}
/** One cell is a run of inline text; a row is a list of cells. */
export type BlogCell = BlogInline[];
export interface BlogTableBlock {type: 'table'; caption: string; head: string[]; rows: BlogCell[][]}
export interface BlogNoteBlock {type: 'note'; text: BlogInline[]}
/** Rendered as a Q&A section AND emitted as FAQPage from this same array. Never write a second copy. */
export interface BlogFaqBlock {type: 'faq'; heading: string; items: {q: string; a: string}[]}
/** Rendered as a numbered source list AND emitted as schema.org `citation` from the same array. */
export interface BlogSourcesBlock {type: 'sources'; heading: string; items: {label: string; url: string}[]}
export interface BlogCtaBlock {type: 'cta'; heading: string; text: string; label: string; href: string}

export type BlogBlock =
  | BlogHeadingBlock | BlogSubheadingBlock | BlogParagraphBlock | BlogListBlock
  | BlogTableBlock | BlogNoteBlock | BlogFaqBlock | BlogSourcesBlock | BlogCtaBlock;

export interface BlogPost {
  id: string;
  slug: string;
  /** The page's only <h1>. Body blocks emit h2/h3 only. */
  title: string;
  /** <= ~60 characters. Falls back to `${title} | Fiji Solutions`. */
  metaTitle?: string;
  /** Also the meta description and the card text. Keep under ~155 characters. */
  excerpt: string;
  body: BlogBlock[];
  author?: string;
  publishedAt: string;
  /**
   * The day every fact was last checked against its source. Rendered visibly and emitted as
   * JSON-LD dateModified. Bump it on every factual edit.
   */
  updatedAt?: string;
  readingTime: number;
  tags: string[];
  /** The other locale's slug, when a translation exists. Absent => hreflang is self-referencing. */
  twinSlug?: string;
}

export type BlogData = Record<Language, BlogPost[]>;
