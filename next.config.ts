import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'portal.minesandsteel.gov.ng',
      },
      {
        protocol: 'https',
        hostname: 'nepc.gov.ng',
      },
      {
        protocol: 'https',
        hostname: 'shipperscouncil.gov.ng',
      },
      {
        protocol: 'https',
        hostname: 'www.rmrdc.gov.ng',
      },
      {
        protocol: 'https',
        hostname: 'neiti.gov.ng',
      },
      {
        protocol: 'https',
        hostname: 'accinigeria.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cbn.gov.ng',
      },
      {
        protocol: 'https',
        hostname: 'www.nipc.gov.ng',
      },
      {
        protocol: 'https',
        hostname: 'environmentamerica.org',
      },
    ],
  },
};

export default nextConfig;
