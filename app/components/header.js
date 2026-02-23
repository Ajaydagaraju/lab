"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-olive-50 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" >
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
            🎓
          </div>
          <span className="text-lg font-semibold text-gray-800">
            Knowledge PathWay
          </span>
        </div>
        </Link>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-indigo-600">
            Categories
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Recent
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Popular
          </Link>
        </nav>

        {/* Right: Search + Auth */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search any topic..."
              className="bg-transparent outline-none text-sm w-44"
            />
          </div>

          <Link href="/" className="text-sm text-gray-600 hover:text-indigo-600">
            Login
          </Link>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}