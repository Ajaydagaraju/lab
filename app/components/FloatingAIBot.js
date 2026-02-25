"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingAIBot() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full"
      onClick={() => alert("AI Assistant coming soon 🚀")}
    >
      <div className="relative w-12 h-12 sm:w-20 sm:h-20 rounded-full shadow-2xl bg-white p-2">
        <Image
          src="/images/bot.jpg"
          alt="AI Assistant"
          fill
          className="object-contain rounded-full"
          priority
        />
      </div>
    </motion.div>
  );
}