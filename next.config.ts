import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '**', // 모든 호스트
      },
    ],
  },
};

export default nextConfig;
