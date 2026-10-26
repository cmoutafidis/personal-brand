'use client';

import {useEffect} from 'react';

// Fades in the `[data-reveal]` blocks of a page as they enter the screen (offer-os broad home BR-D45, after
// ignitech.ch). It puts `reveal-on` on <html> first, so the hiding CSS in globals.css only ever applies once this
// has run; without JavaScript every block shows at once. A block's `data-reveal` value is its delay in ms.
// Renders nothing.

export default function Reveal() {
  useEffect(() => {
    const blocks = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('reveal-on');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.reveal) || 0;
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      {rootMargin: '0px 0px -8% 0px'},
    );
    for (const el of blocks) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-visible');
      else observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return null;
}
