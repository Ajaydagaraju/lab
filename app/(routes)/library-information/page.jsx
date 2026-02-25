// "use client";

// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { 
//   FaBookOpen, 
//   FaNewspaper, 
//   FaRegNewspaper, 
//   FaSearch,
//   FaGlobe 
// } from "react-icons/fa";


// const cards = [
//   {
//     title: "Books",
//     desc: "Access physical & digital books collection",
//     icon: <FaBookOpen />,
//     link: "https://ndl.iitkgp.ac.in/",
//   },
//   {
//     title: "E-Journals",
//     desc: "Research papers & academic journals",
//     icon: <FaSearch />,   // represents research/search
//     link: "https://scholar.google.com/",
//   },
//   {
//     title: "Newspaper",
//     desc: "Daily national & international newspapers",
//     icon: <FaNewspaper />,
//     link: "https://www.google.com/",
//   },
//   {
//     title: "Magazines",
//     desc: "Weekly & monthly magazine collection",
//     icon: <FaRegNewspaper />,
//     link: "https://worldcat.org/",
//   },
// ];


// export default function LibraryPage() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-slate-400 text-white px-8 py-16">
//       <h1 className="text-4xl font-bold mb-12">
//         Library & Information Sciences
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             // onClick={() =>
//             //   router.push(`/library-information/view?url=${encodeURIComponent(card.link)}`)
//             // }
//   onClick={() => window.open(card.link, "_blank")}

//             className="cursor-pointer bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/40 transition"
//           >
//             <div className="text-3xl mb-4">{card.icon}</div>
//             <h2 className="text-lg font-semibold">{card.title}</h2>
//             <p className="text-sm text-gray-200 mt-2">
//               {card.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBookOpen,
  FaNewspaper,
  FaRegNewspaper,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { TbToiletPaper } from "react-icons/tb";

const cards = [
  {
    title: "E-Books",
    desc: "Access physical & digital books collection",
    icon: <FaBookOpen />,
    links: [
      {
        label: "Transitional Justice and the ‘Disappeared’ of Northern Ireland",
        url: "https://www.taylorfrancis.com/books/9781351239387",
      },
    ],
  },
  {
    title: "E-Journals",
    desc: "Research papers & academic journals",
    icon: <FaSearch />,
    links: [
      {
        label: "Google Scholar",
        url: "https://share.google/USTZjC8TMmHVgwhoe",
      },
      {
        label: "Information science",
        url: "https://www.tandfonline.com/subjects/information-science"
      },
      {
        label: "Digital library",
        url: "https://www.emerald.com/journals/search-results?page=1&q=Library%20&fl_SiteID=3&allJournals=1"
      }
    ],
  },
  {
    title: "E-Newspaper",
    desc: "Daily national & international newspapers",
    icon: <FaNewspaper />,
    links: [
      // {
      //   label: "Google News",
      //   url: "https://news.google.com/",
      // },
    ],
  },
  {
    title: "E-Magazines",
    desc: "Weekly & monthly magazine collection",
    icon: <FaRegNewspaper />,
    links: [
      // {
      //   label: "WorldCat",
      //   url: "https://worldcat.org/",
      // },
    ],
  },
  {
    title: "E-thesis",
    desc: "Stored in an institutional online repository",
    icon: <TbToiletPaper />,
    links: [
      {
        label: "Study On Potential For Insurance In Rural And Semi Urban Areas Of Mahabubnagar District",
        url: "https://krishikosh.egranth.ac.in/bitstreams/c6c93760-49a0-4e18-b350-df617cef245a/download",
      },
    ],
  },
];

export default function LibraryPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h1 className="text-4xl font-bold mb-12">
          Library & Information Sciences
        </h1>

        <div className="gap-8">
          {cards.map((card, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-lg overflow-hidden mb-8"
              >
                {/* Card Header */}
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full text-left p-6 flex justify-between items-start hover:bg-white/10 transition"
                >
                  <div>
                    <div className="text-3xl mb-3">{card.icon}</div>
                    <h2 className="text-lg font-semibold">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-200 mt-1">
                      {card.desc}
                    </p>
                  </div>

                  <div className="text-xl mt-1">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-3 mt-4">
                        {card.links.map((link, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              window.open(link.url, "_blank")
                            }
                            className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition duration-75 cursor-pointer"
                          >
                            <span className="text-sm">
                              {link.label}
                            </span>
                            <FaExternalLinkAlt className="text-xs opacity-80" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}