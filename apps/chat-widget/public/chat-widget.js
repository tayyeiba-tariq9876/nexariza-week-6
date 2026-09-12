// Nexariza AI Chat Widget - Dark Theme Edition
// Usage: <script src="https://your-domain.com/chat-widget.js" data-theme="dark"></script>

(function() {
  'use strict';

  const config = {
    theme: document.currentScript?.getAttribute('data-theme') || 'dark',
    primaryColor: '#8B5CF6',
    secondaryColor: '#D946EF',
    companyName: 'Nexariza AI',
    welcomeMessage: 'Welcome to Nexariza AI! 🚀 I\'m your virtual assistant. How can I help you today?',
    placeholder: 'Type a message...'
  };

  function createWidget() {
    const container = document.createElement('div');
    container.id = 'nexariza-chat-widget';
    container.innerHTML = `
      <style>
        #nexariza-chat-widget * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .chat-button {
          position: fixed;
          bottom: 32px;
          left: 32px;
          height: 56px;
          padding: 0 24px;
          background: linear-gradient(135deg, ${config.primaryColor}, ${config.secondaryColor});
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          z-index: 9999;
        }
        
        .chat-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.7);
        }
        
        .chat-button svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: white;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        
        .chat-button span {
          color: white;
          font-weight: 600;
          font-size: 14px;
        }
        
        .chat-panel {
          position: fixed;
          bottom: 112px;
          left: 32px;
          width: 400px;
          height: 580px;
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          box-shadow: 0 0 60px rgba(139, 92, 246, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: none;
          flex-direction: column;
          overflow: hidden;
          z-index: 9998;
          animation: slideUp 0.3s ease;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .chat-header {
          background: linear-gradient(135deg, ${config.primaryColor}, ${config.secondaryColor});
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        
        .chat-header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        }
        
        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
          z-index: 1;
        }
        
        .chat-avatar {
          width: 48px;
          height: 48px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .chat-status {
          display: flex;
          align-items-center;
          gap: 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          margin-top: 4px;
        }
        
        .status-dot {
          width: 8px;
          height: 8px;
          background: #34d399;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(52, 211, 153, 0.8);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          background: linear-gradient(180deg, #111827 0%, #030712 100%);
        }
        
        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }
        
        .chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .chat-messages::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 3px;
        }
        
        .message {
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
        }
        
        .message.user {
          align-items: flex-end;
        }
        
        .message.bot {
          align-items: flex-start;
        }
        
        .bot-avatar {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        
        .bot-avatar-icon {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, ${config.primaryColor}, ${config.secondaryColor});
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .bot-avatar-icon span {
          color: white;
          font-size: 12px;
          font-weight: bold;
        }
        
        .bot-avatar-name {
          color: #6b7280;
          font-size: 12px;
          font-weight: 500;
        }
        
        .message-bubble {
          max-width: 85%;
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-line;
        }
        
        .message.bot .message-bubble {
          background: rgba(255, 255, 255, 0.1);
          color: #f3f4f6;
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        
        .message.user .message-bubble {
          background: linear-gradient(135deg, ${config.primaryColor}, ${config.secondaryColor});
          color: white;
          border-bottom-right-radius: 4px;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }
        
        .message-time {
          font-size: 10px;
          color: #4b5563;
          margin-top: 6px;
        }
        
        .quick-replies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        
        .quick-reply-btn {
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 600;
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .quick-reply-btn:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(139, 92, 246, 0.5);
          transform: scale(1.05);
        }
        
        .typing-indicator {
          display: flex;
          gap: 6px;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: bounce 1.4s infinite;
        }
        
        .typing-dot:nth-child(1) { background: #a78bfa; animation-delay: 0s; }
        .typing-dot:nth-child(2) { background: #c084fc; animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { background: #e879f9; animation-delay: 0.4s; }
        
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
        }
        
        .chat-input {
          padding: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          gap: 12px;
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(10px);
        }
        
        .chat-input input {
          flex: 1;
          padding: 14px 20px;
          border: none;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          font-size: 14px;
          color: white;
          outline: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .chat-input input::placeholder {
          color: #4b5563;
        }
        
        .chat-input input:focus {
          border-color: ${config.primaryColor};
          background: rgba(255, 255, 255, 0.1);
        }
        
        .chat-input button {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, ${config.primaryColor}, ${config.secondaryColor});
          border: none;
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }
        
        .chat-input button:hover {
          transform: scale(1.05);
        }
        
        .chat-input button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .chat-input button svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: white;
          stroke-width: 2;
        }
        
        @media (max-width: 480px) {
          .chat-panel {
            width: calc(100% - 32px);
            height: calc(100% - 140px);
            left: 16px;
            bottom: 100px;
          }
        }
      </style>
      
      <button class="chat-button" id="chat-toggle">
        <svg viewBox="0 0 24 24">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        <span>Chat with AI</span>
      </button>
      
      <div class="chat-panel" id="chat-panel">
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">N</div>
            <div>
              <div style="font-weight: 700; font-size: 16px; color: white;">${config.companyName}</div>
              <div class="chat-status">
                <span class="status-dot"></span>
                Active now
              </div>
            </div>
          </div>
          <button id="chat-close" style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); width: 40px; height: 40px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <div class="chat-messages" id="chat-messages">
          <div class="message bot">
            <div class="bot-avatar">
              <div class="bot-avatar-icon"><span>N</span></div>
              <span class="bot-avatar-name">Nexariza AI</span>
            </div>
            <div class="message-bubble">${config.welcomeMessage}</div>
            <div class="quick-replies">
              <button class="quick-reply-btn" data-reply="Services">Services</button>
              <button class="quick-reply-btn" data-reply="Internship">Internship</button>
              <button class="quick-reply-btn" data-reply="Contact">Contact</button>
              <button class="quick-reply-btn" data-reply="Pricing">Pricing</button>
            </div>
          </div>
        </div>
        
        <div class="chat-input">
          <input type="text" id="chat-input" placeholder="${config.placeholder}">
          <button id="chat-send">
            <svg viewBox="0 0 24 24">
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(container);
    initChat();
  }

  function initChat() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatPanel = document.getElementById('chat-panel');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    chatToggle.addEventListener('click', () => {
      chatPanel.style.display = chatPanel.style.display === 'flex' ? 'none' : 'flex';
    });

    chatClose.addEventListener('click', () => {
      chatPanel.style.display = 'none';
    });

    function sendMessage(text) {
      if (!text.trim()) return;

      const userMsg = document.createElement('div');
      userMsg.className = 'message user';
      userMsg.innerHTML = `
        <div class="message-bubble">${escapeHtml(text)}</div>
        <div class="message-time">${formatTime()}</div>
      `;
      chatMessages.appendChild(userMsg);

      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;

      const typing = document.createElement('div');
      typing.className = 'message bot';
      typing.innerHTML = `
        <div class="bot-avatar">
          <div class="bot-avatar-icon"><span>N</span></div>
          <span class="bot-avatar-name">Nexariza AI</span>
        </div>
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      `;
      chatMessages.appendChild(typing);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      setTimeout(() => {
        typing.remove();
        const response = getAIResponse(text);
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot';
        botMsg.innerHTML = `
          <div class="bot-avatar">
            <div class="bot-avatar-icon"><span>N</span></div>
            <span class="bot-avatar-name">Nexariza AI</span>
          </div>
          <div class="message-bubble">${response.text}</div>
          <div class="message-time">${formatTime()}</div>
          ${response.quickReplies ? `
            <div class="quick-replies">
              ${response.quickReplies.map(r => `<button class="quick-reply-btn" data-reply="${r}">${r}</button>`).join('')}
            </div>
          ` : ''}
        `;
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        botMsg.querySelectorAll('.quick-reply-btn').forEach(btn => {
          btn.addEventListener('click', () => sendMessage(btn.dataset.reply));
        });
      }, 1200 + Math.random() * 800);
    }

    chatSend.addEventListener('click', () => sendMessage(chatInput.value));
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage(chatInput.value);
    });

    document.querySelectorAll('.quick-reply-btn').forEach(btn => {
      btn.addEventListener('click', () => sendMessage(btn.dataset.reply));
    });
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function formatTime() {
    return new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  }

  function getAIResponse(message) {
    const lower = message.toLowerCase();
    
    if (lower.includes('service')) {
      return {
        text: "Welcome to our AI-powered services! 🚀\\n\\nWe specialize in:\\n\\n◆ Agentic AI Systems\\n◆ Machine Learning Solutions\\n◆ Full-Stack Development\\n◆ Business Intelligence",
        quickReplies: ["Agentic AI", "Machine Learning", "Full-Stack", "Contact"]
      };
    }
    if (lower.includes('internship')) {
      return {
        text: "Launch your career with us! 💼\\n\\nOur internship program offers:\\n\\n◆ 6-8 weeks intensive training\\n◆ Real-world project experience\\n◆ Expert mentorship\\n◆ Professional certificate",
        quickReplies: ["Apply Now", "Requirements", "Contact"]
      };
    }
    if (lower.includes('contact')) {
      return {
        text: "Let's connect! 📱\\n\\n📧 Email: hello@nexariza.com\\n🌐 Web: nexariza.com\\n📍 Location: Pakistan",
        quickReplies: ["Services", "Internship", "Pricing"]
      };
    }
    if (lower.includes('pricing')) {
      return {
        text: "Flexible pricing for everyone 💎\\n\\n◆ Starter: $49/mo\\n◆ Pro: $99/mo\\n◆ Enterprise: Custom",
        quickReplies: ["Compare Plans", "Free Trial", "Contact"]
      };
    }
    
    return {
      text: "Hello there! 👋 I'm Nexariza AI. How may I help you today?",
      quickReplies: ["Services", "Internship", "Contact", "Pricing"]
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
})();
