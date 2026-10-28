import React from 'react';
import {Facebook, Linkedin} from 'lucide-react';
import FooterButton from "@/components/FooterButton";
import QuickLinks from "@/components/QuickLinks";
import {PARTNER_BADGE} from "@/data/clients";
import {MAP_URL} from "@/components/Local";

interface FooterProps {
  t: (key: string) => string;
}

export default function Footer({t}: FooterProps) {
  const currentYear = new Date().getFullYear();

  // The XIcon component was deleted here on 2026-09-04 along with the link it drew. It was the only
  // thing that used it, and an unused icon is an invitation to put the link back.

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10">
          <FooterButton/>
        </div>

        {/* Two columns since 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G04): the third, "Projects",
            left whole (PLAN.md §4.1 row 15). Its finance dashboard link is gone, and the
            Catalytics link becomes the live link of the catalytics-apps project page (BR-G06), which
            QuickLinks reaches through its new "Projects" entry. */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* 2026-10-28 (offer-os gtm/seo-plan-2026-10 C4, IMG-1): a 96 px WebP, 2.5 KB, for the 32 px slot. The
                  1250 px fiji_solutions.png (48 KB) stays as the schema logo. alt="" since the name is beside it. */}
              <img
                src="/fiji-solutions-logo.webp"
                alt=""
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">Fiji Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            {/* Name, address and phone on every page (2026-10-28, offer-os gtm/seo-plan-2026-10 C5, LOC-4), in the
                words of the contact page and the Business Profile. The links get 44 px of height for a thumb (ONP-8). */}
            <address className="mb-4 not-italic text-gray-400">
              <span className="block font-semibold text-gray-300">Fiji Solutions</span>
              <span className="block">{t('contact.address.street')}</span>
              <span className="block">{t('contact.address.city')}</span>
              <span className="flex flex-wrap gap-x-6">
                <a href="tel:+302311070108" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white">
                  +30 231 107 0108
                </a>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {t('local.map')}
                </a>
              </span>
            </address>
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">{t('footer.partnership')}</p>
              <a
                href="https://www.snowflake.com/en/why-snowflake/partners/all-partners/fiji-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Verify this partnership in Snowflake's partner directory"
              >
                <img
                  src={PARTNER_BADGE.src}
                  alt="Snowflake AI Data Cloud Select Partner Badge"
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  className="h-16 w-auto"
                />
              </a>
            </div>
            <div className="-ml-3 flex gap-1">
              {/* ⛔ THE PERSONAL GITHUB LINK WAS REMOVED 2026-09-05 AND IT DOES NOT COME BACK.
                  His instruction, verbatim: "this github is personal It is correct as it is. It
                  should only link with my personal website. Same as X, it should only link with my
                  personal website, not companies."

                  `github.com/cmoutafidis` came out of this company's `sameAs` on 2026-09-02
                  because a person's profile is not the Greek IKE, and the visible link was kept at
                  the time on the reasoning that a link is not an identity claim. X was kept on the
                  identical reasoning one day later, and on 2026-09-04 he overruled it and the X
                  link went. The GitHub link three lines above it was never revisited, so this
                  company page went on pointing at his personal account for another day.

                  It is live where it belongs: `charismoutafidis.com` publishes it five times, in
                  the `sameAs` of the canonical Person node this company's JSON-LD references
                  through `founder`. Peak Code has never linked it. ⛔ Do not add it back here, and
                  do not "fix" the GitHub profile either: its display name reads `Fiji` and he has
                  said to leave the account exactly as it is. */}
              {/* ⛔ THE X LINK WAS REMOVED 2026-09-04 AND IT DOES NOT COME BACK. His instruction,
                  verbatim: "I told you to drop X. Dont modify anything. Leave it alone. unlink it
                  from my companies."

                  This was the LAST link from either company to `x.com/fiji_solutions`. The account
                  came out of Fiji's `sameAs` on 2026-09-03 (citation pack C4) and the footer link
                  was kept at the time. That half is now closed too, so no Fiji or Peak Code surface
                  points at X in any form.

                  ⛔ Do not "fix" the X profile instead. Measured 2026-09-04, it reads display name
                  `Fiji`, bio `Boxer. Businessman. Always working.`, location `Aarau, Switzerland`.
                  Those are wrong for a Greek company and they are deliberately being left wrong,
                  because the account is his and it is no longer presented as the company's.

                  ⚠️ The `twitter:` blocks in every page's metadata are OpenGraph Twitter Cards.
                  They control how a link previews when somebody shares it and they do NOT link to
                  this account. Leave them alone. */}
              <a
                href="https://www.facebook.com/fijisolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-3 text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5"/>
              </a>
              <a
                href="https://linkedin.com/company/fijisolutionsnet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-3 text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5"/>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <QuickLinks/>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Fiji Solutions. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
