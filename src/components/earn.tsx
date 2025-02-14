import React from "react";
import { motion } from "framer-motion";
import presaleBonus from "../assets/presale.svg";
import referralSystem from "../assets/referal.svg";
import fixedStaking from "../assets/fixedstake.svg";
import liquidityPool from "../assets/liqpool.svg";
import flexibleStaking from "../assets/flexstake.svg";
import star from "../assets/gstar.svg";
import border from "../assets/border.svg";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const WaysToEarn = () => {
  return (
    <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center px-8">
      {/* Border SVG */}
      <img src={border} alt="Border" className="absolute w-[80%] h-[70%]" />

      {/* Title */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn("up", 0.2)}
        className="absolute top-[30%] text-center"
      >
        <h1 className="text-white text-3xl font-bold">Ways to</h1>
        <h1 className="text-yellow-400 text-4xl font-bold">Earn with BGE</h1>
      </motion.div>

      {/* Earning Options Grid */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl">
        {/* Presale Bonus */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0.3)}
          whileHover={{ scale: 1.05 }}
          className="absolute top-[-10%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]"
        >
          <img src={presaleBonus} alt="Pre-Sale Bonus" className="w-12 h-12 mr-3" />
          <div>
            <h3 className="text-white font-bold text-sm">Pre-Sale Bonus</h3>
            <p className="text-gray-400 text-xs">Buy now and get 3% extra tokens every month for 7 months.</p>
          </div>
        </motion.div>

        {/* Fixed Staking */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0.4)}
          whileHover={{ scale: 1.05 }}
          className="absolute right-[-15%] top-[10%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]"
        >
          <img src={fixedStaking} alt="Fixed Staking" className="w-12 h-12 mr-3" />
          <div>
            <h3 className="text-white font-bold text-sm">Fixed Staking</h3>
            <p className="text-gray-400 text-xs">Earn 5% (3M), 11% (6M), or 24% (12M) on your investment.</p>
          </div>
        </motion.div>

        {/* Referral System */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0.5)}
          whileHover={{ scale: 1.05 }}
          className="absolute left-[-15%] top-[25%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]"
        >
          <img src={referralSystem} alt="Referral System" className="w-12 h-12 mr-3" />
          <div>
            <h3 className="text-white font-bold text-sm">Referral System</h3>
            <p className="text-gray-400 text-xs">Earn up to 6.25% commission on 7-level referrals.</p>
          </div>
        </motion.div>

        {/* Liquidity Pool */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0.6)}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-[-10%] left-[-15%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]"
        >
          <img src={liquidityPool} alt="Liquidity Pool" className="w-12 h-12 mr-3" />
          <div>
            <h3 className="text-white font-bold text-sm">Liquidity Pool</h3>
            <p className="text-gray-400 text-xs">Earn 0.2% on every transaction while securing the ecosystem.</p>
          </div>
        </motion.div>

        {/* Flexible Staking */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0.7)}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-[-10%] right-[-15%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]"
        >
          <img src={flexibleStaking} alt="Flexible Staking" className="w-12 h-12 mr-3" />
          <div>
            <h3 className="text-white font-bold text-sm">Flexible Staking</h3>
            <p className="text-gray-400 text-xs">Earn 3% APY with easy withdrawals.</p>
          </div>
        </motion.div>
      </div>

      {/* Buy Button */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.5 } }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-[30px] bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold shadow-md hover:bg-yellow-300"
      >
        Buy BGE Tokens
      </motion.button>

      {/* Stars Animation */}
      <motion.img
        src={star}
        alt="Star"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, delay: 0.3 } }}
        className="absolute top-[5%] right-[10%] w-6 h-6 opacity-80"
      />
      <motion.img
        src={star}
        alt="Star"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, delay: 0.6 } }}
        className="absolute bottom-[5%] left-[10%] w-6 h-6 opacity-80"
      />
    </section>
  );
};

export default WaysToEarn;