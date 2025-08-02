import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Remove output: 'export' to allow API routes and Server Actions
  
  // Optimize for Cloudflare Pages - force rebuild
  experimental: {
    // Reduce bundle size
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Essential for Cloudflare Pages
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  
  // Webpack optimization for file size
  webpack: (config, { isServer }) => {
    // Disable caching in production to reduce file sizes
    config.cache = false;
    
    // Additional optimization to prevent large files
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        maxSize: 244 * 1024, // 244KB max chunk size
      },
    };
    
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
