import { motion } from "framer-motion";
import roadmapBg from "../assets/shades.svg"; // Ensure correct path

const roadmapData = [
  { title: "Token Launch & Pre-Sale Begins", quarter: "Q1 2025" },
  { title: "Staking & Referral Program Activation", quarter: "Q2 2025" },
  { title: "Liquidity Pool Implementation", quarter: "Q3 2025" },
  { title: "Expansion & Ecosystem Growth", quarter: "Q1 2025" },
];

const Roadmap = () => {
  return (
    <section className="relative w-screen min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={roadmapBg}
          alt="Roadmap Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>

      {/* Title */}
      <motion.div
        className="text-center relative z-10 mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-white text-6xl font-bold mb-4">Roadmap to Revolution</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          We’re building a future where financial growth is accessible to everyone. Here’s what’s next for BGE.
        </p>
      </motion.div>

      {/* Roadmap Boxes */}
      <div className="relative flex flex-row flex-wrap justify-center items-center gap-8 w-full max-w-7xl z-10">
        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-black text-white rounded-2xl p-6 w-[280px] md:w-[320px] lg:w-[350px] flex flex-col items-center justify-between shadow-xl border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <h3 className="text-center text-2xl font-semibold leading-tight">{item.title}</h3>
            <div className="w-full h-12 mt-4 flex items-center justify-center bg-gray-900 rounded-b-2xl">
              <span className="text-green-500 text-xl font-bold">{item.quarter}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;