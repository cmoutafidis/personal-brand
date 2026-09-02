import type {BlogData} from '@/types/blog';

// Greek-first on purpose. «κατασκευή ιστοσελίδων» measures 2,900 searches a month, stable across
// eleven of twelve months, while every Greek phrase for automation and AI work measures at or near
// Google's reporting floor. The blog answers what people actually type. `en` stays empty until
// there is a reason. Roadmap: offer-os/gtm/fiji-greek-content-plan-2026-09-02.md.
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
//   - No price, no range, no "from" — anywhere, ever (CLAUDE.md rule 7).
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
  ],
  en: [],
};
