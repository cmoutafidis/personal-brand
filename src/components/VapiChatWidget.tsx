'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface VapiChatWidgetProps {
  apiKey: string;
  assistantId: string;
}

declare global {
  interface Window {
    VapiWidget: any;
  }
}

const VapiChatWidget: React.FC<VapiChatWidgetProps> = ({
  apiKey,
  assistantId
}) => {
  const { language } = useLanguage();

  const texts = {
    en: {
      mainLabel: "Let's chat",
      emptyChatMessage: "Hey, what brings you here today?"
    },
    el: {
      mainLabel: "Ας μιλήσουμε",
      emptyChatMessage: "Γεια σου, τι σε φέρνει εδώ σήμερα;"
    }
  };

  useEffect(() => {
    // Function to initialize the Vapi widget
    const initializeVapiWidget = () => {
      if (window.VapiWidget) {
        window.VapiWidget.render({
          publicKey: apiKey,
          assistantId: assistantId,
          mode: "chat",
          theme: "light",
          position: "bottom-right",
          size: "compact",
          radius: "medium",
          accentColor: "#000000",
          buttonBaseColor: "#0086ff",
          buttonAccentColor: "#FFFFFF",
          mainLabel: texts[language].mainLabel,
          emptyChatMessage: texts[language].emptyChatMessage
        });
      }
    };

    // Check if script is already loaded
    if (window.VapiWidget) {
      initializeVapiWidget();
    } else {
      // Wait for script to load
      const checkForVapi = setInterval(() => {
        if (window.VapiWidget) {
          clearInterval(checkForVapi);
          initializeVapiWidget();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        clearInterval(checkForVapi);
      }, 10000);
    }
  }, [apiKey, assistantId, language]);

  // This component doesn't render anything visible - the widget is injected by the script
  return null;
};

export default VapiChatWidget;