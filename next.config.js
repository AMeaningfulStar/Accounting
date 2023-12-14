/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://35.212.175.253:3000/:path*",
      },
    ];
  },
}

module.exports = nextConfig
