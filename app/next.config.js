module.exports = {
  output: "export",
  trailingSlash: true,
  transpilePackages: ["react-tweet"],

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
