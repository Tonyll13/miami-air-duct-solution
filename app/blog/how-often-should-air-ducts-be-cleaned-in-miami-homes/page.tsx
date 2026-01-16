// app/blog/how-often-should-air-ducts-be-cleaned-in-miami-homes/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import { webpageSchema, blogPostingSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "How Often Should Air Ducts Be Cleaned in Miami Homes?",
  description:
    "A practical schedule for air duct cleaning in Miami based on humidity, dust, pets, and HVAC usage in South Florida.",
  alternates: { canonical: "/blog/how-often-should-air-ducts-be-cleaned-in-miami-homes" },
};

export default function Page() {
  return (
    <>
    <JsonLd
  data={webpageSchema({
    urlPath: "/blog/how-often-should-air-ducts-be-cleaned-in-miami-homes",
    name: "How Often Should Air Ducts Be Cleaned in Miami Homes?",
    description: "Recommended air duct cleaning frequency in Miami homes and what factors affect timing.",
  })}
/>

<JsonLd
  data={blogPostingSchema({
    urlPath: "/blog/how-often-should-air-ducts-be-cleaned-in-miami-homes",
    headline: "How Often Should Air Ducts Be Cleaned in Miami Homes?",
    description: "Recommended air duct cleaning frequency in Miami homes and what factors affect timing.",
    datePublished: "2026-01-15",
  })}
/>

<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "How Often Should Air Ducts Be Cleaned in Miami Homes?", path: "/blog/how-often-should-air-ducts-be-cleaned-in-miami-homes" },
  ])}
/>

      <div className="container">
        <div className="pageHead">
          <div className="kicker">Air Duct Cleaning • Miami • Guide</div>
          <h1>How Often Should Air Ducts Be Cleaned in Miami Homes?</h1>
          <p>
            Miami’s humidity, year-round HVAC use, and dust can change how often ductwork needs attention.
            Here’s a simple inspection-first guideline that helps homeowners choose the right timing.
          </p>

          <div style={{ marginTop: 10 }}>
            <Link href="/blog" className="mini">← Back to Blog</Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Miami factors that change the schedule</h2>
          <p className="svcP">
            In South Florida, HVAC systems often run much of the year. Humidity and frequent runtime can accelerate
            dust buildup around returns and registers—especially if filters aren’t changed consistently.
          </p>
          <ul className="svcList">
            <li>High HVAC runtime + humidity</li>
            <li>Pets and indoor allergens</li>
            <li>Renovation / construction dust</li>
            <li>Musty odors or persistent dust</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>A simple inspection-first guideline</h2>
          <p className="svcP">
            Instead of guessing, start with an inspection-first approach. If there’s visible buildup, weak airflow,
            or allergy irritation, a professional inspection can confirm the right scope and next steps.
          </p>
          <p className="svcP">
            For many Miami homes, an annual check is a strong baseline—then adjust based on your home’s conditions
            and what the inspection shows.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="svcSection" style={{ paddingTop: 18 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Helpful links</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li><Link href="/services/air-duct-cleaning">Air Duct Cleaning in Miami (service page)</Link></li>
              <li><Link href="/services/dryer-vent-cleaning">Dryer Vent Cleaning (fire-risk prevention)</Link></li>
              <li><Link href="/faqs">FAQs (pricing, scope, scheduling)</Link></li>
              <li><Link href="/contact">Contact / Request a Quote</Link></li>
              <li><Link href="/locations/dania-beach-air-duct-solution">Dania Beach Air Duct Solution</Link></li>
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
        heading="Need help deciding if cleaning is needed?"
        text="Call (786) 275-7826 or message us. We’ll recommend the right next step."
      />
    </>
  );
}
