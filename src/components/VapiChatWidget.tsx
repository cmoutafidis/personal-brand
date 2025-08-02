import React from 'react';
import { VapiWidget } from '@vapi-ai/client-sdk-react';
import { useLanguage } from '../context/LanguageContext';

interface VapiChatWidgetProps {
  apiKey: string;
  assistantId: string;
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
