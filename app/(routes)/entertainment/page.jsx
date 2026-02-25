"use client";

import { useRouter } from "next/navigation";

const categories = [
  { title: "Sports", path: "sports", icon: "🏏" },
  { title: "Movies", path: "movies", icon: "🎥" },
  { title: "Awards", path: "awards", icon: "🏆" },
  { title: "Music", path: "music", icon: "🎵" },
];

export default function EntertainmentPage() {
  const router = useRouter();

  return (
     <main className="min-h-screen bg-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-black mb-10">Entertainment</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            onClick={() => router.push(`/entertainment/${cat.path}`)}
            className="cursor-pointer bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <div className="text-4xl mb-4">{cat.icon}</div>
            <h2 className="text-xl font-bold">{cat.title}</h2>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
}
