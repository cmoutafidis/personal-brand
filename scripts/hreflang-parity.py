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

⚠️ TWO THINGS WERE FIXED HERE ON 2026-09-05, AND BOTH WERE WAYS THIS GATE COULD NOT FAIL.

1. IT READ THE WHOLE DOCUMENT. `langs()` was run over the entire page, so the locale switcher's
   body anchors counted as declarations. Every page on this site emits 4 body `hrefLang=`
   occurrences, `el` and `en`. Deleting `hreflang="el"` from a page's HEAD therefore changed
   nothing the gate could see: the body anchor put `el` back into the set and the comparison stayed
   green on a page that had lost an annotation. Pages are now read HEAD ONLY. The sitemap block is
   still read whole, because XML has no body to confuse it with.

2. THE BLOG SKIP WAS A SUBSTRING MATCH. `if '/blog' in url` removed 16 of 50 built routes from this
   gate, including /el/blog, the site's only indexable blog index, and all fourteen Greek articles.
   The reasoning behind it was sound and the implementation asserted nothing: blogData.en is empty
   and no Greek post has an English twin, so those URLs genuinely have no second locale to declare.
   ⚠️ That justifies the SITEMAP omitting an `en` alternate. It never justified skipping the
   comparison, and it would have swallowed any future route with "blog" anywhere in its path.

   The exemption is now DERIVED rather than hardcoded. Measured 2026-09-05: the 15 blog URLs are in
   the sitemap with ZERO xhtml:link annotations while their pages declare `el` and `x-default`,
   both pointing at themselves. That is legal, because hreflang may be published in the HTML or in
   the sitemap and does not have to be in both. So the rule is:

       sitemap block declares hreflang  ->  the page head must declare the SAME set
       sitemap block declares nothing   ->  the page head must declare nothing, or only values
                                            that point at the page itself

   A self-referential annotation claims no cluster, so it cannot disagree with an absent one. The
   moment a blog page names a URL other than itself while the sitemap stays silent, this goes red.

USAGE
    npm run build && python3 scripts/hreflang-parity.py
    python3 scripts/hreflang-parity.py --selftest
"""

import pathlib
import re
import sys

SITE = 'https://www.fijisolutions.net'


def head_of(html):
    """Everything before the first </head>.

    The body's locale switcher emits <a hrefLang="el" href="..."> on every page of this site, four
    occurrences per page. Those are crawlable links and they are NOT annotations. Counting them is
    what let a page lose a head declaration without this gate noticing."""
    cut = html.lower().find('</head>')
    return html if cut == -1 else html[:cut]


def langs(html):
    """The lowercased hreflang values a document declares, as a set. HEAD ONLY for a page."""
    return {v.lower() for v in re.findall(r'hreflang="([^"]*)"', head_of(html), re.I)}


def pairs(html):
    """[(lang, href)] from the head, so a self-referential declaration can be told from a claim
    about another URL. Both attribute orders appear in the wild."""
    out = []
    for tag in re.findall(r'<link\b[^>]*\brel="alternate"[^>]*>', head_of(html), re.I):
        lang = re.search(r'hreflang="([^"]*)"', tag, re.I)
        href = re.search(r'href="([^"]*)"', tag, re.I)
        if lang and href:
            out.append((lang.group(1).lower(), href.group(1).strip()))
    return out


def same_url(a, b):
    """A trailing slash is not a difference."""
    return (a or '').rstrip('/') == (b or '').rstrip('/')


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
    self_only = []
    for url, sm_langs in sorted(blocks.items()):
        html = page_html(root, url)
        if html is None:
            print(f'  x the sitemap lists {url} and the build produced no HTML for it')
            fail += 1
            continue
        pg_langs = langs(html)

        if not sm_langs:
            # The sitemap declares no annotation for this URL. That is legal, so the page may not
            # claim a cluster either. Anything self-referential is not a claim; anything else is.
            outward = [(l, h) for l, h in pairs(html) if not same_url(h, url)]
            self_only.append(url)
            if outward:
                print(f'  x {url}: the sitemap declares no hreflang for this URL, but the page names')
                for l, h in outward:
                    print(f'      hrefLang="{l}" -> {h}')
                print('      A page may publish hreflang the sitemap omits, and it may not name a')
                print('      cluster the sitemap knows nothing about. Add the annotations to')
                print('      sitemap.ts, or drop them from the page.')
                fail += 1
            continue

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

    print(f'\n{compared} URLs compared against a sitemap annotation, '
          f'{len(self_only)} with none, checked to be self-referential only.')
    print('PAGES AND SITEMAP DECLARE THE SAME HREFLANG' if not fail else f'{fail} PROBLEM(S)')
    return 1 if fail else 0


def selftest():
    global langs, pairs, same_url, head_of
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
        # ⚠️ THE FIXTURE THAT MAKES head_of FALSIFIABLE, and the one this gate lacked until
        # 2026-09-05. Every real page here emits locale-switcher anchors in the BODY. A whole
        # document read counts them, so deleting an annotation from the HEAD changes nothing the
        # gate can see. Here the head declares `el` only and the body declares `en`.
        ('a body locale switcher is not a declaration',
         '<html><head><link rel="alternate" hrefLang="el" href="/el"/></head>'
         '<body><a hrefLang="en" href="/en">EN</a></body></html>', {'el'}),
        ('a body switcher alone declares nothing',
         '<html><head></head><body><a hrefLang="en" href="/en">EN</a>'
         '<a hrefLang="el" href="/el">EL</a></body></html>', set()),
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

    # pairs() and same_url() carry the derived blog exemption. Without fixtures here, a sabotage of
    # either would pass unnoticed and 15 of this site's 49 URLs would silently stop being checked
    # again, which is the exact state the substring skip left them in.
    print('\nHEAD PAIRS AND SELF-REFERENCE')
    pair_cases = [
        ('a head link yields one (lang, href) pair',
         '<html><head><link rel="alternate" hrefLang="el" href="https://x.test/el"/></head>'
         '<body><a hrefLang="en" href="/en">EN</a></body></html>',
         [('el', 'https://x.test/el')]),
        ('attribute order does not matter',
         '<html><head><link href="https://x.test/el" rel="alternate" hrefLang="el"/></head></html>',
         [('el', 'https://x.test/el')]),
        ('a body anchor yields no pair at all',
         '<html><head></head><body><a hrefLang="en" href="/en">EN</a></body></html>', []),
        # pairs() already ignores the switcher by requiring a <link> tag, so that anchor alone
        # cannot falsify head_of here. A stray body <link rel="alternate"> can, and it is the only
        # thing that makes the head cut load-bearing for this function rather than untested code.
        # No current Next build emits one; this is a hypothetical on purpose.
        ('a stray <link rel=alternate> in the body is still not a declaration',
         '<html><head><link rel="alternate" hrefLang="el" href="https://x.test/el"/></head>'
         '<body><noscript><link rel="alternate" hrefLang="fr" href="https://x.test/fr"/></noscript>'
         '</body></html>',
         [('el', 'https://x.test/el')]),
    ]
    for name, html, expected in pair_cases:
        got = pairs(html)
        ok = got == expected
        failures += 0 if ok else 1
        print(f'  {"ok" if ok else "x "} {name}: expected {expected}, got {got}')

    url_cases = [
        ('a trailing slash is not a difference', 'https://x.test/el/', 'https://x.test/el', True),
        ('a different path is a different URL', 'https://x.test/en', 'https://x.test/el', False),
    ]
    for name, a, b, expected in url_cases:
        got = same_url(a, b)
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
        ('langs() reads past </head>, so the body switcher counts again',
         lambda h: {v.lower() for v in re.findall(r'hreflang="([^"]*)"', h, re.I)}),
    ]
    for name, broken in sabotages:
        langs = broken
        noticed = any(langs(h) != exp for _, h, exp in fixtures)
        langs = original
        failures += 0 if noticed else 1
        print(f'  {"ok" if noticed else "x "} {name}: {"caught" if noticed else "PASSED UNNOTICED"}')

    original_pairs, original_same = pairs, same_url
    struct_sabotages = [
        ('pairs() always returns nothing, so no outward claim is ever seen',
         'pairs', lambda h: []),
        ('same_url() calls everything self-referential',
         'same_url', lambda a, b: True),
        ('head_of() returns the whole document again',
         'head_of', lambda h: h),
    ]
    g = globals()
    for name, fn, broken in struct_sabotages:
        keep = g[fn]
        g[fn] = broken
        try:
            noticed = (
                any(pairs(h) != exp for _, h, exp in pair_cases)
                or any(same_url(a, b) != exp for _, a, b, exp in url_cases)
            )
        finally:
            g[fn] = keep
        failures += 0 if noticed else 1
        print(f'  {"ok" if noticed else "x "} {name}: {"caught" if noticed else "PASSED UNNOTICED"}')
    pairs, same_url = original_pairs, original_same

    print(f'\n{"SELFTEST PASSED" if not failures else f"SELFTEST FAILED ({failures})"}')
    return 1 if failures else 0


if __name__ == '__main__':
    sys.exit(selftest() if '--selftest' in sys.argv[1:] else check('.'))
