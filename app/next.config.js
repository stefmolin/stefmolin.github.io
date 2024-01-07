module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/material/index.html",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
