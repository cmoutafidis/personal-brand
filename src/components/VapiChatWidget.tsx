'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { createTranslationFunction } from "@/translations";

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

  useEffect(() => {
    // Load the Vapi widget script dynamically
    const loadVapiScript = () => {
      // Check if script is already loaded
      if (document.querySelector('script[src*="vapi-ai/client-sdk-react"]')) {
        initializeWidget();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
      script.async = true;
      script.type = 'text/javascript';

      script.onload = () => {
        console.log('Vapi script loaded successfully');
        initializeWidget();
      };

      script.onerror = () => {
        console.error('Failed to load Vapi script');
      };

      document.head.appendChild(script);
    };

    const initializeWidget = () => {
      if (widgetRef.current) {
        // Clear any existing content
        widgetRef.current.innerHTML = '';

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
        vapiWidget.setAttribute('main-label', t('vapi.chat1') || 'Chat with AI');
        vapiWidget.setAttribute('empty-chat-message', t('vapi.chat2') || 'Hi! How can I help you today?');

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

        widgetRef.current.appendChild(vapiWidget);
      }
    };

    loadVapiScript();

    // Cleanup function
    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
    };
  }, [apiKey, assistantId, language, t]);

  return <div ref={widgetRef} />;
};

export default VapiChatWidget;