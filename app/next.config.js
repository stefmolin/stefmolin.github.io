module.exports = {
  output: 'export',
  trailingSlash: true,
  transpilePackages: ['react-tweet'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,
  },
};
