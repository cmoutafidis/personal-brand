'use client';

import React from 'react';
import Script from 'next/script';
import {useConsent} from '@/lib/useConsent';

const GOOGLE_ADS_ID = 'AW-17750042512';
const LEADSY_PID = '18ImLiEFzTBP83210';

/**
 * Renders nothing at all — no script, no cookie, no request to Google or Leadsy — until the
 * visitor has accepted. This is the whole gate; there is no second path that loads these tags.
 */
const Analytics: React.FC = () => {
  const consent = useConsent();

  if (consent !== 'granted') return null;

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
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
};

export default Analytics;
