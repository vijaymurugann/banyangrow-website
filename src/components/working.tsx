import React from "react";
import presaleBonus from "../assets/presale.svg";
import referralSystem from "../assets/referal.svg";
import fixedStaking from "../assets/fixedstake.svg";
import liquidityPool from "../assets/liqpool.svg";
import flexibleStaking from "../assets/flexstake.svg";
import star from "../assets/star.svg";
import border from "../assets/border.svg";

const WaysToEarn = () => {
  return (
    <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center px-8">
      {/* Border SVG */}
      <img src={border} alt="Border" className="absolute w-[150px] h-[500px]" />

      {/* Title */}
      <div className="absolute top-[35%] text-center">
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
            className="w-16 h-16 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Pre-Sale Bonus</h3>
            <p className="text-gray-400 text-xs">
              Buy now and get 3% extra tokens every month for 7 months.
            </p>
          </div>
        </div>

        {/* Fixed Staking (Right Center) */}
        <div className="absolute right-[-12%] top-[5%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]">
          <img
            src={fixedStaking}
            alt="Fixed Staking"
            className="w-16 h-16 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Fixed Staking</h3>
            <p className="text-gray-400 text-xs">
              Earn 5% (3M), 11% (6M), or 24% (12M) on your investment.
            </p>
          </div>
        </div>

        {/* Referral System (Left Center) */}
        <div className="absolute left-[-12%] top-[20%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]">
          <img
            src={referralSystem}
            alt="Referral System"
            className="w-16 h-16 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Referral System</h3>
            <p className="text-gray-400 text-xs">
              Earn up to 6.25% commission on 7-level referrals.
            </p>
          </div>
        </div>

        {/* Liquidity Pool (Bottom Left) */}
        <div className="absolute bottom-[-10%] left-[-12%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]">
          <img
            src={liquidityPool}
            alt="Liquidity Pool"
            className="w-16 h-16 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Liquidity Pool</h3>
            <p className="text-gray-400 text-xs">
              Earn 0.2% on every transaction while securing the ecosystem.
            </p>
          </div>
        </div>

        {/* Flexible Staking (Bottom Right) */}
        <div className="absolute bottom-[-10%] right-[-12%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[442px] h-[127px]">
          <img
            src={flexibleStaking}
            alt="Flexible Staking"
            className="w-16 h-16 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Flexible Staking</h3>
            <p className="text-gray-400 text-xs">
              Earn 3% APY with easy withdrawals.
            </p>
          </div>
        </div>
      </div>

      {/* Stars */}
      <img
        src={star}
        alt="Star"
        className="absolute top-[3%] right-[8%] w-10 h-10 opacity-80"
      />
      <img
        src={star}
        alt="Star"
        className="absolute bottom-[3%] left-[8%] w-10 h-10 opacity-80"
      />
    </section>
  );
};

export default WaysToEarn;
