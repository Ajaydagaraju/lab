"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaRunning, FaFilm, FaTrophy, FaMusic } from "react-icons/fa";

const categoryData = {
  sports: {
    title: "Sports",
    icon: <FaRunning />,
    items: [
      { name: "Badminton", desc: "Fast-paced indoor racket sport" },
      { name: "Cricket", desc: "Most loved bat & ball game in India" },
      { name: "Tennis", desc: "Global competitive racket sport" },
      { name: "Football", desc: "World’s most popular sport" },
      { name: "Hockey", desc: "National pride field sport" },
    ],
  },
  movies: {
    title: "Movies",
    icon: <FaFilm />,
    items: [
      { name: "Motivational", desc: "Inspiring & life-changing stories" },
      { name: "Science Based", desc: "Exploring science & innovation" },
      { name: "Philosophical", desc: "Deep thinking & meaning of life" },
      { name: "Sports Related", desc: "Based on real sports journeys" },
    ],
  },
  awards: {
    title: "Awards",
    icon: <FaTrophy />,
    items: [
      { name: "Oscar", desc: "Academy Awards in Cinema" },
      { name: "Grammy", desc: "Music excellence awards" },
      { name: "Nobel", desc: "Prestigious global achievement award" },
    ],
  },
  music: {
    title: "Music",
    icon: <FaMusic />,
    items: [
      { name: "Instrumental", desc: "Pure melody without lyrics" },
      { name: "Folk Song", desc: "Traditional cultural music" },
      { name: "Motivational Song", desc: "Songs that inspire action" },
    ],
  },
};

export default function CategoryPage() {
  const { category } = useParams();
  const data = categoryData[category];

  if (!data) return <div className="text-white p-10">No Data Found</div>;

  return (
     <main className="min-h-screen bg-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-indigo-400 text-3xl">{data.icon}</span>
        {data.title}
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition cursor-pointer border border-gray-700"
          >
            <div className="text-2xl mb-4 text-indigo-400">
              {data.icon}
            </div>

            <h2 className="text-xl font-semibold mb-2">
              {item.name}
            </h2>

            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>

            <div className="mt-4 text-indigo-400 text-sm font-medium">
              Explore →
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </main>
  );
}
