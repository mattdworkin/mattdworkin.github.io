/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/matthewtdworkin-site' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
