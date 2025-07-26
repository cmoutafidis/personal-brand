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
    console.log('Message received:', {
      role: message.role,
      content: message.content,
      fullContent: message.transcript || message.content,
      timestamp: message.timestamp
    });
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
      size="large"
      radius="medium"
      accentColor="#FFFFFF"
      buttonBaseColor="#0086ff"
      buttonAccentColor="#FFFFFF"
      mainLabel="Let's chat"
      emptyChatMessage="Hey, what brings you here today?"
      showTranscript={true}
      maxWidth="400px"
      maxHeight="600px"
      onCallStart={handleCallStart}
      onCallEnd={handleCallEnd}
      onMessage={handleMessage}
      onError={handleError}
    />
  );
};

export default VapiChatWidget;
