import type { Metadata } from "next";
import CTA from "@/app/components/CTA";
import ServiceHeroWithForm from "@/app/components/ServiceHeroSlider";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import Link from "next/link";
import { webpageSchema, serviceSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";
export const metadata: Metadata = {
  title: "Dania Beach Air Duct Solution",
  description:
    "Air duct cleaning in Dania Beach, FL for cleaner airflow and better HVAC performance. Professional duct and dryer vent cleaning with clear recommendations and fast scheduling.",
  alternates: { canonical: "/locations/dania-beach-air-duct-solution" },
};

export default function Page() {
  return (
    <>
    <JsonLd
  data={webpageSchema({
    urlPath: "/locations/dania-beach-air-duct-solution",
    name: "Air Duct Cleaning in Dania Beach",
    description: "Air duct cleaning services in Dania Beach and nearby areas.",
  })}
/>

<JsonLd
  data={serviceSchema({
    urlPath: "/locations/dania-beach-air-duct-solution",
    name: "Air Duct Cleaning in Dania Beach",
    serviceType: "Air Duct Cleaning",
    areaServed: ["Dania Beach, FL"],
  })}
/>

<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Dania Beach", path: "/locations/dania-beach-air-duct-solution" },
  ])}
/>

      {/* HERO */}
      <ServiceHeroWithForm
        title="Dania Beach Air Duct Solution"
        description="Professional air duct cleaning and dryer vent cleaning in Dania Beach, FL. Clear recommendations, clean work, and fast scheduling."
        slides={[{ src: "/hero.jpg", alt: "Air duct cleaning in Dania Beach" }]}
        badges={["Fast scheduling", "Bonded & Insured", "Satisfaction Guaranteed"]}
      />

      {/* 1) Intro */}
      <section className="svcSection">
        <div className="container">
          <div className="svcGrid2">
            {/* LEFT */}
            <div>
              <h1>Dania Beach Air Duct Solution</h1>
              <h2 className="svcH2">Air Duct Cleaning Services in Dania Beach, FL</h2>

              <p className="svcP">
                We serve homeowners and property managers in Dania Beach with professional air duct cleaning
                focused on airflow, comfort, and indoor air quality. If your system runs year-round or your
                home collects dust quickly, a duct inspection can help confirm the right next step.
              </p>

              {/* 🔗 Internal links (SEO) */}
<section className="svcSection">
  <div className="container">
    <h2 className="svcH2">Helpful links for Dania Beach homeowners</h2>

    <p className="svcP">
      Looking for more information about air quality, safety, and HVAC maintenance
      in Dania Beach? These pages may help:
    </p>

    <ul className="svcList">
      <li>
        <Link href="/services/air-duct-cleaning">
          Air Duct Cleaning service details
        </Link>{" "}
        – learn when duct cleaning is recommended and what’s included
      </li>

      <li>
        <Link href="/services/dryer-vent-cleaning">
          Dryer Vent Cleaning (fire-risk prevention)
        </Link>{" "}
        – reduce lint buildup and improve dryer efficiency
      </li>

      <li>
        <Link href="/services/chimney-sweep-and-repair">
          Chimney Sweep & Repair services
        </Link>{" "}
        – inspections, cleaning, and repairs for safer fireplace use
      </li>

      <li>
        <Link href="/services/attic-insulation-services">
          Attic Insulation Services
        </Link>{" "}
        – improve energy efficiency and indoor comfort
      </li>

      <li>
        <Link href="/faqs">
          FAQs about air duct & dryer vent cleaning
        </Link>{" "}
        – common questions from South Florida homeowners
      </li>

      <li>
        <Link href="/contact">
          Contact us / request a quote
        </Link>{" "}
        – get pricing guidance for your Dania Beach property
      </li>
    </ul>
  </div>
</section>


              <h3 className="svcH3">Why Dania Beach homes schedule duct cleaning</h3>

              <ul className="svcList">
                <li>Visible dust buildup around vents or inside registers</li>
                <li>Musty odors or stale indoor air</li>
                <li>Uneven cooling or weak airflow from supply vents</li>
                <li>Allergy irritation or respiratory sensitivity</li>
                <li>After renovations, construction dust, or moving in</li>
              </ul>

              <p className="svcMini">
                Not sure if cleaning is needed? We can start with a quick inspection and give clear recommendations.
              </p>
            </div>

            {/* RIGHT */}
            <div className="svcCard">
              <h3 className="svcH3">Call our Dania Beach line</h3>
              <p className="svcP">For pricing guidance and availability in Dania Beach, call:</p>

              <p className="svcP" style={{ fontWeight: 900, fontSize: 18 }}>
                <a href="tel:+17864811064">(786) 481-1064</a>
              </p>

              <ul className="svcList">
                <li>Air duct cleaning (residential)</li>
                <li>Dryer vent cleaning (fire-risk prevention)</li>
                <li>Inspections + clear scope recommendations</li>
                <li>Fast scheduling in Dania Beach</li>
              </ul>

              <p className="svcMini">
                Send your address + home type (single-family / condo) and we’ll confirm the right scope.
              </p>

              {/* ✅ Internal links: FAQ + Contact */}
              <p className="svcMini" style={{ marginTop: 10 }}>
                Have questions about pricing or scope? Visit our{" "}
                <a href="/faqs">FAQ page</a> or{" "}
                <a href="/contact">contact us here</a>.
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
              <h3 className="svcH3">What affects pricing in Dania Beach?</h3>
              <p className="svcP">
                Pricing depends on access, layout, number of vents/returns, and the condition of the system.
                Condos and multi-unit properties may have different access points than single-family homes.
              </p>

              <ul className="svcList">
                <li>Home type (single-family vs condo)</li>
                <li>Number of vents and returns</li>
                <li>Accessibility of the HVAC system</li>
                <li>Severity of dust/debris buildup</li>
              </ul>

              <p className="svcMini">
                Call the Dania Beach line for a quick estimate based on your address and setup.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="svcCard">
              <h3 className="svcH3">Dryer vent cleaning in Dania Beach</h3>
              <p className="svcP">
                Dryer vent cleaning is one of the most important safety services for homes that do laundry
                frequently. Lint buildup restricts airflow and increases heat and fire risk.
              </p>

              <ul className="svcList">
                <li>Faster drying cycles and better airflow</li>
                <li>Reduced overheating and lint buildup risk</li>
                <li>Recommended at least once per year for most homes</li>
              </ul>

              <p className="svcMini">
                If drying times are getting longer, schedule a vent inspection soon.
              </p>

              {/* ✅ Internal link: dryer vent service */}
              <p className="svcMini">
                Learn more about our{" "}
                <a href="/services/dryer-vent-cleaning">professional dryer vent cleaning service</a>{" "}
                and how it helps reduce fire risk in Dania Beach homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Nearby locations (optional but strong local SEO) */}
      <section className="svcSection">
        <div className="container">
          <p className="svcMini">
            We also serve nearby areas including{" "}
            <a href="/locations/sunny-isles-air-duct-solution">Sunny Isles Beach</a>{" "}
            and surrounding South Florida communities.
          </p>
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
        heading="Dania Beach availability"
        text="Call (786) 481-1064 now or message us to schedule air duct or dryer vent cleaning in Dania Beach."
      />
    </>
  );
}
