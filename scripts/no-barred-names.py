#!/usr/bin/env python3
"""no-barred-names.py: no name Charis keeps off this site may reach its source.

Added 2026-10-21 (offer-os gtm/broad-home-2026-10, BR-G02, decision BR-D26). The broad home
names clients for the first time, in a strip, on project pages and in copy, so the names he
keeps OFF this site need a gate before the first of those lines is written.

WHAT IS BARRED ON FIJI, his decisions of 2026-10-21 (BR-D26):

- PRODYNA, Smiling Machines, Deloitte, Apifon: roles he held as an employee. Never on a company
  site, profile or copy contract.
- Printty. His words: "printty no".
- "The Real World" and TRW. New Era Learning may be shown on Fiji; the program behind it never.
- ~~AKB, Aargauische, Kantonalbank. The bank is never shown on Fiji (F-D21).~~ Dropped 2026-10-22
  (BR-G04, decision BR-D35). His words: "feel free to use all the company references to both
  companies", and "just dont mention "Ο Τόπος Μου" on peak code consulting, everything else cross is
  fine". The bank may now be shown on Fiji, in the approved sentences of BR-D26 only, as text with
  no logo. Which sentences may ship is a copy contract rule (offer-os
  companies/fiji-solutions/site/03-copy-home.md), so this guard no longer lists the bank.
  ~~"everything else cross is fine"~~ no longer holds between the two company sites: superseded
  2026-10-26 by D-11, carried out 2026-10-27 (seo-plan-2026-10 B1), next item.
- Peak Code Consulting, by name or domain (added 2026-10-27, offer-os gtm/seo-plan-2026-10 B1, his decision
  D-11 of 2026-10-26): Fiji Solutions and Peak Code Consulting never name or link each other on their sites.
  Both may still show the same clients and case studies. charismoutafidis.com may name both; this guard does
  not read it. Matched as "Peak Code" with any whitespace or none, PEAK CODE, and the domain stem peakcode.

CASE SENSITIVE ON PURPOSE. `BusinessProcessAuditLanding.tsx` says "the real world reveals", which
is plain English and names nobody. A case-insensitive match would fire on it and on every future
sentence like it, and a gate that fires on normal writing gets switched off.

WHAT IT READS, stated rather than assumed: every .ts .tsx .js .jsx .mjs .cjs .json .md .mdx file
under src/components, src/app, src/data and src/lib, and src/translations.ts, EXCEPT the blog data
(src/data/blogs.ts and src/data/blog/). src/lib and src/translations.ts were added 2026-10-22 after
review: they hold the JSON-LD and the UI strings. The selftest walks a temporary tree with one file
per root and per extension, so a narrowed scope goes red there. A post may cite a Deloitte study, and posts never name clients anyway (SL-D4);
the SEO loop merges those files unattended, so they stay out of a gate it cannot answer.

COMMENTS ARE SKIPPED. A comment that opens and closes at the start of a line is cut off and the
rest of the line is read as code; after that, a line whose first characters are //, /*, * or {/*
is a source comment and never ships. Multi-word names match across any run of whitespace, a
no-break space included. On 2026-10-21 five comment lines named AKB, all F-D21 notes saying the bank stays OFF
this site; the skip covers them. Any other hit is either fixed or allowlisted below by the SHA-1
of the whole line and its file, with a reason, so editing the line revokes its entry.

This is a hard gate: it exits 1 on any hit. It runs in gates.yml only, never in seo-gates.yml.

Usage:
    python3 scripts/no-barred-names.py              scan, exit 1 on any hit
    python3 scripts/no-barred-names.py --selftest   fixtures and sabotages
"""

import hashlib
import os
import re
import sys

# --------------------------------------------------------------------------- the rule's data
BARRED = [
    ("PRODYNA", r"PRODYNA"),
    ("Smiling Machines", r"Smiling\s+Machines"),
    ("Deloitte", r"Deloitte"),
    ("Apifon", r"Apifon"),
    ("Printty", r"Printty"),
    ("The Real World", r"The\s+Real\s+World"),
    ("TRW", r"\bTRW\b"),
    # D-11 (seo-plan-2026-10 B1, 2026-10-27). No inline flag: the selftest's case sabotage prefixes one.
    ("Peak Code Consulting (D-11)", r"Peak\s*Code|PEAK\s*CODE|peakcode"),
]

ROOTS = ("src/components", "src/app", "src/data", "src/lib")
EXTRA_FILES = (os.path.join("src", "translations.ts"),)
EXCLUDE_FILES = {os.path.join("src", "data", "blogs.ts")}
EXCLUDE_DIRS = {os.path.join("src", "data", "blog")}
EXT = {".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json", ".md", ".mdx"}
COMMENT_START = ("//", "/*", "*", "{/*")
# A comment that opens and closes at the start of a line is cut off, and the rest is read as code.
LEADING_CLOSED = re.compile(r"^\s*(\{/\*.*?\*/\}|/\*.*?\*/)")

# (file, SHA-1 of the whole line without its newline) -> why it is correct as written. The path is
# part of the key, so an allowlisted line copied into another file fails there.
# Empty on 2026-10-21: every hit on main was a comment line.
ALLOW = {
    # line 389, added 2026-10-27 (seo-plan-2026-10 B1): the record of his decision, which never renders.
    ("src/data/projects.ts", "77b57b75c7fc30412b091119b36776de9d2fbb1e"):
        "permission.source of the archive client: records his BR-D35 answer word for word; not rendered (B1 live check)",
    # lines 71 and 80, added 2026-10-27 (B1): inner lines of two multi-line JSX comments, which never ship.
    ("src/components/Footer.tsx", "12581f86572a963c4d0e46dd74f850a4dca212a2"):
        "inside the GitHub link comment of the footer; a source comment",
    ("src/components/Footer.tsx", "98fd0775a8449e6ebaca62cb90ba86b7f667f71e"):
        "inside the X link comment of the footer; a source comment",
}


def sha1(line):
    return hashlib.sha1(line.encode("utf-8")).hexdigest()


def allow_key(rel, line):
    return (rel, sha1(line))


def code_of(line):
    """The part of the line that is code: a leading closed comment is cut off, and a line that
    opens a comment it does not close here, or continues one, is all comment."""
    while True:
        m = LEADING_CLOSED.match(line)
        if not m:
            break
        line = line[m.end():]
    return "" if line.lstrip().startswith(COMMENT_START) else line


def hits_in(text, rel="fixture"):
    """Return (line number, barred name, line) for each barred name in the code of a line."""
    out = []
    for n, line in enumerate(text.splitlines(), 1):
        if allow_key(rel, line) in ALLOW:
            continue
        code = code_of(line)
        for name, pat in BARRED:
            if re.search(pat, code):
                out.append((n, name, line))
    return out


def files(root="."):
    for top in ROOTS:
        for d, dirs, fs in os.walk(os.path.join(root, top)):
            rel_d = os.path.relpath(d, root)
            if any(rel_d == x or rel_d.startswith(x + os.sep) for x in EXCLUDE_DIRS):
                dirs[:] = []
                continue
            for f in sorted(fs):
                rel = os.path.join(rel_d, f)
                if os.path.splitext(f)[1] in EXT and rel not in EXCLUDE_FILES:
                    yield rel
    for rel in EXTRA_FILES:
        if os.path.exists(os.path.join(root, rel)):
            yield rel


def collect(root="."):
    found, scanned = [], 0
    for rel in files(root):
        scanned += 1
        with open(os.path.join(root, rel), encoding="utf-8") as fh:
            for n, name, line in hits_in(fh.read(), rel):
                found.append((rel, n, name, line))
    return found, scanned


def scan(root="."):
    found, scanned = collect(root)
    if scanned == 0:
        print("no-barred-names: FAILED, 0 files scanned. A gate that reads nothing passes nothing.")
        return 1
    if not found:
        print(f"no-barred-names: {scanned} files scanned, {len(ALLOW)} allowlisted, no barred name.")
        return 0
    print(f"no-barred-names: {len(found)} barred name(s) in {scanned} files scanned (BR-D26).")
    for rel, n, name, line in found:
        print(f"  {rel}:{n}: {name}   sha1 {sha1(line)}")
        print(f"      {line.strip()[:160]}")
    print("Remove the name. If the line is correct as written, add (path, sha1) to ALLOW with a reason.")
    return 1


# --------------------------------------------------------------------------- selftest
FIXTURES = [
    ("a barred employer in copy is caught", "  title: 'Built at PRODYNA',\n", 1),
    ("the bank in copy passes since BR-D35", "  <p>Trusted by Aargauische Kantonalbank</p>\n", 0),
    ("AKB as a word passes since BR-D35", "  text: 'Our AKB project',\n", 0),
    ("a barred former employer in a list is caught", "  ['Deloitte', 'Smiling Machines'],\n", 2),
    ("TRW as a word is caught", "  text: 'Inside TRW',\n", 1),
    ("TRW inside a longer word is not", "  const STRWX = 1;\n", 0),
    ("lower case plain English is not a name", "  text: 'the real world reveals it',\n", 0),
    # The three comment fixtures name a still barred name, so they fail when comments are read
    # (they named the bank until 2026-10-22, when BR-D35 took it off this list).
    ("a // comment line is skipped", "  // PRODYNA stays off every Fiji page.\n", 0),
    ("a * comment line is skipped", "   * The Deloitte role was employment.\n", 0),
    ("a JSX comment line is skipped", "  {/* Apifon never here */}\n", 0),
    ("code after a comment on the same line is still code", "  x = 'Printty'; // note\n", 1),
    ("a clean line is clean", "  title: 'Custom software in Thessaloniki',\n", 0),
    ("code after a closed JSX comment is read", "  {/* strip */} <li>Deloitte</li>\n", 1),
    ("code after a closed block comment is read", "  /* note */ title: 'Built at PRODYNA',\n", 1),
    ("a line led by a string is read", "    'Apifon',\n", 1),
    ("a name split by a no-break space is caught", "  name: 'Smiling\u00a0Machines',\n", 1),
    ("Peak Code Consulting in copy is caught (D-11)", "  a: 'Some of it through Peak Code Consulting',\n", 1),
    ("Peak Code without a space is caught (D-11)", "  a: 'PeakCode in Aarau',\n", 1),
    ("the Peak domain is caught (D-11)", "  href: 'https://www.peakcodeconsulting.ch',\n", 1),
    ("PEAK CODE in capitals is caught (D-11)", "  label: 'PEAK CODE',\n", 1),
    ("a comment naming Peak Code is skipped", "  // Peak Code never links this site.\n", 0),
    ("plain English peak is not a name", "  text: 'at peak season the code runs',\n", 0),
]


def _allow_failures():
    """An allowlisted line passes in its own file and fails in any other."""
    global ALLOW
    line = "  text: 'Printty',"
    saved, bad = ALLOW, []
    ALLOW = {("src/a.ts", sha1(line)): "test"}
    if hits_in(line + "\n", "src/a.ts"):
        bad.append("  an allowlisted line was reported in its own file")
    if not hits_in(line + "\n", "src/b.ts"):
        bad.append("  an allowlisted line passed in another file")
    ALLOW = saved
    return bad


# One file per root and per extension and each extra file, each holding one barred name, and one
# file in each excluded place.
TREE = {os.path.join(r, "x" + e): "  name: 'PRODYNA',\n" for r in ROOTS for e in sorted(EXT)}
TREE.update({f: "  name: 'PRODYNA',\n" for f in EXTRA_FILES})
EXCLUDED = {os.path.join("src", "data", "blogs.ts"): "  name: 'Deloitte',\n",
            os.path.join("src", "data", "blog", "post.ts"): "  name: 'Deloitte',\n"}


def _walk_failures():
    import tempfile
    with tempfile.TemporaryDirectory() as root:
        for rel, body in {**TREE, **EXCLUDED}.items():
            os.makedirs(os.path.dirname(os.path.join(root, rel)), exist_ok=True)
            with open(os.path.join(root, rel), "w", encoding="utf-8") as fh:
                fh.write(body)
        found, scanned = collect(root)
    if scanned != len(TREE) or len(found) != len(TREE):
        return [f"  file walk: expected {len(TREE)} files and hits, got {scanned} files, {len(found)} hits"]
    return []


def _fixture_failures():
    bad = []
    for name, src, want in FIXTURES:
        got = len(hits_in(src))
        if got != want:
            bad.append(f"  {name}: expected {want} hit(s), got {got}")
    return bad + _allow_failures() + _walk_failures()


def selftest():
    bad = _fixture_failures()
    print(f"FIXTURES: {len(FIXTURES)} cases, the allowlist path check and a {len(TREE)} file walk, "
          f"{len(bad)} failed")
    for b in bad:
        print(b)
    if bad:
        print("SELFTEST FAILED")
        return 1

    names = ("BARRED", "COMMENT_START", "LEADING_CLOSED", "ALLOW", "ROOTS", "EXT", "EXCLUDE_DIRS",
             "EXCLUDE_FILES", "EXTRA_FILES", "allow_key")
    saved = {k: globals()[k] for k in names}
    g = globals()
    sabotages = (
        ("names match nothing", lambda: g.update(BARRED=[("x", r"zzz-not-a-name")])),
        ("case folded", lambda: g.update(BARRED=[(n, "(?i)" + p) for n, p in saved["BARRED"]])),
        ("every line a comment", lambda: g.update(COMMENT_START=("",))),
        ("comments not skipped", lambda: g.update(COMMENT_START=(), LEADING_CLOSED=re.compile(r"(?!x)x"))),
        ("quote-led lines a comment", lambda: g.update(COMMENT_START=saved["COMMENT_START"] + ("'",))),
        ("closed comments hide code", lambda: g.update(LEADING_CLOSED=re.compile(r"^\s*(\{/\*|/\*).*"))),
        ("allowlist allows everything", lambda: g.update(ALLOW=_AllowAll())),
        ("allowlist ignores the path", lambda: g.update(allow_key=lambda rel, line: ("src/a.ts", sha1(line)))),
        ("a root dropped", lambda: g.update(ROOTS=saved["ROOTS"][1:])),
        (".tsx not read", lambda: g.update(EXT=saved["EXT"] - {".tsx"})),
        ("blog exclusion dropped", lambda: g.update(EXCLUDE_DIRS=set())),
        ("translations.ts not read", lambda: g.update(EXTRA_FILES=())),
    )
    unnoticed = []
    for label, apply in sabotages:
        g.update(saved)
        apply()
        f = _fixture_failures()
        print(f"SABOTAGE {label:28s} -> {len(f)} check(s) went red"
              + ("   <-- UNNOTICED" if not f else ""))
        if not f:
            unnoticed.append(label)
    g.update(saved)
    if _fixture_failures():
        print("RESTORE FAILED")
        return 1
    print("restore verified: checks green again")
    if unnoticed:
        print(f"SELFTEST FAILED: {len(unnoticed)} sabotage(s) passed unnoticed")
        return 1
    print("SELFTEST PASSED")
    return 0

class _AllowAll(dict):
    def __contains__(self, key):
        return True


if __name__ == "__main__":
    sys.exit(selftest() if "--selftest" in sys.argv else scan())
