import { MetadataRoute } from "next";
const SITE_URL = "https://miamiairductsolution.com"; // עדכן אם שונה
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/privacy-policy",
          "/terms-of-service",
          "/227-2",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
