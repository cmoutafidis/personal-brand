#!/usr/bin/env python3
"""Fail when an em dash or an en dash reaches a string that ships.

WHY THIS FILE EXISTS, AND WHY IT IS NOT A grep
==============================================

His rule is absolute and it is his own wording: "I dont like em dashes. Dont use them." No em dash
and no en dash in anything that ships. Until 2026-09-03 the entire mechanical enforcement of that
rule, in all three website repos, was one line pasted into CLAUDE.md:

    grep -n "—\\|–" src/data/**/*.ts

Bash does not enable globstar by default, so `src/data/**/*.ts` collapses to `src/data/*/*.ts` and
matches only files exactly one directory deep. Measured on 2026-09-03: it reached 8 of the 14 files
under peak-code's src/data, 26 of 28 under fiji's, and 3 of 6 under charismoutafidis's. It never
opened blogs.ts, which is 300 KB and holds every published article. It also never looked outside
src/data at all, so every route file, component and layout string was unguarded.

It also had the opposite fault. Sixteen dashes in this estate sit inside VERBATIM QUOTATIONS from
Google, OpenAI, Stripe, WordPress.org, Webflow, Camunda and Operaton, and six more are Google's own
Greek Search Console status labels. He decided on 2026-09-03 that all of those stay, because
editing somebody else's quoted sentence falsifies a citation. A checker that reports those twenty
two every time it runs is a checker that gets ignored, and a signal he ignores is one he eventually
deletes. So this script classifies rather than counts.

HOW IT CLASSIFIES
=================

1. Comments are removed first. A dash in a comment does not ship.
2. Inside each remaining string literal, spans delimited by the German quotation marks or by Greek
   guillemets are read as quotations. That is how this corpus marks a quotation, in both languages.
3. Anything left is checked against scripts/dash-allowlist.txt, which holds the SHA-1 of literals
   that are quotations carrying no marks in the source because the component renders them as a
   quote block. Four such literals exist today, all in the fiji repo.
4. Everything else is a defect and exits non-zero.

An edited quotation changes its SHA-1 and stops being allowlisted, which is the intended behaviour:
a quotation that has been touched needs looking at again.

USAGE
    python3 scripts/no-shipped-dashes.py            # check this repo
    python3 scripts/no-shipped-dashes.py --list     # print every dash with its classification
    python3 scripts/no-shipped-dashes.py --selftest # run the fixtures, including the sabotages

THIS FILE IS BYTE-IDENTICAL IN ALL THREE WEBSITE REPOS. They are separate remotes, so changing one
means changing the other two, and `diff` them if you touch any. Only dash-allowlist.txt differs.
"""

import hashlib
import pathlib
import re
import sys

DASH = re.compile('[—–]')
QUOTE_SPANS = ['„[^“”]*[“”]', '«[^«»]*»']


def strip_comments(src):
    """Blank out // and /* */ comments, preserving offsets and line numbers."""
    out = []
    i, n, state = 0, len(src), None
    while i < n:
        c = src[i]
        nxt = src[i + 1] if i + 1 < n else ''
        if state is None:
            if c == '/' and nxt == '/':
                state = '//'
                out.append('  ')
                i += 2
                continue
            if c == '/' and nxt == '*':
                state = '/*'
                out.append('  ')
                i += 2
                continue
            if c in '\'"`':
                state = c
            out.append(c)
            i += 1
            continue
        if state == '//':
            out.append('\n' if c == '\n' else ' ')
            if c == '\n':
                state = None
            i += 1
            continue
        if state == '/*':
            if c == '*' and nxt == '/':
                state = None
                out.append('  ')
                i += 2
                continue
            out.append('\n' if c == '\n' else ' ')
            i += 1
            continue
        # inside a string literal
        if c == '\\':
            out.append(c)
            out.append(nxt)
            i += 2
            continue
        if c == state:
            state = None
        out.append(c)
        i += 1
    return ''.join(out)


def literals(code):
    """Yield (start, end, text) for each string literal in comment-stripped code."""
    i, n = 0, len(code)
    while i < n:
        c = code[i]
        if c in '\'"`':
            q = c
            j = i + 1
            while j < n:
                if code[j] == '\\':
                    j += 2
                    continue
                if code[j] == q:
                    break
                j += 1
            yield (i + 1, j, code[i + 1:j])
            i = j + 1
            continue
        i += 1


def load_allowlist(root):
    path = pathlib.Path(root) / 'scripts' / 'dash-allowlist.txt'
    if not path.exists():
        return set()
    out = set()
    for line in path.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        out.add(line.split()[0])
    return out


def digest(text):
    return hashlib.sha1(text.encode('utf-8')).hexdigest()


def scan_text(code, allowed):
    """Return a list of (offset, verdict) for every dash in shipped strings."""
    found = []
    for start, end, text in literals(code):
        if not DASH.search(text):
            continue
        spans = []
        for pat in QUOTE_SPANS:
            spans += [(m.start(), m.end()) for m in re.finditer(pat, text, re.S)]
        allow = digest(text) in allowed
        for m in DASH.finditer(text):
            if any(a <= m.start() < b for a, b in spans):
                verdict = 'QUOTED'
            elif allow:
                verdict = 'ALLOWED'
            else:
                verdict = 'DEFECT'
            found.append((start + m.start(), verdict, text))
    return found


def scan_repo(root, show_all=False):
    root = pathlib.Path(root)
    allowed = load_allowlist(root)
    src = root / 'src'
    if not src.is_dir():
        print(f'no src/ directory under {root}')
        return 1
    defects = 0
    counts = {'QUOTED': 0, 'ALLOWED': 0, 'DEFECT': 0}
    files = [p for p in sorted(src.rglob('*')) if p.suffix in ('.ts', '.tsx')]
    for f in files:
        raw = f.read_text(encoding='utf-8')
        code = strip_comments(raw)
        for off, verdict, text in scan_text(code, allowed):
            counts[verdict] += 1
            line = code[:off].count('\n') + 1
            if verdict == 'DEFECT':
                defects += 1
            if verdict == 'DEFECT' or show_all:
                snippet = raw.splitlines()[line - 1].strip()[:120]
                mark = 'x' if verdict == 'DEFECT' else 'ok'
                print(f'  {mark} {verdict:8} {f.relative_to(root)}:{line}  {snippet}')
                if verdict == 'DEFECT':
                    print(f'       sha1 of the literal, if this is a quotation: {digest(text)}')
    print(
        f'\n{len(files)} files read. '
        f'{counts["QUOTED"]} in marked quotations, {counts["ALLOWED"]} allowlisted, '
        f'{counts["DEFECT"]} defects.'
    )
    return 1 if defects else 0


# ----------------------------------------------------------------------------------------------
# FIXTURES. Each is (name, source, expected verdicts). The point of the negative fixtures is that a
# checker which reports nothing passes silently, and a checker which reports everything gets turned
# off. Both failure modes have happened in this estate.
# ----------------------------------------------------------------------------------------------
FIXTURES = [
    ('plain dash in a shipped string', "const a = 'go live — then measure';", ['DEFECT']),
    ('en dash in a shipped string', "const a = '2030–2032';", ['DEFECT']),
    ('dash in a line comment', "// go live — then measure\nconst a = 'clean';", []),
    # ⚠️ THE ONE ABOVE PROVES LESS THAN IT LOOKS. An unstripped `// go live — then measure` contains
    # no quote character, so literals() walks past it either way and the fixture passes even when
    # comment stripping is removed entirely. The sabotage harness caught that. A comment has to
    # contain a QUOTED span before stripping it changes the answer, and comments in these repos
    # quote strings constantly.
    ('dash inside a quoted span inside a comment',
     '// he said \"go live — then measure\"\nconst a = \'clean\';', []),
    ('dash in a block comment', "/* go live — then measure */\nconst a = 'clean';", []),
    ('dash inside German quotation marks', "const a = '„no tier — free“';", ['QUOTED']),
    ('dash inside Greek guillemets', "const a = '«crawled — not indexed»';", ['QUOTED']),
    ('dash outside the guillemets on the same line',
     "const a = '«quoted» and then mine — here';", ['DEFECT']),
    ('two dashes, one quoted and one not',
     "const a = '«one — two» plus mine — here';", ['QUOTED', 'DEFECT']),
    ('no dash at all', "const a = 'perfectly ordinary copy';", []),
    ('hyphen is not a dash', "const a = 'go-live is one word';", []),
    ('dash in a template literal', 'const a = `go live — then measure`;', ['DEFECT']),
    ('comment marker inside a string is not a comment',
     "const a = 'https://x.test // not a comment — here';", ['DEFECT']),
]

SABOTAGES = [
    ('strip_comments returns the source unchanged', lambda m: setattr(m, 'strip_comments', lambda s: s)),
    ('the dash pattern matches nothing', lambda m: setattr(m, 'DASH', re.compile('(?!x)x'))),
    ('every span counts as a quotation', lambda m: setattr(m, 'QUOTE_SPANS', ['[\\s\\S]*'])),
    ('literals() yields nothing', lambda m: setattr(m, 'literals', lambda code: iter(()))),
]


def selftest():
    import copy
    mod = sys.modules[__name__]
    failures = 0

    print('FIXTURES')
    for name, src, expected in FIXTURES:
        got = [v for _, v, _ in scan_text(strip_comments(src), set())]
        ok = got == expected
        failures += 0 if ok else 1
        print(f'  {"ok" if ok else "x "} {name}: expected {expected}, got {got}')

    print('\nALLOWLIST')
    text = 'crawled — not indexed'
    src = f"const a = '{text}';"
    got = [v for _, v, _ in scan_text(strip_comments(src), {digest(text)})]
    ok = got == ['ALLOWED']
    failures += 0 if ok else 1
    print(f'  {"ok" if ok else "x "} an allowlisted literal is allowed: got {got}')
    got = [v for _, v, _ in scan_text(strip_comments(src), {digest(text + ' edited')})]
    ok = got == ['DEFECT']
    failures += 0 if ok else 1
    print(f'  {"ok" if ok else "x "} editing an allowlisted literal revokes it: got {got}')

    print('\nSABOTAGES. Each one breaks the checker on purpose. Every line here must say ok,')
    print('which means the fixtures above NOTICED the break. A sabotage that passes unnoticed')
    print('is a fixture set that proves nothing.')
    originals = {k: getattr(mod, k) for k in ('strip_comments', 'DASH', 'QUOTE_SPANS', 'literals')}
    for name, apply in SABOTAGES:
        apply(mod)
        noticed = False
        for fname, src, expected in FIXTURES:
            got = [v for _, v, _ in scan_text(mod.strip_comments(src), set())]
            if got != expected:
                noticed = True
                break
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
    sys.exit(scan_repo('.', show_all='--list' in args))
