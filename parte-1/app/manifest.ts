import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Positivus — Digital Marketing Agency",
    short_name: "Positivus",
    description:
      "SEO, PPC, social media marketing, and content creation for businesses that want to grow online.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#b9ff66",
  };
}
