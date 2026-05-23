/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ayurveda',
        destination: '/ayurveda-clinic-jvc/',
        permanent: true,
      },
      {
        source: '/ayurveda-dubai',
        destination: '/ayurveda-clinic-jvc/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
