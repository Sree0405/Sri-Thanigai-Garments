/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "directus-latest-butj.onrender.com",
        pathname: "/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;