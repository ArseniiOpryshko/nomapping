/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.vimeocdn.com',
            pathname: '**',
          },
        ],
    },
};

export default nextConfig;
