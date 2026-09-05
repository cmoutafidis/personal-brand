#!/usr/bin/env python3
"""No mailbox the owner banned may reach a stranger. One file, three repos.

WHY THIS EXISTS
===============

On 2026-09-06 Charis answered a question about four public email addresses with a rule:

    "dont expose my "charis@" address, anything else, feel free to expose it. They all point to
     the same inbox, so that is fine."

The estate then measured itself. `charis@` appeared ZERO times on 106 of 106 live routes, and
**17 times in 14 source files**. Nine of those were `offer.guarantee.contact` values in nine
`offer.yaml` files, which `offer-build` reads and renders. The next build of any of nine offers
would have put the banned address back onto a public page.

Every gate in all three repos was green, and not one of them was buggy. They were green because
no checker in this estate had ever looked at an email address at all. The rule was written into
`companies/*/voice.md` as a HARD RULE, which is what a copy pass reads, and that is a prompt-level
guard rather than a gate.

    A RULE IN A MARKDOWN FILE IS NOT A GATE. Nobody runs a grep that lives in a document.

That sentence is this repo's own, from `gates.yml`, about the no-dash rule, which was enforced by a
pasted `grep` for months while bash globstar was off and it read one directory deep.

WHAT IT ASSERTS
===============

1. NO BANNED MAILBOX IN ANY BUILT PAGE. The build is what a stranger reads.
2. NO BANNED MAILBOX ANYWHERE UNDER `src/`. The source is what regenerates the build, and
   2026-09-06 was a decision applied to the artifact and never to the generator.

       WHEN A VALUE IS BANNED, GREP THE GENERATOR, NOT ONLY THE OUTPUT.

3. NO OBFUSCATED FORM OF ONE EITHER: HTML entity, hex entity, percent-encoding, `[at]`, `(at)`,
   a spaced ` at `, and the dot forms of the same. Obfuscation defeats a literal grep and defeats
   no scraper written this decade.
4. NO SPLIT-VARIABLE ASSEMBLY. `search.ch` publishes `charis@peakcodeconsulting.ch` by assembling
   it from two JavaScript variables, so a grep for the literal returns ZERO on a page that hands a
   visitor the address. That is measured, on a third-party host, and it is the shape a bundler
   produces by accident. This checker looks for a quoted value that is exactly a banned local part
   sitting near a quoted value that is exactly a company domain.

WHAT IT DELIBERATELY DOES NOT ASSERT
====================================

- **Anything about the mailboxes existing.** They stay open and stay in internal use. `charis@` is
  a Brevo list 4 subscriber, the sole subscriber on two SNS alert topics, and `MAIL_1`/`MAIL_3` on
  the VPS. The rule governs what a stranger can read, and nothing here reaches infrastructure.
- **Anything about git commit authorship.** `charismoutafidis@gmail.com` is the settled, correct
  commit identity, closed by him on 2026-09-06. The gmail ban covers marketing, directory and
  company surfaces. **It does not reach source control.** This checker never looks at git.
- **That any allowed address is PRESENT.** Most pages carry no email at all, and a gate demanding
  one would fire on ordinary work. A check that fires on normal work gets killed, and this estate
  has already lost a shipped feature that way.
- **Comments in source.** A comment naming the banned address in order to document the ban is
  internal, unpublished text. Stripped before scanning, as `no-shipped-dashes.py` does.
  ⚠️ **HTML comments in the BUILD are NOT stripped**, because `<!-- ... -->` ships to the browser.
  A source comment is not published. An HTML comment is.

  ⚠️ **COMMENT SYNTAX IS PER LANGUAGE AND STRIPPING THE WRONG THING MAKES THIS GATE READ LESS THAN
  IT CLAIMS.** `#` opens a comment in YAML and opens a HEADING in Markdown. A first draft of this
  file stripped `#` everywhere, so a banned address in a markdown heading would have been deleted
  before the scan and reported as clean. Markdown has no comment syntax at all, so `.md` is
  stripped of nothing. That is why `strip_comments` takes the extension.

THE ITERATION DOMAIN, STATED ON PURPOSE
=======================================

Three green gates once sat over one live defect and none of them was broken. The blind spot was
what each one iterated. So, explicitly: this reads `.next/server/app/**/*.html`, the client bundles
under `.next/static/**/*.js`, and every text file under `src/`. It does NOT read the sitemap, which
is the surface a route can be kept out of, and it does NOT read anything outside this repo.

⚠️ It FAILS rather than passes when the build directory is missing. A check that ticks on no input
is worse than no check.

RUN
===

    python3 scripts/no-published-private-contacts.py
    python3 scripts/no-published-private-contacts.py --selftest   # fixtures AND sabotages
    python3 scripts/no-published-private-contacts.py --list       # show every file scanned
    python3 scripts/no-published-private-contacts.py --source-only offers   # no build to read
"""

import hashlib
import os
import pathlib
import re
import sys

# ----------------------------------------------------------------------------------------------
# THE RULE'S DATA. His words, 2026-09-06, and the boundary in the same place as the rule, because
# an exposure rule stated without its boundary gets applied by the next reader to every surface.
# ----------------------------------------------------------------------------------------------
BANNED = (
    'charis@fijisolutions.net',
    'charis@peakcodeconsulting.ch',
    'charismoutafidis@gmail.com',
)

# Never flag these. All four reach the same inbox and he said so explicitly, which is the fact that
# made them safe to leave and which no fetch from a laptop could have established.
ALLOWED = (
    'info@fijisolutions.net',
    'contact@fijisolutions.net',
    'app@fijisolutions.net',
    'info@peakcodeconsulting.ch',
)

BANNED_LOCALS = ('charismoutafidis', 'charis')
COMPANY_DOMAINS = ('fijisolutions.net', 'peakcodeconsulting.ch', 'gmail.com')

# The @ written so a literal grep misses it and a scraper does not.
AT_FORMS = ('@', '&#64;', '&#x40;', '&commat;', '%40', '[at]', '(at)', '{at}', ' at ', '_at_')
# The same for the dot in the domain.
DOT_FORMS = ('.', '&#46;', '&#x2e;', '%2e', '[dot]', '(dot)', ' dot ', '_dot_')

ZERO_WIDTH = re.compile('[​‌‍⁠﻿]')

SRC_EXT = ('.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.md', '.mdx',
           '.yaml', '.yml', '.html', '.htm', '.css', '.scss', '.txt', '.svg')

BUILD_HTML = os.path.join('.next', 'server', 'app')
BUILD_JS = os.path.join('.next', 'static')


def load_allowlist(root):
    """SHA-1 of whole LINES that are allowed to name a banned mailbox, with a human note.

    ⚠️ Editing an allowlisted line changes its hash and revokes the entry. That is the point. A
    line that has been touched needs looking at again.

    ⛔ AN ALLOWLIST ENTRY IS ONLY EVER HONOURED IN SOURCE. A built page can never be allowlisted,
    whatever this file says, because the build is the thing a stranger reads.
    """
    path = pathlib.Path(root) / 'scripts' / 'private-contact-allowlist.txt'
    if not path.exists():
        return frozenset()
    out = set()
    for line in path.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        out.add(line.split()[0])
    return frozenset(out)


def digest(text):
    return hashlib.sha1(text.strip().encode('utf-8')).hexdigest()


def normalise(text):
    """Fold every obfuscation back to the plain address so one comparison catches all of them."""
    t = ZERO_WIDTH.sub('', text).lower()
    for form in AT_FORMS:
        if form != '@':
            t = t.replace(form, '@')
    for form in DOT_FORMS:
        if form != '.':
            t = t.replace(form, '.')
    return t


# Which comment syntax each extension actually has. Anything absent from both sets is stripped of
# nothing, which is the safe direction: it scans MORE text rather than less.
SLASH_COMMENTS = ('.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.css', '.scss')
HASH_COMMENTS = ('.yaml', '.yml')


def comment_style(path):
    ext = os.path.splitext(path)[1].lower()
    if ext in SLASH_COMMENTS:
        return 'slash'
    if ext in HASH_COMMENTS:
        return 'hash'
    return 'none'


def strip_comments(src, style='slash'):
    """Remove the comments this language actually has, leaving quoted spans alone.

    ⚠️ A comment marker INSIDE a string is not a comment. This estate shipped a checker that got
    that wrong, so the state machine below tracks quotes first and comments second.

    ⚠️ `style` is not decoration. `#` is a comment in YAML and a heading in Markdown, and stripping
    it in Markdown would silently delete a whole heading before the scan ever saw it.
    """
    if style == 'none':
        return src
    out = []
    i, n = 0, len(src)
    quote = None
    while i < n:
        c = src[i]
        if quote:
            out.append(c)
            if c == '\\' and i + 1 < n:
                out.append(src[i + 1])
                i += 2
                continue
            if c == quote:
                quote = None
            i += 1
            continue
        if c in '"\'`':
            quote = c
            out.append(c)
            i += 1
            continue
        if style == 'slash' and c == '/' and i + 1 < n and src[i + 1] == '/':
            while i < n and src[i] != '\n':
                i += 1
            continue
        if style == 'slash' and c == '/' and i + 1 < n and src[i + 1] == '*':
            i += 2
            while i + 1 < n and not (src[i] == '*' and src[i + 1] == '/'):
                i += 1
            i += 2
            continue
        if style == 'hash' and c == '#':
            while i < n and src[i] != '\n':
                i += 1
            continue
        out.append(c)
        i += 1
    return ''.join(out)


# A quoted value that is EXACTLY a banned local part. `"charis"` on its own is not something prose
# produces; it is what a minifier produces when it splits an address across two variables.
SPLIT_LOCAL = re.compile(r'["\']\s*(charis|charismoutafidis)\s*["\']', re.I)
SPLIT_DOMAIN = re.compile(r'["\']\s*(fijisolutions\.net|peakcodeconsulting\.ch|gmail\.com)\s*["\']', re.I)
SPLIT_WINDOW = 240


def scan_text(text, style='none', allow=None):
    """Return a list of (verdict, evidence). Verdicts: DEFECT, SPLIT.

    `style` is the comment syntax to strip first. Build output is always scanned with 'none',
    because an HTML comment is published.
    """
    found = []
    body = strip_comments(text, style) if style != 'none' else text
    for raw in body.splitlines():
        flat = normalise(raw)
        for addr in BANNED:
            n = flat.count(addr)
            if not n:
                continue
            # `allow` is None for build output, which can never be allowlisted.
            if allow is not None and digest(raw) in allow:
                found.append(('ALLOWED', '%s x%d' % (addr, n)))
            else:
                found.append(('DEFECT', '%s x%d  sha1=%s' % (addr, n, digest(raw))))
    # The split-variable shape, which every literal check above walks straight past.
    for m in SPLIT_LOCAL.finditer(body):
        lo = max(0, m.start() - SPLIT_WINDOW)
        window = body[lo:m.end() + SPLIT_WINDOW]
        d = SPLIT_DOMAIN.search(window)
        if d:
            found.append(('SPLIT', 'quoted %r near quoted %r' % (m.group(1), d.group(1))))
    return found


def iter_files(root, source_only=None):
    src = os.path.join(root, source_only or 'src')
    if os.path.isdir(src):
        for dirpath, _dirs, names in os.walk(src):
            for name in sorted(names):
                if name.endswith(SRC_EXT):
                    yield os.path.join(dirpath, name), True
    if source_only:
        return
    for build_root, exts in ((BUILD_HTML, ('.html',)), (BUILD_JS, ('.js',))):
        full = os.path.join(root, build_root)
        if not os.path.isdir(full):
            continue
        for dirpath, _dirs, names in os.walk(full):
            for name in sorted(names):
                if name.endswith(exts):
                    yield os.path.join(dirpath, name), False


def scan_repo(root='.', show_all=False, source_only=None):
    build_present = os.path.isdir(os.path.join(root, BUILD_HTML))
    defects = 0
    scanned = 0
    allowed_hits = 0
    allowed = load_allowlist(root)
    if source_only:
        print('⚠️  --source-only %s. This run reads NO BUILD, so it is not a statement about what' % source_only)
        print('    a stranger can read. It asserts only that the GENERATOR carries no banned value.')
        print('    Use it where there is no build to read, such as the offer knowledge base.')
        print('')
    for path, is_src in iter_files(root, source_only):
        try:
            text = open(path, encoding='utf-8', errors='replace').read()
        except OSError:
            continue
        scanned += 1
        style = comment_style(path) if is_src else 'none'
        for verdict, evidence in scan_text(text, style, allowed if is_src else None):
            if verdict == 'ALLOWED':
                allowed_hits += 1
                if show_all:
                    print('%-7s %s: %s' % (verdict, os.path.relpath(path, root), evidence))
                continue
            defects += 1
            print('%-7s %s: %s' % (verdict, os.path.relpath(path, root), evidence))
        if show_all:
            print('        scanned %s' % os.path.relpath(path, root))

    if not build_present and not source_only:
        print('')
        print('::error::GATE READ NO BUILD. %s is missing, so this run proves nothing about what' % BUILD_HTML)
        print('a stranger can read. Run `npm run build` first. A check that ticks on no input is')
        print('worse than no check, so this is a FAILURE rather than a pass.')
        return 1

    print('')
    print('%d files scanned, %d allowlisted, %d defects.' % (scanned, allowed_hits, defects))
    if defects:
        print('')
        print('The banned mailboxes are %s.' % ', '.join(BANNED))
        print('Every public field takes one of %s.' % ', '.join(ALLOWED))
        print('The mailboxes stay open and stay in internal use. This is about what a stranger reads.')
        print('')
        print('If a line legitimately NAMES the banned address as internal documentation, put its')
        print('sha1 above into scripts/private-contact-allowlist.txt with a note. ⛔ That works in')
        print('SOURCE only. A built page can never be allowlisted.')
    return 1 if defects else 0


# ----------------------------------------------------------------------------------------------
# FIXTURES. The GREEN ones carry as much weight as the red ones. A checker that reports everything
# gets turned off, and this estate lost a shipped feature in ninety minutes that way.
# ----------------------------------------------------------------------------------------------
FIXTURES = [
    ('plain banned address in a value',
     'const c = "charis@peakcodeconsulting.ch";', 'none', ['DEFECT']),
    ('the other banned company address',
     'const c = "charis@fijisolutions.net";', 'none', ['DEFECT']),
    ('the personal gmail on a page',
     '<a href="mailto:charismoutafidis@gmail.com">write</a>', 'none', ['DEFECT']),
    ('an allowed address is not a defect',
     'const c = "info@peakcodeconsulting.ch";', 'none', []),
    ('contact@ and app@ are allowed, he said so explicitly',
     '<p>contact@fijisolutions.net and app@fijisolutions.net</p>', 'none', []),
    ('the owner NAME is not an address',
     '<p>Charis Moutafidis, Geschaeftsfuehrer</p>', 'none', []),
    ('HTML entity obfuscation',
     '<p>charis&#64;fijisolutions.net</p>', 'none', ['DEFECT']),
    ('hex entity obfuscation',
     '<p>charis&#x40;fijisolutions.net</p>', 'none', ['DEFECT']),
    ('percent encoding in an href',
     '<a href="mailto:charis%40peakcodeconsulting.ch">x</a>', 'none', ['DEFECT']),
    ('the [at] and [dot] spelling',
     '<p>charis[at]peakcodeconsulting[dot]ch</p>', 'none', ['DEFECT']),
    ('zero width space inside the local part',
     '<p>charis​@fijisolutions.net</p>', 'none', ['DEFECT']),
    ('uppercase is the same address',
     '<p>Charis@FijiSolutions.net</p>', 'none', ['DEFECT']),
    # ⚠️ THE SEARCH.CH SHAPE. A literal grep returns zero on every one of these.
    ('split across two quoted variables, the search.ch shape',
     'var o={"e1":"charis","e2":"peakcodeconsulting.ch"};', 'none', ['SPLIT']),
    ('split with the halves further apart but inside the window',
     'var a="charis";' + ('/*' + 'x' * 100 + '*/') + 'var b="fijisolutions.net";', 'none', ['SPLIT']),
    ('a quoted domain with no quoted local part nearby is ordinary',
     'var b="fijisolutions.net";', 'none', []),
    ('the word charis inside prose near a domain is not an assembly',
     '<p>Charis runs peakcodeconsulting.ch</p>', 'none', []),
    # ⚠️ SOURCE vs BUILD. The distinction this checker turns on.
    ('a banned address inside a SOURCE comment is internal and allowed',
     '// contact was charis@peakcodeconsulting.ch until 2026-09-06\nconst c = "info@peakcodeconsulting.ch";',
     'slash', []),
    ('a banned address inside a SOURCE block comment is allowed too',
     '/* was charis@fijisolutions.net */\nconst c = "info@fijisolutions.net";', 'slash', []),
    ('a YAML hash comment recording a Brevo test contact is allowed',
     '# list 4, charis@fijisolutions.net is a deliberate test contact\ncontact: info@fijisolutions.net',
     'hash', []),
    # ⚠️ THE FIXTURE THAT CAUGHT A DEFECT IN THIS FILE WHILE IT WAS BEING WRITTEN. A first draft
    # stripped `#` in every file type, so this heading vanished before the scan and read as clean.
    ('a banned address in a MARKDOWN HEADING is a defect, because # is not a comment there',
     '# write to charis@peakcodeconsulting.ch\n\nsome copy', 'none', ['DEFECT']),
    # ⚠️ THE ONE THE WHOLE offer-os HALF TURNS ON. Nine of these were live on 2026-09-06.
    ('a YAML VALUE is a defect even though a YAML comment is not',
     'guarantee:\n  contact: charis@peakcodeconsulting.ch', 'hash', ['DEFECT']),
    # ⚠️ AND THE ONE THAT MAKES THE DISTINCTION LOAD BEARING.
    ('the same text in an HTML COMMENT in the BUILD is published and IS a defect',
     '<!-- contact was charis@peakcodeconsulting.ch -->', 'none', ['DEFECT']),
    ('a comment marker inside a string is not a comment',
     'const u = "https://x.test // charis@fijisolutions.net";', 'slash', ['DEFECT']),
]

# ⚠️ A SECOND FIXTURE FAMILY, ADDED BECAUSE A SABOTAGE PASSED UNNOTICED. `comment_style()` is
# called by scan_repo and never by scan_text, so every fixture above passes an explicit style and
# none of them could ever notice that the path-to-style mapping had been broken. The sabotage
# harness caught that, which is the whole reason it exists.
PATH_FIXTURES = [
    ('a .md file has no comment syntax at all', 'src/content/post.md', 'none'),
    ('a .mdx file likewise', 'src/content/post.mdx', 'none'),
    ('a .yaml file uses hash comments', 'offers/x/offer.yaml', 'hash'),
    ('a .yml file likewise', 'config.yml', 'hash'),
    ('a .ts file uses slash comments', 'src/data/x.ts', 'slash'),
    ('a .tsx file likewise', 'src/app/page.tsx', 'slash'),
    ('a built .html file is stripped of nothing', 'index.html', 'none'),
    ('an .svg file is stripped of nothing', 'public/logo.svg', 'none'),
    ('uppercase extensions resolve the same way', 'src/data/X.TS', 'slash'),
]

SABOTAGES = [
    ('normalise() stops folding obfuscations', lambda m: setattr(m, 'normalise', lambda t: t)),
    ('the banned list is emptied', lambda m: setattr(m, 'BANNED', ())),
    ('strip_comments() returns the source unchanged', lambda m: setattr(m, 'strip_comments', lambda s: s)),
    ('strip_comments() eats everything', lambda m: setattr(m, 'strip_comments', lambda s: '')),
    ('the split-variable local pattern matches nothing',
     lambda m: setattr(m, 'SPLIT_LOCAL', re.compile('(?!x)x'))),
    ('the split-variable domain pattern matches nothing',
     lambda m: setattr(m, 'SPLIT_DOMAIN', re.compile('(?!x)x'))),
    ('the split window shrinks to nothing', lambda m: setattr(m, 'SPLIT_WINDOW', 0)),
    ('normalise() lowercases nothing, so a capitalised address slips through',
     lambda m: setattr(m, 'normalise', lambda t: ZERO_WIDTH.sub('', t))),
    ('every file is treated as having hash comments, which eats markdown headings',
     lambda m: setattr(m, 'comment_style', lambda p: 'hash')),
    ('strip_comments ignores the style it is handed',
     lambda m: setattr(m, 'strip_comments', lambda s, style='slash': s.split('#')[0])),
    ('digest() returns a constant, so every line matches every allowlist entry',
     lambda m: setattr(m, 'digest', lambda t: 'constant')),
]


def selftest():
    mod = sys.modules[__name__]
    failures = 0

    print('FIXTURES')
    for name, src, style, expected in FIXTURES:
        got = [v for v, _ in scan_text(src, style)]
        ok = got == expected
        failures += 0 if ok else 1
        print('  %s %s: expected %s, got %s' % ('ok' if ok else 'x ', name, expected, got))

    print('')
    print('ALLOWLIST. An entry works in SOURCE and must NEVER work on a built page.')
    line = 'the old value was charis@peakcodeconsulting.ch and it was corrected 2026-09-06'
    got = [v for v, _ in scan_text(line, 'none', frozenset({digest(line)}))]
    ok = got == ['ALLOWED']
    failures += 0 if ok else 1
    print('  %s an allowlisted source line is allowed: got %s' % ('ok' if ok else 'x ', got))

    got = [v for v, _ in scan_text(line, 'none', frozenset({digest(line + ' edited')}))]
    ok = got == ['DEFECT']
    failures += 0 if ok else 1
    print('  %s editing an allowlisted line revokes it: got %s' % ('ok' if ok else 'x ', got))

    # ⛔ THE ONE THAT MATTERS MOST. Build output passes allow=None, so no allowlist can reach it.
    got = [v for v, _ in scan_text(line, 'none', None)]
    ok = got == ['DEFECT']
    failures += 0 if ok else 1
    print('  %s the same line in BUILD OUTPUT cannot be allowlisted: got %s' % ('ok' if ok else 'x ', got))

    print('')
    print('PATH FIXTURES. Which comment syntax each file type actually has.')
    for name, path, expected in PATH_FIXTURES:
        got = comment_style(path)
        ok = got == expected
        failures += 0 if ok else 1
        print('  %s %s: expected %s, got %s' % ('ok' if ok else 'x ', name, expected, got))

    print('')
    print('SABOTAGES. Each one breaks the checker on purpose. Every line must say ok, which means')
    print('the fixtures above NOTICED the break. A sabotage that passes unnoticed means the FIXTURE')
    print('SET is wrong rather than the sabotage.')
    keys = ('normalise', 'BANNED', 'strip_comments', 'SPLIT_LOCAL', 'SPLIT_DOMAIN', 'SPLIT_WINDOW',
            'comment_style', 'digest')
    originals = {k: getattr(mod, k) for k in keys}
    for name, apply in SABOTAGES:
        apply(mod)
        noticed = False
        for _n, _p, _exp in PATH_FIXTURES:
            try:
                if mod.comment_style(_p) != _exp:
                    noticed = True
                    break
            except Exception:
                noticed = True
                break
        if not noticed:
            _line = 'x charis@peakcodeconsulting.ch y'
            try:
                if [v for v, _ in mod.scan_text(_line, 'none', frozenset({mod.digest(_line + '!')}))] != ['DEFECT']:
                    noticed = True
            except Exception:
                noticed = True
        for fname, src, style, expected in FIXTURES:
            if noticed:
                break
            try:
                got = [v for v, _ in mod.scan_text(src, style)]
            except Exception:
                noticed = True
                break
            if got != expected:
                noticed = True
                break
        for k, v in originals.items():
            setattr(mod, k, v)
        failures += 0 if noticed else 1
        print('  %s %s: %s' % ('ok' if noticed else 'x ', name,
                               'caught' if noticed else 'PASSED UNNOTICED'))

    print('')
    print('SELFTEST PASSED' if not failures else 'SELFTEST FAILED (%d)' % failures)
    return 1 if failures else 0


if __name__ == '__main__':
    argv = sys.argv[1:]
    if '--selftest' in argv:
        sys.exit(selftest())
    only = None
    if '--source-only' in argv:
        i = argv.index('--source-only')
        if i + 1 >= len(argv):
            print('--source-only needs a directory, for example: --source-only offers')
            sys.exit(2)
        only = argv[i + 1]
    sys.exit(scan_repo('.', show_all='--list' in argv, source_only=only))
