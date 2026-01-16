// app/blog/how-often-should-commercial-air-ducts-be-cleaned/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import { webpageSchema, blogPostingSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "How Often Should Commercial Air Ducts Be Cleaned?",
  description:
    "Learn how often commercial air ducts should be cleaned in Miami offices, retail spaces, and multi-unit properties to maintain airflow, comfort, and HVAC efficiency.",
  alternates: {
    canonical: "/blog/how-often-should-commercial-air-ducts-be-cleaned",
  },
};

export default function Page() {
  return (
    <><JsonLd
  data={webpageSchema({
    urlPath: "/blog/how-often-should-commercial-air-ducts-be-cleaned",
    name: "How Often Should Commercial Air Ducts Be Cleaned?",
    description: "Commercial air duct cleaning frequency recommendations and factors that influence scheduling.",
  })}
/>

<JsonLd
  data={blogPostingSchema({
    urlPath: "/blog/how-often-should-commercial-air-ducts-be-cleaned",
    headline: "How Often Should Commercial Air Ducts Be Cleaned?",
    description: "Commercial air duct cleaning frequency recommendations and factors that influence scheduling.",
    datePublished: "2026-01-15",
  })}
/>

<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Commercial Air Duct Cleaning Frequency", path: "/blog/how-often-should-commercial-air-ducts-be-cleaned" },
  ])}
/>

      <div className="container">
        <div className="pageHead">
          <div className="kicker">Commercial Duct Cleaning • Miami • Guide</div>
          <h1>How Often Should Commercial Air Ducts Be Cleaned?</h1>
          <p>
            Commercial HVAC systems in Miami operate under heavier demand than residential systems.
            Knowing when to clean air ducts helps businesses maintain airflow, indoor comfort,
            and long-term system performance.
          </p>

          <div style={{ marginTop: 10 }}>
            <Link href="/blog" className="mini">← Back to Blog</Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Why commercial duct cleaning matters</h2>
          <p className="svcP">
            Offices, retail spaces, medical facilities, and multi-unit buildings experience
            higher foot traffic, longer HVAC runtime, and increased airborne particles.
            Over time, dust and debris accumulate inside ductwork and restrict airflow.
          </p>
          <p className="svcP">
            Dirty ducts can affect employee comfort, customer experience, and system efficiency—
            especially in Miami’s humid climate.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>General cleaning frequency guidelines</h2>
          <p className="svcP">
            While every property is different, most commercial spaces benefit from
            routine inspections and periodic cleanings.
          </p>
          <ul className="svcList">
            <li>Offices & retail spaces: inspection every 12–24 months</li>
            <li>Medical or high-traffic facilities: inspection every 6–12 months</li>
            <li>Multi-unit buildings: based on occupancy and usage patterns</li>
            <li>After renovations or tenant turnover</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Signs cleaning may be needed sooner</h2>
          <p className="svcP">
            Some commercial properties require cleaning earlier than expected due
            to operational demands or environmental factors.
          </p>
          <ul className="svcList">
            <li>Uneven airflow between zones or suites</li>
            <li>Dust buildup around supply vents and returns</li>
            <li>Persistent odors in common areas</li>
            <li>HVAC system running longer than usual</li>
            <li>Employee or tenant air quality complaints</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Inspection-first approach for businesses</h2>
          <p className="svcP">
            Rather than guessing, a professional inspection allows business owners
            and property managers to understand duct condition before committing
            to full cleaning.
          </p>
          <p className="svcP">
            This approach helps control costs, minimize disruption, and ensure
            cleaning is performed only when necessary.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="svcSection" style={{ paddingTop: 18 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Helpful links</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li><Link href="/services/commercial-duct-cleaning">Commercial Duct Cleaning in Miami</Link></li>
              <li><Link href="/blog/post-construction-duct-cleaning-for-commercial-properties">Post-Construction Duct Cleaning</Link></li>
              <li><Link href="/services/air-duct-cleaning">Residential Air Duct Cleaning</Link></li>
              <li><Link href="/faqs">FAQs (pricing & scheduling)</Link></li>
              <li><Link href="/contact">Contact / Request a Quote</Link></li>
            </ul>
          </div>
        </section>
      </div>

      {/* REVIEWS */}
      <section className="svcSection">
        <div className="container">
          <h2 className="svcH2">Trusted by businesses across South Florida</h2>
          <div className="svcReviewsWrap">
            <GoogleReviews />
            <ThumbtackCarousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        heading="Need a commercial duct inspection?"
        text="Call (786) 275-7826 or message us to schedule commercial duct cleaning in Miami."
      />
    </>
  );
}
