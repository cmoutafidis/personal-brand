'use client';

import {useEffect, useState} from 'react';

// Consent state for non-essential tracking.
//
// Until 2026-08-15 this site loaded the Leadsy visitor-identification tag and the Google Ads tag
// on every page for every visitor, with no consent gate anywhere in the codebase and a privacy
// policy that described a mobile app. Both tags now load only when this returns 'granted'.

export type ConsentState = 'granted' | 'denied' | 'unknown';

export const CONSENT_KEY = 'fiji-cookie-consent';
export const CONSENT_EVENT = 'fiji-consent-change';

export function readConsent(): ConsentState {
  if (typeof window === 'undefined') return 'unknown';
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : 'unknown';
  } catch {
    return 'unknown';
  }
}

export function writeConsent(value: 'granted' | 'denied') {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* private mode — the session simply stays ungranted */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

/**
 * Always returns 'unknown' on the server and on the first client render, so the markup the server
 * produced and the markup React hydrates are identical. The real value arrives in an effect.
 */
export function useConsent(): ConsentState {
  const [consent, setConsent] = useState<ConsentState>('unknown');

  useEffect(() => {
    const sync = () => setConsent(readConsent());
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return consent;
}
