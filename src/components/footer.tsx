"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import starIcon from "../assets/gstar.svg"; // Import the star SVG

export default function Footer() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative text-white py-12 overflow-hidden"
    >
      {/* Yellow Blur Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/30 to-black blur-3xl opacity-50"></div>
      </div>

      {/* Floating Star Icons */}
      <img
        src={starIcon}
        alt="Star"
        className="absolute top-6 left-10 w-8 sm:w-12 opacity-70"
      />
      <img
        src={starIcon}
        alt="Star"
        className="absolute top-10 right-20 w-6 sm:w-10 opacity-80"
      />
      <img
        src={starIcon}
        alt="Star"
        className="absolute bottom-16 right-16 w-6 sm:w-10 opacity-70"
      />
      <img
        src={starIcon}
        alt="Star"
        className="absolute bottom-10 left-1/4 w-8 sm:w-12 opacity-65"
      />

      {/* Footer Content */}
      <div className="relative z-10 max-w-5xl mx-auto bg-black rounded-lg p-8 md:p-12 shadow-lg border border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Branding Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              🌳 Banyan Grow
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              A decentralized platform designed for wealth growth through
              staking, liquidity mining, and multi-level referrals.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Why BGE?
                </a>
              </li>
              <li>
                <a
                  href="/BGE_Privacy Policy.pdf"
                  download="BGE_Privacy Policy.pdf"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/BGE_Terms & Conditions.pdf"
                  download="BGE_Terms & Conditions.pdf"
                  className="text-gray-400 hover:text-white"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/banyan_grow.pdf"
                  download="banyan_grow.pdf"
                  className="text-gray-400 hover:text-white"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-300">📞 +971 544525959</p>
            <p className="text-gray-300">📧 support@banyangrowltd.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © 2025. All rights reserved Banyan Grow.
      </div>
    </motion.footer>
  );
}
