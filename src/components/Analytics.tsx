'use client';

import React, {useEffect} from 'react';
import Script from 'next/script';
import {useConsent} from '@/lib/useConsent';
import {GA_MEASUREMENT_ID, GOOGLE_ADS_ID} from '@/utils/gtag';

const LEADSY_PID = '18ImLiEFzTBP83210';

// Set once this component has rendered the tags in this page load. The withdrawal reload below
// keys on it, so a gtag function put on the page by anything else (a browser extension) can never
// start a reload loop.
let tagsRendered = false;

/**
 * Renders nothing at all — no script, no cookie, no request to Google or Leadsy — until the
 * visitor has accepted. This is the whole gate; there is no second path that loads these tags.
 *
 * Since 2026-09-30 one gtag.js load serves both Google Ads and Google Analytics 4. GA4 is
 * configured only when NEXT_PUBLIC_GA_MEASUREMENT_ID was set at build time (in Vercel). Without it
 * the output is the Ads-only tag this file rendered before. `window.gtag` is set explicitly so
 * trackEvent() and reportConversion() in src/utils/gtag.ts can call it.
 */
const Analytics: React.FC = () => {
  const consent = useConsent();

  // Added 2026-09-30. Unmounting the scripts below leaves gtag.js and Leadsy's tag.js running in
  // the page, and GA4's automatic measurement would keep sending hits on client-side navigation.
  // So when consent leaves 'granted' after gtag.js has loaded (the privacy page's "Clear my
  // choice", or the same choice made in another tab and picked up through the 'storage' event),
  // both Google tags are switched off and consent mode is set to denied at once, and then the page
  // reloads, as the privacy page's own clear() does. The reload removes every tag, Leadsy
  // included, and a later grant loads them all fresh. While consent stays 'granted' the effect
  // keeps the flags off and consent mode granted.
  useEffect(() => {
    if (!tagsRendered || typeof window.gtag !== 'function') return;
    const granted = consent === 'granted';
    const flags = window as unknown as Record<string, boolean>;
    flags[`ga-disable-${GOOGLE_ADS_ID}`] = !granted;
    if (GA_MEASUREMENT_ID) flags[`ga-disable-${GA_MEASUREMENT_ID}`] = !granted;
    const state = granted ? 'granted' : 'denied';
    window.gtag('consent', 'update', {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state
    });
    if (!granted) window.location.reload();
  }, [consent]);

  if (consent !== 'granted') return null;
  tagsRendered = true;

  return (
    <>
      <Script
        id="leadsy-tag"
        strategy="afterInteractive"
        src="https://r2.leadsy.ai/tag.js"
        data-pid={LEADSY_PID}
        data-version="062024"
      />
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID || GOOGLE_ADS_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
          ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}');` : ''}
        `}
      </Script>
    </>
  );
};

export default Analytics;
