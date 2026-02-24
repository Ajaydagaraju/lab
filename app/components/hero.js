"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-32 text-center text-white">
        <div className="gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-6 max-w-70 m-auto">
          Central University of haryana
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-6">
          <span className="text-yellow-300">🎓</span>
          <span className="text-sm font-medium">Knowledge bridge</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Share Knowledge{" "}
          <span className="text-yellow-300">Without Boundaries</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
          Explore 10 disciplines • 50+ subjects • 200+ topics with AI-powered
          learning assistance
        </p>

        {/* Search */}
        <form
          action="/search"
          className="mt-10 max-w-3xl mx-auto flex items-center bg-white rounded-full shadow-xl overflow-hidden"
        >
          <input
            type="text"
            name="q"
            placeholder="Search anything... (e.g. 'Quantum Physics', 'Plato', 'JavaScript')"
            className="flex-1 px-6 py-4 text-gray-700 outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 font-medium"
          >
            🔍 Search
          </button>
        </form>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Categories", value: "10" },
            { label: "Subjects", value: "40+" },
            { label: "Topics", value: "200+" },
            { label: "Learners", value: "2K+" },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-xl py-6">
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm text-white/80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 90"
          className="w-full h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,90 480,90 720,70 960,50 1200,30 1440,40 L1440,0 L0,0 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}
