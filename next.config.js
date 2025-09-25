const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/rsshekhawat' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rsshekhawat/' : '',
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['react-icons', 'lottie-react'],
  },
  
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  
  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
  },
  
  // SASS options
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/(.*).(jpg|jpeg|png|gif|ico|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).(js|css)',
        headers: [
          {
            key: 'Cache-Control', 
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}