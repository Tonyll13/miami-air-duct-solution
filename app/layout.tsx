import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "./components/SeoJsonLd";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://miamiairductsolution.com"; // עדכן אם שונה

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
    siteName: "Miami Air Duct Solution",
    title: "Miami Air Duct Solution",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <LocalBusinessJsonLd url={SITE_URL} />
      </body>
    </html>
  );
}
