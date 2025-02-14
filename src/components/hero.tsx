import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import spiderweb from "../assets/spiderweb.svg";
import banyangrowlogo from "../assets/banyangrowlogo.svg";

const HeroSection = () => {
  const launchDate = new Date("2025-03-01T00:00:00").getTime(); // Token launch date
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = launchDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500">
        <div className="w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[150px] opacity-70"></div>
        <div className="w-[800px] h-[800px] bg-yellow-300 rounded-full blur-[180px] opacity-40 absolute"></div>
      </div>

      {/* Spider Web Overlay */}
      <img src={spiderweb} alt="Spider Web" className="absolute inset-0 w-[180%] h-[180%] object-contain opacity-95" />

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-10 py-6 z-20">
        <img src={banyangrowlogo} alt="Logo" className="h-12" />
        <ul className="flex gap-10 text-white text-lg font-medium">
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">Why Invest?</li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">Staking</li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">How it Works</li>
          <li className="hover:text-yellow-300 transition duration-200 cursor-pointer">Roadmap</li>
        </ul>
        <button className="border-2 border-yellow-400 text-yellow-400 font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-400 hover:text-black">
          Register
        </button>
      </nav>

      {/* Hero Content */}
      <motion.div className="relative z-20 max-w-3xl text-white mt-10" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}>
        <motion.h1 className="text-6xl font-extrabold mt-6 leading-tight" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}>
          A Smarter Way to Grow <br /> Your Wealth
        </motion.h1>
        <motion.p className="mt-4 text-xl text-gray-300 max-w-lg mx-auto" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}>
          Earn passive income and maximize your returns with our decentralized investment platform.
        </motion.p>
        <motion.button className="mt-8 border-2 border-yellow-400 text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:text-black" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}>
          Buy BGE Tokens
        </motion.button>
      </motion.div>

      {/* Countdown Timer Section (Matches Token Details Style) */}
      <motion.div className="absolute bottom-16 w-full text-center text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}>
        <p className="text-2xl font-bold text-yellow-400 mb-2">Launching Soon</p>
        <div className="flex justify-center gap-10 text-2xl">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold">{timeLeft.days}</span>
            <span className="text-lg text-yellow-400 font-medium">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold">{timeLeft.hours}</span>
            <span className="text-lg text-yellow-400 font-medium">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold">{timeLeft.minutes}</span>
            <span className="text-lg text-yellow-400 font-medium">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold">{timeLeft.seconds}</span>
            <span className="text-lg text-yellow-400 font-medium">Seconds</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;