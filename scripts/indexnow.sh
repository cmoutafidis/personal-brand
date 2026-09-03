#!/usr/bin/env bash
# Submit changed URLs to IndexNow.
#
# WHAT THIS IS. IndexNow is a push protocol: instead of waiting to be crawled, you tell the
# participating engines that specific URLs changed. It needs no account and no verification —
# ownership is proven by hosting a key file at the site root, which is public/<key>.txt here.
#
# WHO RECEIVES IT. Bing, Yandex, Seznam, Naver and Yep, via any one endpoint — a submission to
# one is shared with all of them (indexnow.org/faq). GOOGLE DOES NOT PARTICIPATE. Nothing here
# affects Google; use Search Console for that.
#
# WHY IT IS WORTH RUNNING HERE. Half this site is not in Google's index. Bing has about 13 pages of
# it, measured 2026-09-03 with `site:www.fijisolutions.net`, and none of the fourteen Greek articles
# is among them. Bing is also Copilot's index, and a materially larger share of the Swiss market
# than the Greek one, which matters because the same eight offers ship on peakcodeconsulting.ch too.
#
# ⚠️ THE OLD TEXT HERE SAID "neither domain is verified in Bing Webmaster Tools". THAT IS FALSE and
# was measured false on 2026-09-03. Both are verified, on the apex host, and Bing normalises www
# into the same property: POSTing site/add for the www host returns 400 SiteAlreadyAdded.
#
# ⚠️ AND AN IndexNow PING IS NOT A SUBMISSION YOU CAN SEE. Measured the same day: Bing's URL
# Submission page read "No URLs submitted in last 28 days" for BOTH company sites, the day after
# URLs had been pushed through IndexNow and accepted. Accepted means received. It does not mean
# crawled, and it does not appear in the tools. Bing's own sitemap row for this site still said 34
# URLs discovered while the live sitemap held 49, and one Re-submit fixed it. RUN THIS, AND THEN
# RESUBMIT THE SITEMAP IN BING AS WELL AS IN SEARCH CONSOLE.
#
# ⚠️ RUN THIS BY HAND, AND ONLY FOR PAGES THAT ACTUALLY CHANGED.
# This is deliberately NOT wired to a deploy hook. IndexNow's own FAQ: "Every URL submitted
# through IndexNow counts toward your site's crawl quota", and it asks you to avoid submitting
# the same URL many times a day unless the content meaningfully changed, with at least five
# minutes between updates to the same page. A post-deploy hook would resubmit all 34 URLs every
# time a stylesheet moved, which spends the quota and teaches the engines to discount the signal
# — the same failure mode the sitemap lastmod bug had.
#
# USAGE
#   scripts/indexnow.sh https://www.fijisolutions.net/en/offers/ai-agent [more URLs...]
#   scripts/indexnow.sh --all      # every URL in the sitemap; use only after a site-wide change
#   scripts/indexnow.sh --dry-run https://...   # print the payload, send nothing

set -euo pipefail

HOST="www.fijisolutions.net"
KEY="d05fd28a58c14d3e88fd1893cbcc3f39"
KEY_LOCATION="https://${HOST}/${KEY}.txt"
ENDPOINT="https://api.indexnow.org/indexnow"

DRY_RUN=0
URLS=()

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    --all)
      while IFS= read -r u; do URLS+=("$u"); done < <(
        curl -fsS --max-time 30 "https://${HOST}/sitemap.xml" \
          | grep -o '<loc>[^<]*</loc>' | sed -E 's|</?loc>||g'
      )
      ;;
    https://*) URLS+=("$arg") ;;
    *) echo "ignoring unrecognised argument: $arg" >&2 ;;
  esac
done

if [ ${#URLS[@]} -eq 0 ]; then
  echo "No URLs given. Pass full https:// URLs, or --all for the whole sitemap." >&2
  exit 2
fi

# Refuse anything that is not on this host — IndexNow rejects a mixed-host payload outright,
# and a silent 422 is easy to mistake for success.
for u in "${URLS[@]}"; do
  case "$u" in
    "https://${HOST}/"*) ;;
    *) echo "REFUSED, wrong host: $u (every URL must be on https://${HOST}/)" >&2; exit 3 ;;
  esac
done

# Prove the key file is actually being served before claiming ownership of anything. If this
# 404s, IndexNow rejects the whole submission and the reason is not obvious from the response.
served=$(curl -fsS --max-time 15 "$KEY_LOCATION" || true)
if [ "$served" != "$KEY" ]; then
  echo "Key file check FAILED at ${KEY_LOCATION}" >&2
  echo "  expected: ${KEY}" >&2
  echo "  got:      ${served:-<nothing, or non-200>}" >&2
  echo "Deploy public/${KEY}.txt before submitting." >&2
  exit 4
fi

payload=$(python3 -c '
import json, sys
host, key, loc = sys.argv[1], sys.argv[2], sys.argv[3]
print(json.dumps({"host": host, "key": key, "keyLocation": loc, "urlList": sys.argv[4:]}))
' "$HOST" "$KEY" "$KEY_LOCATION" "${URLS[@]}")

echo "Submitting ${#URLS[@]} URL(s) to IndexNow (Bing, Yandex, Seznam, Naver, Yep — not Google)."
if [ "$DRY_RUN" -eq 1 ]; then
  echo "$payload" | python3 -m json.tool
  echo "DRY RUN — nothing sent."
  exit 0
fi

code=$(curl -sS -o /tmp/indexnow-response.txt -w '%{http_code}' \
  --max-time 30 -X POST "$ENDPOINT" \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data "$payload")

echo "HTTP ${code}"
case "$code" in
  200|202) echo "Accepted. 200 = received, 202 = received but key validation still pending." ;;
  400) echo "Bad request — malformed payload." ;;
  403) echo "Key not valid: the file at ${KEY_LOCATION} does not match the submitted key." ;;
  422) echo "URLs do not belong to the host, or the key does not match." ;;
  429) echo "Too many requests. Stop and wait; do not retry in a loop." ;;
  *)   echo "Unexpected status."; cat /tmp/indexnow-response.txt 2>/dev/null || true ;;
esac
