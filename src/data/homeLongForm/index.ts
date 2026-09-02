import type {HomeLongForm} from '@/types/homeLongForm';
import el from '@/data/homeLongForm/el';
import en from '@/data/homeLongForm/en';

// The two locales, assembled.
//
// `Record<Language, HomeLongFormCopy>` is the load-bearing annotation: `Language` is a closed union,
// so omitting a locale is a compile error, and `HomeLongFormCopy` requires every field, so a locale
// missing a section is a compile error in its own file.
//
// ⚠️ WHAT THE TYPE CANNOT CATCH is the thing that matters most here: the two files must carry the
// SAME six section ids and the SAME six FAQ ids in the SAME order. `tsc` is satisfied by two files
// with different ids, and the home page would then answer different questions in the two languages
// with a green build. That parity is checked by reading, and both files record it in their header.
//
// ⚠️ ONE ASYMMETRY IS DELIBERATE AND IS NOT A DEFECT: the Greek block links all fourteen Greek
// articles; the English links none of them. `blogData.en` is empty and `/en/blog/<slug>` is a hard
// 404 under `dynamicParams = false`, so an English article link would be a broken link on the home
// page. The English makes the same points in prose and links the service pages, the audit page and
// the offer pages instead.

export const homeLongForm: HomeLongForm = {el, en};
