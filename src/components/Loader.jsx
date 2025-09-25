import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [lettersCombined, setLettersCombined] = useState(false);
  const [particlesActive, setParticlesActive] = useState(false);

  const word = "WELCOME";
  const letters = word.split('');

  const steps = [
    { text: "Initializing systems...", emoji: "⚡", duration: 800 },
    { text: "Loading assets...", emoji: "🔧", duration: 900 },
    { text: "Finalizing setup...", emoji: "🎨", duration: 1000 },
    { text: "Optimizing performance...", emoji: "🚀", duration: 800 },
    { text: "Ready to launch!", emoji: "🎯", duration: 600 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const letterVariants = {
    hidden: (i) => ({
      x: (i - 3) * 400,
      y: -200,
      opacity: 0,
      scale: 0.3,
      rotate: Math.random() * 360 - 180,
      filter: "blur(20px)"
    }),
    flying: (i) => ({
      x: (i - 3) * 120,
      y: Math.sin(i * 2) * 80,
      opacity: 1,
      scale: 1.4,
      rotate: Math.random() * 120 - 60,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 1.5,
        delay: i * 0.15
      }
    }),
    combining: (i) => ({
      x: (i - 3) * 35,
      y: Math.sin(i) * 15,
      scale: 1.1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: i * 0.08
      }
    }),
    combined: (i) => ({
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        delay: i * 0.03
      }
    }),
    final: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const wordContainerVariants = {
    hidden: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const progressVariants = {
    hidden: { width: "0%", opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 5.2,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  };

  const stepVariants = {
    enter: { y: 30, opacity: 0, scale: 0.9 },
    center: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -30, opacity: 0, scale: 0.9 }
  };

  const particleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const orbVariants = {
    float: (i) => ({
      y: [0, -30, 0],
      x: [0, i % 2 === 0 ? 20 : -20, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  useEffect(() => {
    const timers = [
      setTimeout(() => {
        setCurrentStep(1);
        setParticlesActive(true);
      }, 800),
      
      setTimeout(() => setCurrentStep(2), 1800),
      setTimeout(() => setCurrentStep(3), 2800),
      setTimeout(() => setCurrentStep(4), 3800),
      
      setTimeout(() => {
        setLettersCombined(true);
      }, 3200),
      
      setTimeout(() => {
        setIsLoading(false);
      }, 5200)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const getLetterAnimation = () => {
    if (currentStep === 0) return "hidden";
    if (currentStep === 1) return "flying";
    if (currentStep === 2) return "combining";
    if (currentStep >= 3) return lettersCombined ? "final" : "combined";
    return "combined";
  };

  const gradientColors = [
    "from-red-400 via-orange-400 to-yellow-400",
    "from-orange-400 via-yellow-400 to-green-400",
    "from-yellow-400 via-green-400 to-blue-400",
    "from-green-400 via-blue-400 to-indigo-400",
    "from-blue-400 via-indigo-400 to-purple-400",
    "from-indigo-400 via-purple-400 to-pink-400",
    "from-purple-400 via-pink-400 to-red-400"
  ];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950 flex items-center justify-center z-50 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Gradient Mesh */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Dynamic Grid */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Floating Orbs */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-32 h-32 rounded-full blur-2xl ${
                  i % 3 === 0 ? "bg-blue-500/15" : 
                  i % 3 === 1 ? "bg-purple-500/15" : "bg-green-500/15"
                }`}
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 15}%`,
                }}
                variants={orbVariants}
                custom={i}
                animate="float"
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center space-y-12">
            {/* Enhanced Flying Letters */}
            <motion.div className="relative h-40 flex items-center justify-center">
              <motion.div
                className="flex space-x-1 relative"
                variants={wordContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate={getLetterAnimation()}
                    className={`text-7xl font-black tracking-wider relative z-10 ${
                      gradientColors[index % gradientColors.length]
                    } bg-clip-text text-transparent drop-shadow-2xl`}
                    style={{
                      textShadow: "0 0 30px currentColor"
                    }}
                  >
                    {letter}
                    {/* Letter Glow Effect */}
                    <motion.span
                      className="absolute inset-0 bg-current blur-md opacity-50 -z-10"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1
                      }}
                    />
                  </motion.span>
                ))}
              </motion.div>

              {/* Welcome Message */}
              <AnimatePresence>
                {lettersCombined && (
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ 
                      duration: 0.6,
                      ease: "backOut"
                    }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                  >
                    <motion.p
                      className="text-2xl text-gray-300 font-light tracking-wider"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      to my digital universe
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Loading Steps */}
            <motion.div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex items-center justify-center space-x-4 text-xl"
                >
                  <motion.span
                    className="text-2xl"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    {steps[currentStep].emoji}
                  </motion.span>
                  <motion.span 
                    className="text-gray-200 font-medium bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {steps[currentStep].text}
                  </motion.span>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Progress Bar */}
              <motion.div className="w-96 max-w-full mx-auto space-y-3">
                <motion.div 
                  className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                    variants={progressVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Progress Bar Shine */}
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Percentage Indicator */}
                <motion.div 
                  className="text-sm text-gray-400 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.span
                    animate={{
                      text: ["0%", "25%", "50%", "75%", "100%"]
                    }}
                    transition={{
                      duration: 5,
                      ease: "linear",
                      times: [0, 0.25, 0.5, 0.75, 1]
                    }}
                  >
                    100%
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Decorative Elements */}
            <motion.div
              className="flex justify-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[...Array(7)].map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Enhanced Particle System */}
          <AnimatePresence>
            {particlesActive && (
              <>
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    variants={particleVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    exit={{ scale: 0, opacity: 0 }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Corner Accents */}
          <motion.div
            className="absolute top-10 left-10 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 1, 0.5],
              rotate: 360
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
            animate={{
              scale: [1.8, 1, 1.8],
              opacity: [1, 0.5, 1],
              rotate: -360
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M20,20 Q50,10 80,20"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M20,80 Q50,90 80,80"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;