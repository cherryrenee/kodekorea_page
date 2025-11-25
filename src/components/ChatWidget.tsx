import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import './ChatWidget.css';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (message.trim()) {
      // 여기에 메시지 전송 로직 추가
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className="chat-widget-button"
        onClick={toggleChat}
        aria-label="Open chat"
      >
        <MessageCircle className="chat-widget-icon" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-widget-window">
          <div className="chat-widget-header">
            <div className="chat-widget-header-content">
              <h3 className="chat-widget-title">채팅하기</h3>
              <p className="chat-widget-subtitle">문의사항을 남겨주세요</p>
            </div>
            <button
              className="chat-widget-close"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <X className="chat-widget-close-icon" />
            </button>
          </div>
          
          <div className="chat-widget-messages">
            <div className="chat-widget-message chat-widget-message-bot">
              <p>안녕하세요! KODE KOREA입니다. 무엇을 도와드릴까요?</p>
            </div>
          </div>
          
          <div className="chat-widget-input-container">
            <input
              type="text"
              className="chat-widget-input"
              placeholder="메시지를 입력하세요..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="chat-widget-send-button"
              onClick={handleSend}
              aria-label="Send message"
            >
              <Send className="chat-widget-send-icon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

