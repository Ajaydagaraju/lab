"use client";

import { useRouter } from "next/navigation";

const roles = [
  {
    title: "Students",
    subtitle: "Learn & Grow",
    icon: "🎓",
    path: "/students",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    title: "Faculty",
    subtitle: "Teach & Inspire",
    icon: "👩‍🏫",
    path: "#",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Researchers",
    subtitle: "Discover & Publish",
    icon: "🔬",
    path: "#",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    title: "Administration",
    subtitle: "Manage & Decide",
    icon: "🏛️",
    path: "#",
    gradient: "from-slate-600 via-gray-600 to-zinc-600",
  },
  {
    title: "Industry",
    subtitle: "Collaborate & Innovate",
    icon: "🏭",
    path: "#",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
  },
  {
    title: "Community / Society",
    subtitle: "Access & Benefit",
    icon: "🌍",
    path: "#",
    gradient: "from-rose-500 via-red-500 to-orange-500",
  },
];

export default function RoleCards() {
  const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Who Are You?
        </h2>
        <p className="mt-3 text-white font-bold">
          Select your role to connect with knowledge
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <button
            key={index}
            onClick={() => router.push(role.path)}
            className="group relative aspect-square rounded-2xl p-6 text-left overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-90 group-hover:scale-105 transition-transform duration-300`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between text-white">
              <div className="text-4xl">{role.icon}</div>

              <div>
                <h3 className="text-2xl font-bold">{role.title}</h3>
                <p className="mt-2 text-white/90">{role.subtitle}</p>
              </div>

              <span className="inline-flex items-center text-sm font-medium mt-4">
                Explore →
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      {/* <div className="mt-16 text-center text-sm text-gray-500">
        © Department of Library and Information Science
      </div> */}
    </section>
  );
}