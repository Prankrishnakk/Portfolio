import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section
      id="contact"
      className="relative pt-12 pb-12  px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 text-blue-400 mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            <p className="text-sm font-medium tracking-wide bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </p>
          </div>

          <h3 className="text-5xl lg:text-6xl font-black mb-6 animate-scale-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              Let's Connect
            </span>
          </h3>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-glow" />
          </div>
        </div>

        {/* Full Width Contact Form */}
        <div className="w-full animate-slide-up">
          <div className="relative w-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:border-blue-400/30">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            {/* Form Header */}
            <div className="flex items-center space-x-3 mb-6 relative z-10">
              <div className="text-2xl animate-bounce-slow">💬</div>
              <h4 className="text-xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Send me a message
              </h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name */}
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400">
                    👤
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400">
                    📧
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows="5"
                    className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                    required
                  />
                  <div className="absolute right-4 top-4 text-gray-400 group-focus-within:text-blue-400">
                    ✏️
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="relative group">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-2xl disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 3s infinite; }
        .animate-ping-slow { animation: ping 3s cubic-bezier(0,0,0.2,1) infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out; }
        .animate-slide-up { animation: slideUp 0.8s ease-out; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
