import React from 'react';
import { VapiWidget } from '@vapi-ai/client-sdk-react';

interface VapiChatWidgetProps {
  apiKey: string;
  assistantId: string;
}

const VapiChatWidget: React.FC<VapiChatWidgetProps> = ({
  apiKey,
  assistantId
}) => {

  return (
    <VapiWidget
      publicKey={apiKey}
      assistantId={assistantId}
      mode="chat"
      theme="dark"
      position="bottom-right"
      size="compact"
      radius="medium"
      accentColor="#000000"
      buttonBaseColor="#0086ff"
      buttonAccentColor="#FFFFFF"
      mainLabel="Let's chat"
      emptyChatMessage="Hey, what brings you here today?"
    />
  );
};

export default VapiChatWidget;
