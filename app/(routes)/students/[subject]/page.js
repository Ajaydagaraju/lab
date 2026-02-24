"use client"
import BookGrid from "@/app/components/bookGrid";
import subjects from "@/app/data/subject";
import { useParams } from "next/navigation";

export default function SubjectPage( ) {
    const params = useParams(); 
  const subject = subjects.find(
    (s) => String(s.code) === params.subject
  );

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Subject not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white">
          {subject.title}
        </h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          {subject.description}
        </p>

        {/* Books */}
        <div className="mt-10">
          <BookGrid books={subject.books} />
        </div>
      </div>
    </main>
  );
}