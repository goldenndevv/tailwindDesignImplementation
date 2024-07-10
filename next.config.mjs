/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "buzzhive.ca", "unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
