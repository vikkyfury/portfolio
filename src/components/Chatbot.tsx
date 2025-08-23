import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiUser, FiStar, FiCpu } from 'react-icons/fi';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Fury, your AI assistant. Ask me anything about Vikas's portfolio, projects, or skills! ✨",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    console.log('Sending message:', inputValue);
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Use relative URL for production, fallback to localhost for development
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/chat' 
        : 'http://localhost:3002/api/chat';
      console.log('Making API call to:', apiUrl);
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.text
          }))
        }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.message,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Enhanced Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-5 rounded-full bg-gradient-to-r from-accent via-accent2 to-accent text-white shadow-2xl hover:shadow-accent-glow-lg transition-all duration-300 group backdrop-blur-sm border border-accent/20"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        <FiMessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Enhanced Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, rotateX: -15 }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="fixed bottom-24 right-6 z-50 w-[450px] h-[600px] bg-gradient-to-br from-card via-card/95 to-stroke/90 border border-accent/20 rounded-2xl shadow-2xl flex flex-col backdrop-blur-xl"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(99, 102, 241, 0.1)"
            }}
          >
            {/* Enhanced Header */}
            <div className="flex items-center justify-between p-4 border-b border-blue-400/10 bg-blue-400/5 rounded-t-3xl">
                              <div className="flex items-center space-x-3">
                  <div className="relative">
                                                          <div className="w-10 h-10 bg-blue-400/10 rounded-full flex items-center justify-center shadow-lg border border-blue-400/20">
                      <FiMessageCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-card"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Fury</h3>
                    <p className="text-xs text-muted">AI Assistant</p>
                  </div>
                </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-accent/10 transition-all duration-200 group"
                aria-label="Close chat"
              >
                <FiX className="w-5 h-5 text-muted group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Enhanced Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-transparent to-accent/5">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1
                  }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-end space-x-2 max-w-[85%]">
                    {!message.isUser && (
                      <div className="w-10 h-10 bg-blue-400/10 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-400/20">
                        <FiCpu className="w-5 h-5 text-blue-400" />
                      </div>
                    )}
                    <div
                      className={`p-4 rounded-3xl ${
                        message.isUser
                          ? 'bg-blue-400 text-white shadow-lg'
                          : 'bg-blue-400/10 text-white border border-blue-400/20 backdrop-blur-sm'
                      }`}
                                              style={{
                          boxShadow: message.isUser 
                            ? "0 10px 25px -5px rgba(59, 130, 246, 0.4)" 
                            : "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                        }}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-60 mt-2 flex items-center">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                        {message.isUser && (
                          <FiStar className="w-3 h-3 ml-1 text-blue-300" />
                        )}
                      </p>
                    </div>
                    {message.isUser && (
                      <div className="w-10 h-10 bg-blue-400/10 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-400/20">
                        <FiUser className="w-5 h-5 text-blue-400" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-end space-x-2">
                    <div className="w-10 h-10 bg-blue-400/10 rounded-full flex items-center justify-center border border-blue-400/20">
                      <FiCpu className="w-5 h-5 text-blue-400" />
                    </div>
                                          <div className="bg-blue-400/10 text-white p-4 rounded-3xl border border-blue-400/20 backdrop-blur-sm">
                        <div className="flex space-x-2">
                          <motion.div 
                            className="w-2 h-2 bg-blue-400 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-blue-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-blue-400 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input */}
            <div className="p-4 border-t border-blue-400/10 bg-blue-400/5 rounded-b-3xl">
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Fury anything..."
                    className="w-full px-4 py-3 bg-white/5 border border-blue-400/20 rounded-2xl text-white placeholder-muted focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm text-sm"
                    disabled={isTyping}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <FiStar className="w-4 h-4 text-blue-400/50" />
                  </div>
                </div>
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 bg-blue-400/10 text-blue-400 rounded-2xl border border-blue-400/20 hover:bg-blue-400/20 hover:border-blue-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiSend className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </motion.button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 