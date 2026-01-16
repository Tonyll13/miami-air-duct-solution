import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // short paths -> real locations
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

      // old URLs -> new URLs
      {
        source: "/locations/dania-beach-air-duct-cleaning",
        destination: "/locations/dania-beach-air-duct-solution",
        permanent: true,
      },
      {
        source: "/locations/sunny-isles-air-duct-cleaning",
        destination: "/locations/sunny-isles-air-duct-solution",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
