import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["#home", "#about", "#skills", "#projects", "#contact"];
      let currentSection = "#home";
      sections.forEach((id) => {
        const el = document.querySelector(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
const scrollToSection = (e, href) => {
  e.preventDefault();

  if (href === "#home") {
    // Scroll to very top (navbar area)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // offset for fixed header
        behavior: "smooth",
      });
    }
  }
};

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "w-11/12 max-w-4xl" : "w-11/12 max-w-5xl"
      }`}
    >
      <div className="backdrop-blur-md bg-gray-900/90 border border-cyan-400/40 rounded-full px-6 py-3 shadow-2xl shadow-cyan-400/10">
        <nav className="flex justify-center space-x-2">
          <NavItem
            icon="🏠"
            href="#home"
            label="Home"
            onClick={(e) => scrollToSection(e, "#home")}
            active={activeSection === "#home"}
          />
          <NavItem
            icon="👨‍💻"
            href="#about"
            label="About"
            onClick={(e) => scrollToSection(e, "#about")}
            active={activeSection === "#about"}
          />
          <NavItem
            icon="⚡"
            href="#skills"
            label="Skills"
            onClick={(e) => scrollToSection(e, "#skills")}
            active={activeSection === "#skills"}
          />
          <NavItem
            icon="📁"
            href="#projects"
            label="Projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            active={activeSection === "#projects"}
          />
          <NavItem
            icon="📧"
            href="#contact"
            label="Contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            active={activeSection === "#contact"}
          />
        </nav>
      </div>

      {/* Optional scroll blur overlay */}
      {isScrolled && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl -z-10" />
      )}
    </header>
  );
};

const NavItem = ({ icon, href, label, onClick, active }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative flex items-center space-x-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 ${
        active
          ? "bg-transparent text-white border border-cyan-400 shadow-lg shadow-cyan-400/20"
          : "text-gray-400 hover:text-white hover:bg-gray-700/30 border border-transparent"
      }`}
    >
      <span className="text-sm">{icon}</span>
      <span className="font-medium whitespace-nowrap">{label}</span>
      <div className="absolute inset-0 rounded-xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
};

export default Header;
