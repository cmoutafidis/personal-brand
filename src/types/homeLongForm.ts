import type {BlogInline} from '@/types/blog';
import type {Language} from '@/types/language';

// The long-form block at the bottom of the home page.
//
// ⚠️ IT IS VISIBLE, NOT COLLAPSED, AND THAT IS A MEASURED DECISION RATHER THAN A STYLE ONE.
// peakcodeconsulting.ch ships a CSS-collapsed disclosure block, and copying it here would be wrong:
// that block exists to resolve an arithmetic impossibility — a visible-word ceiling locked at
// 800–1,200 against a skeleton that is 2,890 words at its minimums. This site has the OPPOSITE
// problem (770 rendered words against Peak Code's 3,047) and no ceiling recorded anywhere, and
// every site in the 17-site comparison sample that ships long-form bottom content leaves it
// visible. Position audit 2026-09-02, §9 item 18.
//
// `BlogInline` is reused deliberately rather than a new paragraph type invented: it is already the
// repo's way of writing a run of text with a link inside it, and inline contextual links are the
// whole point of this block. It is the internal-linking surface for the fourteen Greek articles and
// for /services/custom-software-development-greece and /services/data-analysis-greece, which are in
// neither the navigation nor the footer.

export interface LongFormSection {
  /** Stable kebab-case id. The React key — never the copy, which two locales can duplicate. */
  id: string;
  heading: string;
  paragraphs: BlogInline[][];
}

export interface LongFormFaq {
  id: string;
  q: string;
  a: string;
}

export interface HomeLongFormCopy {
  heading: string;
  intro: BlogInline[];
  sections: LongFormSection[];
  faqHeading: string;
  /** Rendered AND emitted as FAQPage from this same array — the home page has no FAQPage today,
   *  while Peak Code's does. Never write a second copy. */
  faqs: LongFormFaq[];
}

export type HomeLongForm = Record<Language, HomeLongFormCopy>;
