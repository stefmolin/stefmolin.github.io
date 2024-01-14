module.exports = {
  output: "export",
  trailingSlash: true,

  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/material/index.html",
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
};
