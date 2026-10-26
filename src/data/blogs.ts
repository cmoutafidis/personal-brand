import type {BlogData} from '@/types/blog';

// Greek-first on purpose. «κατασκευή ιστοσελίδων» measures 2,900 searches a month, stable across
// eleven of twelve months, while every Greek phrase for automation and AI work measures at or near
// Google's reporting floor. The blog answers what people actually type. Roadmap:
// offer-os/gtm/fiji-greek-content-plan-2026-09-02.md.
// 2026-10-12 (F20 of offer-os gtm/followups-and-search): `en` now carries the two English answer
// articles, written for the full-sentence cost and tool-choice questions AI assistants answer. They
// are original English, not translations of the Greek posts. See the two /blog index pages and
// src/app/sitemap.ts for the three parts undone together when en was filled.
//
// ⚠️ TWO MEASUREMENT TRAPS, both proven on 2026-09-02, both of which had already produced a wrong
// number in this file:
//   1. «προώθηση ιστοσελίδων» IS NOT 1,600/mo. That average is an artifact. Its twelve months read
//      210 390 260 320 210 210 170 260 390 1000 5400 9900 — flat for ten months, then vertical in
//      May–July 2026. Quote the trajectory, never the average. This comment used to say 1,600.
//   2. DataForSEO returns NO DATA for any Greek keyword containing a word-final ς (U+03C2);
//      substitute σ. «καιρός» returns nothing, «καιροσ» returns 5,000,000. So a Greek "no demand"
//      verdict is worthless unless it was re-tested with σ.
// Corrections A/B/C in offer-os/gtm/keyword-research-2026-09-01.md.
//
// Rules that live in the copy, not just in review:
//   - No price, no range, no "from" — ~~anywhere, ever (CLAUDE.md rule 7).~~
//     Superseded 2026-10-26 (seo-plan-2026-10 D-08): the blanket rule is retired for offers with a
//     set price, which show it in the visitor's currency. Blog posts, including the cost posts, still
//     carry no figures; cost posts link to the priced offer where one exists. Goal D9 carries out the
//     links; until then a session keeps every post free of figures.
//   - No ranking promise. Google itself says there is no guarantee, and the article quotes it.
//   - Every claim about how search works is quoted from Google's own documentation with a URL.
//   - Greek: informal εσύ, the apostrophe is U+2019, one term per concept («ιστοσελίδα»,
//     «στον αέρα», «εναρκτήρια συνάντηση», «αιτήματα»).

import posoKostizeiMiaIstoselida from './blog/poso-kostizei-mia-istoselida';
import kataskeviIstoselidonThessaloniki from './blog/kataskevi-istoselidon-thessaloniki';
import profilEpicheirisisGoogle from './blog/profil-epicheirisis-google';
import tiEinaiToSeo from './blog/ti-einai-to-seo';
import proothisiIstoselidonTiAgorazeis from './blog/proothisi-istoselidon-ti-agorazeis';
import kataskeviEshopApofaseis from './blog/kataskevi-eshop-apofaseis';
import prosvasimotitaIstoselidonEshop from './blog/prosvasimotita-istoselidon-eshop';
import mydataIlektronikiTimologisiLogismiko from './blog/mydata-ilektroniki-timologisi-logismiko';
import wordpressShopifyIDikoSou from './blog/wordpress-shopify-i-diko-sou';
import googleAdsKaiOrganikiAnazitisi from './blog/google-ads-kai-organiki-anazitisi';
import istoselidaStisApantiseisAi from './blog/istoselida-stis-apantiseis-ai';
import googleSearchConsoleTiSouLeei from './blog/google-search-console-ti-sou-leei';
import giatiDenEmfanizetaiIIstoselidaStoGoogle from './blog/giati-den-emfanizetai-i-istoselida-sto-google';
import kataskeviIstoselidonTiNaZitas from './blog/kataskevi-istoselidon-ti-na-zitas';
// English answer articles (F20 of offer-os gtm/followups-and-search, 2026-10-12). These are the first
// entries in blogData.en; filling it turns /en/blog indexable (see the three-part undo in that page,
// src/app/sitemap.ts and the two /blog index files). Original English, not a translation of the Greek posts.
import howMuchDoesItCost from './blog/how-much-does-it-cost-to-turn-a-spreadsheet-into-an-app';
import appsheetGlideOrADeveloper from './blog/appsheet-glide-or-a-developer';
// Two English niche pages in buyer words (F21 of offer-os gtm/followups-and-search, 2026-10-12): the job
// words construction subs and machine shops type ("crew schedule template excel", "job shop scheduling excel
// template"), each "when the spreadsheet stops working, here is what the app does", linking the offer page.
// Original English, no price, no client named.
import crewScheduleChangeOrderJobTracker from './blog/crew-schedule-change-order-job-tracker-app';
import jobShopSchedulingWorkOrderQuote from './blog/job-shop-scheduling-work-order-quote-app';
import onePersonKnowsEverythingBusinessContinuity from './blog/one-person-knows-everything-business-continuity';
import aiAgentPouPaneDedomenaPelaton from './blog/ai-agent-pou-pane-dedomena-pelaton';
import allagiErpILogistikouGiaAytomatopoiisi from './blog/allagi-erp-i-logistikou-gia-aytomatopoiisi';

// One file per article in src/data/blog/, the same convention src/data/offers/ uses. Fourteen
// articles inline in this file was about seven thousand lines and nothing could be reviewed.
// THIS ARRAY IS THE INDEX ORDER. /el/blog renders it top to bottom and nothing else sorts it —
// not publishedAt, not the filename. The twelve of 2026-09-02 come first in the roadmap's own
// order (fiji-greek-content-plan-2026-09-02.md), then the two of 2026-09-01.
export const blogData: BlogData = {
  el: [
    posoKostizeiMiaIstoselida,
    kataskeviIstoselidonThessaloniki,
    profilEpicheirisisGoogle,
    tiEinaiToSeo,
    proothisiIstoselidonTiAgorazeis,
    kataskeviEshopApofaseis,
    prosvasimotitaIstoselidonEshop,
    mydataIlektronikiTimologisiLogismiko,
    wordpressShopifyIDikoSou,
    googleAdsKaiOrganikiAnazitisi,
    istoselidaStisApantiseisAi,
    googleSearchConsoleTiSouLeei,
    giatiDenEmfanizetaiIIstoselidaStoGoogle,
    kataskeviIstoselidonTiNaZitas,
    aiAgentPouPaneDedomenaPelaton,
    allagiErpILogistikouGiaAytomatopoiisi,
  ],
  en: [
    howMuchDoesItCost,
    appsheetGlideOrADeveloper,
    crewScheduleChangeOrderJobTracker,
    jobShopSchedulingWorkOrderQuote,
    onePersonKnowsEverythingBusinessContinuity,
  ],
};
