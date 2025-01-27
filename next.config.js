// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export",
//     assetPrefix: "/code-fix-bench/",
//     basePath: "/code-fix-bench",
//     images: {
//       unoptimized: true,
//     },
//   }
  
//   module.exports = nextConfig
  

// const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  distDir: "build",
  output: "export",
};

// module.exports = withContentlayer(nextConfig);
module.exports = nextConfig;
