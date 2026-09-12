import { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import QuickReplies from './QuickReplies';
import TypingIndicator from './TypingIndicator';
import { getAIResponse } from '../utils/responses';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to Nexariza AI! 🚀 I'm your virtual assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: ['Services', 'Internship', 'Contact', 'Pricing']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(text);
      const botMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: response.quickReplies
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button - Left side, pill shape */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 h-14 px-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] transform hover:scale-105 transition-all duration-300 flex items-center gap-3 z-50 group"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-white font-semibold text-sm">Close</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-white font-semibold text-sm">Chat with AI</span>
          </>
        )}
        
        {/* Pulse effect */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-fuchsia-400 rounded-full animate-ping"></span>
        )}
      </button>

      {/* Chat Panel - Left side, glassmorphism dark theme */}
      {isOpen && (
        <div className="fixed bottom-28 left-8 w-[400px] h-[580px] bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-[0_0_60px_rgba(139,92,246,0.3)] border border-white/10 flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-5 duration-300">
          <ChatHeader onClose={() => setIsOpen(false)} />
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-900 to-gray-950 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                message={message} 
                onQuickReply={handleQuickReply}
              />
            ))}
            
            {isTyping && <TypingIndicator />}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-gray-900/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all duration-200"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center text-white hover:from-violet-700 hover:to-fuchsia-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg shadow-violet-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
