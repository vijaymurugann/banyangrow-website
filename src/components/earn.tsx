import React from "react";
import presaleBonus from "../assets/presale.svg";
import referralSystem from "../assets/referal.svg";
import fixedStaking from "../assets/fixedstake.svg";
import liquidityPool from "../assets/liqpool.svg";
import flexibleStaking from "../assets/flexstake.svg";
import star from "../assets/gstar.svg";
import border from "../assets/border.svg";

const WaysToEarn = () => {
  return (
    <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center px-8">
      {/* Border SVG */}
      <img src={border} alt="Border" className="absolute w-[80%] h-[70%]" />

      {/* Title */}
      <div className="absolute top-[30%] text-center">
        <h1 className="text-white text-3xl font-bold">Ways to</h1>
        <h1 className="text-yellow-400 text-4xl font-bold">Earn with BGE</h1>
      </div>

      {/* Earning Options Grid */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl">
        {/* Presale Bonus (Top Center) */}
        <div className="absolute top-[-10%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]">
          <img
            src={presaleBonus}
            alt="Pre-Sale Bonus"
            className="w-12 h-12 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Pre-Sale Bonus</h3>
            <p className="text-gray-400 text-xs">
              Buy now and get 3% extra tokens every month for 7 months.
            </p>
          </div>
        </div>

        {/* Fixed Staking (Right Center) */}
        <div className="absolute right-[-15%] top-[10%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]">
          <img
            src={fixedStaking}
            alt="Fixed Staking"
            className="w-12 h-12 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Fixed Staking</h3>
            <p className="text-gray-400 text-xs">
              Earn 5% (3M), 11% (6M), or 24% (12M) on your investment.
            </p>
          </div>
        </div>

        {/* Referral System (Left Center) */}
        <div className="absolute left-[-15%] top-[25%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]">
          <img
            src={referralSystem}
            alt="Referral System"
            className="w-12 h-12 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Referral System</h3>
            <p className="text-gray-400 text-xs">
              Earn up to 6.25% commission on 7-level referrals.
            </p>
          </div>
        </div>

        {/* Liquidity Pool (Bottom Left) */}
        <div className="absolute bottom-[-10%] left-[-15%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]">
          <img
            src={liquidityPool}
            alt="Liquidity Pool"
            className="w-12 h-12 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Liquidity Pool</h3>
            <p className="text-gray-400 text-xs">
              Earn 0.2% on every transaction while securing the ecosystem.
            </p>
          </div>
        </div>

        {/* Flexible Staking (Bottom Right) */}
        <div className="absolute bottom-[-10%] right-[-15%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]">
          <img
            src={flexibleStaking}
            alt="Flexible Staking"
            className="w-12 h-12 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Flexible Staking</h3>
            <p className="text-gray-400 text-xs">
              Earn 3% APY with easy withdrawals.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="absolute bottom-[30px] bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold shadow-md hover:bg-yellow-300">
        Buy BGE Tokens
      </button>

      {/* Stars */}
      <img
        src={star}
        alt="Star"
        className="absolute top-[5%] right-[10%] w-6 h-6 opacity-80"
      />
      <img
        src={star}
        alt="Star"
        className="absolute bottom-[5%] left-[10%] w-6 h-6 opacity-80"
      />
    </section>
  );
};

export default WaysToEarn;
