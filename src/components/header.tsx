import React from "react";
import bgrow from "../assets/banyangrowlogo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-12 bg-black bg-opacity-90 z-50 border-b border-gray-700">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={bgrow} alt="Banyan Grow" className="h-10 w-auto" />
        <span className="text-white text-xl font-semibold">Banyan Grow</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-8">
        <a
          href="#home"
          className="text-white font-medium hover:text-yellow-400 transition-colors"
        >
          Home
        </a>
        <a
          href="#why-invest"
          className="text-white font-medium hover:text-yellow-400 transition-colors"
        >
          Why Invest?
        </a>
        <a
          href="#staking"
          className="text-white font-medium hover:text-yellow-400 transition-colors"
        >
          Staking
        </a>
        <a
          href="#how-it-works"
          className="text-white font-medium hover:text-yellow-400 transition-colors"
        >
          How it Works
        </a>
        <a
          href="#roadmap"
          className="text-white font-medium hover:text-yellow-400 transition-colors"
        >
          Roadmap
        </a>
        <a
          href="#faq"
          className="text-white font-medium hover:text-yellow-400 transition-colors"
        >
          FAQ
        </a>
      </nav>

      {/* Register Button */}
      <a
        href="#register"
        className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-all shadow-md"
      >
        Register
      </a>
    </header>
  );
};

export default Header;
