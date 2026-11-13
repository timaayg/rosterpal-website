import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rosterpal.net";
  const paths = [
    "/",
    "/master-roster",
    "/week-to-week",
    "/benefits",
    "/free-vs-premium",
    "/plans",
    "/faq",
    "/support",
    "/privacy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
