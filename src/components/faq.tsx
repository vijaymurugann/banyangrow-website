import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How can I buy BGE tokens?",
    answer: "You can purchase BGE tokens during the pre-sale using USDT. Connect your wallet and follow the on-screen instructions.",
  },
  {
    question: "What are the staking benefits?",
    answer: "Staking BGE tokens allows you to earn rewards and participate in governance decisions.",
  },
  {
    question: "How does the referral system work?",
    answer: "Invite friends using your referral link and earn bonuses for each successful transaction.",
  },
  {
    question: "What is the burn mechanism?",
    answer: "A portion of every transaction fee is burned to reduce supply, increasing token scarcity over time.",
  },
  {
    question: "How does the dynamic pricing work?",
    answer: "Token prices adjust based on demand and supply, ensuring a fair and transparent valuation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="bg-black text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-start gap-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Left Section - Title */}
      <motion.div
        className="flex-1"
        initial={{ x: -50, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
      </motion.div>

      {/* Right Section - FAQ List */}
      <div className="flex-1 space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 p-4 rounded-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={isHovered ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && <p className="mt-3 text-gray-300">{faq.answer}</p>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}