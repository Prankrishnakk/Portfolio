import React, { useEffect, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const projects = [
    {
      id: 1,
      name: "ProjectHub: Academic Project Management System",
      desc: "Comprehensive web-based system for managing Final Year Projects lifecycle with student registration, project approval, group formation, progress tracking, and evaluations.",
      technologies: [".NET Core", "Entity Framework", "SQL Server", "React", "REST API"],
      category: "Web Application",
      status: "Completed",
      icon: "🎓",
      color: "blue",
      features: [
        "Student registration & group management",
        "Project approval workflow",
        "Weekly progress tracking",
        "Multi-role access (Student/Tutor/HOD/Admin)",
        "Evaluation & reporting system"
      ]
    },
    {
      id: 2,
      name: "InsightHr: Human Resource Management System",
      desc: "Comprehensive HRMS digitizing HR functions with employee lifecycle management, attendance tracking, payroll, recruitment, and real-time communication systems.",
      technologies: [".NET Core", "SQL Server", "React", "Azure", "Docker","Dapper",],
      category: "Enterprise Solution",
      status: "Completed", 
      icon: "💼",
      color: "green",
      features: [
        "Loan & Advance Management",
        "Geo-fenced Attendance Punching",
        "Automated Interview Scheduling",
        "Real-Time Chat System",
        "Multi-module HR automation"
      ]
    }
  ];

  const colorClasses = {
    green: {
      gradient: "from-green-400 to-blue-400",
      border: "border-green-400/50",
      bg: "bg-green-600/20",
      hover: "hover:bg-green-600/30",
      text: "text-green-300",
      glow: "shadow-green-500/20"
    },
    blue: {
      gradient: "from-blue-400 to-purple-400",
      border: "border-blue-400/50",
      bg: "bg-blue-600/20",
      hover: "hover:bg-blue-600/30",
      text: "text-blue-300",
      glow: "shadow-blue-500/20"
    },
    purple: {
      gradient: "from-purple-400 to-pink-400",
      border: "border-purple-400/50",
      bg: "bg-purple-600/20",
      hover: "hover:bg-purple-600/30",
      text: "text-purple-300",
      glow: "shadow-purple-500/20"
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative pt-20 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full animate-grid-flow"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Particles System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-orb-float-1" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-orb-float-2" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-orb-float-3" />

        {/* Animated Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <path
            d="M10,20 Q50,5 90,20"
            stroke="rgba(74, 222, 128, 0.1)"
            strokeWidth="0.3"
            fill="none"
            className="animate-draw-line-1"
          />
          <path
            d="M5,80 Q50,95 95,80"
            stroke="rgba(96, 165, 250, 0.1)"
            strokeWidth="0.3"
            fill="none"
            className="animate-draw-line-2"
          />
          <path
            d="M20,50 Q80,30 80,70"
            stroke="rgba(192, 132, 252, 0.1)"
            strokeWidth="0.3"
            fill="none"
            className="animate-draw-line-3"
          />
        </svg>

        {/* Enhanced Floating Geometric Shapes */}
        <div className="absolute top-20 right-10 w-16 h-16 border border-green-400/30 rounded-lg transform rotate-12 animate-float-3d" />
        <div className="absolute bottom-40 left-40 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse-glow" />
        <div className="absolute top-60 left-20 w-10 h-10 border border-purple-400/30 transform -rotate-45 animate-bounce-3d" />
        <div className="absolute bottom-20 right-32 w-14 h-14 border border-yellow-400/20 rounded-full animate-spin-glow" />
        
        {/* New Animated Elements */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-green-400/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce-delayed" />
        <div className="absolute top-3/4 right-3/4 w-10 h-10 bg-purple-400/10 rounded-full animate-spin-slow" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <p className="text-sm font-medium tracking-wide uppercase">My Work</p>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping delay-1000" />
          </div>

          <h3 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-gradient-x">
              Featured Projects
            </span>
          </h3>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse" />
            <div className="w-4 h-1 bg-purple-400 rounded-full mx-2 animate-pulse delay-500" />
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse delay-1000" />
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group flex flex-col h-full transition-all duration-1000 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Main Project Card */}
              <div className={`relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl flex flex-col h-full group-hover:${colorClasses[project.color].glow}`}>
                
                {/* Animated Background Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colorClasses[project.color].gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 -z-10`} />
                
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`text-3xl mr-3 ${colorClasses[project.color].text} animate-bounce-slow`}>
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                        {project.name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                        <span className={`px-2 py-1 ${colorClasses[project.color].bg} text-white text-xs rounded-full backdrop-blur-sm border ${colorClasses[project.color].border}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-200 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    Key Features:
                  </h5>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${colorClasses[project.color].bg} mr-2 animate-pulse`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 ${colorClasses[project.color].bg} backdrop-blur-sm border ${colorClasses[project.color].border} rounded-full text-xs font-medium hover:scale-110 transition-all duration-300 cursor-pointer hover:${colorClasses[project.color].hover} transform hover:-translate-y-0.5`}
                      style={{ transitionDelay: `${techIndex * 30}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto">
                  <button className={`flex-1 px-4 py-2 ${colorClasses[project.color].bg} border ${colorClasses[project.color].border} rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 group/btn backdrop-blur-sm`}>
                    <span className="flex items-center justify-center space-x-1">
                      <span>View Details</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>
                  <button className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="flex items-center space-x-1">
                      <span>🔗</span>
                    </span>
                  </button>
                </div>

                {/* Enhanced Floating elements */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 ${colorClasses[project.color].bg} rounded-full animate-ping-glow`} />
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 ${colorClasses[project.color].bg} rounded-full animate-bounce-glow`} />
                <div className={`absolute top-1/2 -right-3 w-3 h-3 ${colorClasses[project.color].bg} rounded-full animate-pulse delay-1000`} />
              </div>

              {/* Outer Glow Effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colorClasses[project.color].gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10`} />
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-400/30 backdrop-blur-sm">
            View All Projects →
          </button>
        </div>
      </div>

      {/* Custom CSS for Enhanced Animations */}
      <style jsx>{`
        @keyframes grid-flow {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(0px); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }
        
        @keyframes orb-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -30px) scale(1.1); }
        }
        
        @keyframes orb-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 20px) scale(1.05); }
        }
        
        @keyframes orb-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 15px) scale(1.08); }
        }
        
        @keyframes draw-line-1 {
          0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes draw-line-2 {
          0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes draw-line-3 {
          0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes float-3d {
          0%, 100% { transform: translateY(0px) rotate(12deg) rotateX(0deg); }
          50% { transform: translateY(-20px) rotate(12deg) rotateX(10deg); }
        }
        
        @keyframes bounce-3d {
          0%, 100% { transform: translateY(0px) rotate(-45deg) scale(1); }
          50% { transform: translateY(-15px) rotate(-45deg) scale(1.05); }
        }
        
        @keyframes spin-glow {
          0% { transform: rotate(0deg) scale(1); box-shadow: 0 0 10px rgba(250, 204, 21, 0.3); }
          100% { transform: rotate(360deg) scale(1); box-shadow: 0 0 20px rgba(250, 204, 21, 0.6); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes ping-glow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
        
        @keyframes bounce-glow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        
        .animate-orb-float-1 {
          animation: orb-float-1 15s ease-in-out infinite;
        }
        
        .animate-orb-float-2 {
          animation: orb-float-2 18s ease-in-out infinite;
        }
        
        .animate-orb-float-3 {
          animation: orb-float-3 12s ease-in-out infinite;
        }
        
        .animate-draw-line-1 {
          animation: draw-line-1 8s ease-in-out infinite;
        }
        
        .animate-draw-line-2 {
          animation: draw-line-2 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-draw-line-3 {
          animation: draw-line-3 12s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        .animate-float-3d {
          animation: float-3d 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .animate-bounce-3d {
          animation: bounce-3d 4s ease-in-out infinite;
        }
        
        .animate-spin-glow {
          animation: spin-glow 3s linear infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-bounce-delayed {
          animation: bounce-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-ping-glow {
          animation: ping-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-glow {
          animation: bounce-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
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
      `}</style>
    </section>
  );
};

export default Projects;