'use client';

import React from 'react';
import {trackEvent, type GtagParams, type TrackedEventName} from '@/utils/gtag';

// Added 2026-09-30 with GA4. OfferLanding, BusinessProcessAuditLanding and AuditFormSection are
// server components and cannot take an onClick, so they render this anchor, which sends the GA4 event on click. The
// `event` and `params` props are plain serialisable values a server component can pass; every other
// prop goes straight through to the anchor. trackEvent() does nothing without consent.

type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: TrackedEventName;
  params: GtagParams;
};

export default function TrackedLink({event, params, onClick, ...rest}: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(event, params);
        onClick?.(e);
      }}
    />
  );
}
