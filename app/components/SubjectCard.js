// "use client";

// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// export default function SubjectCard({ subject }) {
//   const router = useRouter();

//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       onClick={() => router.push(`/students/${subject.code}`)}
//       className="cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
//     >
//       {/* Image / Gradient */}
//       <div
//         className="h-40 bg-cover bg-center"
//         style={{ backgroundImage: `url(${subject.bgImage})` }}
//       />

//       {/* Content */}
//       <div className="p-5">
//         <h2 className="text-xl font-bold text-gray-900">
//           {subject.title}
//         </h2>
//         <p className="text-sm text-gray-600 mt-1">
//           {subject.description}
//         </p>

//         <p className="mt-3 text-sm font-medium text-indigo-600">
//           {subject.books.length} Books →
//         </p>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SubjectCard({ subject }) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => router.push(`/students/${subject.code}`)}
      className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Background Image Section */}
      <div className="relative h-48 overflow-hidden">
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${subject.bgImage})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300" />

        {/* Title on Image */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold drop-shadow-md">
            {subject.title}
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 bg-white">
        <p className="text-sm text-gray-600">
          {subject.description}
        </p>

        <p className="mt-4 text-sm font-semibold text-indigo-600 group-hover:translate-x-1 transition">
          {subject.books.length} Books →
        </p>
      </div>
    </motion.div>
  );
}
