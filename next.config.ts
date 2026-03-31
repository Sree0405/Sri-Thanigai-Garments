/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "srithanigai-garments-backend.onrender.com",
        pathname: "/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;