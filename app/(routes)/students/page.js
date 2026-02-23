"use client"

import SubjectGrid from "@/app/components/SubjectGrid";

export default function StudentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Subjects
      </h1>

      <SubjectGrid />
    </main>
  );
}