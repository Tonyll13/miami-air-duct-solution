import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() 
  {
    return [
      {
        source: "/dania-beach-air-duct-solution",
        destination: "/locations/dania-beach-air-duct-solution",
        permanent: true,
      },
      {
        source: "/sunny-isles-air-duct-solution",
        destination: "/locations/sunny-isles-air-duct-solution",
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
