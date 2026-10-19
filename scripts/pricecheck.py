#!/usr/bin/env python3
"""Fail when a price reaches a line the SEO loop wrote.

WHY THIS FILE EXISTS
====================

The SEO loop of offer-os `gtm/seo-loop-2026-10` writes posts into this repo and merges them with
nobody reading them first. He decided that on 2026-10-19 (SL-D1, his words: "auto merge and deploy
without me doing anything"), so the gates are the only safety, and a price on a page is the one
defect his rules name in every repo: no figure, no range, no "from", no rate card.

Fiji's `main` carries prices on purpose (its CLAUDE.md rule 7 lists the dated exceptions), so a
scan of the whole tree is red there by design. `--diff BASE` therefore reads only the lines a
branch ADDS, which is what a loop branch is answerable for. The loop runs the same file on the live
page after a merge (`bin/pricecheck.py` on the VPS).

WHAT COUNTS AS A PRICE
======================

1. A currency sign, code or word next to a figure, on either side, with any whitespace between
   them or none, U+00A0 and U+202F included: € $ £ EUR USD CHF GBP Fr. SFr Franken Euro euros
   ευρώ, their plurals, the dollar and franc words, in any case and with or without the Greek
   accent. A magnitude ("1,5 Mio. CHF", "2 χιλιάδες ευρώ") or a country ("500 Schweizer
   Franken", "500 US-Dollar") may sit between the figure and the currency.
2. A range whose either end carries a currency or a k form (`€1,000-2,000`, `2k to 5k`).
3. "from", "ab", "από", "starting at" or "beginnend bei" before a money shaped figure: three or more digits, or a thousands
   separator, and not a year, a percentage or a duration.
4. "2k" forms: a figure followed by k or K and no further letter (`2k`, `1.5K`). `5 km` and
   `10 KB` are left alone.
5. "1.200,-" forms: a figure closed by `,-` or `.-` or their dashed variants, the Swiss and German
   way of writing a round amount.
6. `offers`, `price`, `priceRange`, `lowPrice`, `highPrice`, `minPrice`, `maxPrice`,
   `priceCurrency` or `priceSpecification` as an object key, and an `@type` of `Offer`,
   `AggregateOffer` or a price specification, which is how a price reaches JSON-LD.

Diff mode reads each changed file on its own, as text, split on newline bytes only, so a file name
git would quote, a NUL byte, a line starting "++ " and a U+2028 or a bare CR inside a line cannot
hide an added line. The selftest adds one file of each kind and requires every one to be counted.
A review of 2026-10-19 found each of those five holes in the first version.

A false positive blocks a post, and the Writer rephrases it. A false negative publishes a price.
The patterns lean toward the first on purpose.

USAGE
    python3 scripts/pricecheck.py FILE...          # every line of each file
    python3 scripts/pricecheck.py --diff BASE      # only the lines HEAD adds since BASE
    python3 scripts/pricecheck.py --selftest       # fixtures, diff runs in a temp repo, sabotages

THIS FILE IS BYTE-IDENTICAL IN BOTH COMPANY WEBSITE REPOS (fiji personal-brand and peak code
website). Change one, copy it to the other, and `cmp` them.
"""

import pathlib
import re
import subprocess
import sys
import tempfile

# Whitespace the corpus uses between a figure and its currency: ordinary space, no-break space,
# narrow no-break space, thin space, figure space.
WS = '[\\s\\u00a0\\u202f\\u2009\\u2007]*'

# A figure, with the thousands and decimal separators of en, de-CH and el: 1,200 1.200 1'200
# 1’200 1 200 and 1,5.
NUM = "\\d+(?:[.,'’\\u00a0\\u202f\\u2009 ]\\d{3})*(?:[.,]\\d+)?"

# Letters a currency word may not touch on its left. A digit may, so "1200CHF" counts.
LETTER = 'A-Za-zÄÖÜäöüΑ-Ωα-ωά-ώΆ-Ώ'

CURRENCY = (
    '€|\\$(?!\\{)|£|'
    '(?<![' + LETTER + '])(?i:EUR|USD|CHF|GBP|S?Frs?\\.?|Franken|francs?|Euros?|Dollars?|Pfund|pounds?|'
    'Rappen|bucks?|ευρ[ωώ]|δολ[αά]ρι[αο]?|λίρ[εέ]ς|λιρες|φρ[αά]γκα)(?![' + LETTER + '])'
)

# What may sit between a figure and its currency: a magnitude ("1,5 Mio. CHF", "2 χιλιάδες ευρώ")
# and a country ("500 Schweizer Franken", "500 US-Dollar").
MAGNITUDE = (
    '(?:(?i:Mio|Mrd|Mia|Tsd|Tausend|Millionen|Million|Milliarden|Milliarde|millions?|billions?|'
    'thousands?|bn|k|m|χιλ|χιλιάδες|χιλιάδων|εκατ|εκατομμύρια|εκατομμύριο|εκατομμυρίων)'
    '(?![' + LETTER + '])\\.?' + '[\\s\\u00a0\\u202f\\u2009\\u2007]*)?'
)
COUNTRY = '(?:(?i:US|U\\.S\\.|Swiss|Schweizer|American|Canadian|Australian)[-\\s\\u00a0]*)?'

K_FORM = '\\d+(?:[.,]\\d+)?' + WS + '[kKΚκ](?![' + LETTER + '])'

# What may follow a figure after "from" without it being a price: a year needs no unit, the rest
# are units of time, people and size that the posts use.
NOT_MONEY_AFTER = (
    '%|' + WS + '(?:%|Prozent|percent|τοις|'
    'days?|weeks?|months?|years?|hours?|minutes?|users?|employees?|people|pages?|'
    'Tage?n?|Wochen?|Monate?n?|Jahre?n?|Stunden?|Minuten?|Mitarbeitende[n]?|Personen|Seiten?|'
    'ημέρ|μέρ|εβδομάδ|μήν|χρόν|ώρ|λεπτ|άτομα|υπαλλήλ|σελίδ)'
)
YEAR = '(?:19|20)\\d{2}(?!\\d)'

PATTERNS = [
    ('currency before a figure', re.compile('(?:' + CURRENCY + ')' + WS + '\\d')),
    ('figure before a currency', re.compile('\\d' + WS + MAGNITUDE + COUNTRY + '(?:' + CURRENCY + ')')),
    ('range with a currency or k form', re.compile(
        '(?:(?:' + CURRENCY + ')' + WS + NUM + '|' + K_FORM + ')' + WS
        + '(?:-|\\u2013|\\u2014|to|bis|έως|ως|μέχρι)' + WS + '(?:' + CURRENCY + ')?' + WS + '\\d')),
    ('"from", "ab" or "από" before a figure', re.compile(
        '(?<![' + LETTER + '])(?:[Ff]rom|[Aa]b|[Αα]πό|[Αα]πο|ΑΠΟ|[Ss]tarting at|[Ss]tarts at|beginnend bei)'
        + WS + '(?:' + CURRENCY + ')?' + WS
        + '(?!' + YEAR + ')(?:\\d{1,3}(?:[.,\'’\\u00a0\\u202f\\u2009 ]\\d{3})+|\\d{3,})'
        + '(?:[.,]\\d+)?(?!\\d)(?!' + NOT_MONEY_AFTER + ')')),
    ('a "2k" form', re.compile('(?<![\\w.])' + K_FORM)),
    ('a "1.200,-" form', re.compile('\\d[.,](?:-|\\u2013|\\u2014)(?![\\d])')),
    ('a JSON-LD price key', re.compile(
        '["\'`]?\\b(?i:offers|price|priceRange|lowPrice|highPrice|minPrice|maxPrice|priceCurrency|'
        'priceSpecification)\\b["\'`]?' + WS + ':')),
    ('a JSON-LD offer type', re.compile(
        '(?i:@type)["\'`]?' + WS + ':' + WS + '["\'`](?:Offer|AggregateOffer|\\w*PriceSpecification)\\b')),
]

# Characters that end a line for Python or for a browser but not for git. Each is read as a space,
# so the text after it stays on the line it belongs to.
LINE_BREAKS = re.compile('[\\r\\x0b\\x0c\\x1c\\x1d\\x1e\\x85\\u2028\\u2029]')


def scan_line(line):
    """Return the names of every price form the line carries, in pattern order."""
    line = LINE_BREAKS.sub(' ', line)
    return [name for name, rx in PATTERNS if rx.search(line)]


def scan_files(paths):
    hits = 0
    for p in paths:
        try:
            text = pathlib.Path(p).read_text(encoding='utf-8')
        except (OSError, UnicodeDecodeError) as e:
            print(f'{p}: cannot read ({type(e).__name__})')
            hits += 1
            continue
        for n, line in enumerate(text.split('\n'), 1):
            for name in scan_line(line):
                print(f'{p}:{n}: {name}: {line.strip()[:160]}')
                hits += 1
    return hits


def _git(args, cwd):
    return subprocess.run(['git', '-c', 'core.quotePath=false', *args], cwd=cwd,
                          capture_output=True, check=True).stdout


def added_lines(base, cwd='.'):
    """Yield (path, line number, text) for every line HEAD adds since the merge base with BASE.

    Each changed file is diffed on its own, as text whatever git thinks of it, and its output is
    split on newline bytes only. So a file name git would quote, a NUL byte that makes git call a
    file binary, a line starting "++ " and a U+2028 inside a line all stay in view.
    """
    names = _git(['diff', '--name-only', '-z', '--no-renames', f'{base}...HEAD'], cwd)
    for raw in names.split(b'\0'):
        if not raw:
            continue
        path = raw.decode('utf-8', 'replace')
        out = _git(['diff', '-U0', '--text', '--no-color', '--no-ext-diff', '--no-renames',
                    f'{base}...HEAD', '--', raw.decode('utf-8', 'surrogateescape')], cwd)
        n, in_hunks = 0, False
        for bline in out.split(b'\n'):
            if bline.startswith(b'@@'):
                in_hunks = True
                m = re.match(rb'@@ -\S+ \+(\d+)', bline)
                n = int(m.group(1)) if m else 0
            elif in_hunks and bline.startswith(b'+'):
                yield path, n, bline[1:].decode('utf-8', 'replace')
                n += 1


def scan_diff(base, cwd='.'):
    hits = 0
    for path, n, text in added_lines(base, cwd):
        for name in scan_line(text):
            print(f'{path}:{n}: {name}: {text.strip()[:160]}')
            hits += 1
    return hits


# (fixture, the forms it must raise). An empty list means the line must pass.
FIXTURES = [
    ('Das kostet € 1.200 im Monat.', ['currency before a figure']),
    ('It costs €1,200.', ['currency before a figure']),
    ('It costs $950 a month.', ['currency before a figure']),
    ('It costs £300.', ['currency before a figure']),
    ('Budget: EUR 5000', ['currency before a figure']),
    ('USD 12 per seat', ['currency before a figure']),
    ('CHF 1’200 pauschal', ['currency before a figure']),
    ('Fr. 900 pro Tag', ['currency before a figure']),
    ('SFr 900 pro Tag', ['currency before a figure']),
    ('1.200 €', ['figure before a currency']),
    ('1.200\u00a0€', ['figure before a currency']),
    ('1\u202f200\u202fCHF', ['figure before a currency']),
    ('500 Franken', ['figure before a currency']),
    ('500 Euro', ['figure before a currency']),
    ('500 euros', ['figure before a currency']),
    ('500 ευρώ', ['figure before a currency']),
    ('300 GBP', ['figure before a currency']),
    ('300 USD', ['figure before a currency']),
    ('€1,000-2,000 for a site', ['currency before a figure', 'range with a currency or k form']),
    ('CHF 5000 bis 8000', ['currency before a figure', 'range with a currency or k form']),
    ('2k to 5k', ['range with a currency or k form', 'a "2k" form']),
    ('from 1,500 for the build', ['"from", "ab" or "από" before a figure']),
    ('ab 2’500 pro Projekt', ['"from", "ab" or "από" before a figure']),
    ('από 800 για ένα eshop', ['"from", "ab" or "από" before a figure']),
    ('Από 1.500 το έργο', ['"from", "ab" or "από" before a figure']),
    ('A site for 2k', ['a "2k" form']),
    ('about 1.5K', ['a "2k" form']),
    ('Pauschal 1.200,-', ['a "1.200,-" form']),
    ('Pauschal 1’200.\u2013', ['a "1.200,-" form']),
    ('  offers: {', ['a JSON-LD price key']),
    ('"price": "1200",', ['a JSON-LD price key']),
    ('priceRange: "$$"', ['a JSON-LD price key']),
    ('"minPrice": 1200', ['a JSON-LD price key']),
    ('"@type": "Offer",', ['a JSON-LD offer type']),
    ('1,5 Mio. CHF', ['figure before a currency']),
    ('2 Millionen Euro', ['figure before a currency']),
    ('3 χιλιάδες €', ['figure before a currency']),
    ('2 χιλ. ευρώ', ['figure before a currency']),
    ('500 Schweizer Franken', ['figure before a currency']),
    ('500 US-Dollar', ['figure before a currency']),
    ('500 Swiss francs', ['figure before a currency']),
    ('1200CHF', ['figure before a currency']),
    ('500Euro', ['figure before a currency']),
    ('1.500 Ευρώ', ['figure before a currency']),
    ('1.500 ΕΥΡΩ', ['figure before a currency']),
    ('Ευρώ 500', ['currency before a figure']),
    ('sFr. 900', ['currency before a figure']),
    ('500 chf', ['figure before a currency']),
    ('starting at 1,500 for the build', ['"from", "ab" or "από" before a figure']),
    ('Hello. It costs CHF 900.', ['currency before a figure']),
    # Lines that must pass: years, durations, counts, sizes, code and words that merely contain a
    # currency's letters.
    ('From 2019 to 2024 the site grew.', []),
    ('ab 2027 gilt die neue Regel', []),
    ('από το 2024', []),
    ('from 3 to 5 days', []),
    ('from 100 users upward', []),
    ('ab 250 Mitarbeitenden', []),
    ('από 300 ημέρες', []),
    ('from 120 pages', []),
    ('Europe 2026', []),
    ('Europa 2026', []),
    ('a 5 km radius', []),
    ('10 KB of script', []),
    ('const url = `${base}/blog/${slug}`;', []),
    ('2,900 searches a month', []),
    ('Camunda 7.23 reaches end of maintenance', []),
    ('see the price in writing after the call', []),
    ('the Fr-it vocab list', []),
    ('free 3 month trial', []),
    ('the Europe team, 12 people', []),
    ('5 Minuten lesen', []),
    ('Η ιστοσελίδα φορτώνει σε 2 δευτερόλεπτα', []),
]


def run_fixtures():
    bad = []
    for line, expected in FIXTURES:
        got = scan_line(line)
        if got != expected:
            bad.append((line, expected, got))
    return bad


def diff_fixture():
    """A temp repo whose base already carries a price. Only the line the branch adds may count."""
    with tempfile.TemporaryDirectory() as d:
        def git(*a):
            subprocess.run(['git', '-c', 'commit.gpgsign=false', '-c', 'core.hooksPath=/dev/null', *a],
                           cwd=d, check=True, capture_output=True)
        git('init', '-q', '-b', 'main')
        git('config', 'user.email', 'selftest@example.invalid')
        git('config', 'user.name', 'selftest')
        p = pathlib.Path(d, 'post.ts')
        p.write_text('const a = "It costs €1,200.";\n', encoding='utf-8')
        git('add', '.')
        git('commit', '-q', '-m', 'base')
        git('checkout', '-q', '-b', 'seo/clean')
        p.write_text(p.read_text(encoding='utf-8') + 'const b = "A plain sentence.";\n', encoding='utf-8')
        git('commit', '-q', '-am', 'clean')
        clean = sum(1 for _ in _quiet(scan_diff, 'main', d))
        git('checkout', '-q', '-b', 'seo/priced')
        p.write_text(p.read_text(encoding='utf-8') + 'const c = "It costs CHF 900.";\n', encoding='utf-8')
        git('commit', '-q', '-am', 'priced')
        priced = sum(1 for _ in _quiet(scan_diff, 'main', d))
        return clean, priced


def _quiet(fn, *a):
    """Run a scan with its printing captured, yield one item per hit."""
    import contextlib
    import io
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        n = fn(*a)
    return range(n)


# Files a branch could add to hide a line from a diff reader, each carrying one price. Every one
# must be counted.
DIFF_ATTACKS = [
    ('a file name git would quote', 'κόστος.ts', b'const c = "It costs CHF 900.";\n'),
    ('a NUL byte that makes git call the file binary', 'nul.ts', b'/* \0 */\nconst c = "It costs CHF 900.";\n'),
    ('a U+2028 inside the line', 'ls.ts', 'const c = "Hi. It costs CHF 900.";\n'.encode()),
    ('a bare carriage return inside the line', 'cr.ts', b'const c = "Hi.\rIt costs CHF 900.";\n'),
    ('a line starting "++ " before the price', 'pp.ts', b'const c = `Intro\n++ note\nIt costs CHF 900.`;\n'),
]


def diff_attacks():
    """Return the names of the attacks the diff run missed."""
    missed = []
    with tempfile.TemporaryDirectory() as d:
        def git(*a):
            subprocess.run(['git', '-c', 'commit.gpgsign=false', '-c', 'core.hooksPath=/dev/null', *a],
                           cwd=d, check=True, capture_output=True)
        git('init', '-q', '-b', 'main')
        git('config', 'user.email', 'selftest@example.invalid')
        git('config', 'user.name', 'selftest')
        pathlib.Path(d, 'base.ts').write_text('const a = 1;\n', encoding='utf-8')
        git('add', '.')
        git('commit', '-q', '-m', 'base')
        for name, fname, body in DIFF_ATTACKS:
            git('checkout', '-q', '-B', 'seo/attack', 'main')
            pathlib.Path(d, fname).write_bytes(body)
            git('add', '-A')
            git('commit', '-q', '-m', name)
            if sum(1 for _ in _quiet(scan_diff, 'main', d)) < 1:
                missed.append(name)
    return missed


SABOTAGES = [
    ('the pattern list is empty', lambda m: setattr(m, 'PATTERNS', [])),
    ('the whitespace class matches only nothing', lambda m: _rebuild(m, ws='')),
    ('the currency list loses its words', lambda m: _rebuild(m, currency='€|\\$|£')),
    ('added_lines yields nothing', lambda m: setattr(m, 'added_lines', lambda base, cwd='.': iter(()))),
    ('added_lines yields every line of the diff, removed ones too',
     lambda m: setattr(m, 'added_lines', _all_diff_lines)),
]


def _all_diff_lines(base, cwd='.'):
    out = subprocess.run(['git', 'diff', '-U9999', '--no-color', 'main...HEAD'], cwd=cwd,
                         capture_output=True, text=True, check=True).stdout
    for line in out.splitlines():
        if line[:1] in '+- ' and not line.startswith(('+++', '---')):
            yield 'x', 0, line[1:]


def _rebuild(m, ws=None, currency=None):
    """Rebuild PATTERNS from altered pieces by re-running this module's source with them swapped."""
    src = pathlib.Path(__file__).read_text(encoding='utf-8')
    ns = {'__name__': 'pricecheck_sabotage', '__file__': __file__}
    exec(compile(src, __file__, 'exec'), ns)
    if ws is not None:
        ns['WS'] = ws
    if currency is not None:
        ns['CURRENCY'] = currency
    block = src[src.index('K_FORM = '):src.index('\n\n\ndef scan_line')]
    exec(block, ns)
    m.PATTERNS = ns['PATTERNS']


def selftest():
    mod = sys.modules[__name__]
    failures = 0

    print('FIXTURES')
    bad = run_fixtures()
    for line, expected, got in bad:
        print(f'  x  {line!r}: expected {expected}, got {got}')
    failures += len(bad)
    print(f'  {"ok" if not bad else "x "} {len(FIXTURES) - len(bad)} of {len(FIXTURES)} lines classified as expected')

    print('\nDIFF MODE')
    clean, priced = diff_fixture()
    ok = clean == 0 and priced == 1
    failures += 0 if ok else 1
    print(f'  {"ok" if ok else "x "} a base that carries a price stays out of the count: '
          f'clean branch {clean} hits (want 0), priced branch {priced} (want 1)')

    print('\nDIFF ATTACKS')
    missed = diff_attacks()
    for name, _, _ in DIFF_ATTACKS:
        ok = name not in missed
        failures += 0 if ok else 1
        print(f'  {"ok" if ok else "x "} {name}: {"counted" if ok else "MISSED"}')

    print('\nSABOTAGES. Each one breaks the checker on purpose. Every line here must say ok,')
    print('which means the fixtures or the diff run NOTICED the break.')
    originals = {k: getattr(mod, k) for k in ('PATTERNS', 'added_lines')}
    for name, apply in SABOTAGES:
        apply(mod)
        try:
            noticed = bool(run_fixtures()) or diff_fixture() != (0, 1)
        finally:
            for k, v in originals.items():
                setattr(mod, k, v)
        failures += 0 if noticed else 1
        print(f'  {"ok" if noticed else "x "} {name}: {"caught" if noticed else "PASSED UNNOTICED"}')

    print(f'\n{"SELFTEST PASSED" if not failures else f"SELFTEST FAILED ({failures})"}')
    return 1 if failures else 0


if __name__ == '__main__':
    args = sys.argv[1:]
    if '--selftest' in args:
        sys.exit(selftest())
    if args[:1] == ['--diff'] and len(args) == 2:
        hits = scan_diff(args[1])
        print(f'pricecheck: {hits} price form(s) in the lines HEAD adds since {args[1]}')
        sys.exit(1 if hits else 0)
    if args and not any(a.startswith('--') for a in args):
        hits = scan_files(args)
        print(f'pricecheck: {hits} price form(s) in {len(args)} file(s)')
        sys.exit(1 if hits else 0)
    print(__doc__.split('USAGE')[1].split('THIS FILE')[0].rstrip())
    sys.exit(2)
