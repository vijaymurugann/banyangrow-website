import React, { useState } from "react";
import { motion } from "framer-motion";
import roadmapBg from "../assets/shades.svg"; // Update with correct path

const roadmapData = [
  { title: "Token Launch & Pre-Sale Begins", quarter: "Q1 2025" },
  { title: "Staking & Referral Program Activation", quarter: "Q2 2025" },
  { title: "Liquidity Pool Implementation", quarter: "Q3 2025" },
  { title: "Expansion & Ecosystem Growth", quarter: "Q1 2025" },
];

const Roadmap = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative w-screen h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Background Image */}
      <div className="absolute bottom-0 w-full h-3/4 z-0">
        <img
          src={roadmapBg}
          alt="Roadmap Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent"></div>
      </div>

      {/* Title Animation */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={isHovered ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-white text-4xl font-bold">Roadmap to Revolution</h1>
        <p className="text-gray-400 text-sm max-w-lg mx-auto">
          We’re building a future where financial growth is accessible to
          everyone. Here’s what’s next for BGE.
        </p>
      </motion.div>

      {/* Roadmap Grid with Card Animations */}
      <div className="relative flex justify-center items-center gap-10 w-full max-w-5xl z-10">
        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            className={`relative bg-black text-white rounded-lg p-6 w-1/4 flex flex-col items-center justify-between shadow-lg ${
              index % 2 === 0 ? "mt-10" : "mb-10"
            }`}
            style={{ minHeight: "180px" }}
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={isHovered ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <h3 className="text-center text-lg font-semibold">{item.title}</h3>
            <span className="text-green-500 text-lg font-bold mt-4">
              {item.quarter}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Stars for Decoration */}
      <div className="absolute top-10 right-16 text-white text-3xl">✦</div>
      <div className="absolute bottom-16 left-10 text-white text-5xl">✦</div>
      <div className="absolute top-1/2 left-1/3 text-white text-2xl">✦</div>
    </section>
  );
};

export default Roadmap;