import type { Metadata } from "next";
import CTA from "@/app/components/CTA";
import ServiceHeroWithForm from "@/app/components/ServiceHeroSlider";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sunny Isles Air Duct Solution",
  description:
    "Air duct cleaning in Sunny Isles Beach, FL for cleaner airflow and better HVAC performance. Professional duct and dryer vent cleaning with clear recommendations and fast scheduling.",
  alternates: { canonical: "/locations/sunny-isles-air-duct-solution" },
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <ServiceHeroWithForm
        title="Sunny Isles Air Duct Solution"
        description="Professional air duct cleaning and dryer vent cleaning in Sunny Isles Beach, FL. Clear recommendations, clean work, and fast scheduling."
        slides={[{ src: "/hero.jpg", alt: "Air duct cleaning in Sunny Isles Beach" }]}
        badges={["Fast scheduling", "Bonded & Insured", "Satisfaction Guaranteed"]}
      />
      {/* 1) Intro */}
      <section className="svcSection">
        <div className="container">
          <div className="svcGrid2">
            {/* LEFT */}
            <div>
              <h1>Sunny Isles Air Duct Solution</h1>
              <h2 className="svcH2">Air Duct Cleaning Services in Sunny Isles Beach, FL</h2>

              <p className="svcP">
                We help homeowners and condo residents in Sunny Isles Beach improve airflow,
                comfort, and indoor air quality with inspection-first air duct cleaning.
                In high-rise and coastal areas, humidity, dust, and constant HVAC use can
                make ventilation maintenance more important over time.
              </p>

              <h3 className="svcH3">Why Sunny Isles homes schedule duct cleaning</h3>

              <ul className="svcList">
                <li>Dust collecting quickly on vents, registers, or furniture</li>
                <li>Musty or stale odors (especially with humidity)</li>
                <li>Weak airflow or uneven cooling in rooms</li>
                <li>Allergy irritation or respiratory sensitivity</li>
                <li>After renovations, construction dust, or moving in</li>
              </ul>

              <p className="svcMini">
                Want a clean, honest answer first? We can start with a quick inspection and give clear recommendations.
              </p>

              {/* Internal links (SEO) */}
              <div style={{ marginTop: 14 }}>
                <p className="svcP" style={{ marginBottom: 8 }}>
                  Helpful links:
                </p>
                <ul className="svcList">
                  <li>
                    <Link href="/services/air-duct-cleaning">Air Duct Cleaning service details</Link>
                  </li>
                  <li>
                    <Link href="/services/dryer-vent-cleaning">Dryer Vent Cleaning (fire-risk prevention)</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQs about duct & vent cleaning</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact / request a quote</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <div className="svcCard">
              <h3 className="svcH3">Call our Sunny Isles line</h3>
              <p className="svcP">For pricing guidance and availability in Sunny Isles Beach, call:</p>

              <p className="svcP" style={{ fontWeight: 900, fontSize: 18 }}>
                <a href="tel:+17863214875">(786) 321-4875</a>
              </p>

              <ul className="svcList">
                <li>Residential air duct cleaning</li>
                <li>Dryer vent cleaning (improves airflow + safety)</li>
                <li>Inspections + clear scope recommendations</li>
                <li>Fast scheduling in Sunny Isles Beach</li>
              </ul>

              <p className="svcMini">
                Send your address + home type (condo / single-family) and we’ll confirm the right scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Details */}
      <section className="svcSection">
        <div className="container">
          <div className="svcGrid2">
            {/* LEFT CARD */}
            <div className="svcCard">
              <h3 className="svcH3">What affects pricing in Sunny Isles Beach?</h3>
              <p className="svcP">
                Pricing depends on access, layout, number of vents/returns, and system condition.
                Condo buildings may require different access steps than single-family homes, so we
                confirm scope quickly based on your setup.
              </p>

              <ul className="svcList">
                <li>Home type (condo vs single-family)</li>
                <li>Number of vents and returns</li>
                <li>HVAC accessibility and building rules (if applicable)</li>
                <li>Severity of dust/debris buildup</li>
              </ul>

              <p className="svcMini">
                Call the Sunny Isles line and we’ll give a quick estimate based on your address and layout.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="svcCard">
              <h3 className="svcH3">Dryer vent cleaning in Sunny Isles Beach</h3>
              <p className="svcP">
                Dryer vent cleaning is one of the most important safety services for homes and condos
                that do frequent laundry. Lint buildup restricts airflow, increases heat, and can raise fire risk.
              </p>

              <ul className="svcList">
                <li>Faster drying cycles and better airflow</li>
                <li>Reduced overheating and lint buildup risk</li>
                <li>Recommended at least once per year for most homes</li>
              </ul>

              <p className="svcMini">
                If drying times are getting longer or the dryer feels hotter than usual, schedule an inspection soon.
              </p>

              {/* Internal link (SEO) */}
              <p className="svcMini" style={{ marginTop: 10 }}>
                Learn more: <Link href="/services/dryer-vent-cleaning">Dryer Vent Cleaning service page</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Reviews */}
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
        heading="Sunny Isles Beach availability"
        text="Call (786) 321-4875 now or message us to schedule air duct or dryer vent cleaning in Sunny Isles Beach."
      />
    </>
  );
}
