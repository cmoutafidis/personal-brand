// The offer's numbers, in one place.
//
// ⚠️ CHARIS: these three values are the only commercial decisions in this codebase that were made
// for you rather than by you. They were chosen on 2026-08-15 to close the gap the site audit found:
// the ladder ran free audit → unpriced sprint → "it depends what we find", so there was no rung a
// buyer could say yes to. Change any of them here and every page follows.
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

// The audit call books this Calendly event. The copy said "45–60 minutes" in five places while the
// link booked 30, so the copy now matches the link. If you would rather run an hour, create the
// event in Calendly and change both this and CALENDLY_URL in BusinessProcessAuditLanding.tsx.
export const AUDIT_CALL_MINUTES = 30;

// One published reply-time promise, site-wide. It used to be "48 hours" in translations.ts and
// "1 business day" on the audit page, simultaneously.
export const REPLY_SLA = {en: 'one business day', el: 'μία εργάσιμη ημέρα'} as const;
