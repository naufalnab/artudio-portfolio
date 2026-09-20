import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/client/"],
    },
    sitemap: "https://artudio.id/sitemap.xml",
  };
}
