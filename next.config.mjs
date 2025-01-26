/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    minimumCacheTTL: 300,
  },
};

export default nextConfig;
