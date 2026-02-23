"use client";

import { motion } from "framer-motion";

export default function BookCard({ book }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-2xl bg-white p-5 shadow-lg hover:shadow-2xl transition"
    >
      <div className="h-32 p-2 flex flex-col rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 items-center justify-center text-white font-bold text-lg">
        {book.title}

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {book.code}
      </h3>
      </div>

      <button className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-white font-medium hover:bg-indigo-700 transition">
        View Book
      </button>
    </motion.div>
  );
}