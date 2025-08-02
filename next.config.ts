import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Enable static export for better Cloudflare Pages compatibility
  output: 'export',
  trailingSlash: true,
  
  // Optimize for Cloudflare Pages - force rebuild
  experimental: {
    // Reduce bundle size
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
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
    unoptimized: true, // Required for static export
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
