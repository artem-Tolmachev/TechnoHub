"use client";

import { useEffect } from "react";
import Script from "next/script";

type InstagramEmbedProps = {
  url: string;
};

export function InstagramEmbed({
  url,
}: InstagramEmbedProps) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="my-8 flex">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Посмотреть публикацию в Instagram
        </a>
      </blockquote>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.instgrm?.Embeds.process();
        }}
      />
    </div>
  );
}