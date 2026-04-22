import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asimov.academy",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
