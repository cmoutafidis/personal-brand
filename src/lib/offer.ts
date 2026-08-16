import {Language} from '@/types/language';

// The offer's numbers, in one place.
//
// ⚠️ RATIFIED BY CHARIS ON 2026-08-16. The €2,400 / 5-working-day Discovery Sprint and all six
// guarantee clauses are his decisions and stand as written. Nothing below is a placeholder any
// more. What is kept from the 2026-08-15 draft is the *rationale* for each number, because the
// rationale is the reason the next person should not change one casually. Change a value here
// and every page follows; change one in copy instead and the page starts contradicting the
// contract that quotes it.
//
// Why these numbers:
//   SPRINT_PRICE_EUR  the playbook's floor is €1,000 contribution margin per client, better
//                     €1,500. Five days of work at €2,400 clears that with room, and it is a
//                     number a Greek SMB owner can approve without a board.
//   SPRINT_DAYS       the entry offer's delivery is capped at one month; five working days keeps
//                     the sprint well inside that and makes it quotable on the first call.
//   FIRST_FIX_DAYS    already the promise on the audit page's timeline. Not new.
export const SPRINT_PRICE_EUR = 2400;
export const SPRINT_DAYS = 5;
export const FIRST_FIX_DAYS = 30;

// The Discovery Sprint price, written the way each locale writes money. English puts the symbol
// in front with a comma group (€2,400); Greek puts it behind with a dot group (2.400€), which is
// what the Greek page already does for "19.000€", "25€/ώρα" and "≈ 450€ / μήνα". Both locales
// used the English form until 2026-08-16, so the Greek page priced the sprint in a format it
// contradicted three paragraphs later.
export function formatSprintPrice(lang: Language): string {
  return lang === 'el'
    ? `${SPRINT_PRICE_EUR.toLocaleString('el-GR')}€`
    : `€${SPRINT_PRICE_EUR.toLocaleString('en-US')}`;
}

// The Pays-For-Itself Guarantee's numbers.
//
// ⚠️ RATIFIED BY CHARIS ON 2026-08-16 together with the sprint above — all six clauses as
// written. These four numbers are contract wording: the audit page tells the reader "these terms
// go into the contract before we build, in these words". They were hand-copied across about a
// dozen string literals in two locales until 2026-08-16, with nothing enforcing parity. Every
// rendered guarantee string now derives from here. Do not retype one into copy.
//
// Why these numbers:
//   GUARANTEE_WINDOW_MONTHS        long enough for a process fix to actually accumulate the
//                                  savings it is measured on, short enough that the buyer is
//                                  not asked to wait a year to find out.
//   GUARANTEE_CURE_DAYS            fixing beats refunding for both sides, so the guarantee buys
//                                  one month to repair a miss before any money moves.
//   GUARANTEE_CLAIM_DAYS           a claim window bounds the liability without being a trap;
//                                  it is the same month, counted from the window closing.
//   GUARANTEE_ANSWER_WORKING_DAYS  a published answer deadline is what stops a guarantee from
//                                  being unenforceable in practice. Two working weeks.
export const GUARANTEE_WINDOW_MONTHS = 6;
export const GUARANTEE_CURE_DAYS = 30;
export const GUARANTEE_CLAIM_DAYS = 30;
export const GUARANTEE_ANSWER_WORKING_DAYS = 10;

// The homepage states the window in words ("six months" / «έξι μήνες»); the audit page states it
// in digits. Same number, two registers — so the word form is looked up from the number rather
// than typed a second time. If the window ever changes, add its row here; the fallback is the
// digits, which stays truthful and only reads worse.
const WINDOW_WORDS: Record<number, {en: string; el: string}> = {
  6: {en: 'six', el: 'έξι'},
};
export const GUARANTEE_WINDOW_WORD: {en: string; el: string} =
  WINDOW_WORDS[GUARANTEE_WINDOW_MONTHS] ?? {
    en: String(GUARANTEE_WINDOW_MONTHS),
    el: String(GUARANTEE_WINDOW_MONTHS),
  };

// The audit call books this Calendly event. The copy said "45–60 minutes" in five places while the
// link booked 30, so the copy now matches the link. If you would rather run an hour, create the
// event in Calendly and change both this and CALENDLY_URL in BusinessProcessAuditLanding.tsx.
export const AUDIT_CALL_MINUTES = 30;

// One published reply-time promise, site-wide. It used to be "48 hours" in translations.ts and
// "1 business day" on the audit page, simultaneously.
export const REPLY_SLA = {en: 'one business day', el: 'μία εργάσιμη ημέρα'} as const;
