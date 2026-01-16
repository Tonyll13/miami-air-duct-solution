// app/blog/post-construction-duct-cleaning-for-commercial-properties/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import { webpageSchema, blogPostingSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Post-Construction Duct Cleaning for Commercial Properties",
  description:
    "Why post-construction duct cleaning is critical for commercial properties in Miami after renovations, build-outs, or tenant improvements.",
  alternates: {
    canonical: "/blog/post-construction-duct-cleaning-for-commercial-properties",
  },
};

export default function Page() {
  return (
    <><JsonLd
  data={webpageSchema({
    urlPath: "/blog/post-construction-duct-cleaning-for-commercial-properties",
    name: "Post-Construction Duct Cleaning for Commercial Properties",
    description: "Why duct cleaning after construction matters for commercial properties and what to expect.",
  })}
/>

<JsonLd
  data={blogPostingSchema({
    urlPath: "/blog/post-construction-duct-cleaning-for-commercial-properties",
    headline: "Post-Construction Duct Cleaning for Commercial Properties",
    description: "Why duct cleaning after construction matters for commercial properties and what to expect.",
    datePublished: "2026-01-15",
  })}
/>

<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Post-Construction Duct Cleaning", path: "/blog/post-construction-duct-cleaning-for-commercial-properties" },
  ])}
/>

      <div className="container">
        <div className="pageHead">
          <div className="kicker">Commercial Duct Cleaning • Miami • Safety</div>
          <h1>Post-Construction Duct Cleaning for Commercial Properties</h1>
          <p>
            After construction or renovations, dust and debris often remain inside
            commercial duct systems. Post-construction duct cleaning helps protect
            airflow, equipment, and indoor air quality before occupancy.
          </p>

          <div style={{ marginTop: 10 }}>
            <Link href="/blog" className="mini">← Back to Blog</Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>What construction leaves behind</h2>
          <p className="svcP">
            Even well-managed construction projects generate fine dust, drywall particles,
            sawdust, and debris. These materials often settle inside open ductwork
            during renovations or build-outs.
          </p>
          <p className="svcP">
            Once HVAC systems are turned on, this debris circulates throughout the building.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Why cleaning matters before occupancy</h2>
          <p className="svcP">
            Running HVAC systems with construction debris inside can lead to airflow
            restrictions, dirty coils, and premature equipment wear.
          </p>
          <ul className="svcList">
            <li>Protects HVAC components from dust damage</li>
            <li>Improves airflow and system efficiency</li>
            <li>Reduces airborne particles for occupants</li>
            <li>Helps meet building handover expectations</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Common properties that need post-construction cleaning</h2>
          <ul className="svcList">
            <li>Office renovations and tenant build-outs</li>
            <li>Retail spaces and restaurants</li>
            <li>Medical and professional facilities</li>
            <li>Multi-unit commercial buildings</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Inspection-first approach</h2>
          <p className="svcP">
            A professional inspection helps confirm how much debris is present and
            whether full-system cleaning or targeted service is required.
          </p>
          <p className="svcP">
            This prevents unnecessary work while ensuring ducts are safe before
            staff or customers move in.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="svcSection" style={{ paddingTop: 18 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Helpful links</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li><Link href="/services/commercial-duct-cleaning">Commercial Duct Cleaning Services</Link></li>
              <li><Link href="/blog/how-often-should-commercial-air-ducts-be-cleaned">Commercial Duct Cleaning Frequency</Link></li>
              <li><Link href="/services/air-duct-cleaning">Residential Air Duct Cleaning</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/contact">Contact / Request a Quote</Link></li>
            </ul>
          </div>
        </section>
      </div>

      {/* REVIEWS */}
      <section className="svcSection">
        <div className="container">
          <h2 className="svcH2">Trusted by commercial clients across South Florida</h2>
          <div className="svcReviewsWrap">
            <GoogleReviews />
            <ThumbtackCarousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        heading="Just finished a renovation?"
        text="Call (786) 275-7826 to schedule post-construction duct cleaning for your commercial property."
      />
    </>
  );
}
