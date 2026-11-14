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
    "/guides",
    "/guides/organise-rotating-work-roster",
    "/guides/import-pdf-work-roster-calendar",
    "/guides/plan-annual-leave-around-shifts",
    "/guides/manage-changing-weekly-work-rosters",
    "/for/nurses",
    "/for/transport-workers",
    "/for/mining-workers",
    "/for/hospitality-workers",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
