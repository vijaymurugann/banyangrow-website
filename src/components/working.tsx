import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import star from "../assets/gstar.svg"; // Using your provided star SVG

const HowItWorks = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Triggers when at least 20% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Animation Variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  });

  return (
    <section
      ref={ref}
      className="relative w-screen h-screen bg-black flex flex-col items-center justify-center px-8 overflow-hidden"
    >
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        <h1 className="text-white text-4xl font-bold">How It Works</h1>
        <p className="text-gray-400 text-sm">
          Get started with Banyan Grow in four simple steps
        </p>
      </motion.div>

      {/* Steps Container */}
      <div className="relative flex flex-col gap-8 w-full max-w-xl">
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
        ].map((step, index, arr) => (
          <motion.div
            key={step.id}
            className="relative flex items-center"
            variants={cardVariants(step.direction as "left" | "right")}
            initial="hidden"
            animate={controls}
            custom={index}
          >
            {/* Connection Line */}
            {index !== arr.length - 1 && (
              <div className="absolute left-5 top-full w-[2px] h-10 bg-gray-600"></div>
            )}

            {/* Smooth Shadow */}
            <div
              className={`absolute w-full h-full rounded-lg ${
                index % 2 === 0
                  ? "bottom-0 right-0 shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]"
                  : "top-0 left-0 shadow-[-4px_-4px_0px_0px_rgba(34,197,94,1)]"
              }`}
            ></div>

            {/* Step Card */}
            <div className="relative flex items-center bg-black text-white rounded-lg p-6 w-full shadow-lg border border-gray-700">
              <div className="flex items-center justify-center bg-gray-900 w-12 h-12 text-xl font-bold rounded mr-5">
                {step.id}
              </div>
              <div>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-gray-400 text-base">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stars */}
      <motion.img
        src={star}
        alt="Star"
        className="absolute top-10 right-16 w-8 h-8 opacity-80"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      />
      <motion.img
        src={star}
        alt="Star"
        className="absolute bottom-16 left-10 w-12 h-12 opacity-80"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      />
    </section>
  );
};

export default HowItWorks;
