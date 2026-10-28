import type {Language} from '@/types/language';

// 2026-10-28 (offer-os gtm/seo-plan-2026-10 C10): the FAQPage freeze. The plan's rule is "New FAQPage
// nodes are not added anywhere; existing ones stay" (D-13: no FAQ markup is added as a GEO lever). These
// lists are the pages whose helper emitted a FAQPage node on 2026-10-28, read from the code and data of
// that day, per locale. blogSchema.ts and offerSchema.ts emit one only for a page listed here, and still
// only when that page has FAQ items to mark up.
//
// ⛔ Never add an entry. A post or offer that is not listed (every new post from the SEO loop included)
// renders its FAQ section as before and gets no FAQPage node. This file is outside
// scripts/seo-allowlist.txt, so a loop branch cannot widen it for itself.
// Removing an entry is allowed: it drops a node, it never adds one.
//
// Not covered here: the homepages' FAQPage, which HomeFaq.tsx writes inline. It is an existing node
// (2026-10-22, broad home BR-D6) and stays.

/** Blog post slugs per locale whose Article graph carried a FAQPage node on 2026-10-28. 18 in all. */
const FAQ_FROZEN_BLOG: Record<Language, ReadonlySet<string>> = {
  el: new Set([
    'poso-kostizei-mia-istoselida',
    'kataskevi-istoselidon-thessaloniki',
    'profil-epicheirisis-google',
    'ti-einai-to-seo',
    'proothisi-istoselidon-ti-agorazeis',
    'kataskevi-eshop-apofaseis',
    'prosvasimotita-istoselidon-eshop',
    'mydata-ilektroniki-timologisi-logismiko',
    'wordpress-shopify-i-diko-sou',
    'google-ads-kai-organiki-anazitisi',
    'istoselida-stis-apantiseis-ai',
    'google-search-console-ti-sou-leei',
    'giati-den-emfanizetai-i-istoselida-sto-google',
    'kataskevi-istoselidon-ti-na-zitas',
  ]),
  en: new Set([
    'how-much-does-it-cost-to-turn-a-spreadsheet-into-an-app',
    'appsheet-glide-or-a-developer',
    'crew-schedule-change-order-job-tracker-app',
    'job-shop-scheduling-work-order-quote-app',
  ]),
};

/**
 * Offer slugs (as `OfferSchemaSource.slug` holds them) per locale whose graph carried a FAQPage node
 * on 2026-10-28. Eight per locale, 16 in all. /offers/atlas had no FAQ that day and is not listed.
 */
const FAQ_FROZEN_OFFERS: Record<Language, ReadonlySet<string>> = {
  el: new Set([
    'offers/ai-agent',
    'offers/ai-development-sprint',
    'offers/ai-prototype',
    'offers/process-automation',
    'offers/sheet-to-app',
    'offers/software-prototype',
    'offers/website-google-ads',
    'offers/website-seo',
  ]),
  en: new Set([
    'offers/ai-agent',
    'offers/ai-development-sprint',
    'offers/ai-prototype',
    'offers/process-automation',
    'offers/sheet-to-app',
    'offers/software-prototype',
    'offers/website-google-ads',
    'offers/website-seo',
  ]),
};

/** True when this blog post may keep its FAQPage node (it had one on 2026-10-28). */
export function blogFaqPageAllowed(slug: string, lang: Language): boolean {
  return FAQ_FROZEN_BLOG[lang].has(slug);
}

/** True when this offer page may keep its FAQPage node (it had one on 2026-10-28). */
export function offerFaqPageAllowed(slug: string, lang: Language): boolean {
  return FAQ_FROZEN_OFFERS[lang].has(slug);
}
