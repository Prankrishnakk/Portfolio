import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden pt-32 pb-32">

      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border border-cyan-400/30 rounded-lg transform rotate-45 animate-bounce" />
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-40 w-12 h-12 border border-green-400/30 transform rotate-12 animate-spin" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400/20 rounded-full animate-bounce" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left space-y-8 animate-fade-in">
          <div className="flex items-center space-x-2 text-cyan-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <p className="text-sm font-medium tracking-wide">Welcome to my universe</p>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            <span className="block text-white">Hello</span>
            <span className="block mt-2">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400">
                Pran Krishna KK
              </span>
            </span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-gray-300 text-xl font-light">
              .NET Developer 
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 pt-4">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-blue-600/20 backdrop-blur-sm border border-blue-400/50 rounded-full hover:bg-blue-600/40 transition-all duration-300 hover:scale-110 transform"
            >
              <svg className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800/20 backdrop-blur-sm border border-gray-400/50 rounded-full hover:bg-gray-700/40 transition-all duration-300 hover:scale-110 transform"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Gmail */}
            <a 
              href="mailto:your.email@gmail.com" 
              className="group p-4 bg-red-600/20 backdrop-blur-sm border border-red-400/50 rounded-full hover:bg-red-600/40 transition-all duration-300 hover:scale-110 transform"
            >
              <svg className="w-6 h-6 text-red-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/yourphonenumber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-green-600/20 backdrop-blur-sm border border-green-400/50 rounded-full hover:bg-green-600/40 transition-all duration-300 hover:scale-110 transform"
            >
              <svg className="w-6 h-6 text-green-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Enhanced floating badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            <span className="group px-6 py-3 bg-purple-600/20 backdrop-blur-sm border border-purple-400/50 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-all duration-300 cursor-pointer hover:scale-105">
              <span className="text-purple-300">🎨</span> UI Magic
            </span>
            <span className="group px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-400/50 rounded-full text-sm font-medium hover:bg-blue-600/30 transition-all duration-300 cursor-pointer hover:scale-105">
              <span className="text-blue-300">💻</span> Clean Code
            </span>
            <span className="group px-6 py-3 bg-yellow-600/20 backdrop-blur-sm border border-yellow-400/50 rounded-full text-sm font-medium hover:bg-yellow-600/30 transition-all duration-300 cursor-pointer hover:scale-105">
              <span className="text-yellow-300">⚡</span> Innovation
            </span>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-colors duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Side - Enhanced Animated Profile */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Outer rotating ring */}
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 rounded-full animate-spin opacity-20 blur-sm" style={{
              animationDuration: '20s'
            }} />
            
            {/* Middle ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse opacity-30" />
            
            {/* Profile container with hover effects */}
            <div className="relative transform transition-all duration-500 hover:scale-110 hover:rotate-3 cursor-pointer">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 rounded-full p-1 animate-pulse">
                <div className="w-full h-full bg-gray-900 rounded-full" />
              </div>
              
              {/* Main profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 p-1 shadow-2xl">
                {/* Replace this with your actual profile image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  PK
                </div>
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 rounded-full" />
              </div>
              
              {/* Floating particles around the image */}
              <div className="absolute top-10 -right-4 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60" />
              <div className="absolute bottom-20 -left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60" />
              <div className="absolute top-32 -left-6 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60" />
              <div className="absolute bottom-10 right-8 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-60" />
            </div>

            {/* Code snippet overlay */}
            <div className="absolute -bottom-16 -right-8 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-sm font-mono transform rotate-3 opacity-90 hover:opacity-100 transition-opacity">
              <div className="text-purple-400">const</div>
              <div className="text-cyan-400">developer = {"{{"}</div>
              <div className="ml-4 text-green-400">creative: true,</div>
              <div className="ml-4 text-yellow-400">passionate: '∞'</div>
              <div className="text-cyan-400">{"}"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default Hero;