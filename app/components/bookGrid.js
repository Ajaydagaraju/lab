// import BookCard from "./BookCard";

// export default function BookGrid({ books }) {
//   return (
//     <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//       {books.map((book) => (
//         <BookCard key={book.code} book={book} />
//       ))}
//     </div>
//   );
// }

// "use client";
// import { useRouter } from "next/navigation";

// export default function BookGrid({ books }) {
//   const router = useRouter();

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {books.map((book, index) => (
//         <div
//           key={index}
//           onClick={() =>
//             book.route
//               ? router.push(book.route)
//               : router.push(`/students/${book.code}`)
//           }
//           className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
//         >
//           <h2 className="font-semibold">{book.title}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }



"use client";

import { useRouter } from "next/navigation";
import BookCard from "./BookCard";

export default function BookGrid({ books }) {
  const router = useRouter();

  const handleClick = (book) => {
    if (book.route) {
      router.push(book.route);
    } else {
      router.push(`/students/${book.code}`);
    }
  };

  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div key={book.code} onClick={() => handleClick(book)}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}



