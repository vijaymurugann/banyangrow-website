"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Animation
import { Menu, X } from "lucide-react"; // ✅ Close icon added
import spiderweb from "../assets/spiderweb.svg";
import banyangrowlogo from "../assets/banyangrowlogo.svg";
import gstar from "../assets/gstar.svg";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setIsLargeScreen(width >= 1024);
      setIsTablet(width >= 768 && width < 1024);
      setIsMobile(width < 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative w-full md:w-screen h-screen bg-black flex flex-col items-center justify-center text-center overflow-hidden"
      id="Home">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 z-10">
        <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-yellow-400 rounded-full blur-[150px] opacity-40"></div>
        <div className="w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] bg-yellow-300 rounded-full blur-[200px] opacity-20 absolute"></div>
      </div>

      {/* Spider Web Overlay */}
      <img
        src={spiderweb}
        alt="Spider Web"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />

      {/* Dark Overlay when menu is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30"></div>
      )}

      {/* Navigation Bar */}
      <nav className="absolute top-[5px] left-0 right-0 flex items-center justify-between px-6 sm:px-10 py-4 sm:py-6 z-40">
        <img src={banyangrowlogo} alt="Logo" className="h-10 sm:h-12" />

        {/* Hamburger Menu (for Tablets & Mobile) */}
        {(isTablet || isMobile) && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none z-50">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        {/* Full Navigation (only on large screens) */}
        {isLargeScreen && (
          <div className="flex items-center space-x-8">
            <ul className="flex space-x-8">
              {["Home", "Why Invest", "Staking", "How It Works", "Roadmap"].map(
                (section) => (
                  <li
                    key={section}
                    className="text-white font-medium hover:text-yellow-300 transition-colors cursor-pointer"
                    onClick={() => handleScrollToSection(section)}>
                    {section
                      .replace("-", " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </li>
                )
              )}
            </ul>
            {/* Register Button */}
            <a
              href="https://app.banyangrow.xyz"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 hover:text-black transition">
              Register
            </a>
          </div>
        )}
      </nav>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (isTablet || isMobile) && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[80px] left-0 w-full bg-black text-white flex flex-col items-center py-6 space-y-6 z-40 shadow-lg">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            {["Home", "Why Invest", "Staking", "How It Works", "Roadmap"].map(
              (section) => (
                <li
                  key={section}
                  className="cursor-pointer hover:text-yellow-300 transition"
                  onClick={() => handleScrollToSection(section)}>
                  {section
                    .replace("-", " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </li>
              )
            )}
          </ul>

          {/* Register Button - Styled like Image */}
          <a
            href="https://app.banyangrow.xyz"
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 hover:text-black transition">
            Register
          </a>
        </motion.div>
      )}

      {/* Hero Content with Motion Effects */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 max-w-4xl text-white mt-10 px-6 sm:px-0">
        <div className="flex items-center justify-center mb-4">
          <img src={gstar} alt="Star" className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
          <p className="text-xs sm:text-md bg-gray-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-white font-medium">
            Secure your future with BGE – Start earning today!
          </p>
          <img src={gstar} alt="Star" className="w-5 sm:w-6 h-5 sm:h-6 ml-2" />
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
          A Smarter Way to Grow <br /> Your Wealth
        </h1>

        {/* Buy BGE Tokens Button (NO ANIMATION) */}
        <a href="https://app.banyangrow.xyz">
          <button className="mt-6 sm:mt-8 bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold shadow-lg transition-all duration-300 hover:bg-yellow-300">
            Buy BGE Tokens
          </button>
        </a>
      </motion.div>

      {/* Section IDs for smooth scrolling */}
      {["home", "why Invest", "staking", "how-it-works", "roadmap"].map(
        (section) => (
          <div key={section} id={section} className="section"></div>
        )
      )}
    </div>
  );
};

export default HeroSection;
