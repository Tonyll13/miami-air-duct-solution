import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { LocalBusinessJsonLd } from "./components/SeoJsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://miamiairductsolution.com";
const BRAND = "Miami Air Duct Solution";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Miami Air Duct Solution | Air Duct & Dryer Vent Cleaning",
    template: "%s | Miami Air Duct Solution",
  },
  description:
    "Miami Air Duct Solution provides air duct cleaning, dryer vent cleaning, chimney services, attic insulation, and commercial duct cleaning across Miami and nearby areas.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND,
    title: BRAND,
    description:
      "Air duct & ventilation services focused on safety, air quality, and performance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ WebSite (פעם אחת בלבד) */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: BRAND,
          }}
        />

        {/* ✅ Organization (פעם אחת בלבד) */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#org`,
            name: BRAND,
            url: SITE_URL,
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />

        {/* ✅ LocalBusiness (עם URL נכון) */}
        <LocalBusinessJsonLd url={SITE_URL} />
      </body>
    </html>
  );
}
