// The client strip of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.5
// and §9), names and order from offer-os `companies/fiji-solutions/site/03-copy-home.md`, "Client strip".
//
// Who may be named is decided in offer-os PLAN.md BR-D26 and BR-D35, and every entry carries the record of
// that decision: no record, no compile. scripts/no-barred-names.py keeps the names that may never appear out
// of this file. Aargauische Kantonalbank appears as a text name only, with no logo and no link (BR-D35).
//
// Every name renders as text, in the heading font, until a cleared logo file lands (BR-G25); `logo` stays
// unset until then. `projectSlug` names the project page a name links to (BR-G06 adds the routes). Hapimag
// has no page until BR-G28, so it carries none.

export type Client = {
  id: string;
  name: string;
  projectSlug?: string;
  partner?: boolean;
  logo?: {src: string; width: number; height: number; darkSrc?: string};
  permission: {date: string; source: string; logo: boolean};
};

export const CLIENTS: readonly Client[] = [
  {
    id: 'pap-center',
    name: 'PAP Center',
    projectSlug: 'pap-center-crm',
    permission: {date: '2026-10', source: "The owner's written yes, kept by Charis (offer-os F-D20)", logo: false},
  },
  {
    id: 'new-era-learning',
    name: 'New Era Learning',
    projectSlug: 'new-era-learning-platform',
    permission: {date: '2026-10-21', source: 'His decision (offer-os BR-D26)', logo: false},
  },
  {
    id: 'hapimag',
    name: 'Hapimag',
    permission: {date: '2026-10-21', source: 'His decision (offer-os BR-D26, BR-D34)', logo: false},
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    projectSlug: 'jupiter-developer-relations',
    permission: {date: '2026-10-21', source: 'His decision (offer-os BR-D26)', logo: false},
  },
  {
    id: 'catalytics',
    name: 'Catalytics',
    projectSlug: 'catalytics-apps',
    permission: {date: '2026-10-21', source: 'His decision (offer-os BR-D26)', logo: false},
  },
  {
    id: 'seaflows',
    name: 'Seaflows',
    projectSlug: 'seaflows-direct-booking',
    permission: {date: '2026-10-21', source: 'His decision, name now (offer-os BR-D21, BR-D26)', logo: false},
  },
  {
    id: 'alumil',
    name: 'Alumil',
    projectSlug: 'alumil-snowflake-poc',
    permission: {date: '2026-10-21', source: 'His yes (offer-os BR-D26)', logo: false},
  },
  {
    id: 'akb',
    name: 'Aargauische Kantonalbank',
    permission: {date: '2026-10-22', source: 'His answer, text only (offer-os BR-D35)', logo: false},
  },
  {
    id: 'o-topos-mou',
    name: 'Ο Τόπος Μου',
    projectSlug: 'o-topos-mou-archive-rebuild',
    permission: {date: '2026-10-21', source: 'His yes (offer-os BR-D26)', logo: false},
  },
];

/** The partner item after the names: the Snowflake Select badge (company.md partner record). */
export const PARTNER_BADGE = {
  src: '/Services_Partner_Badge_Select.svg',
  href: 'https://www.snowflake.com/en/why-snowflake/partners/all-partners/fiji-solutions/',
} as const;
