import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict type checking and linting during builds
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: [], // Add allowed image domains here
    unoptimized: process.env.NODE_ENV === 'development', // Only unoptimize in development
    formats: ['image/webp', 'image/avif'], // Modern image formats
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-icons', 
      'lucide-react',
      '@radix-ui/react-select',
      '@radix-ui/react-dialog',
      'sonner'
    ],
  },
  // Compression and performance optimizations
  compress: true,
  poweredByHeader: false,
  // Enable static optimization
  output: 'standalone', // For better deployment
  // Webpack configuration to ensure @ alias works in all environments
  webpack: (config) => {
    config.resolve.alias = { 
      ...config.resolve.alias, 
      "@": path.resolve(process.cwd()) 
    };
    return config;
  },
}

export default nextConfig
