"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SubjectCard({ subject }) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={() => router.push(`/students/${subject.code}`)}
      className="cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
    >
      {/* Image / Gradient */}
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${subject.bgImage})` }}
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">
          {subject.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {subject.description}
        </p>

        <p className="mt-3 text-sm font-medium text-indigo-600">
          {subject.books.length} Books →
        </p>
      </div>
    </motion.div>
  );
}