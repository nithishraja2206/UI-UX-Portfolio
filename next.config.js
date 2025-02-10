/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Forces static export
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  trailingSlash: true, // Ensures correct linking in GitHub Pages
};

module.exports = nextConfig;
