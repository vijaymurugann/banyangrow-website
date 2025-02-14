import React, { useState } from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation Variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  });

  return (
    <section
      className="relative w-screen h-screen bg-black flex flex-col items-center justify-center px-8 overflow-hidden"
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
        {[
          {
            id: 1,
            title: "Buy BGE Tokens",
            desc: "Invest early and secure the best price",
            direction: "right",
          },
          {
            id: 2,
            title: "Stake & Earn",
            desc: "Choose from flexible or fixed staking plans",
            direction: "left",
          },
          {
            id: 3,
            title: "Refer & Earn",
            desc: "Share with friends and earn multi-level rewards",
            direction: "right",
          },
          {
            id: 4,
            title: "Liquidity Mining",
            desc: "Provide liquidity and earn additional rewards",
            direction: "left",
          },
        ].map((step, index) => (
          <motion.div
            key={step.id}
            className="relative flex items-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants(step.direction)}
            custom={index}
          >
            {/* Follow-up Line */}
            {index !== 0 && (
              <div className="absolute left-5 top-[-24px] h-6 w-[2px] bg-gray-600"></div>
            )}

            {/* Green Shadow - Alternating Sides */}
            <div
              className={`absolute inset-0 bg-green-500 rounded-lg scale-[1.03] ${
                index % 2 === 0
                  ? "-translate-x-2 -translate-y-2"
                  : "translate-x-2 translate-y-2"
              }`}
            />

            {/* Step Card */}
            <div className="relative flex items-center bg-black text-white rounded-lg p-5 w-full shadow-lg border border-gray-700">
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
      <div className="absolute top-10 right-16 text-white text-3xl">✦</div>
      <div className="absolute bottom-16 left-10 text-white text-5xl">✦</div>
      <div className="absolute top-1/2 left-1/3 text-white text-2xl">✦</div>
    </section>
  );
};

export default HowItWorks;