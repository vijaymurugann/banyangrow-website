import React, { useEffect, useState } from "react";
import spiderweb from "../assets/spiderweb.svg";
import banyangrowlogo from "../assets/banyangrowlogo.svg";

const HeroSection = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth) * 2 - 1);
      setMouseY((e.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
        style={{
          transform: `translate(${mouseX * 15}px, ${mouseY * 15}px)`,
        }}
      >
        <div className="w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[150px] opacity-70"></div>
        <div className="w-[800px] h-[800px] bg-yellow-300 rounded-full blur-[180px] opacity-40 absolute"></div>
      </div>

      {/* Spider Web Overlay - Larger Size */}
      <img
        src={spiderweb}
        alt="Spider Web"
        className="absolute inset-0 w-[180%] h-[180%] object-contain opacity-95"
      />

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-10 py-6 z-20">
        {/* Logo */}
        <div>
          <img src={banyangrowlogo} alt="Logo" className="h-12" />
        </div>

        {/* Navigation Items */}
        <ul className="flex gap-10 text-white text-lg font-medium">
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">
            Why Invest?
          </li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">
            Staking
          </li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">
            How it Works
          </li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">
            Roadmap
          </li>
        </ul>

        {/* Register Button */}
        <button className="border-2 border-yellow-400 text-yellow-400 font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-400 hover:text-black">
          Register
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 max-w-3xl text-white mt-10">
        {/* Highlight Box */}
        <div className="bg-black px-6 py-3 inline-block rounded-2xl text-sm font-semibold text-white opacity-90 shadow-lg">
          Secure your future with BGE – Start earning today!
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold mt-6 leading-tight">
          A Smarter Way to Grow <br /> Your Wealth
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-xl text-gray-300 max-w-lg mx-auto">
          Earn passive income and maximize your returns with our decentralized
          investment platform.
        </p>

        {/* Call-to-Action Button */}
        <button className="mt-8 border-2 border-yellow-400 text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:text-black">
          Buy BGE Tokens
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
