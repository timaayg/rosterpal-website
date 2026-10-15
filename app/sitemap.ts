import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rosterpal.net";
  return ["", "/plans", "/support", "/privacy", "/terms"].map((path) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
