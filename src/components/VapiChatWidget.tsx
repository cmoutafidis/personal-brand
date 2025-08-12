'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/context/LanguageContext';

interface VapiChatWidgetProps {
  apiKey: string;
  assistantId: string;
}

// Dynamically import the VapiWidget to avoid SSR issues
const VapiWidget = dynamic(
  () => import('@vapi-ai/client-sdk-react').then((mod) => ({ default: mod.VapiWidget })),
  {
    ssr: false,
    loading: () => (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-primary-600 text-white rounded-full p-4 shadow-lg">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        </div>
      </div>
    )
  }
);

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

  return (
    <VapiWidget
      publicKey={apiKey}
      assistantId={assistantId}
      mode="chat"
      theme="light"
      position="bottom-right"
      size="compact"
      radius="medium"
      accentColor="#000000"
      buttonBaseColor="#0086ff"
      buttonAccentColor="#FFFFFF"
      mainLabel={texts[language].mainLabel}
      emptyChatMessage={texts[language].emptyChatMessage}
    />
  );
};

export default VapiChatWidget;