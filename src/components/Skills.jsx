import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["C#", ".NET Core", "ASP.NET Core", "REST API", "Web API"],
      color: "green",
      icon: "⚡"
    },
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "Javascript", "JQuery", "React", "Tailwind CSS", "Razor Pages","Redux"],
      color: "blue",
      icon: "🎨"
    },
    {
      title: "Databases & ORM",
      skills: ["SQL Server", "MySQL", "Entity Framework", "ADO.NET", "LINQ", "Dapper", "Stored Procedure", "Triggers"],
      color: "purple",
      icon: "🗄️"
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Azure", "Git", "GitHub Actions", "RabbitMQ", "Postman", "JWT"],
      color: "yellow",
      icon: "🔧"
    },
    {
      title: "Architecture",
      skills: ["Clean Architecture", "MicroService", "Monolithic Architecture", "MVC"],
      color: "pink",
      icon: "🏗️"
    }
  ];

  const colorClasses = {
    green: {
      gradient: "from-green-400 to-blue-400",
      border: "border-green-400/50",
      bg: "bg-green-600/20",
      hover: "hover:bg-green-600/30",
      text: "text-green-300"
    },
    blue: {
      gradient: "from-blue-400 to-purple-400",
      border: "border-blue-400/50",
      bg: "bg-blue-600/20",
      hover: "hover:bg-blue-600/30",
      text: "text-blue-300"
    },
    purple: {
      gradient: "from-purple-400 to-pink-400",
      border: "border-purple-400/50",
      bg: "bg-purple-600/20",
      hover: "hover:bg-purple-600/30",
      text: "text-purple-300"
    },
    yellow: {
      gradient: "from-yellow-400 to-orange-400",
      border: "border-yellow-400/50",
      bg: "bg-yellow-600/20",
      hover: "hover:bg-yellow-600/30",
      text: "text-yellow-300"
    },
    pink: {
      gradient: "from-pink-400 to-red-400",
      border: "border-pink-400/50",
      bg: "bg-pink-600/20",
      hover: "hover:bg-pink-600/30",
      text: "text-pink-300"
    }
  };

  const techStack = [
    { name: ".NET Ecosystem",  icon: "🔄" },
    { name: "Cloud & DevOps",  icon: "☁️" },
    { name: "Database Systems", icon: "💾" },
    { name: "Web Technologies",  icon: "🌐" }
  ];

  return (
    <section
      id="skills"
      className="relative pt-12 pb-12  px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-blue-400/30 rounded-lg transform rotate-12 animate-spin" />
        <div className="absolute bottom-40 right-40 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse" />
        <div className="absolute top-60 right-20 w-10 h-10 border border-green-400/30 transform -rotate-45 animate-bounce" />
        <div className="absolute bottom-20 left-32 w-14 h-14 border border-yellow-400/20 rounded-full animate-ping" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 text-blue-400 mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            <p className="text-sm font-medium tracking-wide">Technical Expertise</p>
          </div>

          <h3 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Skills & Technologies
            </span>
          </h3>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
          </div>
        </div>

        {/* Tech Stack Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{tech.name}</h4>
                <div className="space-y-1 text-sm text-gray-300">
                </div>
                
                {/* Animated border effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colorClasses[skillCategories[index]?.color || 'green'].gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid - Improved Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="relative group animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl flex flex-col h-full">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`text-2xl mr-3 ${colorClasses[category.color].text}`}>
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {category.title}
                  </h4>
                </div>

                {/* Skills List */}
                <div className="space-y-3 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group-hover:translate-x-1"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <span className="text-gray-200 font-medium text-sm">{skill}</span>
                      <div className={`w-2 h-2 rounded-full ${colorClasses[category.color].bg} animate-pulse`} />
                    </div>
                  ))}
                </div>

                {/* Floating elements */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 ${colorClasses[category.color].bg} rounded-full animate-pulse`} />
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 ${colorClasses[category.color].bg} rounded-full animate-bounce`} />
              </div>

              {/* Gradient border effect on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colorClasses[category.color].gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;