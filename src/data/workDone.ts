import type {Language} from '@/types/language';
import type {OfferSlug, ServiceSlug} from '@/data/offerLinks';

// "Work we have done": the project pages each offer and service page links. Added 2026-10-29 (offer-os
// gtm/seo-plan-2026-10 D4, audit CONT-3). The map is written out rather than computed from `services` and
// `relatedOffer` in projects.ts, because that reverse reading leaves most offers with no project; every
// project those two fields tie to a page is in that page's list here. The closest work to what the page sells
// comes first, and mostly matches the Peak Code pages where both sites show the same project (D3).
//
// Two pages are not here. /offers/sheet-to-app links its two projects from its own S09 stories
// (src/data/offers/sheet-to-app.ts). Atlas names no client: his rule for both Atlas pages is one founder line and
// no client names (offer-os gtm/atlas AT-D19), which he kept when asked in D3 (seo-plan-2026-10 D-92).
//
// Each link's text is the project's own H1 and the line under it its card line, read from projects.ts, so a link
// and its page cannot drift. The heading is the one new string; offer-os
// `companies/fiji-solutions/site/03-copy-home.md`, "Work we have done", carries it. Change it there first.

export type WorkDonePage = Exclude<OfferSlug, 'offers/sheet-to-app'> | ServiceSlug | 'business-process-audit';

export const WORK_DONE: Record<WorkDonePage, readonly string[]> = {
  'offers/software-prototype': ['catalytics-apps', 'pap-center-crm'],
  // No project is AI delivery. New Era Learning's lesson tool hands each video to an AI translation service, the
  // nearest thing on file, so it leads the two AI offers (D4 review, C-64).
  'offers/ai-prototype': ['new-era-learning-platform', 'pap-center-crm'],
  'offers/ai-development-sprint': ['jupiter-developer-relations', 'catalytics-apps'],
  'offers/ai-agent': ['new-era-learning-platform', 'pap-center-crm'],
  'offers/process-automation': ['pap-center-crm', 'alumil-snowflake-poc'],
  'offers/website-seo': ['seaflows-direct-booking', 'o-topos-mou-archive-rebuild'],
  'offers/website-google-ads': ['seaflows-direct-booking', 'o-topos-mou-archive-rebuild'],
  'business-process-audit': ['pap-center-crm', 'alumil-snowflake-poc'],
  'services/custom-software-development-greece': [
    'pap-center-crm',
    'catalytics-apps',
    'hapimag-online-platform',
    'new-era-learning-platform',
    'jupiter-developer-relations',
  ],
  'services/data-analysis-greece': ['new-era-learning-platform', 'alumil-snowflake-poc'],
  'services/snowflake-consulting-greece': ['new-era-learning-platform', 'alumil-snowflake-poc'],
};

export const WORK_DONE_HEADING: Record<Language, string> = {
  en: 'Work we have done',
  el: 'Έργα που έχουμε κάνει',
};
