const TypingIndicator = () => {
  return (
    <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="order-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-white">N</span>
          </div>
          <span className="text-xs text-gray-500 font-medium">Nexariza AI</span>
        </div>
        <div className="bg-white/10 rounded-2xl rounded-bl-md px-5 py-3 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        <div className="mt-1.5 text-[10px] text-gray-500">Typing...</div>
      </div>
    </div>
  );
};

export default TypingIndicator;
