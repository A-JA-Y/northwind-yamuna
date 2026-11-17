"use client";

import dynamic from "next/dynamic";

// lite-youtube-embed registers a custom element, so it can only load in the browser.
const LiteYT = dynamic(() => import("@/components/LiteYT"), { ssr: false });

export default function YouTubeLite({ videoid, title }) {
  return (
    <div className="aspect-video w-full bg-gray-100">
      <LiteYT videoid={videoid} title={title} />
    </div>
  );
}
