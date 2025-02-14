import React, { useState } from "react";
import { motion } from "framer-motion";
import bgecoin from "../assets/coinwormhole.svg"; // Update with actual path
import star from "../assets/star.svg"; // Add star assets if necessary

const WhyInvest = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="relative w-full h-screen bg-black flex items-center justify-between px-16"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left Side - Wormhole & Coin */}
      <div className="relative flex flex-col items-center justify-center w-1/2">
        {/* Title Animation */}
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={hovered ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl font-bold text-white mb-6 text-center"
        >
          Why Invest <br /> in BGE?
        </motion.h1>

        {/* Wormhole & Coin Animation */}
        <motion.img
          src={bgecoin}
          alt="BGE Coin"
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
          animate={hovered ? { scale: 1, rotate: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-[441px] h-[514px] object-contain"
        />
      </div>

      {/* Right Side - Investment Benefits Grid */}
      <div className="w-1/2 flex flex-col items-start">
        <div className="grid grid-cols-2 gap-8 max-w-lg text-white ml-auto">
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
              initial={{ x: 100, opacity: 0 }}
              animate={hovered ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.2, ease: "easeOut" }}
              className="bg-[#111] rounded-xl p-6 shadow-lg border border-gray-800 aspect-square flex flex-col justify-center"
            >
              <div className={`${item.color} text-xl font-bold`}>{item.title}</div>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
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
        className="absolute top-10 right-10 w-8 h-8 opacity-80"
      />
      <motion.img
        src={star}
        alt="Star"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute bottom-20 left-10 w-8 h-8 opacity-80"
      />
    </section>
  );
};

export default WhyInvest;