import type {Language} from '@/types/language';

// The review slot of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.5
// and §9, decision BR-D27). Its placeholder card, which asked visitors for a Google review, left both homepages on
// 2026-10-26 (BR-G25, his answer that day). The slot renders nothing until BR-G29
// builds the card for the first real review: the text word for word, its date and its source link, no stars, no
// count or average, and no review or rating markup in any state.
//
// Server component: `language` comes in as a prop for that card.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ReviewSlot({language}: {language: Language}) {
  return null;
}
