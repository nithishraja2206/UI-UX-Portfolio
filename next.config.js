/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Change from "export" to "standalone"
  trailingSlash: true,
  experimental: {
    appDir: true, // Keep if using the App Router
  },
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "cdn.hashnode.com",
      "github.com",
    ],
  },
};

module.exports = nextConfig;
