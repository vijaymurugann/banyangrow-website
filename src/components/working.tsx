import React from "react";

const HowItWorks = () => {
  return (
    <section className="relative w-screen h-screen bg-black flex flex-col items-center justify-center px-8 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-white text-4xl font-bold">How It Works</h1>
        <p className="text-gray-400 text-sm">
          Get started with Banyan Grow in four simple steps
        </p>
      </div>

      {/* Steps Container */}
      <div className="relative flex flex-col gap-6 w-full max-w-lg">
        {[
          {
            id: 1,
            title: "Buy BGE Tokens",
            desc: "Invest early and secure the best price",
          },
          {
            id: 2,
            title: "Stake & Earn",
            desc: "Choose from flexible or fixed staking plans",
          },
          {
            id: 3,
            title: "Refer & Earn",
            desc: "Share with friends and earn multi-level rewards",
          },
          {
            id: 4,
            title: "Liquidity Mining",
            desc: "Provide liquidity and earn additional rewards",
          },
        ].map((step, index) => (
          <div key={step.id} className="relative flex items-center">
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
          </div>
        ))}
      </div>

      {/* Stars - Arranged According to Image */}
      <div className="absolute top-10 right-16 text-white text-3xl">✦</div>
      <div className="absolute bottom-16 left-10 text-white text-5xl">✦</div>
      <div className="absolute top-1/2 left-1/3 text-white text-2xl">✦</div>
    </section>
  );
};

export default HowItWorks;
