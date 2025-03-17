import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['irp.iml.mybluehost.me'], // Add your image host here
  },
};

export default nextConfig;
