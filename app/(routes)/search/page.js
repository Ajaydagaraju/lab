// "use client";

// import { useSearchParams } from "next/navigation";
// import Header from "@/app/components/header";
// import subjects from "@/app/data/subject";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SearchPage() {
//   const params = useSearchParams();
//   const router = useRouter();

//   const query = params.get("q")?.toLowerCase() || "";
//   const [search, setSearch] = useState(query);

//   const results = [];

//   subjects.forEach((subject) => {
//     subject.books.forEach((book) => {
//       if (book.title.toLowerCase().includes(query)) {
//         results.push({ ...book, subject: subject.title });
//       }
//     });
//   });

//   const handleSearch = (e) => {
//     e.preventDefault();
//     router.push(`/search?q=${search}`);
//   };

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <Header />

//       {/* Search Section */}
//       <section className="max-w-5xl mx-auto px-4 pt-16">
//         <h1 className="text-3xl font-bold text-center text-gray-800">
//           Search Knowledge Library
//         </h1>

//         {/* Search Bar */}
//         <form
//           onSubmit={handleSearch}
//           className="mt-8 flex items-center max-w-3xl mx-auto bg-white rounded-full shadow-md overflow-hidden"
//         >
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search any topic..."
//             className="flex-1 px-6 py-4 outline-none text-gray-700"
//           />

//           {search && (
//             <button
//               type="button"
//               onClick={() => setSearch("")}
//               className="px-3 text-gray-400 hover:text-gray-600"
//             >
//               ✕
//             </button>
//           )}

//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium"
//           >
//             🔍 Search
//           </button>
//         </form>

//         {/* Result Count */}
//         <p className="text-center text-gray-600 mt-6">
//           Found <span className="font-semibold">{results.length}</span>{" "}
//           results for "{query}"
//         </p>

//         {/* Results */}
//         <div className="mt-10">
//           {results.length === 0 ? (
//             <div className="bg-white rounded-2xl shadow-md p-16 text-center">
//               <div className="text-6xl mb-4">🔍</div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 No results found
//               </h2>
//               <p className="text-gray-500 mt-2">
//                 Try different keywords or browse categories
//               </p>

//               <button
//                 onClick={() => router.push("/")}
//                 className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Browse Categories
//               </button>
//             </div>
//           ) : (
//             <div className="grid gap-4">
//               {results.map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition"
//                 >
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     Code: {item.code}
//                   </p>
//                   <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
//                     {item.subject}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchClient />
    </Suspense>
  );
}

function SearchLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-600">
      Loading search results…
    </div>
  );
}