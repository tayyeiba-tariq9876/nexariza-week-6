const ChatHeader = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 p-5 flex items-center justify-between relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
          <span className="text-xl font-bold text-white">N</span>
        </div>
        <div>
          <h3 className="font-bold text-white text-base">Nexariza AI</h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            <span className="text-xs text-white/80 font-medium">Active now</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={onClose}
        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-200 border border-white/20 relative z-10"
        aria-label="Close chat"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default ChatHeader;
