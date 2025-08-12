'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mic, MicOff } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Vapi from '@vapi-ai/web';

interface VapiChatWidgetProps {
  apiKey: string;
  assistantId: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

const VapiChatWidget: React.FC<VapiChatWidgetProps> = ({
  apiKey,
  assistantId
}) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const texts = {
    en: {
      mainLabel: "Let's chat",
      placeholder: "Type your message...",
      send: "Send",
      voiceMode: "Voice Mode",
      textMode: "Text Mode",
      startVoice: "Start Voice Chat",
      endVoice: "End Voice Chat",
      connecting: "Connecting...",
      listening: "Listening...",
      speaking: "Speaking...",
      welcomeMessage: "Hi! I'm here to help you learn more about Fiji Solutions. What would you like to know?"
    },
    el: {
      mainLabel: "Ας μιλήσουμε",
      placeholder: "Γράψε το μήνυμά σου...",
      send: "Στείλε",
      voiceMode: "Φωνητική Λειτουργία",
      textMode: "Κειμενική Λειτουργία",
      startVoice: "Ξεκίνα Φωνητική Συνομιλία",
      endVoice: "Τέλος Φωνητικής Συνομιλίας",
      connecting: "Συνδέεται...",
      listening: "Ακούω...",
      speaking: "Μιλάω...",
      welcomeMessage: "Γεια! Είμαι εδώ για να σε βοηθήσω να μάθεις περισσότερα για τη Fiji Solutions. Τι θα θέλες να μάθεις;"
    }
  };

  const t = texts[language];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens for the first time
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: t.welcomeMessage,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, t.welcomeMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current && !isVoiceMode) {
      inputRef.current.focus();
    }
  }, [isOpen, isVoiceMode]);

  // Initialize Vapi when voice mode is activated
  useEffect(() => {
    if (isVoiceMode && !vapi) {
      const vapiInstance = new Vapi(apiKey);
      setVapi(vapiInstance);

      vapiInstance.on('call-start', () => {
        setIsConnected(true);
        setIsLoading(false);
      });

      vapiInstance.on('call-end', () => {
        setIsConnected(false);
        setIsSpeaking(false);
        setIsLoading(false);
      });

      vapiInstance.on('speech-start', () => {
        setIsSpeaking(true);
      });

      vapiInstance.on('speech-end', () => {
        setIsSpeaking(false);
      });

      vapiInstance.on('message', (message) => {
        if (message.type === 'transcript') {
          const newMessage: Message = {
            id: Date.now().toString() + Math.random(),
            role: message.role as 'user' | 'assistant',
            content: message.transcript,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, newMessage]);
        }
      });

      vapiInstance.on('error', (error) => {
        console.error('Vapi error:', error);
        setIsLoading(false);
        setIsConnected(false);
      });
    }

    return () => {
      if (vapi && !isVoiceMode) {
        vapi.stop();
        setVapi(null);
      }
    };
  }, [isVoiceMode, apiKey]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (isConnected && vapi) {
      vapi.stop();
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate assistant response (replace with actual API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now().toString() + '_assistant',
        role: 'assistant',
        content: "Thanks for your message! I'm a demo assistant. In a real implementation, I would process your question and provide helpful information about Fiji Solutions' services.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const startVoiceChat = () => {
    if (vapi) {
      setIsLoading(true);
      vapi.start(assistantId);
    }
  };

  const endVoiceChat = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  const toggleVoiceMode = () => {
    if (isConnected && vapi) {
      vapi.stop();
    }
    setIsVoiceMode(!isVoiceMode);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleWidget}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label={t.mainLabel}
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
            {t.mainLabel}
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleVoiceMode}
              className={`p-2 rounded-md transition-colors ${
                isVoiceMode
                  ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
              title={isVoiceMode ? t.textMode : t.voiceMode}
            >
              <Mic className="h-4 w-4" />
            </button>
            <button
              onClick={toggleWidget}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.role === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {isVoiceMode ? (
            <div className="space-y-3">
              {!isConnected ? (
                <button
                  onClick={startVoiceChat}
                  disabled={isLoading}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t.connecting}
                    </>
                  ) : (
                    <>
                      <Mic className="h-4 w-4 mr-2" />
                      {t.startVoice}
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={endVoiceChat}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <MicOff className="h-4 w-4 mr-2" />
                  {t.endVoice}
                </button>
              )}
              
              {isConnected && (
                <div className="text-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {isSpeaking ? t.speaking : t.listening}
                    {isSpeaking && (
                      <div className="inline-flex ml-2 space-x-1">
                        <div className="w-1 h-1 bg-primary-600 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1 h-1 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    )}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default VapiChatWidget;