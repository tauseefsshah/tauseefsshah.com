import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    minimumCacheTTL: 300,
  },
};

export default nextConfig; 