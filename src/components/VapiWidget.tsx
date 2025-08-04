import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { PhoneOff, Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Dynamically import Vapi with no SSR
const VapiImport = dynamic(
  () => import('@vapi-ai/web'),
  { ssr: false }
);

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
  const { t } = useLanguage();
  const [vapi, setVapi] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [VapiClass, setVapiClass] = useState<any>(null);

  useEffect(() => {
    // Import Vapi class dynamically on client side
    import('@vapi-ai/web').then((VapiModule) => {
      const VapiClass = VapiModule.default;
      setVapiClass(VapiClass);
      
      const vapiInstance = new VapiClass(apiKey);
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
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  // Don't render anything until Vapi is loaded
  if (!VapiClass || !vapi) {
    return (
      <button
        disabled
        className={`btn btn-secondary flex items-center justify-center ${className}`}
      >
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-600 mr-2"></div>
        Loading...
      </button>
    );
  }

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
        {t('vapi.connecting')}
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
        {t('vapi.end_call')}
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
