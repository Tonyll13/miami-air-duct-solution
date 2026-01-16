// app/blog/air-duct-cleaning-cost-in-miami-what-affects-the-price/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import { webpageSchema, blogPostingSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";
export const metadata: Metadata = {
  title: "Air Duct Cleaning Cost in Miami: What Affects the Price?",
  description:
    "Learn what affects air duct cleaning cost in Miami, including home layout, number of vents, access, and system condition.",
  alternates: {
    canonical: "/blog/air-duct-cleaning-cost-in-miami-what-affects-the-price",
  },
};

export default function Page() {
  return (
    <>
    <JsonLd
  data={webpageSchema({
    urlPath: "/blog/air-duct-cleaning-cost-in-miami-what-affects-the-price",
    name: "Air Duct Cleaning Cost in Miami: What Affects the Price?",
    description: "Pricing factors for air duct cleaning in Miami, what impacts cost, and what to ask before booking.",
  })}
/>

<JsonLd
  data={blogPostingSchema({
    urlPath: "/blog/air-duct-cleaning-cost-in-miami-what-affects-the-price",
    headline: "Air Duct Cleaning Cost in Miami: What Affects the Price?",
    description: "Pricing factors for air duct cleaning in Miami, what impacts cost, and what to ask before booking.",
    datePublished: "2026-01-15",
  })}
/>

<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Air Duct Cleaning Cost in Miami", path: "/blog/air-duct-cleaning-cost-in-miami-what-affects-the-price" },
  ])}
/>

      <div className="container">
        <div className="pageHead">
          <div className="kicker">Air Duct Cleaning • Miami • Cost Guide</div>
          <h1>Air Duct Cleaning Cost in Miami: What Affects the Price?</h1>
          <p>
            Air duct cleaning prices in Miami can vary significantly based on your home’s layout,
            system condition, and accessibility. Here’s a clear breakdown of what really affects the cost
            — and what homeowners should look out for.
          </p>

          <div style={{ marginTop: 10 }}>
            <Link href="/blog" className="mini">← Back to Blog</Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Key factors that impact duct cleaning cost</h2>
          <p className="svcP">
            There is no one-size-fits-all price for air duct cleaning. In Miami homes, pricing is usually
            based on the scope of work rather than a flat number.
          </p>

          <ul className="svcList">
            <li>Number of supply vents and return vents</li>
            <li>Single-family home vs condo or apartment</li>
            <li>Accessibility of the HVAC system and ductwork</li>
            <li>Visible dust, debris, or construction buildup</li>
            <li>Length and configuration of the duct runs</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Why Miami homes can cost more or less</h2>
          <p className="svcP">
            In South Florida, HVAC systems often run year-round. Homes near the coast may also experience
            higher humidity, which can contribute to heavier dust accumulation over time.
          </p>
          <p className="svcP">
            Condos and multi-unit buildings may have limited access points, while single-family homes
            typically allow easier access — which can affect labor time and pricing.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Be careful with “too cheap” duct cleaning offers</h2>
          <p className="svcP">
            Extremely low advertised prices often cover only a small portion of the system or exclude
            returns, main trunks, or proper inspection. In many cases, upsells appear once the technician arrives.
          </p>
          <p className="svcP">
            A professional inspection-first approach helps confirm what actually needs cleaning
            before any work begins.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="svcSection" style={{ paddingTop: 18 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Helpful links</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>
                <Link href="/services/air-duct-cleaning">
                  Air Duct Cleaning in Miami (service page)
                </Link>
              </li>
              <li>
                <Link href="/services/dryer-vent-cleaning">
                  Dryer Vent Cleaning (fire-risk prevention)
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  FAQs (pricing, scope, scheduling)
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact / Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/locations/dania-beach-air-duct-solution">
                  Dania Beach Air Duct Solution
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* REVIEWS */}
      <section className="svcSection">
        <div className="container">
          <h2 className="svcH2">From our clients</h2>
          <div className="svcReviewsWrap">
            <GoogleReviews />
            <ThumbtackCarousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        heading="Want an accurate price for your home?"
        text="Call (786) 275-7826 or message us with your address and home type. We’ll confirm the right scope."
      />
    </>
  );
}
