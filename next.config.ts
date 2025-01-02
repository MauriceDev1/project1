import type { NextConfig } from "next";
import withPWA from "next-pwa";

const pwaConfig = {
  dest: "public", // Directory for the service worker and assets
  register: true, // Automatically register the service worker
  skipWaiting: true, // Activate the new service worker immediately
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withPWA({
  ...nextConfig,
  ...pwaConfig,
});
