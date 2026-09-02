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
