import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['honorable-sparkle-2faf0b87fd.media.strapiapp.com', 'localhost'], // Add your image host here
  },
};

export default nextConfig;
