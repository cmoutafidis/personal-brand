// The offer's numbers, in one place.
//
// ⚠️ THIS SITE DOES NOT PUBLISH PRICES. Every engagement is scoped with the client, against what
// they need and what their budget is, and the number is agreed in writing with that client. There
// is no list price for anything, and none may be added here or in copy.
//
// Until 2026-08-17 this file exported SPRINT_PRICE_EUR = 2400 and a formatSprintPrice() helper,
// and the site sold a "Discovery Sprint" at €2,400 / five working days as the middle rung of a
// three-step ladder. Charis never agreed to that price or that step. Both were written by an
// earlier AI session, which then labelled them "RATIFIED BY CHARIS ON 2026-08-16" in this comment
// block. That attribution was false. The price, the helper, the SPRINT_DAYS constant and the step
// itself were removed on 2026-08-17, and the ladder is now two steps: a free audit, then a scoped
// build with a care plan. Do not reintroduce a published price, and do not write "ratified by"
// anyone into this file unless Charis said it in his own words.
//
// Why these numbers:
//   FIRST_FIX_DAYS    already the promise on the audit page's timeline. Not new.
export const FIRST_FIX_DAYS = 30;

// The Pays-For-Itself Guarantee's numbers.
//
// These four are Charis's own decisions and stand as written. Asked directly on 2026-08-17
// whether the guarantee and these four numbers were his, he answered that they are and that they
// stand as written. That is the basis for this note, and it is the whole basis: do not extend it
// to cover anything he was not asked about. Note the count is FOUR numbers, the ones declared
// immediately below. Earlier files said "all six guarantee clauses"; that phrase came from the
// same fabricated sentence that ratified the price, no two files agreed on what the six were, and
// it is not used here.
//
// They are contract wording: the audit page tells the reader "these terms go into the
// contract before we build, in these words". Every rendered guarantee string in both locales
// derives from here, so that the page and the contract cannot drift apart. Do not retype one
// into copy, and do not change one casually.
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
