// The canonical Person node reference. ONE identifier, three repositories.
//
// ── WHAT WAS WRONG UNTIL 2026-09-02 ────────────────────────────────────────────────────────────
// Measured across this site and peakcodeconsulting.ch: 126 `Person` nodes over 94 pages, and not
// one carried an `@id`, a `url` or a `sameAs`. This site's fourteen Greek articles sign
// «Χαράλαμπος Μουταφίδης»; the other site's twelve German articles sign "Charalampos Moutafidis".
// With no shared identifier and no `alternateName`, a parser sees two unrelated people who happen
// to be spelled differently — and neither is connected to either company's `founder`.
//
// ── THE FIX ────────────────────────────────────────────────────────────────────────────────────
// One canonical `Person` node lives at `https://charismoutafidis.com/#person`, on a third site
// built for exactly this purpose. It carries all four name spellings in `alternateName`, the six
// profiles that already rank for his name in `sameAs`, and `worksFor` pointing at both companies'
// organisation `@id`s. Everywhere else — here, and in the Peak Code repo — emits the REFERENCE
// below instead of a bare name string.
//
// ⚠️ THE `@id` STRING MUST BE BYTE-IDENTICAL IN ALL THREE REPOSITORIES. It is what merges the
// nodes; a typo does not fail any build and produces two people again. The other two copies are:
//   charismoutafidis-com/src/config/site.ts        → PERSON_ID
//   peak-code-consulting/website/src/lib/person.ts → PERSON_ID
//
// ⚠️ DO NOT ADD `alternateName` OR `sameAs` HERE. A reference should carry the identifier and
// enough to find the authoritative node, and nothing else. Repeating the name variants in three
// places is how they drift; `url` is what a crawler follows to read the real one.

import type {Language} from '@/types/language';

export const PERSON_ID = 'https://charismoutafidis.com/#person';

export const PERSON_REF = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Charalampos Moutafidis',
  url: 'https://charismoutafidis.com/',
} as const;

/** This company's own node, so `worksFor` can reference it instead of inlining a duplicate.
 *  Every `worksFor` on this site used to be a fresh inline Organization object declaring
 *  `url: …/el` — a third Fiji node, competing with the real one. */
export const ORGANISATION_ID = 'https://www.fijisolutions.net/#organisation';

// ── THE BLOG AUTHOR (offer-os gtm/seo-plan-2026-10 B3, 2026-10-27) ──────────────────────────────
// Every post shows him as author (D-12), «Χάρης Μουταφίδης» on Greek posts (D-27), with the author
// box he approved word for word (D-28). BlogPost.tsx and blogSchema.ts read THIS, never
// `post.author`, so no post, old or new, can sign with another name or go unsigned.
// ⚠️ The box names only Fiji Solutions: this site never names or links the other company (D-11).
// `bioJoins`: the English bio continues the name's sentence; the Greek one is its own sentence.
export const BLOG_AUTHOR: Record<Language, {
  name: string;
  formalName: string;
  aboutHref: string;
  bio: string;
  bioJoins: boolean;
  moreLabel: string;
  moreHref: string;
}> = {
  en: {
    name: 'Charis Moutafidis',
    formalName: 'Charalampos Moutafidis',
    aboutHref: '/en/about',
    bio: 'is a software engineer with more than ten years of experience. He founded Fiji Solutions in Thessaloniki.',
    bioJoins: true,
    moreLabel: 'More about him on charismoutafidis.com',
    moreHref: 'https://charismoutafidis.com/',
  },
  el: {
    name: 'Χάρης Μουταφίδης',
    formalName: 'Χαράλαμπος Μουταφίδης',
    aboutHref: '/el/about',
    bio: 'Μηχανικός λογισμικού με πάνω από δέκα χρόνια εμπειρίας, ίδρυσε τη Fiji Solutions στη Θεσσαλονίκη.',
    bioJoins: false,
    moreLabel: 'Περισσότερα στο charismoutafidis.com',
    moreHref: 'https://charismoutafidis.com/el',
  },
};
