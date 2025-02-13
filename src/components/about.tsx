import React from "react";
import bgecoin from "../assets/coinwormhole.svg"; // Update with actual path
import star from "../assets/star.svg"; // Add star assets if necessary

const WhyInvest = () => {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-between px-16">
      {/* Left Side - Wormhole & Coin */}
      <div className="relative flex flex-col items-center justify-center w-1/2">
        {/* Heading on top of the wormhole */}
        <h1 className="text-5xl font-bold text-white mb-6 text-center">
          Why Invest <br /> in BGE?
        </h1>

        {/* Wormhole Image (Reduced to 441x514) */}
        <img
          src={bgecoin}
          alt="BGE Coin"
          className="w-[441px] h-[514px] object-contain"
        />
      </div>

      {/* Right Side - Investment Benefits Grid */}
      <div className="w-1/2 flex flex-col items-start">
        <div className="grid grid-cols-2 gap-8 max-w-lg text-white ml-auto">
          {/* Box 1 */}
          <div className="bg-[#111] rounded-xl p-6 shadow-lg border border-gray-800 aspect-square flex flex-col justify-center">
            <div className="text-blue-400 text-xl font-bold">
              Guaranteed Passive Income
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Stake your BGE and earn consistent rewards over time.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-[#111] rounded-xl p-6 shadow-lg border border-gray-800 aspect-square flex flex-col justify-center">
            <div className="text-purple-400 text-xl font-bold">
              Multi-Level Referral System
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Invite friends and earn commissions on multiple levels.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-[#111] rounded-xl p-6 shadow-lg border border-gray-800 aspect-square flex flex-col justify-center">
            <div className="text-orange-400 text-xl font-bold">
              Dynamic Pricing Model
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Early investors benefit from lower prices before market demand
              grows.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-[#111] rounded-xl p-6 shadow-lg border border-gray-800 aspect-square flex flex-col justify-center">
            <div className="text-blue-300 text-xl font-bold">
              Liquidity Mining & Yield Farming
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Provide liquidity and earn passive rewards from transaction fees.
            </p>
          </div>
        </div>
      </div>

      {/* Stars */}
      <img
        src={star}
        alt="Star"
        className="absolute top-10 right-10 w-8 h-8 opacity-80"
      />
      <img
        src={star}
        alt="Star"
        className="absolute bottom-20 left-10 w-8 h-8 opacity-80"
      />
    </section>
  );
};

export default WhyInvest;
