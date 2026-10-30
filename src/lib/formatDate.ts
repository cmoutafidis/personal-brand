import type {Language} from '@/types/language';

// The one long date format of the pages that print an ISO date in the page's locale: the project pages, the
// sheet-to-app "Updated" line and the review cards. Extracted 2026-10-30 (offer-os gtm/seo-plan-2026-10 D13) from
// the three identical private copies in ProjectPages.tsx, SheetToAppLanding.tsx and ReviewSlot.tsx, so they cannot
// drift. The blog keeps its own format (en-US on the home list), which this does not change.

/** An ISO date as "8 October 2026" or «8 Οκτωβρίου 2026», read in UTC so the build machine's zone cannot shift it. */
export function formatIsoDate(iso: string, lang: Language): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
