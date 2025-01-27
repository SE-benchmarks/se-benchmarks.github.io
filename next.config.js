/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: "/code-fix-bench/",
    basePath: "/code-fix-bench",
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig
  