import { siteConfig } from "@/shared/config/site";
import type { MetadataRoute } from "next";

// const siteUrl = "https://твой-домен.ru";
// const siteUrl = "https://techno-hub-jade.vercel.app";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//     },

//     sitemap: `${siteUrl}/sitemap.xml`,
//   };
// }
// ------------
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}