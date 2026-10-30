#!/usr/bin/env python3
"""Refuse any blog change of an SEO loop branch that is more than data (offer-os gtm/seo-loop-2026-10, S08).

WHY THIS FILE EXISTS
====================

A post is a TypeScript module. The allowlist of seo-gates limits which paths a loop branch may change, and
nothing limited what the code in those paths does: an `import`, a function call or a `process.env` read in a
post would run in the gate's build, in Vercel's build and in production. Every page also renders its JSON-LD
from the post, so a string holding `</script>` could leave the tag. The S04 review found both, and he chose on
2026-10-19 to close them in S08 (SL-D28). This checker admits a changed post only when it is plain data:

  Fiji (src/data/blog/<slug>.ts, one file per post)
    exactly `import type {BlogPost} from '@/types/blog';`, then `const post: BlogPost = <literal>;`, then
    `export default post;`, with comments anywhere. The file name, `id` and `slug` agree.
    src/data/blogs.ts may only gain lines, each `import <name> from './blog/<slug>';` or `    <name>,`,
    and each added array name is an added import.
  Peak Code (src/data/blogs.ts, every post inline)
    everything outside the entries of `blogData.de` and `blogData.en` stays byte for byte as on main;
    an entry that differs from every entry on main is a changed post and must be a literal; no entry of
    main may disappear except one replaced by a changed entry with the same `id`.
    public/sitemap.xml may only gain `<url>` blocks for blog paths and change `<lastmod>` lines.

A literal is an object, array, single or double quoted string, number, true, false or null: no identifier,
call, template, spread, computed key or regex. Every post is then held to the BlogPost shape of
src/types/blog.ts, and to two more rules:

  - every `href` and source `url` is a site path or `https://` on a host listed in scripts/seo-hosts.txt;
  - no string holds `<`, `>`, a backslash sequence other than \\' \\" \\\\ \\n, or a control character.

seo-gates takes this file and seo-hosts.txt from main, so a branch cannot loosen either for itself.

ROLLBACK MODE (S09, 2026-10-20)
===============================

A branch named seo/rollback-<slug> is the revert of one merged loop branch (/opt/seo/bin/rollback on the
VPS). The branch name comes from --branch, or from GITHUB_REF_NAME, which Actions sets on every push. On such
a branch one more shape passes, the removal of exactly one post and nothing else:

  Fiji        src/data/blog/<slug>.ts deleted, and src/data/blogs.ts loses exactly that file's import line
              and its one entry line; no other path changes.
  Peak Code   src/data/blogs.ts loses the whole entries of one id from blogData.de and/or blogData.en,
              every other entry stays as on main, and public/sitemap.xml loses only the <url> blocks of
              that post's blog paths; no other path changes.

A post that another post names as its twinSlug is refused: removing one half of a pair would leave the other
half declaring a page that answers 404. Any other diff on a rollback branch is held to the rules above, so
the revert of a refresh or of a comment passes when the old version passes them.

    python3 scripts/seo-content-check.py --diff origin/main                  check HEAD against the base
    python3 scripts/seo-content-check.py --diff origin/main --branch NAME    the same, as branch NAME
    python3 scripts/seo-content-check.py --selftest                          prove every rule goes red
"""
import difflib
import json
import os
import re
import subprocess
import sys
import tempfile
import unicodedata
import xml.etree.ElementTree as ET

POST_KEYS = {'id', 'slug', 'title', 'metaTitle', 'excerpt', 'body', 'author', 'publishedAt', 'updatedAt',
             'readingTime', 'tags', 'twinSlug', 'hero'}
POST_REQUIRED = {'id', 'slug', 'title', 'excerpt', 'body', 'publishedAt', 'readingTime', 'tags'}
SLUG = re.compile(r'[a-z0-9]+(?:-[a-z0-9]+)*')
DATE = re.compile(r'\d{4}-\d{2}-\d{2}')
SITE_PATH = re.compile(r'/(?:[a-z0-9]+(?:[-_][a-z0-9]+)*(?:/[a-z0-9]+(?:[-_][a-z0-9]+)*)*)?(?:#[a-z0-9]+(?:[-_][a-z0-9]+)*)?')
URL = re.compile(r"https://([a-z0-9.-]+)(?:/[A-Za-z0-9._~:/?#\[\]@!$&'()*+,;=%-]*)?")


class Bad(Exception):
    pass


# ---------------------------------------------------------------- a tokenizer for the literal subset

TOKEN = re.compile(r'''
    (?P<ws>\s+)
  | (?P<lcomment>//[^\n]*)
  | (?P<bcomment>/\*.*?\*/)
  | (?P<str>'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*")
  | (?P<num>\d+(?:\.\d+)?)
  | (?P<ident>[A-Za-z_$][A-Za-z0-9_$]*)
  | (?P<punct>[{}\[\]():;,=@/.])
''', re.S | re.X)


# JavaScript ends a // comment at any of these, this tokenizer at \n only, so a file holding one could hide code
# inside what reads here as a comment (S08 review, 2026-10-19). A post never needs them.
ODD_BREAKS = re.compile('[\r\x85\u2028\u2029]')


def tokens(src):
    if ODD_BREAKS.search(src):
        raise Bad('a line break other than \\n (CR, U+0085, U+2028 or U+2029)')
    out, i = [], 0
    while i < len(src):
        m = TOKEN.match(src, i)
        if not m:
            raise Bad(f'unexpected character {src[i]!r} at offset {i}')
        kind = m.lastgroup
        if kind == 'punct' and m.group() == '.' and src.startswith('...', i):
            raise Bad('a spread is never data')
        if kind not in ('ws', 'lcomment', 'bcomment'):
            out.append((kind, m.group(), m.start(), m.end()))
        i = m.end()
    return out


ESCAPE = re.compile(r"\\(.)", re.S)


def unquote(raw):
    body = raw[1:-1]

    def rep(m):
        c = m.group(1)
        if c in ("'", '"', '\\'):
            return c
        if c == 'n':
            return '\n'
        raise Bad(f'escape \\{c} in a string')
    return ESCAPE.sub(rep, body)


class Parser:
    def __init__(self, toks):
        self.t, self.i = toks, 0

    def peek(self, k=0):
        return self.t[self.i + k] if self.i + k < len(self.t) else (None, None, None, None)

    def take(self, kind=None, text=None):
        tok = self.peek()
        if tok[0] is None:
            raise Bad('the file ends early')
        if (kind and tok[0] != kind) or (text is not None and tok[1] != text):
            raise Bad(f'expected {text or kind}, found {tok[1]!r}')
        self.i += 1
        return tok

    def value(self):
        kind, text, _, _ = self.peek()
        if kind == 'str':
            self.i += 1
            return unquote(text)
        if kind == 'num':
            self.i += 1
            return float(text) if '.' in text else int(text)
        if kind == 'ident' and text in ('true', 'false', 'null'):
            self.i += 1
            return {'true': True, 'false': False, 'null': None}[text]
        if text == '{':
            return self.obj()
        if text == '[':
            return self.arr()
        raise Bad(f'{text!r} is not a literal (an identifier, a call or an expression is never data)')

    def obj(self):
        self.take(text='{')
        out = {}
        while self.peek()[1] != '}':
            kind, text, _, _ = self.take()
            if kind == 'ident':
                key = text
            elif kind == 'str':
                key = unquote(text)
            else:
                raise Bad(f'key {text!r}: only plain keys are data')
            if key in out:
                raise Bad(f'key {key!r} twice')
            self.take(text=':')
            out[key] = self.value()
            if self.peek()[1] == ',':
                self.i += 1
            elif self.peek()[1] != '}':
                raise Bad(f'expected , or }} after key {key!r}')
        self.take(text='}')
        return out

    def arr(self):
        self.take(text='[')
        out = []
        while self.peek()[1] != ']':
            out.append(self.value())
            if self.peek()[1] == ',':
                self.i += 1
            elif self.peek()[1] != ']':
                raise Bad('expected , or ] in an array')
        self.take(text=']')
        return out


def literal(src):
    p = Parser(tokens(src))
    v = p.value()
    if p.i != len(p.t):
        raise Bad('text after the literal')
    return v


# ---------------------------------------------------------------- the BlogPost shape

def odd_char(c):
    """Why a character has no place in a loop post, or None. Invisible format characters, soft hyphens, odd
    spaces and look-alike letters from other scripts would let a name, a price or a dash slip past the
    word checks that follow (S08 review, 2026-10-19), so a post holds Latin and Greek letters, digits,
    marks, punctuation and the plain space only."""
    cat = unicodedata.category(c)
    if cat in ('Cc', 'Cf', 'Co', 'Cs', 'Cn') or c in '\u00ad\u034f' or 0xFE00 <= ord(c) <= 0xFE0F:
        return f'U+{ord(c):04X} is invisible or a control character'
    if cat.startswith('Z') and c != ' ':
        return f'U+{ord(c):04X} is a space other than the plain space'
    if cat.startswith('L') and not unicodedata.name(c, '').startswith(('LATIN', 'GREEK')):
        return f'U+{ord(c):04X} is a letter outside the Latin and Greek scripts'
    if cat.startswith('M') and not unicodedata.name(c, '').startswith(('COMBINING', 'GREEK')):
        return f'U+{ord(c):04X} is an unusual mark'
    return None


def check_string(s, where):
    if not isinstance(s, str):
        raise Bad(f'{where}: a string was expected')
    if '<' in s or '>' in s:
        raise Bad(f'{where}: < or > in a string')
    for c in s:
        why = odd_char(c)
        if why:
            raise Bad(f'{where}: {why}')


def check_link(u, where, hosts):
    check_string(u, where)
    if SITE_PATH.fullmatch(u):
        return
    m = URL.fullmatch(u)
    if not m:
        raise Bad(f'{where}: {u!r} is neither a site path nor an https URL')
    if m.group(1) not in hosts:
        raise Bad(f'{where}: host {m.group(1)} is not in scripts/seo-hosts.txt')


def check_inlines(runs, where, hosts):
    if not isinstance(runs, list) or not runs:
        raise Bad(f'{where}: a non-empty list of text runs was expected')
    for n, r in enumerate(runs):
        w = f'{where}[{n}]'
        if isinstance(r, str):
            check_string(r, w)
            continue
        if not isinstance(r, dict) or not set(r) <= {'text', 'href', 'strong'} or 'text' not in r:
            raise Bad(f'{w}: a run is a string or {{text, href?, strong?}}')
        check_string(r['text'], w)
        if 'href' in r and 'strong' in r:
            raise Bad(f'{w}: href and strong together')
        if 'href' in r:
            check_link(r['href'], w, hosts)
        if 'strong' in r and r['strong'] is not True:
            raise Bad(f'{w}: strong is true or absent')


BLOCK_KEYS = {
    'heading': ({'type', 'text'}, set()),
    'subheading': ({'type', 'text'}, set()),
    'paragraph': ({'type', 'text'}, set()),
    'note': ({'type', 'text'}, set()),
    'list': ({'type', 'items'}, {'ordered'}),
    'table': ({'type', 'caption', 'head', 'rows'}, set()),
    'faq': ({'type', 'heading', 'items'}, set()),
    'sources': ({'type', 'heading', 'items'}, set()),
    'cta': ({'type', 'heading', 'text', 'label', 'href'}, set()),
    'figure': ({'type', 'figure'}, set()),
}

# 2026-10-30 (offer-os gtm/seo-plan-2026-10 D10): a figure block, and Fiji's post-level `hero`, name a diagram by
# id. The id must be in src/data/blog-figures.json, which a loop branch cannot change (the seo-gates allowlist),
# so a post can only show a diagram a person drew and reviewed. Peak's BlogPost type has no `hero`; tsc refuses
# one there. Read once by run_diff; the selftest sets it.
FIGURES = set()


def check_figure(fid, where):
    if not isinstance(fid, str) or fid not in FIGURES:
        raise Bad(f'{where}: figure {fid!r} is not in src/data/blog-figures.json')


def check_block(b, where, hosts):
    if not isinstance(b, dict) or b.get('type') not in BLOCK_KEYS:
        raise Bad(f'{where}: unknown block')
    need, opt = BLOCK_KEYS[b['type']]
    if not need <= set(b) <= need | opt:
        raise Bad(f'{where}: keys {sorted(b)} for a {b["type"]} block')
    t = b['type']
    if t in ('heading', 'subheading'):
        check_string(b['text'], where)
    elif t in ('paragraph', 'note'):
        check_inlines(b['text'], where, hosts)
    elif t == 'list':
        if 'ordered' in b and not isinstance(b['ordered'], bool):
            raise Bad(f'{where}: ordered is a boolean')
        if not isinstance(b['items'], list) or not b['items']:
            raise Bad(f'{where}: items')
        for n, it in enumerate(b['items']):
            check_inlines(it, f'{where}.items[{n}]', hosts)
    elif t == 'table':
        check_string(b['caption'], where)
        if not isinstance(b['head'], list) or not b['head']:
            raise Bad(f'{where}: head')
        for h in b['head']:
            check_string(h, where)
        if not isinstance(b['rows'], list) or not b['rows']:
            raise Bad(f'{where}: rows')
        for n, row in enumerate(b['rows']):
            if not isinstance(row, list) or len(row) != len(b['head']):
                raise Bad(f'{where}.rows[{n}]: a row has one cell per head column')
            for c, cell in enumerate(row):
                check_inlines(cell, f'{where}.rows[{n}][{c}]', hosts)
    elif t == 'faq':
        check_string(b['heading'], where)
        if not isinstance(b['items'], list) or not b['items']:
            raise Bad(f'{where}: items')
        for n, it in enumerate(b['items']):
            if not isinstance(it, dict) or set(it) != {'q', 'a'}:
                raise Bad(f'{where}.items[{n}]: {{q, a}}')
            check_string(it['q'], where)
            check_string(it['a'], where)
    elif t == 'sources':
        check_string(b['heading'], where)
        if not isinstance(b['items'], list) or not b['items']:
            raise Bad(f'{where}: items')
        for n, it in enumerate(b['items']):
            if not isinstance(it, dict) or set(it) != {'label', 'url'}:
                raise Bad(f'{where}.items[{n}]: {{label, url}}')
            check_string(it['label'], where)
            check_link(it['url'], f'{where}.items[{n}]', hosts)
    elif t == 'cta':
        for k in ('heading', 'text', 'label'):
            check_string(b[k], where)
        check_link(b['href'], where, hosts)
    elif t == 'figure':
        check_figure(b['figure'], where)


def check_post(p, hosts, where='post'):
    if not isinstance(p, dict):
        raise Bad(f'{where}: a post is an object')
    keys = set(p)
    if not POST_REQUIRED <= keys <= POST_KEYS:
        raise Bad(f'{where}: keys {sorted(keys)}')
    for k in ('id', 'slug'):
        if not isinstance(p[k], str) or not SLUG.fullmatch(p[k]):
            raise Bad(f'{where}: {k} is a plain ASCII slug')
    if 'twinSlug' in p and (not isinstance(p['twinSlug'], str) or not SLUG.fullmatch(p['twinSlug'])):
        raise Bad(f'{where}: twinSlug is a plain ASCII slug')
    for k in ('title', 'metaTitle', 'excerpt', 'author'):
        if k in p:
            check_string(p[k], f'{where}.{k}')
    for k in ('publishedAt', 'updatedAt'):
        if k in p and (not isinstance(p[k], str) or not DATE.fullmatch(p[k])):
            raise Bad(f'{where}: {k} is YYYY-MM-DD')
    if not isinstance(p['readingTime'], int) or isinstance(p['readingTime'], bool) or not 1 <= p['readingTime'] <= 60:
        raise Bad(f'{where}: readingTime is a whole number of minutes')
    if not isinstance(p['tags'], list) or not p['tags']:
        raise Bad(f'{where}: tags')
    for t in p['tags']:
        check_string(t, f'{where}.tags')
    if 'hero' in p:
        check_figure(p['hero'], f'{where}.hero')
    if not isinstance(p['body'], list) or not p['body']:
        raise Bad(f'{where}: body')
    for n, b in enumerate(p['body']):
        check_block(b, f'{where}.body[{n}]', hosts)


# ---------------------------------------------------------------- the two repo layouts

def fiji_post_file(src, name, hosts):
    toks = tokens(src)
    head = [t[1] for t in toks[:9]]
    if head != ['import', 'type', '{', 'BlogPost', '}', 'from', "'@/types/blog'", ';', 'const']:
        raise Bad(f'{name}: must open with import type {{BlogPost}} from \'@/types/blog\'; const post')
    if [t[1] for t in toks[9:13]] != ['post', ':', 'BlogPost', '=']:
        raise Bad(f'{name}: must declare const post: BlogPost =')
    if [t[1] for t in toks[-4:]] != ['export', 'default', 'post', ';'] or toks[-5][1] != ';':
        raise Bad(f'{name}: must end with the literal, ; and export default post;')
    p = Parser(toks[13:-5])
    post = p.value()
    if p.i != len(p.t):
        raise Bad(f'{name}: text after the literal')
    check_post(post, hosts, name)
    slug = os.path.basename(name)[:-3]
    if post['id'] != slug or post['slug'] != slug:
        raise Bad(f'{name}: id and slug must equal the file name')
    return post


FIJI_IMPORT = re.compile(r"import ([A-Za-z][A-Za-z0-9]*) from '\./blog/([a-z0-9]+(?:-[a-z0-9]+)*)';")
FIJI_ENTRY = re.compile(r'    ([A-Za-z][A-Za-z0-9]*),')


def fiji_index(base, head):
    sm = difflib.SequenceMatcher(a=base.splitlines(), b=head.splitlines(), autojunk=False)
    imports, entries = {}, []
    for op, a1, a2, b1, b2 in sm.get_opcodes():
        if op == 'equal':
            continue
        if op != 'insert':
            raise Bad('src/data/blogs.ts: a loop branch may only add lines there')
        for line in head.splitlines()[b1:b2]:
            m, e = FIJI_IMPORT.fullmatch(line), FIJI_ENTRY.fullmatch(line)
            if m:
                imports[m.group(1)] = m.group(2)
            elif e:
                entries.append(e.group(1))
            else:
                raise Bad(f'src/data/blogs.ts: added line {line!r} is neither a post import nor an entry')
    for e in entries:
        if e not in imports:
            raise Bad(f'src/data/blogs.ts: entry {e} has no added import')
    return imports


def split_entries(src):
    """Return (outside_chunks, {locale: [(entry_text, entry_literal_src)]}) for Peak Code's blogs.ts."""
    toks = tokens(src)
    idx = None
    for n in range(len(toks) - 6):
        if [t[1] for t in toks[n:n + 7]] == ['export', 'const', 'blogData', ':', 'BlogData', '=', '{']:
            idx = n + 6
    if idx is None:
        raise Bad('src/data/blogs.ts: export const blogData: BlogData = { not found')
    p = Parser(toks)
    p.i = idx + 1
    chunks, locales, cursor = [], {}, 0
    while p.peek()[1] != '}':
        key = p.take('ident')[1]
        p.take(text=':')
        lb = p.take(text='[')
        chunks.append(src[cursor:lb[3]])
        cursor = lb[3]
        ents = []
        while p.peek()[1] != ']':
            start_tok = p.peek()
            seg_start = cursor
            depth_start = p.i
            if start_tok[1] != '{':
                raise Bad(f'src/data/blogs.ts: blogData.{key} holds something other than an object')
            # skip a balanced object, tokens only
            depth = 0
            while True:
                tok = p.take()
                if tok[1] in '{[':
                    depth += 1
                elif tok[1] in '}]':
                    depth -= 1
                    if depth == 0:
                        break
            end = tok[3]
            ents.append((src[seg_start:end], src[start_tok[2]:end], depth_start))
            cursor = end
            if p.peek()[1] == ',':
                cursor = p.take()[3]
        rb = p.take(text=']')
        ents_text = src[cursor:rb[2]]
        if ents_text.strip():
            # only comments may sit after the last entry
            if tokens(ents_text):
                raise Bad('src/data/blogs.ts: text after the last entry')
        chunks.append('\x00')
        cursor = rb[2]
        locales[key] = ents
        if p.peek()[1] == ',':
            p.take()
    chunks.append(src[cursor:])
    return chunks, locales


def entry_id(lit_src):
    m = re.search(r"\bid:\s*'([a-z0-9-]+)'", lit_src)
    return m.group(1) if m else None


def peak_index(base, head, hosts):
    bc, bl = split_entries(base)
    hc, hl = split_entries(head)
    if bc != hc:
        raise Bad('src/data/blogs.ts: text outside the blogData entries changed')
    if set(bl) != set(hl):
        raise Bad('src/data/blogs.ts: the locales of blogData changed')
    changed = []
    for loc in bl:
        base_lits = {e[1].strip() for e in bl[loc]}
        base_ids = [entry_id(e[1]) for e in bl[loc]]
        head_ids = []
        for full, lit, _ in hl[loc]:
            if lit.strip() in base_lits:
                head_ids.append(entry_id(lit))
                continue
            post = literal(lit)
            check_post(post, hosts, f'blogData.{loc}[{post.get("id") if isinstance(post, dict) else "?"}]')
            changed.append((loc, post))
            head_ids.append(post['id'])
        if len(set(head_ids)) != len(head_ids):
            raise Bad(f'src/data/blogs.ts: blogData.{loc} holds an id twice')
        missing = [i for i in base_ids if i not in head_ids]
        if missing:
            raise Bad(f'src/data/blogs.ts: blogData.{loc} lost {missing}')
    return changed


SITEMAP_LINE = [re.compile(x) for x in (
    r'  <url>', r'  </url>',
    r'    <loc>https://www\.peakcodeconsulting\.ch(?:/en)?/blog/[a-z0-9]+(?:-[a-z0-9]+)*</loc>',
    r'    <lastmod>\d{4}-\d{2}-\d{2}</lastmod>',
    r'    <changefreq>monthly</changefreq>',
    r'    <priority>0\.\d</priority>',
    r'    <xhtml:link rel="alternate" hreflang="(?:de|en|x-default)" href="https://www\.peakcodeconsulting\.ch(?:/en)?/blog/[a-z0-9]+(?:-[a-z0-9]+)*" />',
)]
LASTMOD = re.compile(r'    <lastmod>\d{4}-\d{2}-\d{2}</lastmod>')


def peak_sitemap(base, head):
    try:
        ET.fromstring(head.encode('utf-8'))
    except ET.ParseError as e:
        raise Bad(f'public/sitemap.xml: not well formed ({e})')
    a, b = base.splitlines(), head.splitlines()
    for op, a1, a2, b1, b2 in difflib.SequenceMatcher(a=a, b=b, autojunk=False).get_opcodes():
        if op == 'equal':
            continue
        for line in a[a1:a2]:
            if not LASTMOD.fullmatch(line):
                raise Bad(f'public/sitemap.xml: removed line {line!r}')
        for line in b[b1:b2]:
            if not any(r.fullmatch(line) for r in SITEMAP_LINE):
                raise Bad(f'public/sitemap.xml: added line {line!r}')


# ---------------------------------------------------------------- rollback mode (S09)

ROLLBACK_PREFIX = 'seo/rollback-'
FIJI_POST_PATH = re.compile(r'src/data/blog/([a-z0-9]+(?:-[a-z0-9]+)*)\.ts')


def twin_of(slug, text):
    return re.search(r'''\btwinSlug\s*:\s*['"]%s['"]''' % re.escape(slug), text) is not None


def fiji_index_removal(base, head, slug):
    """src/data/blogs.ts of a Fiji rollback: exactly the import of ./blog/<slug> and its entry line go."""
    a, b = base.splitlines(), head.splitlines()
    removed = []
    for op, a1, a2, b1, b2 in difflib.SequenceMatcher(a=a, b=b, autojunk=False).get_opcodes():
        if op == 'equal':
            continue
        if op != 'delete':
            raise Bad('src/data/blogs.ts: a rollback may only remove lines there')
        removed += a[a1:a2]
    imports = [m for m in map(FIJI_IMPORT.fullmatch, removed) if m]
    entries = [e for e in map(FIJI_ENTRY.fullmatch, removed) if e]
    if len(removed) != 2 or len(imports) != 1 or len(entries) != 1:
        raise Bad(f'src/data/blogs.ts: a rollback removes one import line and one entry line, removed {removed}')
    name = imports[0].group(1)
    if imports[0].group(2) != slug:
        raise Bad(f'src/data/blogs.ts: the removed import is ./blog/{imports[0].group(2)}, the deleted file is {slug}')
    if entries[0].group(1) != name:
        raise Bad(f'src/data/blogs.ts: the removed entry {entries[0].group(1)} is not the removed import {name}')
    if re.search(r'\b%s\b' % re.escape(name), head) or f"'./blog/{slug}'" in head:
        raise Bad(f'src/data/blogs.ts: {name} or ./blog/{slug} is still named there')
    return name


def fiji_rollback(changes, head_posts):
    """changes: {path: (base_text, head_text)}; head_posts: {path: text} of every src/data/blog/*.ts on HEAD.
    The slug of the one removed post, or None when the diff deletes no file."""
    deleted = sorted(p for p, (_, h) in changes.items() if h is None)
    if not deleted:
        return None
    m = FIJI_POST_PATH.fullmatch(deleted[0])
    if len(deleted) != 1 or not m:
        raise Bad(f'a rollback deletes exactly one src/data/blog/<slug>.ts, this one deletes {deleted}')
    path, slug = deleted[0], m.group(1)
    others = sorted(set(changes) - {path})
    if others != ['src/data/blogs.ts']:
        raise Bad(f'{path}: a rollback of it changes src/data/blogs.ts and nothing else, found {others}')
    base, head = changes['src/data/blogs.ts']
    if base is None or head is None:
        raise Bad('src/data/blogs.ts: a rollback keeps the file')
    fiji_index_removal(base, head, slug)
    twins = sorted(p for p, t in head_posts.items() if p != path and twin_of(slug, t))
    if twins:
        raise Bad(f'{path}: {", ".join(twins)} names {slug} as its twinSlug, so removing it alone would leave '
                  'a language switch and an hreflang pointing at a missing page; the pair is rolled back by hand')
    return slug


def peak_removal(base, head):
    """src/data/blogs.ts of a Peak Code rollback. Returns (slug, [locales]) when entries of main are gone,
    None when none is."""
    bc, bl = split_entries(base)
    hc, hl = split_entries(head)
    lost = {}
    for loc in bl:
        head_ids = {entry_id(e[1]) for e in hl.get(loc, [])}
        for _, lit, _ in bl[loc]:
            if entry_id(lit) not in head_ids:
                lost.setdefault(entry_id(lit), []).append((loc, lit))
    if not lost:
        return None
    if bc != hc:
        raise Bad('src/data/blogs.ts: text outside the blogData entries changed')
    if set(bl) != set(hl):
        raise Bad('src/data/blogs.ts: the locales of blogData changed')
    if len(lost) != 1:
        raise Bad(f'src/data/blogs.ts: a rollback removes the entries of one id, these are gone: {sorted(lost, key=str)}')
    gone, where = next(iter(lost.items()))
    for loc in bl:
        keep = [lit.strip() for _, lit, _ in bl[loc] if entry_id(lit) != gone]
        if keep != [lit.strip() for _, lit, _ in hl[loc]]:
            raise Bad(f'src/data/blogs.ts: blogData.{loc}: a rollback of {gone} removes its entries and changes no other')
    slugs = set()
    for loc, lit in where:
        m = re.search(r"\bslug:\s*'([a-z0-9-]+)'", lit)
        slugs.add(m.group(1) if m else gone)
    if len(slugs) != 1:
        raise Bad(f'src/data/blogs.ts: the entries of {gone} carry the slugs {sorted(slugs)}')
    slug = slugs.pop()
    twins = sorted(f'blogData.{loc}[{entry_id(lit)}]' for loc in hl for _, lit, _ in hl[loc] if twin_of(slug, lit))
    if twins:
        raise Bad(f'src/data/blogs.ts: {", ".join(twins)} names {slug} as its twinSlug, so removing it alone would '
                  'leave a language switch and an hreflang pointing at a missing page; the pair is rolled back by hand')
    return slug, sorted(loc for loc, _ in where)


SITEMAP_LOC = re.compile(r'    <loc>https://www\.peakcodeconsulting\.ch((?:/en)?/blog/[a-z0-9]+(?:-[a-z0-9]+)*)</loc>')


def sitemap_items(lines):
    """The sitemap as a list of single lines and whole `  <url>` ... `  </url>` blocks (tuples)."""
    out, i = [], 0
    while i < len(lines):
        if lines[i] != '  <url>':
            out.append(lines[i])
            i += 1
            continue
        j = i
        while j < len(lines) and lines[j] != '  </url>':
            j += 1
        if j == len(lines):
            raise Bad('public/sitemap.xml: a <url> block is never closed')
        out.append(tuple(lines[i:j + 1]))
        i = j + 1
    return out


def peak_sitemap_removal(base, head, paths):
    """public/sitemap.xml of a Peak Code rollback: only the whole <url> blocks whose <loc> is one of `paths`
    go, and every other line stays."""
    try:
        ET.fromstring(head.encode('utf-8'))
    except ET.ParseError as e:
        raise Bad(f'public/sitemap.xml: not well formed ({e})')

    def loc_path(item):
        if isinstance(item, tuple):
            for line in item:
                m = SITEMAP_LOC.fullmatch(line)
                if m:
                    return m.group(1)
        return None
    keep = [it for it in sitemap_items(base.splitlines()) if loc_path(it) not in paths]
    if keep != sitemap_items(head.splitlines()):
        raise Bad(f'public/sitemap.xml: a rollback removes the <url> blocks of {sorted(paths)} and changes nothing else')


def peak_rollback(changes):
    """The slug of the one removed Peak Code post, or None when no entry of main is gone."""
    if any(h is None for _, h in changes.values()):
        raise Bad('a Peak Code rollback never deletes a file')
    if 'src/data/blogs.ts' not in changes:
        return None
    base, head = changes['src/data/blogs.ts']
    if base is None:
        raise Bad('src/data/blogs.ts: missing on the base')
    found = peak_removal(base, head)
    if found is None:
        return None
    slug, locales = found
    others = sorted(set(changes) - {'src/data/blogs.ts', 'public/sitemap.xml'})
    if others:
        raise Bad(f'a rollback of {slug} changes src/data/blogs.ts and public/sitemap.xml only, found {others}')
    if 'public/sitemap.xml' in changes:
        sb, sh = changes['public/sitemap.xml']
        if sb is None:
            raise Bad('public/sitemap.xml: missing on the base')
        peak_sitemap_removal(sb, sh, {('/en' if loc == 'en' else '') + f'/blog/{slug}' for loc in locales})
    return slug


def rollback_removal(changes, layout, head_posts):
    """The removed post's slug when the diff is a well formed removal, None when it removes no post (the normal
    rules then apply). Raises Bad for a removal of any other shape. head_posts is called only for Fiji."""
    if layout == 'fiji':
        if not any(h is None for _, h in changes.values()):
            return None
        return fiji_rollback(changes, head_posts())
    return peak_rollback(changes)


# ---------------------------------------------------------------- driver

def read_hosts(path):
    with open(path, encoding='utf-8') as f:
        return {l.strip() for l in f if l.strip() and not l.lstrip().startswith('#')}


def git(*args):
    return subprocess.run(['git', *args], capture_output=True, text=True, check=True).stdout


def git_show(rev, path):
    r = subprocess.run(['git', 'show', f'{rev}:{path}'], capture_output=True)
    return r.stdout.decode('utf-8') if r.returncode == 0 else None


def check_change(path, base_text, head_text, hosts, layout):
    """One changed path. base_text or head_text is None when the file is new or deleted."""
    if head_text is None:
        raise Bad(f'{path}: a loop branch never deletes a file')
    if layout == 'fiji':
        if re.fullmatch(r'src/data/blog/[a-z0-9]+(?:-[a-z0-9]+)*\.ts', path):
            return ('post', fiji_post_file(head_text, path, hosts))
        if path == 'src/data/blogs.ts':
            if base_text is None:
                raise Bad(f'{path}: missing on the base')
            return ('index', fiji_index(base_text, head_text))
    else:
        if path == 'src/data/blogs.ts':
            if base_text is None:
                raise Bad(f'{path}: missing on the base')
            return ('posts', peak_index(base_text, head_text, hosts))
        if path == 'public/sitemap.xml':
            if base_text is None:
                raise Bad(f'{path}: missing on the base')
            peak_sitemap(base_text, head_text)
            return ('sitemap', None)
    raise Bad(f'{path}: this checker knows no rule for it, so it is refused')


def layout_of(root='.'):
    return 'fiji' if os.path.isdir(os.path.join(root, 'src/data/blog')) else 'peak'


def head_posts():
    names = git('ls-tree', '-z', '--name-only', 'HEAD', 'src/data/blog/').split('\0')
    return {n: git_show('HEAD', n) or '' for n in names if n.endswith('.ts')}


def read_figures(path):
    if not os.path.exists(path):
        return set()
    with open(path, encoding='utf-8') as f:
        return set(json.load(f))


def run_diff(base, branch=None):
    hosts = read_hosts('scripts/seo-hosts.txt')
    FIGURES.update(read_figures('src/data/blog-figures.json'))
    names = [n for n in git('diff', '--name-only', '--no-renames', '-z', f'{base}...HEAD').split('\0') if n]
    # git drops an emptied folder, so a branch that deletes the last post file still reads as Fiji
    layout = 'fiji' if any(n.startswith('src/data/blog/') for n in names) else layout_of()
    if branch is None:
        branch = os.environ.get('GITHUB_REF_NAME', '')
    if branch.startswith(ROLLBACK_PREFIX):
        changes = {p: (git_show(base, p), git_show('HEAD', p)) for p in names}
        try:
            slug = rollback_removal(changes, layout, head_posts)
        except Bad as e:
            print(f'::error::{e}')
            print(f'seo-content-check: rollback branch {branch}, {len(names)} changed path(s), the removal is refused')
            return 1
        if slug:
            print(f'seo-content-check: rollback branch {branch} removes the post {slug}, {len(names)} changed path(s), 0 refused')
            return 0
        print(f'seo-content-check: rollback branch {branch} removes no post, the rules for a changed post apply')
    bad = []
    fiji_new_posts, fiji_imports = set(), {}
    for path in names:
        try:
            kind, val = check_change(path, git_show(base, path), git_show('HEAD', path), hosts, layout)
            if kind == 'post' and git_show(base, path) is None:
                fiji_new_posts.add(val['slug'])
            if kind == 'index':
                fiji_imports = val
        except Bad as e:
            bad.append(str(e))
    if layout == 'fiji' and not bad:
        added = set(fiji_imports.values())
        if added != fiji_new_posts:
            bad.append(f'src/data/blogs.ts: imports added for {sorted(added)}, new post files {sorted(fiji_new_posts)}')
    for b in bad:
        print(f'::error::{b}')
    print(f'seo-content-check: {len(names)} changed path(s), {len(bad)} refused')
    return 1 if bad else 0


# ---------------------------------------------------------------- selftest

GOOD_POST = """{
  id: 'a-post', slug: 'a-post', title: 'A title', excerpt: 'An excerpt.', publishedAt: '2026-10-19',
  updatedAt: '2026-10-19', readingTime: 4, tags: ['Tag'],
  body: [
    {type: 'paragraph', text: ['Text ', {text: 'a link', href: '/en/offers/x'}, ' and ', {text: 'docs', href: 'https://docs.example.org/a?b=1#c'}]},
    {type: 'list', items: [['one'], ['two']]},
    {type: 'table', caption: 'c', head: ['a', 'b'], rows: [[['x'], ['y']]]},
    {type: 'faq', heading: 'Q', items: [{q: 'Why?', a: 'Because.'}]},
    {type: 'sources', heading: 'Sources', items: [{label: 'Docs', url: 'https://docs.example.org/'}]},
    {type: 'cta', heading: 'Call', text: 'Book.', label: 'Book', href: '/en/offers/x'},
  ],
}"""
HOSTS = {'docs.example.org'}


def fiji_file(post=GOOD_POST, slug='a-post'):
    return f"import type {{BlogPost}} from '@/types/blog';\n\n// facts: F-fiji-001\nconst post: BlogPost = {post.replace('a-post', slug)};\n\nexport default post;\n"


PEAK_BASE = """import type { BlogData } from '@/types/blog';

const ANN = 'https://docs.example.org/ann';

export const blogData: BlogData = {
  de: [
    {
      id: 'old-post', slug: 'old-post', title: 'Alt', excerpt: 'E', publishedAt: '2026-09-01', readingTime: 3, tags: ['T'],
      body: [{ type: 'paragraph', text: [{ text: 'x', href: ANN }] }],
    },
  ],
  en: [
  ],
};
"""
SITEMAP_BASE = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.peakcodeconsulting.ch/blog/old-post</loc>
    <lastmod>2026-09-01</lastmod>
  </url>
</urlset>
"""


def selftest():
    fails = []

    def expect(name, fn, red):
        try:
            fn()
            ok = not red
        except Bad:
            ok = red
        if not ok:
            fails.append(name)

    def fp(post):
        return lambda: fiji_post_file(fiji_file(post), 'src/data/blog/a-post.ts', HOSTS)

    expect('good fiji post', fp(GOOD_POST), False)
    expect('identifier value', fp(GOOD_POST.replace("'An excerpt.'", 'EXCERPT')), True)
    expect('call', fp(GOOD_POST.replace("'An excerpt.'", "String('x')")), True)
    expect('template', fp(GOOD_POST.replace("'An excerpt.'", '`x`')), True)
    expect('spread', fp(GOOD_POST.replace("tags: ['Tag'],", "tags: ['Tag'], ...x,")), True)
    expect('computed key', fp(GOOD_POST.replace("tags: ['Tag'],", "tags: ['Tag'], [k]: 1,")), True)
    expect('process.env', fp(GOOD_POST.replace("'An excerpt.'", 'process.env.X')), True)
    expect('script tag', fp(GOOD_POST.replace('A title', '</script><script>x')), True)
    expect('unicode escape', fp(GOOD_POST.replace('A title', 'A \\u003c title')), True)
    expect('host not listed', fp(GOOD_POST.replace('https://docs.example.org/a', 'https://evil.example.com/a')), True)
    expect('http link', fp(GOOD_POST.replace('https://docs.example.org/a', 'http://docs.example.org/a')), True)
    expect('javascript link', fp(GOOD_POST.replace("'/en/offers/x'}", "'javascript:alert(1)'}")), True)
    expect('protocol relative', fp(GOOD_POST.replace("'/en/offers/x'}", "'//evil.example.com/x'}")), True)
    expect('unknown block', fp(GOOD_POST.replace("type: 'list'", "type: 'html'")), True)
    expect('unknown key', fp(GOOD_POST.replace("tags: ['Tag'],", "tags: ['Tag'], dangerous: 'x',")), True)
    expect('row width', fp(GOOD_POST.replace("rows: [[['x'], ['y']]]", "rows: [[['x']]]")), True)
    expect('slug mismatch', lambda: fiji_post_file(fiji_file(GOOD_POST, 'b-post'), 'src/data/blog/a-post.ts', HOSTS), True)
    expect('extra import', lambda: fiji_post_file("import fs from 'fs';\n" + fiji_file(), 'src/data/blog/a-post.ts', HOSTS), True)
    expect('extra statement', lambda: fiji_post_file(fiji_file().replace('export default post;', "console.log(1);\nexport default post;"), 'src/data/blog/a-post.ts', HOSTS), True)
    expect('fiji sources.ts', lambda: check_change('src/data/blog/sources.ts', 'x', "export const A = 'x';", HOSTS, 'fiji'), True)
    expect('deleted post', lambda: check_change('src/data/blog/a-post.ts', fiji_file(), None, HOSTS, 'fiji'), True)
    expect('unknown path', lambda: check_change('src/app/page.tsx', 'a', 'b', HOSTS, 'fiji'), True)
    expect('U+2028 in a comment', lambda: fiji_post_file(fiji_file().replace('// facts: F-fiji-001', '// facts\u2028process.exit(1)'), 'src/data/blog/a-post.ts', HOSTS), True)
    expect('U+2029 in a comment', lambda: fiji_post_file(fiji_file().replace('// facts: F-fiji-001', '// x\u2029fetch(1)'), 'src/data/blog/a-post.ts', HOSTS), True)
    expect('CR in a comment', lambda: fiji_post_file(fiji_file().replace('// facts: F-fiji-001', '// x\rfetch(1)'), 'src/data/blog/a-post.ts', HOSTS), True)
    expect('zero width space', fp(GOOD_POST.replace('A title', 'A ti\u200btle')), True)
    FIGURES.add('a-diagram')
    fig = "{type: 'figure', figure: 'a-diagram'}, {type: 'list'"
    expect('figure block', fp(GOOD_POST.replace("{type: 'list'", fig, 1)), False)
    expect('figure not in the list', fp(GOOD_POST.replace("{type: 'list'", fig.replace('a-diagram', 'b-diagram'), 1)), True)
    expect('figure extra key', fp(GOOD_POST.replace("{type: 'list'", fig.replace("'a-diagram'}", "'a-diagram', src: '/x.webp'}"), 1)), True)
    expect('hero', fp(GOOD_POST.replace("tags: ['Tag'],", "tags: ['Tag'], hero: 'a-diagram',")), False)
    expect('hero not in the list', fp(GOOD_POST.replace("tags: ['Tag'],", "tags: ['Tag'], hero: 'b-diagram',")), True)
    expect('soft hyphen', fp(GOOD_POST.replace('A title', 'A ti\u00adtle')), True)
    expect('no-break space', fp(GOOD_POST.replace('A title', 'A\u00a0title')), True)
    expect('Cyrillic look-alike', fp(GOOD_POST.replace('A title', 'A titl\u0435')), True)
    expect('fullwidth letter', fp(GOOD_POST.replace('A title', 'A \uff54itle')), True)
    expect('Greek and German letters', fp(GOOD_POST.replace('A title', 'Σύστημα ERP für Größe')), False)

    idx = "import a from './blog/a';\nexport const blogData = {\n  el: [\n    a,\n  ],\n};\n"
    idx_ok = idx.replace("import a from './blog/a';\n", "import a from './blog/a';\nimport aPost from './blog/a-post';\n").replace('    a,\n', '    a,\n    aPost,\n')
    expect('fiji index add', lambda: fiji_index(idx, idx_ok), False)
    expect('fiji index removes', lambda: fiji_index(idx, idx.replace('    a,\n', '')), True)
    expect('fiji index other line', lambda: fiji_index(idx, idx.replace('};', "};\nexport const x = 1;")), True)
    expect('fiji index entry without import', lambda: fiji_index(idx, idx.replace('    a,\n', '    a,\n    b,\n')), True)

    new_entry = """    {
      id: 'a-post', slug: 'a-post', title: 'Neu', excerpt: 'E', publishedAt: '2026-10-19', readingTime: 3, tags: ['T'],
      body: [{ type: 'paragraph', text: ['x'] }],
    },
"""
    peak_new = PEAK_BASE.replace('  en: [\n', '  en: [\n    // facts: F-peak-001\n' + new_entry)
    expect('peak new entry', lambda: peak_index(PEAK_BASE, peak_new, HOSTS), False)
    refresh = PEAK_BASE.replace("{ text: 'x', href: ANN }", "{ text: 'x', href: 'https://docs.example.org/ann' }").replace("'Alt'", "'Alt neu'")
    expect('peak refresh entry', lambda: peak_index(PEAK_BASE, refresh, HOSTS), False)
    expect('peak identifier in new entry', lambda: peak_index(PEAK_BASE, peak_new.replace("text: ['x']", 'text: [ANN]'), HOSTS), True)
    expect('peak outside changed', lambda: peak_index(PEAK_BASE, peak_new.replace("const ANN = 'https://docs.example.org/ann';", "const ANN = 'https://evil.example.com/';"), HOSTS), True)
    expect('peak code after', lambda: peak_index(PEAK_BASE, peak_new + "\nfetch('https://evil.example.com');\n", HOSTS), True)
    expect('peak entry lost', lambda: peak_index(PEAK_BASE, PEAK_BASE.replace(PEAK_BASE[PEAK_BASE.index('    {'):PEAK_BASE.index('  ],')], ''), HOSTS), True)
    dup = PEAK_BASE.replace('  ],\n  en: [', new_entry.replace("'a-post'", "'old-post'") + '  ],\n  en: [')
    expect('peak duplicate id', lambda: peak_index(PEAK_BASE, dup, HOSTS), True)

    sm_ok = SITEMAP_BASE.replace('</urlset>', """  <url>
    <loc>https://www.peakcodeconsulting.ch/en/blog/a-post</loc>
    <lastmod>2026-10-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.peakcodeconsulting.ch/en/blog/a-post" />
  </url>
</urlset>""")
    expect('sitemap add', lambda: peak_sitemap(SITEMAP_BASE, sm_ok), False)
    expect('sitemap lastmod', lambda: peak_sitemap(SITEMAP_BASE, SITEMAP_BASE.replace('2026-09-01', '2026-10-19')), False)
    expect('sitemap other host', lambda: peak_sitemap(SITEMAP_BASE, sm_ok.replace('www.peakcodeconsulting.ch/en/blog/a-post</loc>', 'evil.example.com/a</loc>')), True)
    expect('sitemap removed url', lambda: peak_sitemap(SITEMAP_BASE, SITEMAP_BASE.replace('    <loc>https://www.peakcodeconsulting.ch/blog/old-post</loc>\n', '')), True)
    expect('sitemap broken xml', lambda: peak_sitemap(SITEMAP_BASE, SITEMAP_BASE.replace('</urlset>', '')), True)

    # rollback mode (S09): the removal of one post passes, every other removal stays red
    def rb(changes, layout='fiji', posts=None):
        return lambda: rollback_removal(changes, layout, lambda: posts or {})

    def rb_green(name, changes, layout='fiji', posts=None, want='a-post'):
        try:
            got = rollback_removal(changes, layout, lambda: posts or {})
        except Bad as e:
            got = f'refused: {e}'
        if got != want:
            fails.append(f'{name} ({got})')
    post_path = 'src/data/blog/a-post.ts'
    gone = {post_path: (fiji_file(), None), 'src/data/blogs.ts': (idx_ok, idx)}
    rb_green('rollback fiji removal', gone)
    rb_green('rollback fiji no deletion', {post_path: (fiji_file(), fiji_file().replace('// facts', '// x'))}, want=None)
    twin = fiji_file(slug='b-post').replace("tags: ['Tag'],", "tags: ['Tag'], twinSlug: 'a-post',")
    expect('rollback fiji twin', rb(gone, posts={'src/data/blog/b-post.ts': twin}), True)
    expect('rollback fiji two files', rb({**gone, 'src/data/blog/b-post.ts': (fiji_file(slug='b-post'), None)}), True)
    expect('rollback fiji sources.ts', rb({'src/data/blog/sources.ts': ('x', None), 'src/data/blogs.ts': (idx_ok, idx)}), True)
    expect('rollback fiji other path', rb({**gone, 'src/data/blog/b-post.ts': (fiji_file(slug='b-post'), fiji_file(slug='b-post') + '// x\n')}), True)
    expect('rollback fiji index kept', rb({post_path: (fiji_file(), None)}), True)
    expect('rollback fiji index loses more', rb({**gone, 'src/data/blogs.ts': (idx_ok, idx.replace('    a,\n', ''))}), True)
    expect('rollback fiji index adds', rb({**gone, 'src/data/blogs.ts': (idx_ok, idx.replace('};', '};\n// x'))}), True)
    other = idx_ok.replace("'./blog/a-post'", "'./blog/c-post'")
    expect('rollback fiji wrong import', rb({**gone, 'src/data/blogs.ts': (other, idx)}), True)
    expect('rollback fiji entry kept', rb({**gone, 'src/data/blogs.ts': (idx_ok, idx_ok.replace("import aPost from './blog/a-post';\n", ''))}), True)

    peak_gone = {'src/data/blogs.ts': (peak_new, PEAK_BASE), 'public/sitemap.xml': (sm_ok, SITEMAP_BASE)}
    rb_green('rollback peak removal', peak_gone, 'peak')
    rb_green('rollback peak removal, sitemap untouched', {'src/data/blogs.ts': (peak_new, PEAK_BASE)}, 'peak')
    rb_green('rollback peak refresh revert', {'src/data/blogs.ts': (refresh, PEAK_BASE)}, 'peak', want=None)
    both = peak_new.replace('  ],\n  en: [', new_entry.replace("'a-post'", "'b-post'") + '  ],\n  en: [')
    expect('rollback peak two ids', rb({'src/data/blogs.ts': (both, PEAK_BASE)}, 'peak'), True)
    expect('rollback peak removal and change', rb({'src/data/blogs.ts': (peak_new, PEAK_BASE.replace("'Alt'", "'Alt neu'"))}, 'peak'), True)
    expect('rollback peak outside changed', rb({'src/data/blogs.ts': (peak_new, PEAK_BASE.replace('const ANN', 'const ANN2'))}, 'peak'), True)
    expect('rollback peak sitemap loses another block', rb({**peak_gone, 'public/sitemap.xml': (sm_ok, SITEMAP_BASE.replace(SITEMAP_BASE[SITEMAP_BASE.index('  <url>'):SITEMAP_BASE.index('</urlset>')], ''))}, 'peak'), True)
    expect('rollback peak sitemap loses a line', rb({**peak_gone, 'public/sitemap.xml': (sm_ok, sm_ok.replace('    <priority>0.7</priority>\n', ''))}, 'peak'), True)
    expect('rollback peak sitemap adds', rb({**peak_gone, 'public/sitemap.xml': (sm_ok, SITEMAP_BASE.replace('2026-09-01', '2026-10-20'))}, 'peak'), True)
    twin_base = peak_new.replace("id: 'old-post', slug: 'old-post',", "id: 'old-post', slug: 'old-post', twinSlug: 'a-post',")
    expect('rollback peak twin', rb({'src/data/blogs.ts': (twin_base, PEAK_BASE.replace("id: 'old-post', slug: 'old-post',", "id: 'old-post', slug: 'old-post', twinSlug: 'a-post',"))}, 'peak'), True)
    expect('rollback peak other path', rb({**peak_gone, 'src/app/page.tsx': ('a', 'b')}, 'peak'), True)
    expect('rollback peak deleted file', rb({**peak_gone, 'public/robots.txt': ('a', None)}, 'peak'), True)

    # the driver end to end, in a throwaway git repo, so --diff itself is proven red and green
    with tempfile.TemporaryDirectory() as d:
        env = dict(os.environ, GIT_AUTHOR_NAME='t', GIT_AUTHOR_EMAIL='t@t', GIT_COMMITTER_NAME='t', GIT_COMMITTER_EMAIL='t@t')

        def sh(*a):
            subprocess.run(a, cwd=d, env=env, check=True, capture_output=True)
        os.makedirs(os.path.join(d, 'src/data/blog'))
        os.makedirs(os.path.join(d, 'scripts'))
        open(os.path.join(d, 'scripts/seo-hosts.txt'), 'w').write('docs.example.org\n')
        open(os.path.join(d, 'src/data/blogs.ts'), 'w').write(idx)
        sh('git', 'init', '-q', '-b', 'main')
        sh('git', 'add', '-A')
        sh('git', 'commit', '-qm', 'base')
        sh('git', 'checkout', '-qb', 'seo/a-post')
        open(os.path.join(d, 'src/data/blog/a-post.ts'), 'w').write(fiji_file())
        open(os.path.join(d, 'src/data/blogs.ts'), 'w').write(idx_ok)
        sh('git', 'add', '-A')
        sh('git', 'commit', '-qm', 'post')
        cwd = os.getcwd()
        try:
            os.chdir(d)
            import contextlib
            import io
            with contextlib.redirect_stdout(io.StringIO()):
                if run_diff('main', '') != 0:
                    fails.append('driver green')
                open('src/data/blog/a-post.ts', 'w').write(fiji_file().replace("'An excerpt.'", 'require("fs")'))
                sh('git', 'commit', '-qam', 'bad')
                if run_diff('main', '') != 1:
                    fails.append('driver red')
                # rollback mode end to end: the good post is merged, then reverted on seo/rollback-a-post
                sh('git', 'checkout', '-q', 'main')
                sh('git', 'merge', '-q', '--ff-only', 'seo/a-post~1')
                sh('git', 'checkout', '-qb', 'seo/rollback-a-post')
                sh('git', 'revert', '--no-edit', 'HEAD')
                if run_diff('main', 'seo/rollback-a-post') != 0:
                    fails.append('driver rollback green')
                if run_diff('main', 'seo/a-post') != 1:
                    fails.append('driver removal red outside rollback mode')
                old_ref = os.environ.get('GITHUB_REF_NAME')
                os.environ['GITHUB_REF_NAME'] = 'seo/rollback-a-post'
                try:
                    if run_diff('main') != 0:
                        fails.append('driver rollback from GITHUB_REF_NAME')
                finally:
                    if old_ref is None:
                        del os.environ['GITHUB_REF_NAME']
                    else:
                        os.environ['GITHUB_REF_NAME'] = old_ref
                # the revert of a comment and of a refresh pass on a rollback branch, by the rules for a changed post
                for what, text in (('comment', fiji_file() + '// a comment\n'),
                                   ('refresh', fiji_file().replace('A title', 'A newer title'))):
                    sh('git', 'checkout', '-q', 'main')
                    open('src/data/blog/a-post.ts', 'w').write(text)
                    sh('git', 'commit', '-qam', what)
                    sh('git', 'checkout', '-qB', f'seo/rollback-{what}')
                    sh('git', 'revert', '--no-edit', 'HEAD')
                    if run_diff('main', f'seo/rollback-{what}') != 0:
                        fails.append(f'driver rollback of a {what}')
                # a rollback branch that deletes the post but keeps its import stays red
                sh('git', 'checkout', '-qB', 'seo/rollback-broken', 'main')
                sh('git', 'rm', '-q', 'src/data/blog/a-post.ts')
                sh('git', 'commit', '-qm', 'broken')
                if run_diff('main', 'seo/rollback-broken') != 1:
                    fails.append('driver rollback red')
        finally:
            os.chdir(cwd)

    if fails:
        print('selftest FAILED: ' + ', '.join(fails))
        return 1
    print('selftest ok')
    return 0


if __name__ == '__main__':
    if sys.argv[1:] == ['--selftest']:
        sys.exit(selftest())
    if len(sys.argv) == 3 and sys.argv[1] == '--diff':
        sys.exit(run_diff(sys.argv[2]))
    if len(sys.argv) == 5 and sys.argv[1] == '--diff' and sys.argv[3] == '--branch':
        sys.exit(run_diff(sys.argv[2], sys.argv[4]))
    print(__doc__)
    sys.exit(2)
