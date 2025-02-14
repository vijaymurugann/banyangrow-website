import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import bgrow from "../assets/banyangrowlogo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-12 bg-black bg-opacity-90 z-50 border-b border-gray-700">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={bgrow} alt="Banyan Grow" className="h-10 w-auto" />
        <span className="text-white text-xl font-semibold">Banyan Grow</span>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center space-x-0 md:space-x-8 p-6 md:p-0 transition-transform duration-300 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <a href="#home" className="block md:inline text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0">Home</a>
        <a href="#why-invest" className="block md:inline text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0">Why Invest?</a>
        <a href="#staking" className="block md:inline text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0">Staking</a>
        <a href="#how-it-works" className="block md:inline text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0">How it Works</a>
        <a href="#roadmap" className="block md:inline text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0">Roadmap</a>
        <a href="#faq" className="block md:inline text-white font-medium hover:text-yellow-400 transition-colors py-2 md:py-0">FAQ</a>
      </nav>

      {/* Register Button */}
      <a
        href="#register"
        className="hidden md:inline border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-all shadow-md"
      >
        Register
      </a>
    </header>
  );
};

export default Header;
