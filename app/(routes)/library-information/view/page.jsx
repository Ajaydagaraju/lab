// "use client";

// import { useSearchParams } from "next/navigation";

// export default function IframePage() {
//   const searchParams = useSearchParams();
//   const url = searchParams.get("url");

//   if (!url) return <div>No URL Provided</div>;

//   return (
//     <div className="min-h-screen bg-black">
//       <iframe
//         src={url}
//         className="w-full h-screen"
//         title="External Resource"
//       />
//     </div>
//   );
// }


"use client";

import { Suspense } from "react";
import IframeContent from "./IframeContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <IframeContent />
    </Suspense>
  );
}
