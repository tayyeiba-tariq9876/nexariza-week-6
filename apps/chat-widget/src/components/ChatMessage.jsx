import QuickReplies from './QuickReplies';
import { formatTimestamp } from '../utils/responses';

const ChatMessage = ({ message, onQuickReply }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
      <div className={`max-w-[85%] ${isBot ? 'order-2' : 'order-1'}`}>
        {/* Avatar for bot */}
        {isBot && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-white">N</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Nexariza AI</span>
          </div>
        )}
        
        {/* Message Bubble */}
        <div className={`
          px-4 py-3 rounded-2xl text-sm leading-relaxed
          ${isBot 
            ? 'bg-white/10 text-gray-100 rounded-bl-md border border-white/5 backdrop-blur-sm' 
            : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-br-md shadow-lg shadow-violet-500/20'
          }
        `}>
          <p className="whitespace-pre-line">{message.text}</p>
        </div>
        
        {/* Timestamp */}
        <div className={`mt-1.5 text-[10px] text-gray-500 ${isBot ? 'text-left' : 'text-right'}`}>
          {formatTimestamp(message.timestamp)}
        </div>

        {/* Quick Replies */}
        {isBot && message.quickReplies && (
          <QuickReplies 
            replies={message.quickReplies} 
            onSelect={onQuickReply}
          />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
