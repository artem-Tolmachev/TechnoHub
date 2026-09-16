import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { siteConfig } from "@/shared/config/site";

// const siteUrl = "https://твой-домен.ru";
// const siteUrl = "https://techno-hub-jade.vercel.app";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: siteUrl,
//       lastModified: new Date(),
//       changeFrequency: "daily",
//       priority: 1,
//     },

//     ...articles.map((article) => ({
//       url: `${siteUrl}/articles/${article.slug}`,
//       lastModified: new Date(article.updatedAt),
//       changeFrequency: "weekly" as const,
//       priority: 0.8,
//     })),
//   ];
// }
// -----------------



export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...articles.map((article) => ({
      url: `${siteConfig.url}/articles/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}