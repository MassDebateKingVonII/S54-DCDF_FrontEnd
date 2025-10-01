/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`, // dynamically points to dev or prod
      },
    ];
  },
};

export default nextConfig;
