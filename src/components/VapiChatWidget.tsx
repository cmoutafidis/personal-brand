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
  const handleCallStart = () => {
    console.log('Chat conversation started');
  };

  const handleCallEnd = () => {
    console.log('Chat conversation ended');
  };

  const handleMessage = (message: any) => {
    console.log('Message received:', message);
  };

  const handleError = (error: Error) => {
    console.error('Chat widget error:', error);
  };

  return (
    <VapiWidget
      publicKey={apiKey}
      assistantId={assistantId}
      mode="chat"
      theme="light"
      position="bottom-right"
      size="full"
      radius="medium"
      accentColor="#0086ff"
      buttonBaseColor="#0086ff"
      buttonAccentColor="#FFFFFF"
      mainLabel="Chat with Support"
      emptyChatMessage="Hey, what brings you here today?"
      onCallStart={handleCallStart}
      onCallEnd={handleCallEnd}
      onMessage={handleMessage}
      onError={handleError}
    />
  );
};

export default VapiChatWidget;