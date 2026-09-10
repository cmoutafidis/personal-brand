#!/usr/bin/env python3
"""decision-freshness.py: report code comments whose premise a recorded decision killed.

⚠️ THIS IS A REPORT AND IT NEVER FAILS A BUILD. Read that first, because it is the whole
design and it is deliberate.

WHY IT CANNOT BE A RED GATE. STATE §208 measured this exact check by hand over 1,138
comment blocks: 23 blocks matched a decided topic mechanically and SIX of them were
correct as written, because `website-google-ads.ts` describes an offer this business
SELLS and `gtag.ts` is analytics plumbing. A gate with a 26 percent legitimate-hit rate
gets switched off, and STATE §100 records that this estate has already lost a shipped
feature that way. So this exits 0 always and prints a list a human reads.

WHY IT EXISTS AT ALL. Every comment defect the 2026-09-10 sampled audit found died the
same way: a DECISION moved and the comment did not. A checker cannot know a comment has
gone stale. It CAN know that a comment names a decided topic and never names the
decision that settled it, which is cheap, deterministic and greppable. Measured against
the pre-fix tree it reports all 17 blocks of §208's class on the day the channel was
dropped, instead of nine days later.

WHAT IT ITERATES, and STATE §100's lesson is that a gate can be correct, unbuggy and
blind, so this is stated rather than assumed: every git-tracked .ts .tsx .js .jsx .mjs
.cjs .css .py .yml .yaml file in THIS repository, comments only, code ignored. It does
not read markdown, it does not read another repository, and it needs no credential.
That last point matters: Charis ruled on 2026-09-10 that no token goes into any CI, and
that ruling is about a gate reading OTHER repos. This one reads its own.

ALLOWLIST. Entries are the SHA-1 of the whole matched line, so editing the line revokes
the entry. Same mechanism as no-published-private-contacts.py. Every entry carries a
written reason.

Usage:
    python3 scripts/decision-freshness.py             report
    python3 scripts/decision-freshness.py --selftest  fixtures plus sabotage of its own internals
"""
import hashlib, os, re, subprocess, sys
from pathlib import Path

C_EXT = {".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".css"}
H_EXT = {".py", ".yml", ".yaml"}

# --------------------------------------------------------------------------- decisions
# Each entry: the topic a comment might be talking about, and the markers that show the
# comment KNOWS how that topic was decided. A block matching `topic` and carrying none of
# `ack` is reported. Every entry cites the STATE section that settles it.
DECISIONS = [
    dict(id="ads-dropped-2026-09-01",
         what="Google Ads was dropped as a bought channel on 2026-09-01. Decision 17 of "
              "2026-09-10 keeps it off until the October read.",
         where="STATE §29.4, §30.1, §163, §204, §208",
         topic=[r"google ads", r"adwords", r"ad destination", r"ads? campaign",
                r"paid click", r"ad spend", r"landing page for an ad"],
         ack=[r"2026-09-01", r"\bdropped\b", r"was a google ads", r"no longer",
              r"premise died", r"was true and is not", r"organic search is now",
              r"that channel was dropped", r"until 2026", r"were built as"]),
    dict(id="offer-pages-linked-2026-09-03",
         what="The sixteen offer pages stopped being orphans on 2026-09-03. They carry body "
              "links from their service page and their sibling via src/data/offerLinks.ts.",
         where="STATE §29.4, §30.1, §163",
         topic=[r"nothing links in", r"nothing internal pointing", r"no internal (in)?links?",
                r"deliberately orphan"],
         ack=[r"2026-09-01", r"2026-09-03", r"was true", r"no longer", r"offerlinks",
              r"were built as"]),
    dict(id="charis-mailbox-2026-09-06",
         what="charis@ is never published on any public surface. His rule of 2026-09-06. "
              "info@, contact@ and app@ are all fine and the mailbox is not closed.",
         where="STATE §121, §122, §134",
         topic=[r"charis@(peakcodeconsulting|fijisolutions)"],
         ack=[r"2026-09-06", r"\bbanned\b", r"never published", r"must not be published",
              r"corrected", r"do not (expose|publish)"]),
    dict(id="x-account-2026-09-04",
         what="X was dropped and unlinked from both companies on 2026-09-04. The profile "
              "itself is deliberately left alone, and twitter: card metadata is NOT a link.",
         where="STATE §86, §97, §110",
         topic=[r"x\.com/fiji_solutions", r"the x account", r"twitter account"],
         ack=[r"2026-09-04", r"\bdropped\b", r"unlinked", r"removed", r"deleted",
              r"corrected", r"card", r"opengraph"]),
    dict(id="github-link-2026-09-05",
         what="The personal GitHub link came off both company sites on 2026-09-05 and stays "
              "in the Person sameAs on charismoutafidis.com.",
         where="STATE §96, §97",
         topic=[r"github\.com/cmoutafidis"],
         ack=[r"2026-09-05", r"removed", r"personal", r"person node", r"sameas",
              r"corrected"]),
    dict(id="zefix-banned-2026-09-04",
         what="Every zefix.ch URL is barred as a citation. Its robots.txt forbids Googlebot "
              "that path and the page is an Angular shell. North Data replaced it.",
         where="STATE §66, §83",
         topic=[r"zefix"],
         ack=[r"2026-09-04", r"north ?data", r"robots", r"forbid", r"shell", r"reversed",
              r"corrected", r"do not"]),
    dict(id="gbp-pin-2026-09-03",
         what="The Google Business Profile pin stays where it is. His call of 2026-09-03, "
              "taken with the distances measured.",
         where="STATE §45",
         topic=[r"confirm this pin", r"the two must agree", r"pin against the"],
         ack=[r"2026-09-03", r"\bstays\b", r"his call", r"ruled", r"closed", r"corrected"]),
]

# --------------------------------------------------------------------------- allowlist
# SHA-1 of the whole matched line -> the reason it is correct as written.
ALLOW = {
    # Every entry was adjudicated by hand on 2026-09-10 against the tree, and each is a
    # comment that names a decided topic and is CORRECT AS WRITTEN. STATE §208 records that
    # 6 of 23 mechanical hits were of this kind, which is why this file is a report.
    "aa2cc17c68a4110d19543451dee01a306a587661":
        "offers/website-google-ads.ts, both website repos. 'Website + Google Ads' is an "
        "OFFER THIS BUSINESS SELLS, and STATE §13 records that Charis does that work "
        "himself. The dropped channel is what the company BUYS. Do not conflate the two.",
    "8b8608c43b279376fa92dfa98d60b3e70a3594c3":
        "peak-code offers/website-seo.ts. Names the Google Ads offer only to separate the "
        "two offers' keyword intent, which is the positioning rule that keeps the SEO page "
        "and the ads page off each other's terms. Nothing about the bought channel.",
    "846ac0ebf6deb2a28aead0026c2e76096cf87636":
        "peak-code lib/gtag.ts. The GA4 registration table. It names a Google Ads "
        "conversion in the SIBLING repo as a contrast with this repo's event set. "
        "Analytics plumbing, not a claim about the channel.",
    "bde5f462758d0d4408d5e5ed140ddb7917f90ff8":
        "fiji RootShell.tsx. 'Leadsy + Google Ads load from here, and ONLY after consent.' "
        "MEASURED 2026-09-10 and TRUE: Analytics.tsx still loads AW-17750042512 behind the "
        "consent gate. Decision 17 re-opens the channel at the October read, so the tag "
        "staying is correct and removing it would only mean re-adding it.",
    "d68e2d207405266cd14052d444b6d2d7992bc7ca":
        "charis config/site.ts PROFILES. Explains why x.com/fiji_solutions is deliberately "
        "ABSENT from the Person node, dated 2026-09-02. It is the decision, not a comment "
        "that missed one, and it is a different decision from the 2026-09-04 company "
        "unlink.",
}


def _allow_key(line):
    return hashlib.sha1(line.strip().encode("utf-8")).hexdigest()


# --------------------------------------------------------------------- comment scanning
def scan_c(src):
    out, i, n, line, state = [], 0, len(src), 1, None
    while i < n:
        ch = src[i]
        if state:
            if ch == "\\":
                i += 2
                continue
            if ch == state:
                state = None
            elif ch == "\n":
                line += 1
                if state in ("'", '"'):
                    state = None
            i += 1
            continue
        if ch == "\n":
            line += 1; i += 1; continue
        if ch in "'\"`":
            state = ch; i += 1; continue
        if ch == "/" and i + 1 < n and src[i + 1] == "/":
            j = src.find("\n", i); j = n if j < 0 else j
            out.append((line, src[i:j])); i = j; continue
        if ch == "/" and i + 1 < n and src[i + 1] == "*":
            j = src.find("*/", i + 2); j = n if j < 0 else j + 2
            body = src[i:j]
            out.append((line, body)); line += body.count("\n"); i = j; continue
        i += 1
    return out


def scan_hash(src):
    out, in_str = [], None
    for ln, text in enumerate(src.split("\n"), 1):
        in_str = None
        for k, ch in enumerate(text):
            if ch in "'\"":
                in_str = ch if in_str is None else (None if in_str == ch else in_str)
            elif ch == "#" and in_str is None:
                out.append((ln, text[k:])); break
    return out


def blocks(src, ext):
    """One contiguous run of comment lines is ONE block.

    ⚠️ A RUN IS ANY NUMBER OF LINES, NOT TWO. The first draft of this function tested
    whether the accumulated text already contained a newline, which is true the moment two
    lines have merged, so every run longer than two lines fragmented and an acknowledgement
    written four lines below its own topic was never seen. It reported 20 comments across
    the three repos where the correct answer is 8. The fixture set had no three-line run in
    it, which is STATE §134's lesson: when something gets through, the FIXTURES are wrong.
    """
    raw = scan_c(src) if ext in C_EXT else scan_hash(src)
    merged, prev_end, prev_single = [], None, False
    for ln, text in raw:
        single = "\n" not in text
        if merged and prev_single and single and prev_end is not None and ln == prev_end + 1:
            merged[-1] = (merged[-1][0], merged[-1][1] + "\n" + text)
        else:
            merged.append((ln, text))
        prev_end = ln + text.count("\n")
        prev_single = single
    return merged


# ------------------------------------------------------------------------------ the run
def examine(text):
    """Return the decisions this comment names without acknowledging."""
    low = text.lower()
    hits = []
    for d in DECISIONS:
        if not any(re.search(p, low) for p in d["topic"]):
            continue
        if any(re.search(p, low) for p in d["ack"]):
            continue
        hits.append(d)
    return hits


def repo_files(root):
    out = subprocess.run(["git", "ls-files"], cwd=root, capture_output=True, text=True)
    files = []
    for f in out.stdout.split():
        ext = os.path.splitext(f)[1]
        if ext not in C_EXT and ext not in H_EXT:
            continue
        if f.startswith("public/") or "/.next/" in f:
            continue
        files.append(f)
    return files


def run(root="."):
    files = repo_files(root)
    # STATE §19: a check that ticks on no input is worse than no check.
    if not files:
        print("decision-freshness: read ZERO files. That is a broken invocation rather than a "
              "clean repo, so this is reported as a failure of the CHECK.", file=sys.stderr)
        return 2, []
    rows, scanned, allowed = [], 0, 0
    for f in files:
        ext = os.path.splitext(f)[1]
        try:
            src = (Path(root) / f).read_text(encoding="utf-8")
        except Exception:
            continue
        scanned += 1
        for ln, text in blocks(src, ext):
            for d in examine(text):
                first = next((l for l in text.split("\n") if l.strip()), text)[:200]
                if _allow_key(first) in ALLOW:
                    allowed += 1
                    continue
                rows.append((f, ln, d, first.strip()))
    return 0, (rows, scanned, len(files), allowed)


def report(root="."):
    code, payload = run(root)
    if code:
        return code
    rows, scanned, total, allowed = payload
    # STATE §200.1: print the denominator beside the verdict, every time.
    head = (f"decision-freshness: {scanned} of {total} tracked files scanned, "
            f"{len(DECISIONS)} decisions tracked, {allowed} allowlisted, "
            f"{len(rows)} comment(s) to read.")
    lines = [head, ""]
    if not rows:
        lines.append("Nothing to read. Every comment naming a decided topic also names the decision.")
    else:
        lines.append("⚠️ These comments name a decided topic and never name the decision that")
        lines.append("settled it. THIS IS NOT A FAILURE LIST. Some will be correct as written.")
        lines.append("")
        for f, ln, d, first in rows:
            lines.append(f"  {f}:{ln}")
            lines.append(f"      decision : {d['id']}  ({d['where']})")
            lines.append(f"      what     : {d['what']}")
            lines.append(f"      comment  : {first}")
            lines.append("")
    out = "\n".join(lines)
    print(out)
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        with open(summary, "a", encoding="utf-8") as fh:
            fh.write("### decision-freshness\n\n```\n" + out + "\n```\n")
    return 0   # ALWAYS. See the module docstring.


# ---------------------------------------------------------------------------- selftest
FIXTURES = [
    ("a stale ads premise is reported",
     "// Google Ads landing page: not in the navigation.\nconst a=1;\n", ".ts", 1),
    ("the same premise WITH the decision named is not reported",
     "// Was a Google Ads landing page until 2026-09-01; organic search is now the route.\n"
     "const a=1;\n", ".ts", 0),
    ("acknowledging by the word dropped is enough",
     "// These were built as Google Ads pages. The channel was dropped.\nconst a=1;\n", ".ts", 0),
    ("an orphan claim with no date is reported",
     "// Nothing links in, on purpose.\nconst a=1;\n", ".ts", 1),
    ("the same orphan claim naming offerLinks is not",
     "// Nothing links in was true once; see src/data/offerLinks.ts.\nconst a=1;\n", ".ts", 0),
    ("the banned mailbox named without the rule is reported",
     "// mail charis@peakcodeconsulting.ch for the guarantee\nconst a=1;\n", ".ts", 1),
    ("the banned mailbox inside a dated correction is not",
     "// CORRECTED 2026-09-06: this used to publish charis@peakcodeconsulting.ch\n"
     "const a=1;\n", ".ts", 0),
    ("CODE is never read, only comments",
     "const url = 'https://zefix.ch/x';\n", ".ts", 0),
    ("a // inside a string is not a comment",
     "const u = 'https://x.dev/google ads//a';\n", ".ts", 0),
    ("python hash comments are read",
     "# Google Ads landing page rules\nx = 1\n", ".py", 1),
    ("a clean comment reports nothing",
     "// Maps over the items and renders one card each.\nconst a=1;\n", ".ts", 0),
    # ⚠️ THE FIXTURE THE FIRST DRAFT LACKED. A run of FIVE lines is one block, so an
    # acknowledgement on line 5 answers a topic named on line 1. Without this the merge
    # silently joined pairs only and every long comment fragmented.
    ("a five line run is ONE block, so a late acknowledgement counts",
     "// These pages take Google Ads traffic.\n"
     "//\n"
     "// More prose that says nothing in particular.\n"
     "//\n"
     "// That channel was dropped on 2026-09-01 and organic is the route now.\n"
     "const a=1;\n", ".ts", 0),
    ("a five line run with NO acknowledgement anywhere is still reported once",
     "// These pages take Google Ads traffic.\n"
     "//\n"
     "// More prose that says nothing in particular.\n"
     "//\n"
     "// And a final line that settles nothing.\n"
     "const a=1;\n", ".ts", 1),
    ("a run broken by CODE does not merge across the break",
     "// Google Ads landing page.\n"
     "const a=1;\n"
     "// That channel was dropped on 2026-09-01.\n", ".ts", 1),
    ("zefix named without the reversal is reported",
     "// The register citation is the zefix permalink.\nconst a=1;\n", ".ts", 1),
]


def _fixture_failures():
    bad = []
    for name, src, ext, want in FIXTURES:
        got = sum(len(examine(t)) for _, t in blocks(src, ext))
        if got != want:
            bad.append(f"  {name}: expected {want} report(s), got {got}")
    return bad


def selftest():
    bad = _fixture_failures()
    print(f"FIXTURES: {len(FIXTURES)} cases, {len(bad)} failed")
    for b in bad:
        print(b)
    if bad:
        print("SELFTEST FAILED")
        return 1

    # STATE §179: every gate in this estate has had a sabotage pass unnoticed on its first
    # run. Each sabotage below MUST make at least one fixture go red.
    global DECISIONS
    import copy
    original = copy.deepcopy(DECISIONS)
    saved_scan_c, saved_blocks = scan_c, blocks
    unnoticed = []

    def sab_ack_always():
        for d in DECISIONS:
            d["ack"] = [r""]                      # every comment looks acknowledged

    def sab_topic_never():
        for d in DECISIONS:
            d["topic"] = [r"zzz-not-a-real-topic"]

    def sab_no_comment_split():
        globals()["blocks"] = lambda src, ext: [(1, src)]   # read code as comment too

    for name, apply in (("ack matches everything", sab_ack_always),
                        ("topic matches nothing", sab_topic_never),
                        ("code read as comment", sab_no_comment_split)):
        DECISIONS = copy.deepcopy(original)
        globals()["blocks"] = saved_blocks
        apply()
        f = _fixture_failures()
        print(f"SABOTAGE {name:26s} -> {len(f)} fixture(s) went red"
              + ("   <-- UNNOTICED" if not f else ""))
        if not f:
            unnoticed.append(name)

    DECISIONS = copy.deepcopy(original)
    globals()["blocks"] = saved_blocks
    if _fixture_failures():
        print("RESTORE FAILED")
        return 1
    print("restore verified: fixtures green again")

    if unnoticed:
        print(f"SELFTEST FAILED: {len(unnoticed)} sabotage(s) passed unnoticed, so the FIXTURE "
              f"SET is wrong rather than the sabotage")
        return 1
    print("SELFTEST PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(selftest() if "--selftest" in sys.argv else report())
