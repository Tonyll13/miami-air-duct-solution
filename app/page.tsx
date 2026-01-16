import type { Metadata } from "next";
import ServiceGrid from "@/app/components/ServiceGrid";
import Hero from "@/app/components/Hero";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import JsonLd from "@/app/components/JsonLd";
import { webpageSchema, breadcrumbSchema } from "@/app/lib/schema";
export const metadata: Metadata = {
  title: "Air Duct Cleaning Experts in Miami",
  description:
    "Miami Air Duct Solution helps improve indoor air quality with air duct cleaning, dryer vent cleaning, and more across Miami and nearby areas.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
    <JsonLd
        data={webpageSchema({
          urlPath: "/",
          name: "Miami Air Duct Solution",
          description:
            "Air duct cleaning, dryer vent cleaning, chimney services, attic insulation, and commercial duct cleaning in Miami and nearby areas.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }])}
      />
      <Hero
        {...({ title: "Air Duct Cleaning Experts in Miami and the Metro Area", subtitle: "Professional air duct & ventilation services designed for cleaner air, better airflow, and safer homes and businesses." } as any)}
      />

      <ServiceGrid />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="card">
              <div className="kicker">Why it matters</div>
              <h2 style={{ margin: "8px 0 10px" }}>Airflow, safety, and comfort</h2>
              <p>
                Dust buildup, restricted vents, and neglected systems can impact performance and
                comfort. Our approach focuses on inspection-first recommendations and clear
                next steps.
              </p>
              <ul className="list">
                <li>Clear communication and scheduling</li>
                <li>Focus on safety and efficiency</li>
                <li>Local service across Miami area</li>
              </ul>
            </div>
            <section className="section">
        <div className="container reviewsRow">
          <GoogleReviews />
          <ThumbtackCarousel />
        </div>
      </section>
            <div className="card">
              <div className="kicker">Fast contact</div>
              <h2 style={{ margin: "8px 0 10px" }}>Call for availability</h2>
              <p>Phone: <a href="tel:+17862757826">(786) 275-7826</a></p>
              <p style={{ marginTop: 10 }}>
                Prefer a message? Use the contact form and we’ll get back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading="Book your service in minutes"
        text="Call now or send a message. We’ll confirm details and recommend the right service based on your situation."
      />
    </>
  );
}
