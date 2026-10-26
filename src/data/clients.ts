// The client strip of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.5
// and §9), names and order from offer-os `companies/fiji-solutions/site/03-copy-home.md`, "Client strip".
//
// Who may be named is decided in offer-os PLAN.md BR-D26 and BR-D35, and every entry carries the record of
// that decision: no record, no compile. scripts/no-barred-names.py keeps the names that may never appear out
// of this file. Aargauische Kantonalbank appears as a text name only, with no logo and no link (BR-D35).
//
// A name renders as text, in the heading font, until a cleared logo file lands. Since 2026-10-26 (BR-G25) every
// client with a file in offer-os `gtm/broad-home-2026-10/assets/logos/` shows its logo from public/clients/, under
// his yes of 2026-10-22 for every client he named (offer-os BR-D34); the proof is filed in offer-os
// `companies/fiji-solutions/proof/2026-10-client-logos.md`. `width` and `height` are the size the logo renders
// at, about 40px high. `darkSrc` is the same logo recoloured for dark backgrounds. `withName` sets the name in
// text beside a logo that is a mark alone. Aargauische Kantonalbank and Ο Τόπος Μου have no file and stay text.
// `projectSlug` names the project page a name or logo links to (BR-G06 adds the routes; Hapimag's page since
// BR-G28).

export type Client = {
  id: string;
  name: string;
  projectSlug?: string;
  partner?: boolean;
  logo?: {src: string; width: number; height: number; darkSrc?: string; withName?: boolean};
  permission: {date: string; source: string; logo: boolean; logoDate?: string; logoSource?: string};
};

export const CLIENTS: readonly Client[] = [
  {
    id: 'pap-center',
    name: 'PAP Center',
    projectSlug: 'pap-center-crm',
    logo: {src: '/clients/pap-center.svg', width: 132, height: 40},
    permission: {date: '2026-10', source: "The owner's written yes, kept by Charis (offer-os F-D20)", logo: true, logoDate: '2026-10-22', logoSource: 'His yes for every client he named, 2026-10-22 (offer-os BR-D34)'},
  },
  {
    id: 'new-era-learning',
    name: 'New Era Learning',
    projectSlug: 'new-era-learning-platform',
    logo: {src: '/clients/new-era-learning.svg', width: 167, height: 32, darkSrc: '/clients/new-era-learning-on-dark.svg'},
    permission: {date: '2026-10-21', source: 'His decision (offer-os BR-D26)', logo: true, logoDate: '2026-10-22', logoSource: 'His yes for every client he named, 2026-10-22 (offer-os BR-D34)'},
  },
  {
    id: 'hapimag',
    name: 'Hapimag',
    projectSlug: 'hapimag-online-platform',
    logo: {src: '/clients/hapimag.svg', width: 133, height: 20, darkSrc: '/clients/hapimag-on-dark.svg'},
    permission: {date: '2026-10-21', source: 'His decision (offer-os BR-D26, BR-D34)', logo: true, logoDate: '2026-10-22', logoSource: 'His yes for every client he named, 2026-10-22 (offer-os BR-D34)'},
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    projectSlug: 'jupiter-developer-relations',
    logo: {src: '/clients/jupiter.svg', width: 32, height: 32, withName: true},
    permission: {date: '2026-10-21', source: 'His decision (offer-os BR-D26)', logo: true, logoDate: '2026-10-22', logoSource: 'His yes for every client he named, 2026-10-22 (offer-os BR-D34)'},
  },
  {
    id: 'catalytics',
    name: 'Catalytics',
    projectSlug: 'catalytics-apps',
    logo: {src: '/clients/catalytics.svg', width: 99, height: 36, darkSrc: '/clients/catalytics-on-dark.svg'},
    permission: {date: '2026-10-21', source: 'His decision (offer-os BR-D26)', logo: true, logoDate: '2026-10-22', logoSource: 'His yes for every client he named, 2026-10-22 (offer-os BR-D34)'},
  },
  {
    id: 'seaflows',
    name: 'Seaflows',
    projectSlug: 'seaflows-direct-booking',
    logo: {src: '/clients/seaflows.webp', width: 73, height: 40},
    permission: {date: '2026-10-21', source: 'His decision, name now (offer-os BR-D21, BR-D26)', logo: true, logoDate: '2026-10-22', logoSource: 'His yes for every client he named, 2026-10-22 (offer-os BR-D34)'},
  },
  {
    id: 'alumil',
    name: 'Alumil',
    projectSlug: 'alumil-snowflake-poc',
    logo: {src: '/clients/alumil.svg', width: 104, height: 40, darkSrc: '/clients/alumil-on-dark.svg'},
    permission: {date: '2026-10-21', source: 'His yes (offer-os BR-D26)', logo: true, logoDate: '2026-10-22', logoSource: 'His yes for every client he named, 2026-10-22 (offer-os BR-D34)'},
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
