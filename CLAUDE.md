# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint (flat config extending next/core-web-vitals + next/typescript)

There is no test infrastructure — no test runner, no test files. Verify changes with `npm run build` and `npm run lint`.

## What this is

Bilingual (English/Greek) marketing site for Fiji Solutions (fijisolutions.net): Next.js 15 App Router, React 19, TypeScript strict (`@/*` → `./src/*`), Tailwind CSS v3. There is no backend and no env vars anywhere: the contact form POSTs to an external AWS API Gateway URL hardcoded in `src/components/ContactForm.tsx`, and all IDs (Google Ads tag, Vapi keys, prerender token) are hardcoded in source.

## i18n architecture (the load-bearing pattern)

No i18n library, no `[lang]` segment. `src/app/en/**` and `src/app/el/**` are physically duplicated route trees; nothing enforces parity — every page addition or change must be made in both trees. `/` permanently redirects to `/en` (next.config.ts).

Parallel page pairs are thin wrappers around shared server components in `src/components/`, differing only in a hardcoded `language` const and per-locale `export const metadata`. Three content patterns coexist:

1. **translations.ts (most pages)**: pages call `createTranslationFunction(language)` from `src/translations.ts` (flat `Record<Language, Record<string, string>>` with dot-namespaced keys) and pass `t` down as a prop to server components. A key missing from one language silently renders the raw key string — always add keys under both `en:` and `el:`.
2. **Component-internal copy**: `BusinessProcessAuditLanding.tsx` holds its own bilingual `copy[language]` object; its page.tsx wrappers just pass `language`.
3. **Standalone per-locale copies**: legal/privacy pages have duplicated `LegalContent.tsx`/`PrivacyPolicyContent.tsx` per locale, and the `services/*` SEO pages are fully hardcoded per-language files (both locales share the English slug).

Client components that need translations (Navbar, LanguageSwitcher, ContactForm, Vapi widgets, ContactButton2, QuickLinks) don't receive `t`; they call `useLanguage()` from `src/context/LanguageContext.tsx`, which derives the language from the URL prefix. (ContactButton instead takes a pre-translated `label` prop; FooterButton has no i18n.) `setLanguage` rewrites the prefix via router.push; blog slugs are specially remapped across languages by matching post `id` in `src/data/blogs.ts`.

## Blog

Posts are hardcoded TS objects in `src/data/blogs.ts` (`blogData.en` / `blogData.el`, types in `src/types/blog.ts`). Content strings support ONLY `[text](url)` links and `\n\n` paragraph breaks — `BlogPost.tsx` converts them via regex into `dangerouslySetInnerHTML`; any other markdown renders as literal text. Slugs are translated per language; posts pair across languages by `id`.

To add a post: append matching-`id` objects to both arrays, then hand-add two `<url>` entries (with cross-language `xhtml:link` hreflang alternates) to `public/sitemap.xml`. The `[slug]` pages already handle `generateStaticParams`/`generateMetadata`.

## SEO

All metadata is hand-written per page (each page.tsx exports its own `metadata` with a per-locale canonical). `public/sitemap.xml` and `public/robots.txt` are static hand-maintained files — there is no `app/sitemap.ts`/`robots.ts` — so adding any page requires a manual sitemap entry (it is currently missing the business-process-audit pages). `src/middleware.js` proxies bot user-agents to prerender.io. The root layout hardcodes `<html lang="en">` even for Greek pages.

## Gotchas

- `tailwind.config.js` and `postcss.config.js` are the configs actually loaded; `tailwind.config.ts` and `postcss.config.mjs` are identical dead duplicates (`.js` wins config resolution) — editing only the `.ts`/`.mjs` silently does nothing.
- `src/app/page.tsx` is a near-copy of the en homepage but unreachable (`/` redirects to `/en`) — edits there are dead.
- Dark mode is `darkMode: 'class'`: `src/context/ThemeContext.tsx` toggles the `dark` class on `<html>` and persists to localStorage `darkMode`. Style with `dark:` variants throughout (`bg-white dark:bg-gray-900` pattern); shared `@apply` classes (`.btn`, `.btn-primary`, `.btn-secondary`, `.card`, `.section`, `.section-title`) live in `src/app/globals.css`; custom `primary`/`secondary`/`accent` color scales in tailwind.config.js.
- Two Vapi integrations are both live and complementary, not duplicates: `VapiWidget.tsx` (npm `@vapi-ai/web` voice-call button in Hero) and `VapiChatWidget.tsx` (unpkg-injected chat bubble mounted globally in layout.tsx). The Vapi API key/assistant ID are hardcoded in both `src/app/layout.tsx` and `src/types/language.ts` — keep them in sync.
- `ContactButton.tsx` and `ContactButton2.tsx` are both in use (Hero vs Solutions) despite the naming.
- `framer-motion` is in package.json but never imported — all animation is Tailwind/CSS classes.
