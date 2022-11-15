/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: "/:path",
        destination: "http://localhost:3002/:path",
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "gs://whiskart-5195e.appspot.com/images/",
      },
    ],
  },
  // domains: ["firebasestorage.googleapis.com"],
};

module.exports = nextConfig;
