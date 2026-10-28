'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { createTranslationFunction } from "@/translations";
import { usePathname } from 'next/navigation';
import { isChatSuppressedPath } from '@/lib/landing';

interface VapiChatWidgetProps {
  apiKey: string;
  assistantId: string;
}

const VapiChatWidget: React.FC<VapiChatWidgetProps> = ({
  apiKey,
  assistantId
}) => {
  const { language } = useLanguage();
  const t = createTranslationFunction(language);
  const widgetRef = useRef<HTMLDivElement>(null);
  // Single-goal landing pages load no chat bubble, and the two homepages load none until G23's
  // assistant script is live (src/lib/landing.ts, both added 2026-09-30).
  const suppressed = isChatSuppressedPath(usePathname());
  // The bubble and its script (about 185 KB) wait for the visitor's first scroll, tap or key press,
  // so they never sit on the first screen's hero button or the cookie bar's Accept button and stay
  // out of the page's first load (ONP-1, ONP-9, PERF-3; offer-os seo-plan-2026-10 C3, D-66,
  // 2026-10-28). While the cookie bar is open, globals.css lifts the bubble above it.
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (suppressed || armed) return;
    if (window.scrollY > 0) {
      setArmed(true);
      return;
    }
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const;
    const arm = () => setArmed(true);
    events.forEach((name) => window.addEventListener(name, arm, {once: true, passive: true}));
    return () => events.forEach((name) => window.removeEventListener(name, arm));
  }, [suppressed, armed]);

  // Strings, not t itself: t is a new function on every render, and with it in the dependencies the
  // widget was torn down and rebuilt on every render and page change.
  const mainLabel = t('vapi.chat1');
  const emptyChatMessage = t('vapi.chat2');

  useEffect(() => {
    const container = widgetRef.current;
    if (suppressed || !armed || !container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create the vapi-widget element
    const vapiWidget = document.createElement('vapi-widget');
    vapiWidget.setAttribute('public-key', apiKey);
    vapiWidget.setAttribute('assistant-id', assistantId);
    vapiWidget.setAttribute('mode', 'chat');
    vapiWidget.setAttribute('theme', 'light');
    vapiWidget.setAttribute('position', 'bottom-right');
    vapiWidget.setAttribute('size', 'full');
    vapiWidget.setAttribute('radius', 'medium');
    vapiWidget.setAttribute('accent-color', '#000000');
    vapiWidget.setAttribute('button-base-color', '#0086ff');
    vapiWidget.setAttribute('button-accent-color', '#FFFFFF');
    vapiWidget.setAttribute('main-label', mainLabel);
    vapiWidget.setAttribute('empty-chat-message', emptyChatMessage);

    // Add event listeners
    vapiWidget.addEventListener('call-start', (event) => {
      console.log('Chat started:', event);
    });

    vapiWidget.addEventListener('call-end', (event) => {
      console.log('Chat ended:', event);
    });

    vapiWidget.addEventListener('message', (event) => {
      console.log('Message received:', event);
    });

    vapiWidget.addEventListener('error', (event) => {
      console.error('Widget error:', event);
    });

    container.appendChild(vapiWidget);

    // The script mounts every <vapi-widget> it finds once, at the moment it runs, so it is added
    // after the element exists, and added again when the element is rebuilt (a language switch).
    document.querySelectorAll('script[src*="vapi-ai/client-sdk-react"]').forEach((old) => old.remove());
    const script = document.createElement('script');
    // Pinned (PERF-3): the bare URL is a redirect to whatever version is newest. 0.1.1 is the
    // version that served when the v7 assistant script was tested on 2026-10-25 (BR-G10).
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react@0.1.1/dist/embed/widget.umd.js';
    script.async = true;
    script.type = 'text/javascript';

    script.onload = () => {
      console.log('Vapi script loaded successfully');
    };

    script.onerror = () => {
      console.error('Failed to load Vapi script');
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      container.innerHTML = '';
    };
  }, [apiKey, assistantId, mainLabel, emptyChatMessage, suppressed, armed]);

  if (suppressed || !armed) return null;

  return <div ref={widgetRef} />;
};

export default VapiChatWidget;