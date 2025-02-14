"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import starIcon from "../assets/gstar.svg"; // Import the star SVG

export default function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <footer
      className="relative bg-black text-white py-12 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
    >
      {/* Yellow Glow at the Top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[250px] bg-yellow-400 blur-[150px] opacity-40"></div>

      {/* Larger Star Icons Floating */}
      <img src={starIcon} alt="Star" className="absolute top-6 left-10 w-12 opacity-70 animate-pulse" />
      <img src={starIcon} alt="Star" className="absolute top-10 right-20 w-10 opacity-80 animate-bounce" />
      <img src={starIcon} alt="Star" className="absolute top-20 left-1/3 w-14 opacity-60 animate-spin" />
      <img src={starIcon} alt="Star" className="absolute bottom-16 right-16 w-10 opacity-70 animate-pulse" />
      <img src={starIcon} alt="Star" className="absolute bottom-10 left-1/4 w-12 opacity-65 animate-bounce" />

      {/* Background Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-yellow-500 to-transparent opacity-30"></div>

      {/* Footer Box with Slide-Up Animation */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto bg-black rounded-lg p-8 md:p-12 shadow-lg border border-gray-800"
        initial={{ y: 100, opacity: 0 }}
        animate={hovered ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Branding Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-2">🌳 Banyan Grow</h2>
            <p className="text-gray-400 text-sm mt-2">
              A decentralized platform designed for wealth growth through staking, liquidity mining, and multi-level referrals.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Why BGE?</a></li>
              <li><a href="./public/BGE_Privacy Policy.pdf" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Whitepaper</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-300">📞 +971 544525959</p>
            <p className="text-gray-300">📧 support@banyangrowltd.com</p>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © 2025. All rights reserved Banyan Grow.
      </div>
    </footer>
  );
}