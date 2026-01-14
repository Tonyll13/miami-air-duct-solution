// app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE_URL = "https://miamiairductsolution.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/contact",
    "/blog",
    "/faqs",

    // Services
    "/services/air-duct-cleaning",
    "/services/dryer-vent-cleaning",
    "/services/chimney-sweep-and-repair",
    "/services/attic-insulation-services",
    "/services/commercial-duct-cleaning",

    // Locations
    "/locations/sunny-isles-air-duct-cleaning",
    "/locations/dania-beach-air-duct-cleaning",
  ];

  const blogRoutes = [
    "/blog/how-often-should-air-ducts-be-cleaned-in-miami-homes",
    "/blog/air-duct-cleaning-cost-in-miami-what-affects-the-price",
    "/blog/signs-your-air-ducts-are-making-your-home-dusty",
    "/blog/how-often-should-dryer-vents-be-cleaned-in-florida",
    "/blog/warning-signs-of-a-clogged-dryer-vent-before-it-becomes-a-fire-risk",
    "/blog/do-you-need-chimney-cleaning-in-miami-if-you-rarely-use-it",
    "/blog/chimney-rain-caps-in-florida-why-they-matter",
    "/blog/does-attic-insulation-lower-energy-bills-in-miami",
    "/blog/signs-your-home-is-losing-cool-air-through-the-attic",
    "/blog/how-often-should-commercial-air-ducts-be-cleaned",
    "/blog/post-construction-duct-cleaning-for-commercial-properties",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/blog" ? 0.9 : 0.7,
    })),

    ...blogRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
