import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { PhoneOff, Mic } from 'lucide-react';

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
  className?: string;
  buttonText?: string;
}

const VapiWidget: React.FC<VapiWidgetProps> = ({
  apiKey,
  assistantId,
  className = '',
  buttonText = "Let's talk now"
}) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on('call-start', () => {
      console.log('Call started');
      setIsConnected(true);
      setIsLoading(false);
    });

    vapiInstance.on('call-end', () => {
      console.log('Call ended');
      setIsConnected(false);
      setIsSpeaking(false);
      setIsLoading(false);
    });

    vapiInstance.on('speech-start', () => {
      console.log('Assistant started speaking');
      setIsSpeaking(true);
    });

    vapiInstance.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setIsSpeaking(false);
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        console.log(`${message.role}: ${message.transcript}`);
      }
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
      setIsLoading(false);
      setIsConnected(false);
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  const startCall = () => {
    if (vapi) {
      setIsLoading(true);
      vapi.start(assistantId);
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  if (isLoading) {
    return (
      <button
        disabled
        className={`btn btn-secondary flex items-center justify-center ${className}`}
      >
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-600 mr-2"></div>
        Connecting...
      </button>
    );
  }

  if (isConnected) {
    return (
      <button
        onClick={endCall}
        className={`btn bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 flex items-center justify-center ${className}`}
      >
        <PhoneOff className="h-4 w-4 mr-2" />
        End Call
        {isSpeaking && (
          <div className="ml-2 flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={startCall}
      className={`btn bg-sky-600 hover:bg-sky-700 text-white focus:ring-sky-500 flex items-center justify-center ${className}`}
    >
      <Mic className="h-4 w-4 mr-2" />
      {buttonText}
    </button>
  );
};

export default VapiWidget;
