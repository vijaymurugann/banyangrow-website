import React, { useState } from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="relative w-screen min-h-screen bg-black flex flex-col items-center justify-center px-8 overflow-hidden"
      onMouseEnter={() => setIsVisible(true)}
    >
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={titleVariants}
      >
        <h1 className="text-white text-4xl font-bold">How It Works</h1>
        <p className="text-gray-400 text-sm">
          Get started with Banyan Grow in four simple steps
        </p>
      </motion.div>

      {/* Steps Container */}
      <div className="relative flex flex-col gap-6 w-full max-w-lg">
        {/* Vertical Connecting Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 bottom-5 w-[2px] bg-gray-600"></div>

        {[  
          { id: 1, title: "Buy BGE Tokens", desc: "Invest early and secure the best price" },
          { id: 2, title: "Stake & Earn", desc: "Choose from flexible or fixed staking plans" },
          { id: 3, title: "Refer & Earn", desc: "Share with friends and earn multi-level rewards" },
          { id: 4, title: "Liquidity Mining", desc: "Provide liquidity and earn additional rewards" },
        ].map((step, index) => (
          <motion.div
            key={step.id}
            className="relative flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Step Card */}
            <div className="relative flex items-center bg-black text-white rounded-lg p-5 w-full shadow-lg border border-green-500">
              <div className="flex items-center justify-center bg-gray-900 w-10 h-10 text-xl font-bold rounded mr-4">
                {step.id}
              </div>
              <div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stars */}
      <div className="absolute top-10 left-10 text-gray-400 text-3xl">✦</div>
      <div className="absolute bottom-16 right-16 text-gray-400 text-5xl">✦</div>
      <div className="absolute top-1/2 left-1/3 text-gray-400 text-2xl">✦</div>
    </section>
  );
};

export default HowItWorks;
