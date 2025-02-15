"use client";
import { useState, useEffect } from "react"; // ✅ Keep only necessary imports
import { Menu, X } from "lucide-react";
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

  // Function to handle smooth scrolling
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Adjust this value based on the height of your fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // Close the mobile menu after clicking
    }
  };

  return (
    <div className="relative w-screen h-screen bg-black flex flex-col items-center justify-center text-center overflow-hidden">
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
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 sm:px-10 py-4 sm:py-6 z-40">
        <img src={banyangrowlogo} alt="Logo" className="h-10 sm:h-12" />

        {/* Hamburger Menu (for Tablets & Mobile) */}
        {(isTablet || isMobile) && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none z-50"
          >
            <Menu size={28} />
          </button>
        )}

        {/* Full Navigation (only on large screens) */}
        {isLargeScreen && (
          <ul className="flex space-x-8">
            <li
              className="text-white font-medium hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("home")}
            >
              Home
            </li>
            <li
              className="text-white font-medium hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("why-invest")}
            >
              Why Invest?
            </li>
            <li
              className="text-white font-medium hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("staking")}
            >
              Staking
            </li>
            <li
              className="text-white font-medium hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("how-it-works")}
            >
              How it Works
            </li>
            <li
              className="text-white font-medium hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("roadmap")}
            >
              Roadmap
            </li>
          </ul>
        )}
      </nav>

      {/* Mobile & Tablet Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-6 transition-transform duration-300 z-50">
          {/* Close Button in Top Right Corner */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white z-50"
          >
            <X size={30} />
          </button>

          <ul className="text-white text-lg space-y-6">
            <li
              className="hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("home")}
            >
              Home
            </li>
            <li
              className="hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("why-invest")}
            >
              Why Invest?
            </li>
            <li
              className="hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("staking")}
            >
              Staking
            </li>
            <li
              className="hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("how-it-works")}
            >
              How it Works
            </li>
            <li
              className="hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("roadmap")}
            >
              Roadmap
            </li>
          </ul>
        </div>
      )}

      {/* Title Section */}
      <div className="relative z-20 max-w-4xl text-white mt-10 px-6 sm:px-0">
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

        {/* Buy BGE Tokens Button */}
        <button className="mt-6 sm:mt-8 bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold shadow-lg transition-all duration-300 hover:bg-yellow-300">
          Buy BGE Tokens
        </button>
      </div>

      {/* Add id attributes to the target sections */}
      <div id="home" className="section">
        {/* Home Section Content */}
      </div>

      <div id="why-invest" className="section">
        {/* Why Invest Section Content */}
      </div>

      <div id="staking" className="section">
        {/* Staking Section Content */}
      </div>

      <div id="how-it-works" className="section">
        {/* How it Works Section Content */}
      </div>

      <div id="roadmap" className="section">
        {/* Roadmap Section Content */}
      </div>
    </div>
  );
};

export default HeroSection;