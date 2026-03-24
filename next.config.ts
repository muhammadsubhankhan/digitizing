import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bespokepatches.co.uk',
        pathname: '/frontend/images/**',
      },
    ],
    
  },
};

export default nextConfig;
