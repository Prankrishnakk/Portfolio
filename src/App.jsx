import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadingSequence = async () => {
      // Phase 1: Loader animation (5.2 seconds)
      await new Promise(resolve => setTimeout(resolve, 5200));
      
      // Phase 2: Brief pause before transition (200ms)
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Phase 3: Start content fade-in
      setShowContent(true);
      
      // Phase 4: Complete loading state change after transition starts
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsLoading(false);
    };

    loadingSequence();
  }, []);

  const pageVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.95,
      y: 20,
      filter: "blur(10px)"
    },
    in: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuad
      }
    },
    out: { 
      opacity: 0, 
      scale: 1.02,
      y: -10,
      filter: "blur(5px)",
      transition: {
        duration: 0.6,
        ease: [0.55, 0.085, 0.68, 0.53] // easeInQuad
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!showContent && <Loader key="loader" />}
        
        {showContent && (
          <motion.div
            key="content"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="min-h-screen text-white font-sans bg-black relative overflow-hidden"
          >
            {/* Background Elements for Smooth Transition */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* Subtle background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950"
                animate={{
                  background: [
                    "linear-gradient(135deg, #0f172a 0%, #000000 50%, #1e293b 100%)",
                    "linear-gradient(135deg, #1e293b 0%, #000000 50%, #0f172a 100%)",
                    "linear-gradient(135deg, #0f172a 0%, #000000 50%, #1e293b 100%)"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            {/* Main Content Container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <Header />
              
              <main className="space-y-40 lg:space-y-48">
                <motion.div variants={sectionVariants}>
                  <Hero />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                  <About />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                  <Skills />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                  <Projects />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                  <Contact />
                </motion.div>
              </main>
              
              <motion.div variants={sectionVariants}>
                <Footer />
              </motion.div>
            </motion.div>

            {/* Loading Completion Indicator */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ 
                    opacity: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                  className="fixed top-4 right-4 z-50"
                >
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar for Initial Load */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ 
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  className="fixed top-0 left-0 w-full h-1 z-50"
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 5.5, 
                      ease: [0.65, 0, 0.35, 1] // easeInOutCubic
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preload critical assets */}
      <div className="hidden">
        {/* Preload gradient textures */}
        <div style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
    </>
  );
}

export default App;