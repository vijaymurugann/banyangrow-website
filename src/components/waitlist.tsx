"use client";
import React, { useEffect, useState } from "react";
import gstar from "../assets/gstar.svg";

const Waitlist = () => {
  const launchDate = new Date("2025-03-16T00:00:00").getTime();
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
    <div className="relative w-full flex flex-col items-center justify-center text-center bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
      {/* Yellow Blur Background - Adjusted for Mobile */}
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-80 max-h-80 bg-yellow-400 opacity-30 blur-3xl rounded-full"></div>

      {/* Floating Stars - Responsive Positioning */}
      <img src={gstar} alt="Star" className="absolute top-8 right-10 w-4 sm:w-6 h-4 sm:h-6 animate-pulse" />
      <img src={gstar} alt="Star" className="absolute top-16 left-8 w-3 sm:w-4 h-3 sm:h-4 opacity-75" />
      <img src={gstar} alt="Star" className="absolute bottom-10 right-16 w-4 sm:w-5 h-4 sm:h-5 animate-bounce" />

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        BGE Pre-Sale is Coming Soon!
      </h1>
      <p className="text-sm sm:text-lg mt-2 px-4">
        Exclusive Early-Bird Bonus: <span className="font-semibold">3% Extra Tokens</span> for 7 Months!
      </p>
      <p className="text-lg sm:text-xl font-semibold text-yellow-400 mt-4">
        🚀 Launch on March 16, 2025
      </p>

      {/* Countdown Timer - Responsive Layout */}
      <div className="grid grid-cols-2 sm:flex justify-center gap-6 sm:gap-10 text-lg sm:text-3xl font-bold mt-6">
        {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl">{Object.values(timeLeft)[index]}</span>
            <span className="text-sm sm:text-lg text-yellow-400">{unit}</span>
          </div>
        ))}
      </div>

      {/* Join the Whitelist Section */}
      <div className="mt-8 sm:mt-10 bg-gradient-to-r from-green-800 to-green-900 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-2xl">
        <h2 className="text-lg sm:text-2xl font-semibold">Join the waitlist & Stay Updated!</h2>
        <p className="text-xs sm:text-sm text-gray-300 mt-2">Limited Supply – Secure Your Spot Now!</p>

        {/* Responsive Email Input & Button */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 p-3 rounded-md sm:rounded-l-md border border-gray-400 bg-transparent text-white outline-none text-sm sm:text-base"
          />
          <button className="w-full sm:w-auto bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-3 rounded-md sm:rounded-r-md shadow-md transition hover:bg-yellow-300">
            Pre-Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;