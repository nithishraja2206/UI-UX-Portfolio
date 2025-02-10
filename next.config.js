/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/UI-UX-Portfolio", // Set basePath to match repo name
  assetPrefix: "/UI-UX-Portfolio", // Ensures assets load correctly
  trailingSlash: true, // Required for GitHub Pages routing
  images: { unoptimized: true }, // GitHub Pages doesn't support Next.js Image Optimization
};

module.exports = nextConfig;
