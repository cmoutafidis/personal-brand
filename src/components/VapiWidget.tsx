'use client';

import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { PhoneOff, Mic } from 'lucide-react';
import {useLanguage} from "@/context/LanguageContext";
import {createTranslationFunction} from "@/translations";

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
  className?: string;
  buttonText: string;
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
      // The call keeps ending with Daily's "Meeting has ended" ejection, which only means the
      // Vapi call stopped server-side. endedReason on the status-update / end-of-call-report is
      // the one field that says WHY (silence timeout, a pipeline error, a max-duration cap, the
      // assistant ending the call itself, or an account fault). Log it so we can see it.
      const m = message as {
        type?: string;
        status?: string;
        endedReason?: string;
        role?: string;
        transcript?: string;
      };
      if (m.type === 'status-update') {
        console.log('Vapi status-update:', m.status, m.endedReason ? `(endedReason: ${m.endedReason})` : '');
      } else if (m.type === 'end-of-call-report') {
        console.log('Vapi end-of-call-report, endedReason:', m.endedReason);
      } else if (m.type === 'transcript') {
        console.log(`${m.role}: ${m.transcript}`);
      }
    });

    vapiInstance.on('error', (error) => {
      // Stringify so the nested Vapi/Daily reason is visible in the console, not "Object".
      let detail = '';
      try {
        detail = JSON.stringify(error);
      } catch {
        detail = String(error);
      }
      console.error('Vapi error:', detail, error);
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
