import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Remove output: 'export' to allow API routes and Server Actions
  
  // Optimize for Cloudflare Pages - force rebuild
  experimental: {
    // Reduce bundle size
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Webpack optimization for file size
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Disable caching in production to reduce file sizes
      config.cache = false;
    }
    return config;
  },
  
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
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
