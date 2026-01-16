import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // --- Old WP hub pages -> HOME (כמו שביקשת) ---
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/",
        permanent: true,
      },

      // --- Old WP service pages -> new Next routes ---
      {
        source: "/air-duct-cleaning",
        destination: "/services/air-duct-cleaning",
        permanent: true,
      },
      {
        source: "/dryer-vent-cleaning",
        destination: "/services/dryer-vent-cleaning",
        permanent: true,
      },
      {
        source: "/commercial-duct-cleaning",
        destination: "/services/commercial-duct-cleaning",
        permanent: true,
      },
      {
        source: "/chimney-sweep-and-repair",
        destination: "/services/chimney-sweep-and-repair",
        permanent: true,
      },
      {
        source: "/attic-insulation-services",
        destination: "/services/attic-insulation-services",
        permanent: true,
      },


      // --- Short paths -> real location pages ---
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

      // --- Old location URLs -> new ones ---
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

      // --- Privacy policy (עם/בלי סלש) ---
      {
        source: "/privacy-policy",
        destination: "/privacy-policy",
        permanent: true,
      },

      // --- IMPORTANT ---
      // לא מוסיף redirect ל-/227-2 כי אמרת שזה טופס Twilio וצריך לעבוד.
      // אם הוא עדיין 404, זה אומר שאין route אמיתי שמחזיר 200 עבור /227-2.
    ];
  },
};

export default nextConfig;
