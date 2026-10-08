import {readConsent} from '@/lib/useConsent';

// Google tags for this site. Everything here is inert until the visitor accepts the cookie banner:
// gtag.js is only ever loaded by Analytics.tsx, and Analytics.tsx renders null until consent.
//
// Added 2026-09-30: Google Analytics 4 beside the existing Google Ads tag and Leadsy. Charis
// decided that day (O17) that a proper Google Analytics setup comes before the cold emails are
// written, so enquiries can be traced back to the page and the button that produced them. The
// Measurement ID comes from NEXT_PUBLIC_GA_MEASUREMENT_ID, set in Vercel and never committed.
// Locally it is unset, so under `npm run dev` GA4 is never configured and trackEvent does nothing,
// the same arrangement the Peak Code site uses.
//
// Event names are the same strings Peak Code sends, so the two GA4 properties read alike. GA4
// pins a name from its first hit and a rename splits the data into two series, so change them
// here only with a reason, and never in a call site.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag: (
      command: 'event' | 'config' | 'js' | 'consent',
      action: string,
      parameters?: {
        send_to?: string;
        event_callback?: () => void;
        [key: string]: string | number | boolean | (() => void) | undefined;
      }
    ) => void;
  }
}

export const GOOGLE_ADS_ID = 'AW-17750042512';

// Baked in at build time (NEXT_PUBLIC_*), so a change in Vercel needs a redeploy to take effect.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

export const isAnalyticsEnabled = (): boolean => GA_MEASUREMENT_ID.length > 0;

export type GtagParams = Record<string, string | number | boolean | undefined>;

/** A form submission, sent from ContactForm on success. Every form on the site goes through it. */
export const CONTACT_FORM_EVENT = 'contact_form_submit';
/**
 * A click on an in-page CTA that scrolls to a form, and since 2026-10-08 (F22, offer-os F-D164) on the
 * two S09 case study links of /offers/sheet-to-app, which open a Gamma doc in a new tab and carry
 * their own cta_location. Engagement only, deliberately no key event.
 */
export const CTA_CLICK_EVENT = 'cta_click';
/** A click on the Calendly link. It opens a new tab; the booking itself is counted in Calendly. */
export const BOOKING_CLICK_EVENT = 'booking_click';

export type TrackedEventName =
  | typeof CONTACT_FORM_EVENT
  | typeof CTA_CLICK_EVENT
  | typeof BOOKING_CLICK_EVENT;

/**
 * Sends one GA4 event, to the GA4 property alone. Refuses on the server, when no Measurement ID was
 * built in, and unless consent is exactly 'granted'. The consent check is a second gate after
 * Analytics.tsx for the events sent from here; Analytics.tsx itself switches the tags off when a
 * visitor presses "Clear my choice" on the privacy page after gtag.js had loaded.
 *
 * `send_to` keeps these events on GA4. Without it gtag delivers an event to every configured tag,
 * and the Google Ads tag would receive cta_click, booking_click and contact_form_submit with their
 * params, which the privacy policy does not describe.
 */
export function trackEvent(eventName: TrackedEventName, params: GtagParams = {}): void {
  if (typeof window === 'undefined' || !isAnalyticsEnabled()) return;
  if (readConsent() !== 'granted') return;

  const bound = {...params, send_to: GA_MEASUREMENT_ID};

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, bound);
    return;
  }

  // Consent is granted but gtag.js has not run yet. Queue the call the way gtag() itself does:
  // gtag.js drains Arguments objects from dataLayer, and reads a plain array as a different kind
  // of command that it may drop. The explicit send_to binds the event to GA4 once its config
  // arrives. Delivery of a queued event is best effort: a visitor who leaves before the tags run
  // sends nothing.
  window.dataLayer = window.dataLayer || [];
  const queue = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  } as (...args: unknown[]) => void;
  queue('event', eventName, bound);
}

export const reportConversion = (url?: string) => {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };

  // The same consent check as trackEvent: gtag.js stays in the page after a visitor withdraws
  // consent, so its presence alone says nothing about consent.
  if (typeof window === 'undefined') return false;
  if (readConsent() !== 'granted') {
    callback();
    return false;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/lDigCLHyw8QbEJDP8I9C`,
      event_callback: callback
    });
  } else {
    console.warn('Google Tag Manager not loaded - conversion not tracked');
  }

  return false;
};
