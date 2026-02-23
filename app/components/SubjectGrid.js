"use client"

import subjects from "../data/subject";
import SubjectCard from "./SubjectCard";

export default function SubjectGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14">

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <SubjectCard key={subject.code} subject={subject} />
        ))}
      </div>
    </div>
  );
}