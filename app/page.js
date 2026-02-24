"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import RoleCards from "./components/role-card";
import SubjectGrid from "./components/SubjectGrid";


export default function Home() {
  return (
    // <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-95">
    <div className="bg-slate-400">
      <Hero />
      <RoleCards />
      <main className=" text-black p-6 " >

        <footer className="text-center text-sm text-white mt-12">
          © Department of Library and Information Science
        </footer>
      </main>
    </div>

  );
}
