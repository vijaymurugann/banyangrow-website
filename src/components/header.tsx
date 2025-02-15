import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import bgrow from "../assets/banyangrowlogo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    isLargeScreen: true,
    isTabletLarge: false,
    isTabletSmall: false,
    isMobile: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      setScreenSize({
        isLargeScreen: width >= 1024,
        isTabletLarge: width >= 834 && width < 1024, // iPad Pro 12.9"
        isTabletSmall: width >= 768 && width < 834, // iPad Pro 11" & smaller
        isMobile: width < 768, // Mobile devices
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-12 bg-black bg-opacity-90 z-50 border-b border-gray-700">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={bgrow} alt="Banyan Grow" className="h-10 w-auto" />
        <span className="text-white text-xl font-semibold">Banyan Grow</span>
      </div>

      {/* Hamburger Menu (for Tablets & Mobile) */}
      {(screenSize.isTabletSmall || screenSize.isMobile) && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* Navigation */}
      <nav
        className={`absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center md:space-x-8 p-6 md:p-0 transition-transform duration-300 ${
          isOpen || screenSize.isLargeScreen || screenSize.isTabletLarge
            ? "flex"
            : "hidden"
        }`}
      >
        <a
          href="#home"
          className="text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0"
        >
          Home
        </a>
        <a
          href="#why-invest"
          className="text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0"
        >
          Why Invest?
        </a>
        <a
          href="#staking"
          className="text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0"
        >
          Staking
        </a>
        <a
          href="#how-it-works"
          className="text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0"
        >
          How it Works
        </a>
        <a
          href="#roadmap"
          className="text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0"
        >
          Roadmap
        </a>
        <a
          href="#faq"
          className="text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0"
        >
          FAQ
        </a>
      </nav>

      {/* Register Button (Visible on Large Screens & Tablets) */}
      {!screenSize.isMobile && (
        <a
          href="#register"
          className="hidden md:inline border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-all shadow-md"
        >
          Register
        </a>
      )}
    </header>
  );
};

export default Header;
