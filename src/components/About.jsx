import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const sectionRef = useRef(null);

  const fullText = `I'm a passionate .NET Developer experienced in designing, developing, and deploying enterprise-grade applications. Skilled in ASP.NET Core, C#, EF Core, and SQL Server, I focus on writing clean, scalable, and maintainable code.`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [isVisible, fullText]);

  const skills = [
    { name: "ASP.NET Core", icon: "⚡", color: "green" },
    { name: "C# Development", icon: "💻", color: "blue" },
    { name: "Cloud Solutions", icon: "🚀", color: "purple" },
    { name: "Entity Framework", icon: "🗄️", color: "indigo" },
    { name: "SQL Server", icon: "📊", color: "cyan" },
    { name: "Microservices", icon: "🔗", color: "orange" }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative -mt-40 pt-1 pb-1 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full animate-grid-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Geometric Shapes with Enhanced Animations */}
        <div className="absolute top-10 right-20 w-16 h-16 border border-green-400/30 rounded-lg transform rotate-12 animate-float-slow" />
        <div className="absolute bottom-40 left-40 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse-slow" />
        <div className="absolute top-60 left-20 w-10 h-10 border border-yellow-400/30 transform -rotate-45 animate-bounce-slow" />
        <div className="absolute bottom-20 right-32 w-14 h-14 border border-purple-400/20 rounded-full animate-spin-slow" />
        
        {/* New Animated Elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-20" />
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce delay-1000" />
        
        {/* Animated Connection Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              d="M10,50 Q50,10 90,50"
              stroke="rgba(74, 222, 128, 0.1)"
              strokeWidth="0.5"
              fill="none"
              className="animate-draw-path"
            />
            <path
              d="M20,80 Q50,20 80,80"
              stroke="rgba(96, 165, 250, 0.1)"
              strokeWidth="0.5"
              fill="none"
              className="animate-draw-path delay-1000"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <p className="text-sm font-medium tracking-wide uppercase">Get to know me</p>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping delay-1000" />
          </div>

          <h3 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-gradient-x">
              About Me
            </span>
          </h3>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse" />
            <div className="w-4 h-1 bg-purple-400 rounded-full mx-2 animate-pulse delay-500" />
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse delay-1000" />
          </div>
        </div>

        {/* Enhanced Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`text-left space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <p className="text-gray-300 leading-relaxed text-lg md:text-xl min-h-[120px]">
                {typedText}
                <span className="inline-block w-2 h-6 bg-green-400 ml-1 animate-pulse"></span>
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                With a strong foundation in software engineering principles, I thrive on turning complex problems into elegant solutions that deliver exceptional user experiences.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Enhanced Skills Badges */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {skills.map((skill, index) => (
                <span
                  key={skill.name}
                  className={`group px-4 py-3 bg-${skill.color}-600/20 backdrop-blur-sm border border-${skill.color}-400/50 rounded-lg text-sm font-medium hover:bg-${skill.color}-600/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1 transform hover:shadow-lg hover:shadow-${skill.color}-400/20 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className={`text-${skill.color}-300 mr-2`}>{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="text-2xl font-bold text-green-400">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                <div className="text-2xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              {/* Enhanced Animated Code Window */}
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-2xl transform group-hover:scale-105 transition-all duration-500 hover:shadow-green-400/20 hover:border-green-400/30">
                {/* Window Controls */}
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-transform" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-110 transition-transform" />
                  <div className="w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-transform" />
                </div>

                {/* Enhanced Code Content */}
                <div className="font-mono text-sm space-y-2">
                  <div className="text-purple-400 animate-fade-in">
                    <span className="text-blue-400">public class</span> Developer
                  </div>
                  <div className="text-purple-400">{`{`}</div>
                  <div className="ml-4 text-green-400 animate-fade-in delay-100">
                    <span className="text-blue-400">public string</span> Name <span className="text-gray-400">=</span> <span className="text-yellow-400">"Pran Krishna"</span>;
                  </div>
                  <div className="ml-4 text-green-400 animate-fade-in delay-200">
                    <span className="text-blue-400">public string</span> Role <span className="text-gray-400">=</span> <span className="text-yellow-400">".NET Developer"</span>;
                  </div>
                  <div className="ml-4 text-green-400 animate-fade-in delay-300">
                    <span className="text-blue-400">public string[]</span> Skills <span className="text-gray-400">=</span> <span className="text-yellow-400">new</span>[]
                  </div>
                  <div className="ml-8 text-yellow-400 animate-fade-in delay-400">{`{`}</div>
                  <div className="ml-12 text-yellow-400 animate-fade-in delay-500">"C#", "ASP.NET Core",</div>
                  <div className="ml-12 text-yellow-400 animate-fade-in delay-600">"Entity Framework", "SQL Server",</div>
                  <div className="ml-12 text-yellow-400 animate-fade-in delay-700">"Azure", "Microservices"</div>
                  <div className="ml-8 text-yellow-400 animate-fade-in delay-800">{`};`}</div>
                  <div className="text-purple-400 animate-fade-in delay-900">{`}`}</div>
                </div>

                {/* Enhanced Floating Particles */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400/20 rounded-full animate-pulse group-hover:animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/20 rounded-full animate-bounce group-hover:animate-ping" />
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-purple-400/20 rounded-full animate-ping" />
              </div>

              {/* Enhanced Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-green-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-bold transform rotate-3 animate-bounce hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg shadow-green-400/30">
                🏆 1+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Additional Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes draw-path {
          from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-draw-path { animation: draw-path 3s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-grid-pulse { animation: grid-pulse 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 3s ease-in-out infinite; }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;