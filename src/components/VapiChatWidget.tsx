'use client';

import React from 'react';
import {useLanguage} from "@/context/LanguageContext";
import {createTranslationFunction} from "@/translations";
import dynamic from "next/dynamic";

// Dynamically import VapiWidget with no SSR
const VapiWidget = dynamic(
  () => import('@vapi-ai/client-sdk-react').then(mod => ({ default: mod.VapiWidget })),
  {
    ssr: false,
    loading: () => <div>Loading chat...</div>
  }
);


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


  return (
    <VapiWidget
      publicKey={apiKey}
      assistantId={assistantId}
      mode="chat"
      theme="light"
      position="bottom-right"
      size="full"
      radius="medium"
      accentColor="#000000"
      buttonBaseColor="#0086ff"
      buttonAccentColor="#FFFFFF"
      mainLabel={t('vapi.chat1')}
      emptyChatMessage={t('vapi.chat2')}

    />
  );
};

export default VapiChatWidget;
