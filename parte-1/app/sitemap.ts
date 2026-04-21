import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/src/features/landing/seo/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
