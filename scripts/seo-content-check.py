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

    python3 scripts/seo-content-check.py --diff origin/main     check HEAD against the base
    python3 scripts/seo-content-check.py --selftest             prove every rule goes red
"""
import difflib
import os
import re
import subprocess
import sys
import tempfile
import xml.etree.ElementTree as ET

POST_KEYS = {'id', 'slug', 'title', 'metaTitle', 'excerpt', 'body', 'author', 'publishedAt', 'updatedAt',
             'readingTime', 'tags', 'twinSlug'}
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


def tokens(src):
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

def check_string(s, where):
    if not isinstance(s, str):
        raise Bad(f'{where}: a string was expected')
    if '<' in s or '>' in s:
        raise Bad(f'{where}: < or > in a string')
    if re.search(r'[\x00-\x08\x0b-\x1f\x7f  ]', s):
        raise Bad(f'{where}: a control character')


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
}


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


def run_diff(base):
    hosts = read_hosts('scripts/seo-hosts.txt')
    layout = layout_of()
    names = [n for n in git('diff', '--name-only', '--no-renames', '-z', f'{base}...HEAD').split('\0') if n]
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
                if run_diff('main') != 0:
                    fails.append('driver green')
                open('src/data/blog/a-post.ts', 'w').write(fiji_file().replace("'An excerpt.'", 'require("fs")'))
                sh('git', 'commit', '-qam', 'bad')
                if run_diff('main') != 1:
                    fails.append('driver red')
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
    print(__doc__)
    sys.exit(2)
