"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gstar from "../assets/gstar.svg";

// Define the type for countdown state
type TimeLeftType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Waitlist = () => {
  const launchDate = new Date("2025-03-19T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeftType | null>(null);
  const [loading, setLoading] = useState(true);

  function calculateTimeLeft(): TimeLeftType {
    const now = new Date().getTime();
    const difference = launchDate - now;
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeLeft(calculateTimeLeft());
    }, 1500); // Simulate loading effect

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (

    <div id="Staking"  className="relative w-full flex flex-col items-center justify-center text-center bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
      {/* Yellow Blur Background */}
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-80 max-h-80 bg-yellow-400 opacity-30 blur-3xl rounded-full"></div>

      {/* Floating Stars */}
      <motion.img
        src={gstar}
        alt="Star"
        className="absolute top-8 right-10 w-4 sm:w-6 h-4 sm:h-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src={gstar}
        alt="Star"
        className="absolute top-16 left-8 w-3 sm:w-4 h-3 sm:h-4 opacity-75"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.img
        src={gstar}
        alt="Star"
        className="absolute bottom-10 right-16 w-4 sm:w-5 h-4 sm:h-5"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
      >
        BGE Pre-Sale is Coming Soon!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-sm sm:text-lg mt-2 px-4"
      >
        Exclusive Early-Bird Bonus:{" "}
        <span className="font-semibold">3% Extra Tokens</span> for 7 Months!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="text-lg sm:text-xl font-semibold text-yellow-400 mt-4"
      >
        🚀 Launch on March 16, 2025
      </motion.p>

      {/* Countdown Timer (No Blinking Effect) */}
      {!loading ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 sm:flex justify-center gap-6 sm:gap-10 text-lg sm:text-3xl font-bold mt-6"
        >
          {timeLeft ? (
            <>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl">{timeLeft.days}</span>
                <span className="text-sm sm:text-lg text-yellow-400">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl">{timeLeft.hours}</span>
                <span className="text-sm sm:text-lg text-yellow-400">
                  Hours
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl">{timeLeft.minutes}</span>
                <span className="text-sm sm:text-lg text-yellow-400">
                  Minutes
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl">{timeLeft.seconds}</span>
                <span className="text-sm sm:text-lg text-yellow-400">
                  Seconds
                </span>
              </div>
            </>
          ) : (
            <span className="text-yellow-400 text-lg sm:text-2xl">
              Countdown Ended
            </span>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-6 text-yellow-400 text-lg sm:text-2xl font-semibold"
        >
          Loading countdown...
        </motion.div>
      )}

      {/* Join the Whitelist Section */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="mt-8 sm:mt-10 bg-gradient-to-r from-green-800 to-green-900 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-2xl"
      >
        <h2 className="text-lg sm:text-2xl font-semibold">
          Join the waitlist & Stay Updated!
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 mt-2">
          Limited Supply – Secure Your Spot Now!
        </p>

\        <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 p-3 rounded-md sm:rounded-l-md border border-gray-400 bg-transparent text-white outline-none text-sm sm:text-base"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-3 rounded-md sm:rounded-r-md shadow-md transition hover:bg-yellow-300"
          >
            Pre-Register Now
          </motion.button>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Waitlist;