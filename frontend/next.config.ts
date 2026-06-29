import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true, // Disabled due to Turbopack instability
  turbopack: {}, // Empty config to silence Turbopack warning
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "/api/auth/admin-proxy/:path*",
      },
      {
        source: "/user/:path*",
        destination: "/api/auth/user-proxy/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './',
    };
    return config;
  },
};

export default nextConfig;
