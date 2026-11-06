/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/graphic-design',
        destination: '/#graphic-design',
        permanent: false,
      },
      {
        source: '/ui-ux-design',
        destination: '/#ui-ux-design',
        permanent: false,
      },
      {
        source: '/digital-products',
        destination: '/#digital-products',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
