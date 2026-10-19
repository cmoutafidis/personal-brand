// The one serializer for every application/ld+json script on this site (offer-os
// gtm/seo-loop-2026-10, S08, approved 2026-10-19).
//
// WHY. JSON.stringify leaves "<" as it is, and a script body ends at the first "</script" the HTML
// parser meets. Blog posts are now written and merged by an automated loop with nobody reading them
// first, so a post title holding "</script>" would close the tag and put the rest of the title onto
// the live page as markup. Every "<", ">" and "&" is written here as its JSON escape sequence, and
// so are U+2028 and U+2029, which older JavaScript parsers read as line breaks. JSON.parse of the
// output equals the input, so a crawler reads exactly the same structured data.
//
// scripts/jsonld-escape-check.py fails the build of any page whose JSON-LD is serialized any other
// way, and fails any built page whose JSON-LD body holds a literal "<".

const ESCAPES: Record<string, string> = {
  '<': '\\u003c',
  '>': '\\u003e',
  '&': '\\u0026',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (c) => ESCAPES[c]);
}
