'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu, Moon, Sun, X} from 'lucide-react';
import {useTheme} from '@/context/ThemeContext';
import {useLanguage} from '@/context/LanguageContext';
import {translations} from '@/translations';
import LanguageSwitcher from './LanguageSwitcher';
import TopBanner, {TOP_BANNER_HEIGHT, useTopBanner} from './TopBanner';
import {isBookingPromptHiddenPath, isLandingPath} from '@/lib/landing';
import {BOOKING_URL} from '@/lib/booking';
import {BOOKING_CLICK_EVENT, trackEvent} from '@/utils/gtag';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const {darkMode, toggleDarkMode} = useTheme();
  const {language} = useLanguage();
  const pathname = usePathname();

  // 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G04, BR-D9): the top banner and the header's
  // "Book a free call" button render on every page except the landing pages and the audit pages.
  const bookingHidden = isBookingPromptHiddenPath(pathname);
  const [bannerOpen, closeBanner] = useTopBanner(bookingHidden);

  const t = (key: string) => translations[language][key] || key;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      // Only the first TOP_BANNER_HEIGHT pixels move the header, so later scrolls set the same
      // value and React skips the render.
      setScrollY(Math.min(window.scrollY, TOP_BANNER_HEIGHT));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // The header is fixed; the banner above it is in the page flow. While the banner is open, the
  // header sits right under the part of it still on screen, and at the top once it has scrolled away.
  const headerTop = bannerOpen ? Math.max(0, TOP_BANNER_HEIGHT - scrollY) : 0;

  const bookingButtonClass =
    'inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600';

  // `nav.audit` was added 2026-08-15. Until then /business-process-audit — the only page on this
  // site with a named offer, a named deliverable, a guarantee and a booking link — had ZERO
  // internal links pointing at it and was reachable only by typing the URL. Snowflake moved out
  // to make room for it; it is still linked from Services and from the footer's Quick Links.
  //
  // 2026-10-08 (F16, offer-os gtm/followups-and-search/PLAN.md F-D132): the second link is the
  // 7-Day Sheet-to-App Prototype, the offer both homepages sell, and "Process audit" moved to the
  // footer's Quick Links. Charis picked "Swap 'Process audit' for the offer". This is the one
  // /offers/* link a menu carries; the menu stays four links, and no other offer joins it.
  //
  // 2026-10-18 (offer-os gtm/atlas/DECISIONS.md AT-D8, Charis: "everything looks good, yes"): one
  // dated exception to the sentence above. "Atlas" sits directly after "Services", beside the
  // services and outside the services list (the 2026-08-16 no-fourth-nav-service rule is about
  // that list). The menu is five links; no other offer joins it.
  //
  // 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G04, decision BR-D5, adopted under his "build the
  // whole plan" answer): Services, Projects, Atlas, About, Contact, then the "Book a free call"
  // button. "Home" leaves, since the logo links home, and so does the "7-day prototype" link of
  // F-D132: the site describes six kinds of work, and sheet-to-app is one offer among them, linked
  // from page bodies. Atlas stays the one offer a menu carries (AT-D8). /projects goes live in BR-G06,
  // and this branch ships only after it (BR-G08).
  const navLinks = [
    {name: t('nav.portfolio'), href: `/${language}/portfolio`},
    {name: t('nav.projects'), href: `/${language}/projects`},
    {name: t('nav.atlas'), href: `/${language}/offers/atlas`},
    {name: t('nav.about'), href: `/${language}/about`},
    {name: t('nav.contact'), href: `/${language}/contact`},
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Single-goal landing pages (src/lib/landing.ts, added 2026-09-30): the logo, unlinked, and the
  // theme toggle. No menu, no language switch, nothing that leads off the page.
  if (isLandingPath(pathname)) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolling
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/fiji-solutions-logo.webp"
              alt=""
              width={32}
              height={32}
              decoding="async"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Fiji Solutions
            </span>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-400"/>
            ) : (
              <Moon className="h-5 w-5 text-gray-700"/>
            )}
          </button>
        </div>
      </header>
    );
  }

  return (
    <>
    {bannerOpen && <TopBanner language={language} onClose={closeBanner}/>}
    <header
      className={`fixed left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolling
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
      style={{top: headerTop}}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href={language === 'el' ? '/el' : '/en'}
            className="flex items-center space-x-2"
          >
            <img
              src="/fiji-solutions-logo.webp"
              alt=""
              width={32}
              height={32}
              decoding="async"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Fiji Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav items-center space-x-4 xl:space-x-8">
            <div className="flex space-x-4 xl:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium transition-colors ${
                    pathname === link.href ? 'text-primary-600 dark:text-primary-400' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <LanguageSwitcher/>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400"/>
              ) : (
                <Moon className="h-5 w-5 text-gray-700"/>
              )}
            </button>
            {!bookingHidden && (
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(BOOKING_CLICK_EVENT, {cta_location: 'header', locale: language})}
                className={bookingButtonClass}
              >
                {t('nav.cta')}
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-nav items-center">
            <LanguageSwitcher/>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400"/>
              ) : (
                <Moon className="h-5 w-5 text-gray-700"/>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Menu"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6"/>
              ) : (
                <Menu className="h-6 w-6"/>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 px-2 bg-white dark:bg-gray-900 rounded-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800 ${
                    pathname === link.href ? 'text-primary-600 dark:text-primary-400' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* The booking button is the last item, full width (PLAN.md §4.1 row 1). */}
              {!bookingHidden && (
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent(BOOKING_CLICK_EVENT, {cta_location: 'header', locale: language});
                    setMobileMenuOpen(false);
                  }}
                  className={`${bookingButtonClass} w-full py-3 text-base`}
                >
                  {t('nav.cta')}
                </a>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Navbar;
