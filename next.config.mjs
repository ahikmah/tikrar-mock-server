/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  env: {
    DEV_API: `http://localhost:7272`,
    PRODUCTION_API: 'https://tikrar-mock-server.vercel.app/',
  },
};

export default nextConfig;
