declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      action: string,
      parameters?: {
        send_to?: string;
        event_callback?: () => void;
        [key: string]: string | number | boolean | (() => void) | undefined;
      }
    ) => void;
  }
}

export const reportConversion = (url?: string) => {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17750042512/lDigCLHyw8QbEJDP8I9C',
      event_callback: callback
    });
  } else {
    console.warn('Google Tag Manager not loaded - conversion not tracked');
  }

  return false;
};