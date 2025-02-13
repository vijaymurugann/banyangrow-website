import React from "react";
import roadmapBg from "../assets/shades.svg"; // Update with correct path

const roadmapData = [
  { title: "Token Launch & Pre-Sale Begins", quarter: "Q1 2025" },
  { title: "Staking & Referral Program Activation", quarter: "Q2 2025" },
  { title: "Liquidity Pool Implementation", quarter: "Q3 2025" },
  { title: "Expansion & Ecosystem Growth", quarter: "Q1 2025" },
];

const Roadmap = () => {
  return (
    <section className="relative w-screen h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute bottom-0 w-full h-3/4 z-0">
        {" "}
        {/* Moved to bottom */}
        <img
          src={roadmapBg}
          alt="Roadmap Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-white text-4xl font-bold">Roadmap to Revolution</h1>
        <p className="text-gray-400 text-sm max-w-lg mx-auto">
          We’re building a future where financial growth is accessible to
          everyone. Here’s what’s next for BGE.
        </p>
      </div>

      {/* Roadmap Grid */}
      <div className="relative flex justify-center items-center gap-10 w-full max-w-5xl z-10">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className={`relative bg-black text-white rounded-lg p-6 w-1/4 flex flex-col items-center justify-between shadow-lg ${
              index % 2 === 0 ? "mt-10" : "mb-10"
            }`}
            style={{ minHeight: "180px" }}
          >
            <h3 className="text-center text-lg font-semibold">{item.title}</h3>
            <span className="text-green-500 text-lg font-bold mt-4">
              {item.quarter}
            </span>
          </div>
        ))}
      </div>

      {/* Stars for Decoration */}
      <div className="absolute top-10 right-16 text-white text-3xl">✦</div>
      <div className="absolute bottom-16 left-10 text-white text-5xl">✦</div>
      <div className="absolute top-1/2 left-1/3 text-white text-2xl">✦</div>
    </section>
  );
};

export default Roadmap;
