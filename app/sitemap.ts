import type { MetadataRoute } from "next";

const baseUrl = "https://aura-guard-enterprise-os.vercel.app";

const publicRoutes = [
  ["/", 1],
  ["/pricing", 0.95],
  ["/features", 0.9],
  ["/trust", 0.8],
  ["/audit-intake", 0.85],
  ["/contact-sales", 0.85],
  ["/demo-request", 0.8],
  ["/login", 0.4],
  ["/signup", 0.4],
  ["/terms", 0.3],
  ["/privacy", 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map(([path, priority]) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: Number(priority),
  }));
}
