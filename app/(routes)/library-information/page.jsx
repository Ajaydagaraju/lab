"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FaBookOpen, 
  FaNewspaper, 
  FaRegNewspaper, 
  FaSearch,
  FaGlobe 
} from "react-icons/fa";


const cards = [
  {
    title: "Books",
    desc: "Access physical & digital books collection",
    icon: <FaBookOpen />,
    link: "https://ndl.iitkgp.ac.in/",
  },
  {
    title: "E-Journals",
    desc: "Research papers & academic journals",
    icon: <FaSearch />,   // represents research/search
    link: "https://scholar.google.com/",
  },
  {
    title: "Newspaper",
    desc: "Daily national & international newspapers",
    icon: <FaNewspaper />,
    link: "https://www.google.com/",
  },
  {
    title: "Magazines",
    desc: "Weekly & monthly magazine collection",
    icon: <FaRegNewspaper />,
    link: "https://worldcat.org/",
  },
];


export default function LibraryPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-400 text-white px-8 py-16">
      <h1 className="text-4xl font-bold mb-12">
        Library & Information Sciences
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            // onClick={() =>
            //   router.push(`/library-information/view?url=${encodeURIComponent(card.link)}`)
            // }
  onClick={() => window.open(card.link, "_blank")}

            className="cursor-pointer bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/40 transition"
          >
            <div className="text-3xl mb-4">{card.icon}</div>
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm text-gray-200 mt-2">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
