"use client";

import { useSearchParams } from "next/navigation";

export default function IframeContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  if (!url) return <div className="p-10">No URL Provided</div>;

  return (
    <div className="min-h-screen bg-black">
      <iframe
        src={url}
        className="w-full h-screen"
        title="External Resource"
      />
    </div>
  );
}
