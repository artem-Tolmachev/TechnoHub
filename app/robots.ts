import type { MetadataRoute } from "next";

const siteUrl = "https://твой-домен.ru";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${siteUrl}/sitemap.xml`,
  };
}