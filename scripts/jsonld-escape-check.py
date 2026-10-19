#!/usr/bin/env python3
"""Fail when a JSON-LD script could let a string close its own <script> tag.

WHY THIS FILE EXISTS
====================

Every application/ld+json script on this site renders through dangerouslySetInnerHTML, and until
2026-10-19 each one wrote `JSON.stringify(...)` there. JSON.stringify leaves "<" as it is, so a
post title holding "</script>" would end the tag early on the live page and the rest of the title
would run as HTML. The SEO loop of offer-os `gtm/seo-loop-2026-10` is about to write posts into
this repo and merge them with nobody reading them first (SL-D1), so a title is untrusted input.
Goal S08 closed it: `src/lib/jsonLd.ts` escapes < > & U+2028 U+2029 as JSON escape sequences, and
this file keeps every JSON-LD script on that helper.

Two modes, because each one is blind where the other sees:

1. SOURCE (default). Reads every .ts and .tsx under src/ with comments removed. Fails, with
   file:line, on any dangerouslySetInnerHTML whose __html value is anything other than one whole
   `jsonLd(...)` call, on any application/ld+json script element that does not render through that
   call, and on a file that calls jsonLd without importing it from '@/lib/jsonLd'. This catches the
   next page somebody adds with a bare JSON.stringify, before any build.
2. --built DIR. Reads every .html file under DIR, recursively, and fails when the body of any
   <script type="application/ld+json"> holds a literal "<" or does not parse as JSON. A string that
   broke out of the tag leaves a truncated body behind, which is why the parse is part of the check.
   It also fails when it finds no such script at all, so a wrong path reads red. In CI DIR is
   .next/server/app, where `next build` writes the prerendered pages.

USAGE
    python3 scripts/jsonld-escape-check.py                          # source mode, reads src/
    npm run build && python3 scripts/jsonld-escape-check.py --built .next/server/app
    python3 scripts/jsonld-escape-check.py --selftest               # every mode red and green

THIS FILE uses the standard library only and exits 0 on pass, 1 on a defect, 2 on bad usage.
"""
import json
import os
import re
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMPORT_RE = re.compile(r"""import\s*\{[^}]*\bjsonLd\b[^}]*\}\s*from\s*['"]@/lib/jsonLd['"]""")
# An aliased import (`jsonLd as j`) next to a local `const jsonLd = JSON.stringify` would satisfy a
# plain name match, so the import must bind the name jsonLd itself and nothing may redeclare it.
ALIAS_RE = re.compile(r"""import\s*\{[^}]*\bjsonLd\s+as\b[^}]*\}\s*from\s*['"]@/lib/jsonLd['"]""")
LOCAL_DECL_RE = re.compile(r'\b(?:const|let|var|function|class)\s+jsonLd\b|\bjsonLd\s*[:=](?!=)')
LDJSON_RE = re.compile(r'application/ld\+json')
BUILT_SCRIPT_RE = re.compile(
    r'<script\b([^>]*)>(.*?)</script\s*>', re.IGNORECASE | re.DOTALL)
BUILT_TYPE_RE = re.compile(r'''\btype\s*=\s*["']?application/ld\+json["']?''', re.IGNORECASE)
REGEX_BEFORE = set('(,=:[!&|?{};+-*%~^')


def views(text):
    """Return (code, mask), each the length of text with newlines kept in place.

    code: comments blanked, strings kept. mask: comments AND string contents blanked, so brace and
    paren counting never sees a character inside a string, a template or a regex literal.
    """
    code, mask = list(text), list(text)
    i, n = 0, len(text)
    stack = []  # open template literals, each holding its ${ } brace depth
    last = ''   # last significant code character, to tell a regex from a division

    def blank(a, b, also_code):
        for k in range(a, b):
            if text[k] != '\n':
                mask[k] = ' '
                if also_code:
                    code[k] = ' '

    while i < n:
        c = text[i]
        if stack and stack[-1] == 0 and c == '`':
            stack.pop()
            last = '`'
            i += 1
            continue
        if stack and stack[-1] == 0:
            j = i
            while j < n and text[j] != '`' and not text.startswith('${', j):
                j += 2 if text[j] == '\\' else 1
            blank(i, min(j, n), False)
            if text.startswith('${', j):
                stack[-1] = 1
                i = j + 2
                last = '{'
            else:
                i = j
            continue
        if text.startswith('//', i):
            j = text.find('\n', i)
            j = n if j < 0 else j
            blank(i, j, True)
            i = j
            continue
        if text.startswith('/*', i):
            j = text.find('*/', i + 2)
            j = n if j < 0 else j + 2
            blank(i, j, True)
            i = j
            continue
        if c in '\'"':
            j = i + 1
            while j < n and text[j] != c and text[j] != '\n':
                j += 2 if text[j] == '\\' else 1
            blank(i + 1, min(j, n), False)
            i = j + 1
            last = c
            continue
        if c == '`':
            stack.append(0)
            i += 1
            continue
        if c == '/' and (last == '' or last in REGEX_BEFORE):
            j, in_class = i + 1, False
            while j < n and text[j] != '\n':
                if text[j] == '\\':
                    j += 2
                    continue
                if text[j] == '[':
                    in_class = True
                elif text[j] == ']':
                    in_class = False
                elif text[j] == '/' and not in_class:
                    break
                j += 1
            blank(i + 1, min(j, n), False)
            i = j + 1
            last = '/'
            continue
        if stack and c == '{':
            stack[-1] += 1
        elif stack and c == '}':
            stack[-1] -= 1
            if stack[-1] == 0:
                i += 1
                continue
        if not c.isspace():
            last = c
        i += 1
    return ''.join(code), ''.join(mask)


def match_close(mask, i, open_c, close_c):
    """Index just past the bracket that closes the one at mask[i], or -1."""
    depth = 0
    for k in range(i, len(mask)):
        if mask[k] == open_c:
            depth += 1
        elif mask[k] == close_c:
            depth -= 1
            if depth == 0:
                return k + 1
    return -1


def html_value_ok(code, mask, at):
    """True when the dangerouslySetInnerHTML at `at` is ={{ __html: jsonLd(...) }} and nothing else."""
    m = re.compile(r'dangerouslySetInnerHTML\s*=\s*\{\s*\{\s*__html\s*:\s*jsonLd\s*\(').match(mask, at)
    if not m:
        return False
    end = match_close(mask, m.end() - 1, '(', ')')
    if end < 0:
        return False
    return re.compile(r'\s*,?\s*\}\s*\}').match(mask, end) is not None


def element_span(mask, at):
    """The JSX element around offset `at`: from its `<tag` to the end of `/>` or `</tag>`."""
    start = max(mask.rfind('<script', 0, at), mask.rfind('<Script', 0, at))
    if start < 0 or '>' in mask[start:at].replace('=>', '  '):
        return None
    k, depth = start, 0
    while k < len(mask):
        ch = mask[k]
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
        elif depth == 0 and mask.startswith('/>', k):
            return start, k + 2
        elif depth == 0 and ch == '>':
            close = re.compile(r'</\s*[sS]cript\s*>').search(mask, k)
            return (start, close.end()) if close else (start, len(mask))
        k += 1
    return start, len(mask)


def scan_source(src_dir, out=print):
    hits, files = 0, 0
    for dirpath, dirnames, filenames in os.walk(src_dir):
        dirnames.sort()
        for name in sorted(filenames):
            if not name.endswith(('.ts', '.tsx')):
                continue
            path = os.path.join(dirpath, name)
            rel = os.path.relpath(path, os.path.dirname(src_dir.rstrip('/')) or '.')
            text = open(path, encoding='utf-8').read()
            files += 1
            code, mask = views(text)

            def line(off):
                return text.count('\n', 0, off) + 1

            for m in re.finditer(r'dangerouslySetInnerHTML', mask):
                if not html_value_ok(code, mask, m.start()):
                    hits += 1
                    out(f'{rel}:{line(m.start())}: dangerouslySetInnerHTML whose __html is not one '
                        f'whole jsonLd(...) call')
            for m in LDJSON_RE.finditer(code):
                span = element_span(mask, m.start())
                ok = False
                if span:
                    body = mask[span[0]:span[1]]
                    for d in re.finditer(r'dangerouslySetInnerHTML', body):
                        ok = html_value_ok(code, mask, span[0] + d.start())
                        break
                if not ok:
                    hits += 1
                    out(f'{rel}:{line(m.start())}: application/ld+json script that does not '
                        f'render through jsonLd(...)')
            uses = re.search(r'\bjsonLd\s*\(', mask)
            helper = path.endswith(os.path.join('lib', 'jsonLd.ts'))
            if uses and not helper and (not IMPORT_RE.search(code) or ALIAS_RE.search(code)):
                hits += 1
                out(f'{rel}:{line(uses.start())}: calls jsonLd without importing it from @/lib/jsonLd')
            decl = None if helper else LOCAL_DECL_RE.search(mask)
            if decl:
                hits += 1
                out(f'{rel}:{line(decl.start())}: declares its own jsonLd, which would shadow the helper')
    return hits, files


def scan_built(built_dir, out=print):
    hits, scripts, pages = 0, 0, 0
    for dirpath, dirnames, filenames in os.walk(built_dir):
        dirnames.sort()
        for name in sorted(filenames):
            if not name.endswith('.html'):
                continue
            path = os.path.join(dirpath, name)
            rel = os.path.relpath(path, built_dir)
            html = open(path, encoding='utf-8', errors='replace').read()
            pages += 1
            for m in BUILT_SCRIPT_RE.finditer(html):
                if not BUILT_TYPE_RE.search(m.group(1)):
                    continue
                scripts += 1
                body = m.group(2)
                where = f'{rel}:{html.count(chr(10), 0, m.start(2)) + 1}'
                if '<' in body:
                    hits += 1
                    out(f'{where}: a literal "<" inside an application/ld+json script')
                try:
                    json.loads(body)
                except ValueError as e:
                    hits += 1
                    out(f'{where}: application/ld+json body does not parse as JSON ({e.msg}), '
                        f'the shape a string that closed the tag early leaves behind')
    if scripts == 0:
        hits += 1
        out(f'{built_dir}: no application/ld+json script in {pages} .html file(s). A wrong path '
            f'must not pass; point --built at the folder next build writes, .next/server/app')
    return hits, scripts, pages


GOOD_TSX = """import { jsonLd } from '@/lib/jsonLd';
// a comment naming dangerouslySetInnerHTML and application/ld+json is ignored
const re = /["'`]/g;
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ a: 1 }) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@type": "Thing",
            name: `x ${'}'} y`,
          }),
        }}
      />
    </>
  );
}
"""

BAD_TSX = {
    'bare JSON.stringify': GOOD_TSX.replace('jsonLd({ a: 1 })', 'JSON.stringify({ a: 1 })'),
    'multi line JSON.stringify': GOOD_TSX.replace('__html: jsonLd({\n', '__html: JSON.stringify({\n'),
    'jsonLd plus a tail': GOOD_TSX.replace('jsonLd({ a: 1 })', "jsonLd({ a: 1 }) + '<b>'"),
    'ld+json as children': GOOD_TSX.replace(
        '<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ a: 1 }) }} />',
        '<script type="application/ld+json">{JSON.stringify({ a: 1 })}</script>'),
    'innerHTML that is not ld+json': GOOD_TSX.replace(
        '</>', '<div dangerouslySetInnerHTML={{ __html: html }} />\n    </>'),
    'no import': GOOD_TSX.replace("import { jsonLd } from '@/lib/jsonLd';\n", ''),
    'a local jsonLd behind an aliased import': GOOD_TSX.replace(
        "import { jsonLd } from '@/lib/jsonLd';\n",
        "import { jsonLd as j } from '@/lib/jsonLd';\nconst jsonLd = (v) => JSON.stringify(v);\n"),
}

GOOD_HTML = ('<html><head><script type="application/ld+json">'
             '{"name":"a \\u003c/script\\u003e b","x":"\\u0026"}</script>'
             '<script>var a = 1 < 2;</script></head><body></body></html>')

BAD_HTML = {
    'a literal < in the body': GOOD_HTML.replace('\\u003c/script\\u003e', '<b>'),
    'a title that closed the tag': GOOD_HTML.replace(
        '\\u003c/script\\u003e', '</script><script>alert(1)</script>'),
}


def selftest():
    failures = 0

    def check(label, got_red, want_red):
        nonlocal failures
        ok = got_red == want_red
        failures += 0 if ok else 1
        state = 'red' if got_red else 'green'
        print(f'  {"ok" if ok else "x "} {label}: {state}')

    def quiet(*_a, **_k):
        pass

    print('source mode')
    with tempfile.TemporaryDirectory() as tmp:
        src = os.path.join(tmp, 'src', 'app')
        os.makedirs(src)
        page = os.path.join(src, 'page.tsx')
        open(page, 'w', encoding='utf-8').write(GOOD_TSX)
        hits, files = scan_source(os.path.join(tmp, 'src'), quiet)
        check('good page', hits > 0 or files != 1, False)
        for label, body in BAD_TSX.items():
            assert body != GOOD_TSX, label
            open(page, 'w', encoding='utf-8').write(body)
            hits, _ = scan_source(os.path.join(tmp, 'src'), quiet)
            check(label, hits > 0, True)

    print('built mode')
    with tempfile.TemporaryDirectory() as tmp:
        os.makedirs(os.path.join(tmp, 'en', 'blog'))
        target = os.path.join(tmp, 'en', 'blog', 'post.html')
        open(target, 'w', encoding='utf-8').write(GOOD_HTML)
        hits, scripts, _ = scan_built(tmp, quiet)
        check('good page', hits > 0 or scripts != 1, False)
        for label, body in BAD_HTML.items():
            assert body != GOOD_HTML, label
            open(target, 'w', encoding='utf-8').write(body)
            hits, _, _ = scan_built(tmp, quiet)
            check(label, hits > 0, True)
        open(target, 'w', encoding='utf-8').write('<html><head></head></html>')
        hits, _, _ = scan_built(tmp, quiet)
        check('no JSON-LD anywhere', hits > 0, True)
    with tempfile.TemporaryDirectory() as tmp:
        hits, _, _ = scan_built(os.path.join(tmp, 'missing'), quiet)
        check('a path that does not exist', hits > 0, True)

    print(f'\n{"SELFTEST PASSED" if not failures else f"SELFTEST FAILED ({failures})"}')
    return 1 if failures else 0


if __name__ == '__main__':
    args = sys.argv[1:]
    if args == ['--selftest']:
        sys.exit(selftest())
    if args[:1] == ['--built'] and len(args) == 2:
        hits, scripts, pages = scan_built(args[1])
        print(f'jsonld-escape-check: {hits} defect(s) in {scripts} JSON-LD script(s) '
              f'across {pages} built page(s)')
        sys.exit(1 if hits else 0)
    if not args:
        hits, files = scan_source(os.path.join(ROOT, 'src'))
        print(f'jsonld-escape-check: {hits} defect(s) in {files} source file(s)')
        sys.exit(1 if hits or not files else 0)
    print(__doc__.split('USAGE')[1].split('THIS FILE')[0].rstrip())
    sys.exit(2)
