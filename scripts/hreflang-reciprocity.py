#!/usr/bin/env python3
"""The hreflang properties that only a whole-BUILD read can see. One file, three repos.

WHY THIS EXISTS
===============

On 2026-09-05 fijisolutions.net shipped `/en/blog` declaring `el -> /el/blog` while `/el/blog`
named nothing back, and both pages claiming `x-default`. Google discards a one-way set, so the
annotation was worth nothing. Two gates were already running against that build and both printed
green, for two different reasons, and neither reason was a bug in the gate:

    hreflang-parity.py           iterates the SITEMAP. /en/blog is noindex and deliberately absent
                                 from the sitemap, so it was never enumerated at all.
    routes-sitemap-and-hreflang.py  iterates the BUILD, but only ever extracts the x-default TARGET.
                                 It never reads the rest of the set and never resolves a target.

The same defect was then found LIVE on the sibling site the next day, in
peakcodeconsulting.ch/en/blog, where it had been shipping since 2026-09-01 and where a third gate
was green over it. That is the shape worth writing a checker for: two independent repos, the same
mistake, three gates, nothing red.

    ⚠️ A ROUTE KEPT OUT OF THE SITEMAP CAN PUBLISH ANY HREFLANG IT LIKES.

So this file iterates `.next/server/app/**/*.html` and never the sitemap. The sitemap is precisely
the surface a route can be kept out of, which makes it the wrong index for this question.

WHAT IT ASSERTS
===============

1. SELF-REFERENTIAL CANONICAL. Every built page declares a canonical, and it is the URL the build
   serves that page at. A canonical pointing somewhere else hands the page's equity away.
2. NO ALTERNATE NAMES A ROUTE THIS BUILD DOES NOT PRODUCE. An hreflang pointing at a 404 is worse
   than no hreflang.
3. RECIPROCITY. If page A names B under a real language, B must name A back. This is the check no
   gate in any of the three repos performed, and it is the whole reason the file exists.
4. ONE x-default PER CLUSTER, where a cluster is a connected component of the alternate graph. Two
   competing x-defaults is half of the 2026-09-05 defect.
5. AN x-default MUST NOT NAME A noindex PAGE, when its cluster holds anything indexable. Nominating
   a page Google is told not to index as the cluster's default is the other half.

WHAT IT DELIBERATELY DOES NOT ASSERT
====================================

Sitemap membership and page-versus-sitemap agreement. Peak Code's routes-sitemap-and-hreflang.py
owns those and does them well over the same built-route set, and Fiji's hreflang-parity.py owns the
page-versus-sitemap set comparison. Two checkers asserting one property is how two copies of a map
come to disagree. This one reads the built pages and only the built pages.

⚠️ IT READS THE BUILD, NOT THE SOURCE. Whether a page ends up noindex, and which alternates survive,
depend on Next's shallow metadata merge. Reading page.tsx would reproduce that bug rather than catch
it. Run `npm run build` first.

⚠️ NEXT EMITS THE REACT PROP NAME `hrefLang`. A lowercase-only grep returns zero on all three of
these sites and means nothing. Matching here is case-insensitive on purpose.

⚠️ THE <head> ONLY, AND A <link> TAG ONLY. A locale switcher emits `<a hrefLang="el" href=...>` in
the BODY, which is a correct crawlable link and is not an annotation. Measured on all three real
builds 2026-09-05: every page carries exactly 4 body `hrefLang=` occurrences, which are those
anchors, and ZERO body `<link rel="alternate">` tags. So the anchors are excluded by requiring a
`<link>` tag, and the head cut is the second line of defence against a stray one appearing later.
A grep for `hrefLang=` alone counts 4 phantom declarations per page and means nothing.

BYTE-IDENTICAL IN THREE REPOS, like scripts/no-shipped-dashes.py. Separate remotes, so changing one
means changing all three. `md5 scripts/hreflang-reciprocity.py` in each and diff before you touch it.
There is no per-repo configuration: the origin is derived from the build's own canonicals.

USAGE
    npm run build && python3 scripts/hreflang-reciprocity.py
    python3 scripts/hreflang-reciprocity.py --selftest
"""

import pathlib
import re
import sys

ALT_RE = re.compile(
    r'<link\b[^>]*\brel=["\']alternate["\'][^>]*>', re.I)
HREFLANG_RE = re.compile(r'\bhref[Ll]ang=["\']([^"\']+)["\']')
HREF_RE = re.compile(r'\bhref=["\']([^"\']+)["\']')
CANON_RE = re.compile(
    r'<link\b[^>]*\brel=["\']canonical["\'][^>]*>', re.I)
ROBOTS_RE = re.compile(
    r'<meta\b[^>]*\bname=["\']robots["\'][^>]*\bcontent=["\']([^"\']*)["\']', re.I)


def head_of(html):
    """Everything before the first </head>. The body's locale switcher is not an annotation."""
    cut = html.lower().find('</head>')
    return html if cut == -1 else html[:cut]


def alternates(html):
    """[(lang, href)] from the HEAD only, lowercased lang."""
    out = []
    for tag in ALT_RE.findall(head_of(html)):
        lang = HREFLANG_RE.search(tag)
        href = HREF_RE.search(tag)
        if lang and href:
            out.append((lang.group(1).strip().lower(), href.group(1).strip()))
    return out


def canonical(html):
    for tag in CANON_RE.findall(head_of(html)):
        href = HREF_RE.search(tag)
        if href:
            return href.group(1).strip()
    return None


def indexable(html):
    m = ROBOTS_RE.search(head_of(html))
    return 'noindex' not in (m.group(1).lower() if m else '')


def norm(url):
    """A trailing slash is not a difference. The root is declared both ways across these repos."""
    return url.rstrip('/') if url and url.rstrip('/') else url


def route_of(path, app_dir):
    """.next/server/app/en/blog.html -> /en/blog ; index.html -> / ; foo/index.html -> /foo"""
    rel = path.relative_to(app_dir).as_posix()
    rel = rel[:-len('.html')]
    if rel == 'index':
        return '/'
    if rel.endswith('/index'):
        rel = rel[:-len('/index')]
    return '/' + rel


def built_pages(root):
    """{route: (html, origin-derived url)} for every prerendered page. Route groups are already
    stripped by Next, so (de)/blog/page.tsx is on disk as blog.html."""
    app_dir = pathlib.Path(root) / '.next' / 'server' / 'app'
    if not app_dir.is_dir():
        print('  x .next/server/app is missing. Run `npm run build` first.')
        print('    A run against no build would compare two empty sets and pass, which is the')
        print('    failure mode this whole file exists to prevent.')
        sys.exit(2)
    pages = {}
    for p in sorted(app_dir.rglob('*.html')):
        route = route_of(p, app_dir)
        # Next's own error and interception routes are not pages this site publishes.
        if any(seg.startswith('_') for seg in route.split('/') if seg):
            continue
        pages[route] = p.read_text(encoding='utf-8', errors='replace')
    return pages


def derive_origin(pages):
    """The origin is whatever the build's own canonicals overwhelmingly say it is.

    Deriving it beats configuring it: this file stays byte-identical across three repos with three
    different hosts, and a hardcoded origin is one more copy of a fact that can drift."""
    counts = {}
    for html in pages.values():
        c = canonical(html)
        m = re.match(r'(https?://[^/]+)', c or '')
        if m:
            counts[m.group(1)] = counts.get(m.group(1), 0) + 1
    if not counts:
        print('  x no built page declared a canonical, so the origin cannot be derived and')
        print('    nothing below would compare anything. Refusing to pass.')
        sys.exit(2)
    return max(counts.items(), key=lambda kv: kv[1])[0]


def check(root='.'):
    pages = built_pages(root)
    if not pages:
        print('  x the build produced no pages. Refusing to compare empty sets.')
        return 2
    origin = derive_origin(pages)
    url_of = {r: (origin if r == '/' else origin + r) for r in pages}
    by_url = {norm(u): r for r, u in url_of.items()}
    fail = 0

    # 1. Self-referential canonical.
    for route, html in sorted(pages.items()):
        c = canonical(html)
        if c is None:
            print(f'  x {route}: no canonical in the head')
            fail += 1
        elif norm(c) != norm(url_of[route]):
            print(f'  x {route}: canonical is {c}, but the build serves this page at {url_of[route]}')
            fail += 1

    # 2 + 3. Alternates resolve, and real-language alternates are reciprocal.
    declared = 0
    for route, html in sorted(pages.items()):
        mine = norm(url_of[route])
        for lang, href in alternates(html):
            declared += 1
            target = by_url.get(norm(href))
            if target is None:
                print(f'  x {route}: hrefLang="{lang}" names {href}, which this build does not produce')
                fail += 1
                continue
            if lang == 'x-default' or norm(href) == mine:
                continue
            # x-default is a fallback declaration, NOT a language annotation, so it cannot be what
            # names us back. Counting it here made the checker green on its own one-way fixture:
            # a page whose only pointer at us is `x-default` has still not entered the pair.
            back = {norm(h) for l, h in alternates(pages[target]) if l != 'x-default'}
            if mine not in back:
                print(f'  x {route}: hrefLang="{lang}" names {href}, and that page names back only')
                print(f'      {sorted(back) or "nothing"}')
                print('      A one-way set is discarded by Google, so BOTH sides publish nothing.')
                fail += 1
    if declared == 0:
        print('  x no built page declared a single alternate, so checks 2 to 5 proved nothing.')
        print('    Next emits the React prop name hrefLang; a lowercase-only match returns zero here.')
        fail += 1

    # 4 + 5. Cluster properties. A cluster is a connected component of the alternate graph.
    parent = {r: r for r in pages}

    def find(a):
        while parent[a] != a:
            parent[a] = parent[parent[a]]
            a = parent[a]
        return a

    for route, html in pages.items():
        for _lang, href in alternates(html):
            target = by_url.get(norm(href))
            if target is not None:
                ra, rb = find(route), find(target)
                if ra != rb:
                    parent[ra] = rb

    clusters = {}
    for route in pages:
        clusters.setdefault(find(route), []).append(route)

    multi = 0
    for members in clusters.values():
        xds = set()
        for route in members:
            for lang, href in alternates(pages[route]):
                if lang == 'x-default':
                    xds.add(norm(href))
        if len(xds) > 1:
            print(f'  x cluster {sorted(members)} publishes {len(xds)} competing x-default values:')
            for x in sorted(xds):
                print(f'      {x}')
            fail += 1
        if len(xds) == 1:
            multi += 1
            target = by_url.get(next(iter(xds)))
            anything_indexable = any(indexable(pages[m]) for m in members)
            if target is not None and anything_indexable and not indexable(pages[target]):
                print(f'  x cluster {sorted(members)} points x-default at {url_of[target]},')
                print('      which is noindex, while the cluster contains an indexable page.')
                fail += 1

    print(
        f'\n{len(pages)} built pages on {origin}, {declared} head alternates read, '
        f'{len(clusters)} clusters, {multi} of them declaring exactly one x-default.'
    )
    print('EVERY ALTERNATE RESOLVES AND EVERY PAIR NAMES BACK' if not fail else f'{fail} PROBLEM(S)')
    return 1 if fail else 0


# ---------------------------------------------------------------------------------------------
# Falsification. Fixtures prove the checks CAN go red; the sabotages prove the fixtures would
# notice if a check quietly stopped being able to. Seven of fourteen sabotages passed unnoticed the
# first time this discipline was applied in this estate, which is the whole argument for it.
# ---------------------------------------------------------------------------------------------

O = 'https://example.test'


def _page(canon, alts, robots='index, follow', body_switcher=True):
    links = ''.join(
        f'<link rel="alternate" hrefLang="{l}" href="{h}"/>' for l, h in alts)
    body = ''
    if body_switcher:
        # Two things every real page in these three repos puts in its BODY, and a head-blind reader
        # counts both as declarations:
        #   the locale switcher, which is a crawlable link and not an annotation, and
        #   Next's RSC flight payload, which embeds a second copy of the head's own link tags.
        # The payload here names a locale the fixture site does not build, so a checker that reads
        # past </head> goes RED on a healthy page. That is what makes head_of falsifiable.
        # Two things in the BODY that a loose reader turns into declarations.
        #
        # The switcher anchors are what every real page here emits. Measured on the three real
        # builds 2026-09-05: 4 `hrefLang=` occurrences in the body of every page and ZERO body
        # `<link rel="alternate">` tags. Those anchors are excluded by requiring a <link> tag
        # rather than by the head cut, which is the stronger of the two defences.
        #
        # The stray body <link> is a hypothetical and it is here to make head_of falsifiable: no
        # current Next build emits one, so without this fixture the head cut would be untested
        # code that nothing could prove was doing anything. It names a locale this fixture site
        # does not build, so a reader that runs past </head> goes RED on a healthy page.
        body = (
            f'<a hrefLang="de" href="{O}/de">DE</a><a hrefLang="el" href="{O}/el">EL</a>'
            f'<noscript><link rel="alternate" hrefLang="fr" href="{O}/fr"/></noscript>'
        )
    return (f'<html><head><meta name="robots" content="{robots}"/>'
            f'<link rel="canonical" href="{canon}"/>{links}</head><body>{body}</body></html>')


def _tree(pages, tmp):
    app = tmp / '.next' / 'server' / 'app'
    for route, html in pages.items():
        name = 'index' if route == '/' else route.lstrip('/')
        f = app / f'{name}.html'
        f.parent.mkdir(parents=True, exist_ok=True)
        f.write_text(html, encoding='utf-8')
    return tmp


def _clean():
    """A healthy two-locale site: reciprocal, one x-default, self-referential canonicals."""
    return {
        '/': _page(O, [('en', O), ('de', f'{O}/de'), ('x-default', O)]),
        '/de': _page(f'{O}/de', [('en', O), ('de', f'{O}/de'), ('x-default', O)]),
    }


def selftest():
    import shutil
    import tempfile

    globals_ = globals()
    results = []

    def run(pages, root=None):
        tmp = pathlib.Path(tempfile.mkdtemp())
        try:
            _tree(pages, tmp)
            import io
            import contextlib
            buf = io.StringIO()
            with contextlib.redirect_stdout(buf):
                rc = check(str(tmp))
            return rc, buf.getvalue()
        finally:
            shutil.rmtree(tmp, ignore_errors=True)

    def expect(name, pages, want_red):
        rc, out = run(pages)
        ok = (rc != 0) == want_red
        results.append((name, ok, rc, out))
        return ok

    # ---- fixtures: the checker must be GREEN on health and RED on each defect ------------------
    expect('clean two-locale site is green', _clean(), False)

    one_way = _clean()
    one_way['/de'] = _page(f'{O}/de', [('de', f'{O}/de'), ('x-default', O)])
    expect('one-way pair (the 2026-09-05 defect) is red', one_way, True)

    two_xd = _clean()
    two_xd['/de'] = _page(f'{O}/de', [('en', O), ('de', f'{O}/de'), ('x-default', f'{O}/de')])
    expect('two competing x-default values are red', two_xd, True)

    dangling = _clean()
    dangling['/'] = _page(O, [('en', O), ('de', f'{O}/de'), ('fr', f'{O}/fr'), ('x-default', O)])
    expect('alternate naming a route the build does not produce is red', dangling, True)

    wrong_canon = _clean()
    wrong_canon['/de'] = _page(O, [('en', O), ('de', f'{O}/de'), ('x-default', O)])
    expect('canonical pointing at another page is red', wrong_canon, True)

    no_canon = _clean()
    no_canon['/de'] = ('<html><head><meta name="robots" content="index, follow"/>'
                       f'<link rel="alternate" hrefLang="de" href="{O}/de"/></head><body></body></html>')
    expect('missing canonical is red', no_canon, True)

    xd_noindex = _clean()
    xd_noindex['/de'] = _page(f'{O}/de', [('en', O), ('de', f'{O}/de'), ('x-default', O)])
    xd_noindex['/'] = _page(O, [('en', O), ('de', f'{O}/de'), ('x-default', O)], robots='noindex, follow')
    expect('x-default naming a noindex page in a live cluster is red', xd_noindex, True)

    # A noindex cluster nominating one of its own is NOT a defect, and a checker that reds here
    # would fire on /danke and /en/thank-you on the real Peak Code build every single run. A check
    # that fires on normal work gets killed, so this fixture is as load-bearing as the red ones.
    all_noindex = {
        '/danke': _page(f'{O}/danke', [('de', f'{O}/danke'), ('en', f'{O}/en/thank-you'),
                                       ('x-default', f'{O}/danke')], robots='noindex, follow'),
        '/en/thank-you': _page(f'{O}/en/thank-you', [('de', f'{O}/danke'), ('en', f'{O}/en/thank-you'),
                                                     ('x-default', f'{O}/danke')], robots='noindex, follow'),
    }
    expect('an all-noindex reciprocal cluster stays green', all_noindex, False)

    # A single-locale page that names only itself owes nobody a reciprocal. This is the shape both
    # /en/blog pages ship after the 2026-09-05 fixes, so it must be green or the fix reads as broken.
    lone = dict(_clean())
    lone['/en/blog'] = _page(f'{O}/en/blog', [('en', f'{O}/en/blog')], robots='noindex, follow')
    expect('a self-referential single-locale page stays green', lone, False)

    # The body must never be read as a declaration. This page's HEAD is clean; its body carries the
    # switcher anchors and an RSC payload naming a locale this fixture site does not build, so a
    # head-blind reader goes red on a healthy page.
    body_only = {
        '/': _page(O, [('en', O), ('x-default', O)]),
    }
    expect('body anchors and the RSC payload are not annotations', body_only, False)

    # A trailing slash is not a difference, and both real conventions appear in these repos: page
    # metadata declares the bare origin while a sitemap declares it with a slash. Without norm() the
    # canonical check and the reciprocity check both go red on a healthy site, so this fixture is
    # what makes norm falsifiable.
    slashy = {
        '/': _page(f'{O}/', [('en', f'{O}/'), ('de', f'{O}/de'), ('x-default', f'{O}/')]),
        '/de': _page(f'{O}/de', [('en', f'{O}/'), ('de', f'{O}/de'), ('x-default', f'{O}/')]),
    }
    expect('a trailing slash on the root is not a difference', slashy, False)

    # ---- sabotages: break the checker, prove a fixture notices ---------------------------------
    sabotages = [
        ('head_of returns the whole document',
         'head_of', lambda html: html),
        ('alternates always returns nothing',
         'alternates', lambda html: []),
        ('canonical always returns the origin',
         'canonical', lambda html: O),
        ('indexable always says yes',
         'indexable', lambda html: True),
        ('norm stops normalising the trailing slash',
         'norm', lambda url: url),
    ]
    for name, fn, replacement in sabotages:
        original = globals_[fn]
        globals_[fn] = replacement
        try:
            # With the checker broken, at least one fixture that SHOULD be red must go green, or
            # at least one that should be green must go red. Either way the suite must notice.
            noticed = False
            for label, pages, want_red in (
                ('one-way', one_way, True),
                ('two x-default', two_xd, True),
                ('dangling', dangling, True),
                ('wrong canonical', wrong_canon, True),
                ('x-default at noindex', xd_noindex, True),
                ('clean', _clean(), False),
                ('body switcher', body_only, False),
                ('trailing slash', slashy, False),
            ):
                try:
                    rc, _out = run(pages)
                except SystemExit:
                    noticed = True
                    break
                except Exception:
                    noticed = True
                    break
                if (rc != 0) != want_red:
                    noticed = True
                    break
            results.append((f'SABOTAGE {name} is caught', noticed, 0, ''))
        finally:
            globals_[fn] = original

    width = max(len(n) for n, _o, _r, _s in results)
    bad = 0
    for name, ok, rc, out in results:
        print(f'  {"ok  " if ok else "FAIL"}  {name.ljust(width)}')
        if not ok:
            bad += 1
            for line in out.splitlines():
                print(f'          {line}')
    print(f'\n{len(results)} checks, {len(results) - bad} passed.')
    print('SELFTEST PASSED' if not bad else f'SELFTEST FAILED, {bad} problem(s)')
    return 1 if bad else 0


if __name__ == '__main__':
    if '--selftest' in sys.argv:
        sys.exit(selftest())
    sys.exit(check('.'))
