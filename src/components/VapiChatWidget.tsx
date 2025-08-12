'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Mic, MicOff } from 'lucide-react';
import Vapi from '@vapi-ai/web';
import { useLanguage } from '@/context/LanguageContext';

interface VapiChatWidgetProps {
  apiKey: string;
  assistantId: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const VapiChatWidget: React.FC<VapiChatWidgetProps> = ({
  apiKey,
  assistantId
}) => {
  const { language, t } = useLanguage();
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
      emptyChatMessage: "Hey, what brings you here today?",
      placeholder: "Type your message...",
      send: "Send",
      voiceMode: "Voice Mode",
      textMode: "Text Mode",
      startVoice: "Start Voice Chat",
      endVoice: "End Voice Chat",
      connecting: "Connecting...",
      listening: "Listening...",
      speaking: "Speaking..."
    },
    el: {
      mainLabel: "Ας μιλήσουμε",
      emptyChatMessage: "Γεια σου, τι σε φέρνει εδώ σήμερα;",
      placeholder: "Γράψε το μήνυμά σου...",
      send: "Στείλε",
      voiceMode: "Φωνητική Λειτουργία",
      textMode: "Κειμενική Λειτουργία",
      startVoice: "Ξεκίνα Φωνητική Συνομιλία",
      endVoice: "Τέλος Φωνητικής Συνομιλίας",
      connecting: "Συνδέεται...",
      listening: "Ακούει...",
      speaking: "Μιλάει..."
    }
  };

  const currentTexts = texts[language];

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on('call-start', () => {
      setIsConnected(true);
      setIsLoading(false);
      addMessage('assistant', 'Voice call started. I\'m listening...');
    });

    vapiInstance.on('call-end', () => {
      setIsConnected(false);
      setIsSpeaking(false);
      setIsLoading(false);
      addMessage('assistant', 'Voice call ended.');
    });

    vapiInstance.on('speech-start', () => {
      setIsSpeaking(true);
    });

    vapiInstance.on('speech-end', () => {
      setIsSpeaking(false);
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        if (message.role === 'user') {
          addMessage('user', message.transcript);
        } else if (message.role === 'assistant') {
          addMessage('assistant', message.transcript);
        }
      }
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
      setIsLoading(false);
      setIsConnected(false);
      addMessage('assistant', 'Sorry, there was an error with the voice connection.');
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isVoiceMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isVoiceMode]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage('user', inputValue);
    
    // Simulate assistant response (in a real implementation, you'd send this to your chat API)
    setTimeout(() => {
      addMessage('assistant', 'Thanks for your message! For a more interactive experience, try switching to voice mode using the microphone icon.');
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startVoiceCall = () => {
    if (vapi) {
      setIsLoading(true);
      vapi.start(assistantId);
    }
  };

  const endVoiceCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  const toggleMode = () => {
    if (isConnected) {
      endVoiceCall();
    }
    setIsVoiceMode(!isVoiceMode);
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      addMessage('assistant', currentTexts.emptyChatMessage);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openChat}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-105"
          aria-label={currentTexts.mainLabel}
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
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-primary-600" />
            <span className="font-medium text-gray-900 dark:text-white">
              {currentTexts.mainLabel}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMode}
              className={`p-1 rounded transition-colors ${
                isVoiceMode 
                  ? 'text-primary-600 bg-primary-100 dark:bg-primary-900/30' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
              title={isVoiceMode ? currentTexts.textMode : currentTexts.voiceMode}
            >
              <Mic className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
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
            <div className="flex flex-col space-y-2">
              {isConnected ? (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {isSpeaking ? currentTexts.speaking : currentTexts.listening}
                  </span>
                  <button
                    onClick={endVoiceCall}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                  >
                    <MicOff className="h-4 w-4 inline mr-1" />
                    {currentTexts.endVoice}
                  </button>
                </div>
              ) : (
                <button
                  onClick={startVoiceCall}
                  disabled={isLoading}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white py-2 rounded text-sm"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline mr-2"></div>
                      {currentTexts.connecting}
                    </>
                  ) : (
                    <>
                      <Mic className="h-4 w-4 inline mr-2" />
                      {currentTexts.startVoice}
                    </>
                  )}
                </button>
              )}
            </div>
          ) : (
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentTexts.placeholder}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white p-2 rounded-lg"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VapiChatWidget;