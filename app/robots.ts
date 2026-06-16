import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/reports/print"],
    },
    sitemap: "https://aura-guard-enterprise-os.vercel.app/sitemap.xml",
  };
}
