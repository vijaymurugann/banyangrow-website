"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import bgecoin from "../assets/coinwormhole.svg";
import star from "../assets/star.svg";

const WhyInvest = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left Side - Wormhole & Coin */}
      <div className="relative flex flex-col items-center justify-center w-full lg:w-1/2 text-center lg:text-left">
        {/* Title Animation */}
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Why Invest <br /> in BGE?
        </motion.h1>

        {/* Wormhole & Coin Animation */}
        <motion.img
          src={bgecoin}
          alt="BGE Coin"
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-32 sm:w-48 md:w-56 lg:w-[441px] object-contain"
        />
      </div>

      {/* Right Side - Investment Benefits Grid */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl text-white">
          {[
            {
              title: "Guaranteed Passive Income",
              desc: "Stake your BGE and earn consistent rewards over time.",
              color: "text-blue-400",
            },
            {
              title: "Multi-Level Referral System",
              desc: "Invite friends and earn commissions on multiple levels.",
              color: "text-purple-400",
            },
            {
              title: "Dynamic Pricing Model",
              desc: "Early investors benefit from lower prices before market demand grows.",
              color: "text-orange-400",
            },
            {
              title: "Liquidity Mining & Yield Farming",
              desc: "Provide liquidity and earn passive rewards from transaction fees.",
              color: "text-blue-300",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2, ease: "easeOut" }}
              className="bg-[#111] rounded-lg p-4 md:p-6 shadow-md border border-gray-800 flex flex-col justify-center"
            >
              <div className={`${item.color} text-sm sm:text-lg font-bold`}>
                {item.title}
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stars Animation */}
      <motion.img
        src={star}
        alt="Star"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute top-8 sm:top-10 right-6 sm:right-10 w-4 sm:w-6 opacity-80"
      />
      <motion.img
        src={star}
        alt="Star"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute bottom-16 left-6 sm:left-10 w-4 sm:w-6 opacity-80"
      />
    </section>
  );
};

export default WhyInvest;