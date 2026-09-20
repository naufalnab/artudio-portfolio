import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/client/"],
    },
    sitemap: "https://artudio-portfolio.vercel.app/sitemap.xml",
  };
}
