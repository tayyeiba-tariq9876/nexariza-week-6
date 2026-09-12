import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
            <span className="text-violet-300 text-sm font-semibold tracking-wide">DARK EDITION</span>
          </div>
          
          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Nexariza
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
              AI Assistant
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the future of customer support with our AI-powered chat widget. 
            Click the <span className="text-violet-400 font-semibold">Chat with AI</span> button on the left to begin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Lightning Fast</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Instant AI responses with smart typing indicators and real-time interactions.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Fully Responsive</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Seamless experience across desktop, tablet, and mobile devices.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Easy Embed</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Single script tag to embed on any website. Zero configuration needed.</p>
          </div>
        </div>

        {/* Embed Code */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">One-Line Embed</h2>
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-white/10 p-6 overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
            </div>
            <code className="text-sm text-violet-300 break-all">
              {'<script src="https://your-domain.com/chat-widget.js" data-theme="dark"></script>'}
            </code>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;
