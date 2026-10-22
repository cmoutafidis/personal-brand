#!/usr/bin/env python3
"""translation-parity.py: the English and Greek blocks of src/translations.ts hold the same keys,
in the same order, and no empty string.

Added 2026-10-21 (offer-os gtm/broad-home-2026-10, BR-G02). The broad home adds and deletes keys
in both locales at once (nav.cta, nav.projects, banner.*, and the challenges.* and solutions.*
keys leaving). The type of `translations` is Record<Language, Record<string, string>>, so the
compiler accepts a key that exists in one locale only, and createTranslationFunction then renders
the bare key on the other locale's page. The order rule keeps a diff of one block readable
against the other, which is how this file is reviewed.

WHAT IT READS: src/translations.ts only. Each locale block opens on a line `  en: {` or `  el: {`
and closes on `  },`. Inside, every line that is not blank and not a // comment must be one entry
`'key': value,` on one line; any other shape FAILS, since a line this script cannot read is a key
it cannot count.

This is a hard gate: it exits 1 on any defect, and it fails when it finds no block at all.

Usage:
    python3 scripts/translation-parity.py              check, exit 1 on any defect
    python3 scripts/translation-parity.py --selftest   fixtures and sabotages
"""

import re
import sys

PATH = "src/translations.ts"
LOCALES = ("en", "el")
OPEN = re.compile(r"^  (\w+): \{\s*$")
CLOSE = re.compile(r"^  \},?\s*$")
ENTRY = re.compile(r"""^\s*'([^']+)':\s*(.+?),?\s*$""")
# An empty or whitespace-only string, with or without a trailing // comment.
EMPTY = re.compile(r"""^('\s*'|"\s*"|`\s*`)\s*(,\s*//.*)?$""")


def parse(text):
    """Return ({locale: [(key, value)]}, [problems])."""
    blocks, problems, cur = {}, [], None
    for n, line in enumerate(text.splitlines(), 1):
        m = OPEN.match(line)
        if m and cur is None:
            cur = m.group(1)
            blocks[cur] = []
            continue
        if cur is None:
            continue
        if CLOSE.match(line):
            cur = None
            continue
        s = line.strip()
        if not s or s.startswith("//"):
            continue
        e = ENTRY.match(line)
        if not e:
            problems.append(f"line {n}: not a one-line 'key': value entry: {s[:100]}")
            continue
        blocks[cur].append((e.group(1), e.group(2).strip(), n))
    return blocks, problems


def check(text):
    blocks, problems = parse(text)
    for loc in LOCALES:
        if loc not in blocks:
            problems.append(f"no `{loc}` block found")
    if problems:
        return problems
    for loc in LOCALES:
        seen = set()
        for key, value, n in blocks[loc]:
            if key in seen:
                problems.append(f"{loc} line {n}: duplicate key '{key}'")
            seen.add(key)
            if EMPTY.match(value):
                problems.append(f"{loc} line {n}: empty string for '{key}'")
    first = [k for k, _, _ in blocks[LOCALES[0]]]
    for loc in LOCALES[1:]:
        other = [k for k, _, _ in blocks[loc]]
        for k in first:
            if k not in other:
                problems.append(f"'{k}' is in {LOCALES[0]} and missing from {loc}")
        for k in other:
            if k not in first:
                problems.append(f"'{k}' is in {loc} and missing from {LOCALES[0]}")
        if not problems and first != other:
            i = next(i for i, (a, b) in enumerate(zip(first, other)) if a != b)
            problems.append(f"order differs at entry {i + 1}: {LOCALES[0]} '{first[i]}', {loc} '{other[i]}'")
    return problems


def main():
    with open(PATH, encoding="utf-8") as fh:
        text = fh.read()
    problems = check(text)
    if problems:
        print(f"translation-parity: {len(problems)} defect(s) in {PATH}")
        for p in problems:
            print(f"  {p}")
        return 1
    blocks, _ = parse(text)
    print(f"translation-parity: {PATH}, {len(blocks['en'])} keys in each of "
          f"{', '.join(LOCALES)}, same order, none empty.")
    return 0


# --------------------------------------------------------------------------- selftest
def _src(en, el):
    return "export const t = {\n  en: {\n" + en + "  },\n  el: {\n" + el + "  },\n};\n"


FIXTURES = [
    ("equal blocks pass", _src("    'a': 'A',\n    'b': \"B\",\n", "    'a': 'Α',\n    'b': 'Β',\n"), 0),
    ("comments and blank lines are ignored",
     _src("    // note\n\n    'a': 'A',\n", "    'a': 'Α',\n"), 0),
    ("a key missing from el fails", _src("    'a': 'A',\n    'b': 'B',\n", "    'a': 'Α',\n"), 1),
    ("a key missing from en fails", _src("    'a': 'A',\n", "    'a': 'Α',\n    'b': 'Β',\n"), 1),
    ("a different order fails",
     _src("    'a': 'A',\n    'b': 'B',\n", "    'b': 'Β',\n    'a': 'Α',\n"), 1),
    ("an empty string fails", _src("    'a': '',\n", "    'a': 'Α',\n"), 1),
    ("an empty template literal fails", _src("    'a': 'A',\n", "    'a': ``,\n"), 1),
    ("a whitespace-only string fails", _src("    'a': ' ',\n", "    'a': 'Α',\n"), 1),
    ("an empty string before a comment fails", _src("    'a': '', // todo\n", "    'a': 'Α',\n"), 1),
    ("a duplicate key fails",
     _src("    'a': 'A',\n    'a': 'A2',\n", "    'a': 'Α',\n    'a': 'Α2',\n"), 2),
    ("a value split over two lines is two unreadable lines",
     _src("    'a':\n      'A',\n", "    'a': 'Α',\n"), 2),
    ("no blocks at all fails", "export const t = {};\n", 2),
]


def _fixture_failures():
    bad = []
    for name, src, want in FIXTURES:
        got = len(check(src))
        if got != want:
            bad.append(f"  {name}: expected {want} defect(s), got {got}")
    return bad


def selftest():
    global EMPTY, ENTRY, OPEN
    bad = _fixture_failures()
    print(f"FIXTURES: {len(FIXTURES)} cases, {len(bad)} failed")
    for b in bad:
        print(b)
    if bad:
        print("SELFTEST FAILED")
        return 1
    saved = (EMPTY, ENTRY, OPEN)
    sabotages = (
        ("empty never matches", lambda: globals().update(EMPTY=re.compile(r"^zzz$"))),
        ("any line is an entry", lambda: globals().update(ENTRY=re.compile(r"^\s*'?([^':]*)'?:?\s*(.*?),?\s*$"))),
        ("no block ever opens", lambda: globals().update(OPEN=re.compile(r"^zzz$"))),
    )
    unnoticed = []
    for label, apply in sabotages:
        EMPTY, ENTRY, OPEN = saved
        apply()
        f = _fixture_failures()
        print(f"SABOTAGE {label:24s} -> {len(f)} fixture(s) went red"
              + ("   <-- UNNOTICED" if not f else ""))
        if not f:
            unnoticed.append(label)
    EMPTY, ENTRY, OPEN = saved
    if _fixture_failures():
        print("RESTORE FAILED")
        return 1
    print("restore verified: fixtures green again")
    if unnoticed:
        print(f"SELFTEST FAILED: {len(unnoticed)} sabotage(s) passed unnoticed")
        return 1
    print("SELFTEST PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(selftest() if "--selftest" in sys.argv else main())
