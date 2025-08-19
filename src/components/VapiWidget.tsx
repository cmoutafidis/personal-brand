'use client';

import React, {useEffect, useState} from 'react';
import Vapi from '@vapi-ai/web';
import {Mic, PhoneOff} from 'lucide-react';
import {useLanguage} from '@/context/LanguageContext';
import {createTranslationFunction} from "@/translations";

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
  const {language} = useLanguage();

  const t = createTranslationFunction(language);
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
        className={`inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-primary-600 border border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-primary-400 dark:border-gray-700 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${className}`}
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
        className={`inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${className}`}
      >
        <PhoneOff className="h-4 w-4 mr-2"/>
        {t('vapi.end_call')}
        {isSpeaking && (
          <div className="ml-2 flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={startCall}
      className={`inline-flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${className}`}
    >
      <Mic className="h-4 w-4 mr-2"/>
      {buttonText}
    </button>
  );
};

export default VapiWidget;