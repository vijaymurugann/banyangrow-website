"use client";
import React from "react";
import { motion } from "framer-motion";
import spiderweb from "../assets/spiderweb.svg";
import banyangrowlogo from "../assets/banyangrowlogo.svg";
import gstar from "../assets/gstar.svg";

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen bg-black flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Glow - Adjusted for All Screen Sizes */}
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

      {/* Navigation Bar - Responsive */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 sm:px-10 py-4 sm:py-6 z-20">
        <img src={banyangrowlogo} alt="Logo" className="h-10 sm:h-12" />
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-white text-sm sm:text-lg font-medium">
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">Why Invest?</li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">Staking</li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">How it Works</li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">Roadmap</li>
        </ul>

        {/* Register Button */}
        <button className="hidden md:block border-2 border-yellow-400 text-yellow-400 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-400 hover:text-black">
          Register
        </button>
      </nav>

      {/* Title Section - Responsive */}
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
        
        {/* Buy BGE Tokens Button - Scales Responsively */}
        <button className="mt-6 sm:mt-8 bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold shadow-lg transition-all duration-300 hover:bg-yellow-300">
          Buy BGE Tokens
        </button>
      </div>
    </div>
  );
};

export default HeroSection;