'use client';

import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { MessageCircle, X, Mic, MicOff, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface VapiChatWidgetProps {
  apiKey: string;
  assistantId: string;
}

const VapiChatWidget: React.FC<VapiChatWidgetProps> = ({
  apiKey,
  assistantId
}) => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{role: string, content: string, timestamp: Date}>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const texts = {
    en: {
      mainLabel: "Let's chat",
      emptyChatMessage: "Hey, what brings you here today?",
      startCall: "Start Voice Chat",
      endCall: "End Call",
      connecting: "Connecting...",
      listening: "Listening...",
      speaking: "Speaking...",
      placeholder: "Type your message..."
    },
    el: {
      mainLabel: "Ας μιλήσουμε",
      emptyChatMessage: "Γεια σου, τι σε φέρνει εδώ σήμερα;",
      startCall: "Ξεκίνα Φωνητική Συνομιλία",
      endCall: "Τέλος Κλήσης",
      connecting: "Συνδέεται...",
      listening: "Ακούω...",
      speaking: "Μιλάω...",
      placeholder: "Γράψε το μήνυμά σου..."
    }
  };

  useEffect(() => {
    if (isOpen && !vapi) {
      const vapiInstance = new Vapi(apiKey);
      setVapi(vapiInstance);

      // Event listeners
      vapiInstance.on('call-start', () => {
        console.log('Call started');
        setIsConnected(true);
        setIsLoading(false);
        setMessages(prev => [...prev, {
          role: 'system',
          content: texts[language].emptyChatMessage,
          timestamp: new Date()
        }]);
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
          setMessages(prev => [...prev, {
            role: message.role,
            content: message.transcript,
            timestamp: new Date()
          }]);
        }
      });

      vapiInstance.on('error', (error) => {
        console.error('Vapi error:', error);
        setIsLoading(false);
        setIsConnected(false);
      });
    }

    return () => {
      if (vapi) {
        vapi.stop();
      }
    };
  }, [isOpen, apiKey, language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleWidget}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label={texts[language].mainLabel}
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 w-80 h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {texts[language].mainLabel}
          </h3>
          <button
            onClick={toggleWidget}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <MessageCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>{texts[language].emptyChatMessage}</p>
            </div>
          )}
          
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.role === 'user'
                    ? 'bg-primary-600 text-white'
                    : message.role === 'assistant'
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Controls */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            {!isConnected ? (
              <button
                onClick={startCall}
                disabled={isLoading}
                className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {texts[language].connecting}
                  </>
                ) : (
                  <>
                    <Mic className="h-4 w-4 mr-2" />
                    {texts[language].startCall}
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={endCall}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
              >
                <MicOff className="h-4 w-4 mr-2" />
                {texts[language].endCall}
                {isSpeaking && (
                  <div className="ml-2 flex space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                )}
              </button>
            )}
          </div>
          
          {isConnected && (
            <div className="mt-2 text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {isSpeaking ? texts[language].speaking : texts[language].listening}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VapiChatWidget;