"use client";

import "lite-youtube-embed";

export default function LiteYT({ videoid = "D7aZuzIDetY", title }) {
  return (
    <div className="w-full h-full">
      <lite-youtube
        videoid={videoid}
        playlabel={title ? `Play: ${title}` : undefined}
        class="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      ></lite-youtube>
    </div>
  );
}
