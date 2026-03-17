/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    domains: ['images.unsplash.com'], // ✅ allow Unsplash
  },
  reactStrictMode: true,
};

export default nextConfig;
