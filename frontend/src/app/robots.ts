import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/refetch/",
    },
    sitemap: "https://enderhost.net.pe/sitemap.xml",
  };
}
