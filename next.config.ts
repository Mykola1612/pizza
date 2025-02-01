import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  basePath: "/pizza",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  compilerOptions: {
    strict: false,
    noImplicitAny: false,
  },
};

export default nextConfig;
