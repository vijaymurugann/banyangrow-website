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
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-8">
      {/* Border SVG - Increased Size */}
      <div className="absolute w-[calc(70%+20px)] h-[calc(70%+20px)] flex items-center justify-center z-0">
        <img src={border} alt="Border" className="w-full h-full" />
      </div>

      {/* Title - Centered inside Border */}
      <div className="absolute w-[calc(60%+20px)] h-[calc(60%+20px)] flex flex-col items-center justify-center z-10">
        <h1 className="text-white text-4.5xl font-bold text-center">Ways to</h1>
        <h1 className="text-yellow-400 text-5.5xl font-bold text-center">
          Earn with BGE
        </h1>
      </div>

      {/* Earning Options Grid */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-3xl z-10">
        {/* Top Center - Pre-Sale Bonus */}
        <div className="absolute bottom-[220px] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[350px]">
          <img
            src={presaleBonus}
            alt="Pre-Sale Bonus"
            className="w-10 h-10 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Pre-Sale Bonus</h3>
            <p className="text-gray-400 text-xs">
              Buy now and get 3% extra tokens every month for 7 months.
            </p>
          </div>
        </div>

        {/* Top Right - Fixed Staking */}
        <div className="absolute left-[610px] top-[10%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[350px]">
          <img
            src={fixedStaking}
            alt="Fixed Staking"
            className="w-10 h-10 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Fixed Staking</h3>
            <p className="text-gray-400 text-xs">
              Earn 5% (3M), 11% (6M), or 24% (12M) on your investment.
            </p>
          </div>
        </div>

        {/* Middle Left - Referral System */}
        <div className="absolute right-[78%] bottom-[20%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[350px]">
          <img
            src={referralSystem}
            alt="Referral System"
            className="w-10 h-10 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Referral System</h3>
            <p className="text-gray-400 text-xs">
              Earn up to 6.25% commission on 7-level referrals.
            </p>
          </div>
        </div>

        {/* Bottom Left - Liquidity Pool */}
        <div className="absolute top-[220px] right-[600px] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[350px]">
          <img
            src={liquidityPool}
            alt="Liquidity Pool"
            className="w-10 h-10 mr-3"
          />
          <div>
            <h3 className="text-white font-bold text-sm">Liquidity Pool</h3>
            <p className="text-gray-400 text-xs">
              Earn 0.2% on every transaction while securing the ecosystem.
            </p>
          </div>
        </div>

        {/* Bottom Right - Flexible Staking */}
        <div className="absolute top-[230px] left-[80%] flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[350px]">
          <img
            src={flexibleStaking}
            alt="Flexible Staking"
            className="w-10 h-10 mr-3"
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
        className="absolute top-[10%] right-[10%] w-5 h-5 opacity-80"
      />
      <img
        src={star}
        alt="Star"
        className="absolute bottom-[10%] left-[10%] w-5 h-5 opacity-80"
      />
    </section>
  );
};

export default WaysToEarn;
