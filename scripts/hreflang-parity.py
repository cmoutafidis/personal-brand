#!/usr/bin/env python3
"""The sitemap and the pages must declare the SAME hreflang set for the same URL.

WHY THIS EXISTS
===============

Until 2026-09-03 src/app/sitemap.ts built its own copy of the hreflang map, `{en, el}`, and stopped
there. Every page published three values and the sitemap published two for the same URL, with
x-default missing on all 34 route entries. Nothing was red anywhere: the sitemap parsed, Search
Console reported Success, the pages were correct, and the two files never met.

The defect was already known and written down. charismoutafidis-com/src/app/sitemap.ts says in its
own header: "The sibling site publishes two hreflang sets that differ — its sitemap omits x-default
while its pages emit one." This site is that sibling. The observation lived in a different repo
with a different remote, so it could not go red here and it survived for as long as nobody
happened to read that file. Both files now call one exported hreflangMap(). This asserts the
result from outside, on the built artifact, where a future divergence would actually show.

⚠️ CASE MATTERS AND IS THE REASON THIS IS NOT A ONE-LINE grep. Next emits the React prop name
`hrefLang` in page HTML while the sitemap's xhtml:link uses the lowercase HTML attribute. A
case-sensitive grep over the pages returns zero and reports a site with perfect hreflang as having
none. Both sides are lowercased before comparing.

⚠️ THE BLOG IS EXCLUDED ON PURPOSE. blogData.en is empty, /en/blog is noindex, and no Greek post
has an English twin, so a blog URL has no second locale to declare. Listing one would be the
failure sitemap.ts was rewritten to stop.

USAGE
    npm run build && python3 scripts/hreflang-parity.py
    python3 scripts/hreflang-parity.py --selftest
"""

import pathlib
import re
import sys

SITE = 'https://www.fijisolutions.net'


def langs(html):
    """The lowercased hreflang values a document declares, as a set."""
    return {v.lower() for v in re.findall(r'hreflang="([^"]*)"', html, re.I)}


def sitemap_blocks(text):
    """(loc, hreflang set) per <url> block."""
    out = {}
    for block in re.findall(r'<url>(.*?)</url>', text, re.S):
        loc = re.search(r'<loc>([^<]+)</loc>', block)
        if loc:
            out[loc.group(1)] = langs(block)
    return out


def page_html(root, url):
    path = url[len(SITE):].strip('/')
    base = pathlib.Path(root) / '.next' / 'server' / 'app'
    for candidate in (base / f'{path}.html', base / path / 'index.html'):
        if candidate.exists():
            return candidate.read_text(encoding='utf-8', errors='replace')
    return None


def check(root='.'):
    sm = pathlib.Path(root) / '.next' / 'server' / 'app' / 'sitemap.xml.body'
    if not sm.exists():
        print('  x .next/server/app/sitemap.xml.body is missing. Run `npm run build` first.')
        print('    Comparing two empty sets is exactly the silent pass this file exists to stop.')
        return 2
    blocks = sitemap_blocks(sm.read_text(encoding='utf-8'))
    if not blocks:
        print('  x the built sitemap declared no <url> block at all. Refusing to compare nothing.')
        return 2

    fail = 0
    compared = 0
    skipped_blog = 0
    for url, sm_langs in sorted(blocks.items()):
        if '/blog' in url:
            skipped_blog += 1
            continue
        html = page_html(root, url)
        if html is None:
            print(f'  x the sitemap lists {url} and the build produced no HTML for it')
            fail += 1
            continue
        pg_langs = langs(html)
        compared += 1
        if not pg_langs:
            print(f'  x {url}: the built page declares no hreflang at all')
            fail += 1
        elif pg_langs != sm_langs:
            print(f'  x {url}')
            print(f'      page   : {sorted(pg_langs)}')
            print(f'      sitemap: {sorted(sm_langs)}')
            fail += 1

    if compared == 0:
        print('  x nothing was compared, so this run proves nothing.')
        fail += 1

    print(f'\n{compared} URLs compared, {skipped_blog} blog URLs skipped (no second locale exists).')
    print('PAGES AND SITEMAP DECLARE THE SAME HREFLANG' if not fail else f'{fail} PROBLEM(S)')
    return 1 if fail else 0


def selftest():
    global langs
    original = langs
    fixtures = [
        ('lowercase attribute, as the sitemap writes it',
         '<xhtml:link rel="alternate" hreflang="x-default" href="u"/>', {'x-default'}),
        ('React prop casing, as Next writes it in a page',
         '<link rel="alternate" hrefLang="x-default" href="u"/>', {'x-default'}),
        ('three values collapse to a set',
         '<a hrefLang="en"/><a hrefLang="el"/><a hrefLang="x-default"/>', {'en', 'el', 'x-default'}),
        ('uppercase locale is the same locale', '<a hrefLang="EN"/>', {'en'}),
        ('no hreflang at all is an empty set', '<html><head></head></html>', set()),
    ]
    failures = 0
    print('FIXTURES')
    for name, html, expected in fixtures:
        got = langs(html)
        ok = got == expected
        failures += 0 if ok else 1
        print(f'  {"ok" if ok else "x "} {name}: expected {sorted(expected)}, got {sorted(got)}')

    print('\nCOMPARISON')
    cases = [
        ('identical sets agree', {'en', 'el', 'x-default'}, {'en', 'el', 'x-default'}, True),
        ('sitemap missing x-default disagrees', {'en', 'el', 'x-default'}, {'en', 'el'}, False),
        ('page missing x-default disagrees', {'en', 'el'}, {'en', 'el', 'x-default'}, False),
        ('order is irrelevant', {'el', 'en'}, {'en', 'el'}, True),
    ]
    for name, a, b, expected in cases:
        got = (a == b)
        ok = got == expected
        failures += 0 if ok else 1
        print(f'  {"ok" if ok else "x "} {name}: expected {expected}, got {got}')

    print('\nSABOTAGES. Every line must say caught.')
    sabotages = [
        ('langs() always returns the empty set', lambda h: set()),
        ('langs() becomes case-sensitive, the one that reports a correct site as broken',
         lambda h: set(re.findall(r'hreflang="([^"]*)"', h))),
        ('langs() returns every attribute value it sees',
         lambda h: set(re.findall(r'"([^"]*)"', h))),
    ]
    for name, broken in sabotages:
        langs = broken
        noticed = any(langs(h) != exp for _, h, exp in fixtures)
        langs = original
        failures += 0 if noticed else 1
        print(f'  {"ok" if noticed else "x "} {name}: {"caught" if noticed else "PASSED UNNOTICED"}')

    print(f'\n{"SELFTEST PASSED" if not failures else f"SELFTEST FAILED ({failures})"}')
    return 1 if failures else 0


if __name__ == '__main__':
    sys.exit(selftest() if '--selftest' in sys.argv[1:] else check('.'))
