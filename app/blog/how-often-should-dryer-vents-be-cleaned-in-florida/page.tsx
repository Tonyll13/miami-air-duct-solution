// app/blog/how-often-should-dryer-vents-be-cleaned-in-florida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";

export const metadata: Metadata = {
  title: "How Often Should Dryer Vents Be Cleaned in Florida?",
  description:
    "Learn how often dryer vents should be cleaned in Florida homes based on usage, lint buildup, humidity, and fire-safety recommendations.",
  alternates: {
    canonical: "/blog/how-often-should-dryer-vents-be-cleaned-in-florida",
  },
};

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="pageHead">
          <div className="kicker">Dryer Vent Cleaning • Florida • Safety Guide</div>
          <h1>How Often Should Dryer Vents Be Cleaned in Florida?</h1>
          <p>
            Dryer vent cleaning is one of the most important — and often overlooked — safety services
            for Florida homes. Heat, humidity, and frequent laundry use can cause lint to build up
            faster than many homeowners expect.
          </p>

          <div style={{ marginTop: 10 }}>
            <Link href="/blog" className="mini">
              ← Back to Blog
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>The general rule for most Florida homes</h2>
          <p className="svcP">
            For the average household, dryer vents should be professionally cleaned
            <strong> at least once per year</strong>. This helps maintain proper airflow,
            reduce overheating, and lower the risk of lint-related dryer fires.
          </p>
          <p className="svcP">
            In Florida, this yearly recommendation is especially important because dryers
            often work harder due to higher humidity and longer drying cycles.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Homes that should clean dryer vents more often</h2>
          <p className="svcP">
            Some households should inspect and clean dryer vents more frequently —
            typically every <strong>6–8 months</strong>.
          </p>
          <ul className="svcList">
            <li>Large families with frequent laundry use</li>
            <li>Rental properties or short-term rentals</li>
            <li>Homes with long or vertical vent runs</li>
            <li>Gas dryers (higher fire risk)</li>
            <li>Dryers that take longer than normal to dry clothes</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Warning signs your dryer vent needs cleaning</h2>
          <p className="svcP">
            Don’t rely on time alone. Many dryer vent issues show clear warning signs
            before becoming a serious safety problem.
          </p>
          <ul className="svcList">
            <li>Clothes take more than one cycle to dry</li>
            <li>Dryer feels unusually hot to the touch</li>
            <li>Laundry room becomes hot or humid</li>
            <li>Burning or musty smell while the dryer runs</li>
            <li>Visible lint behind the dryer or at the exterior vent</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Why Florida homes face higher dryer vent risk</h2>
          <p className="svcP">
            Florida’s climate creates unique conditions. Humidity can cause lint to clump
            and stick inside the vent, while salt air near coastal areas may accelerate
            corrosion or debris buildup at exterior vent terminations.
          </p>
          <p className="svcP">
            Combined with frequent dryer use, these factors make routine inspections
            especially important for South Florida homeowners.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Inspection-first is the safest approach</h2>
          <p className="svcP">
            Instead of guessing, an inspection-first approach confirms whether your vent
            needs cleaning, how severe the buildup is, and whether there are airflow or
            installation issues that should be addressed.
          </p>
          <p className="svcP">
            Catching lint buildup early is far easier — and safer — than dealing with
            a completely blocked or overheated vent line.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="svcSection" style={{ paddingTop: 18 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Helpful links</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>
                <Link href="/services/dryer-vent-cleaning">
                  Dryer Vent Cleaning in Miami (service page)
                </Link>
              </li>
              <li>
                <Link href="/blog/warning-signs-of-a-clogged-dryer-vent-before-it-becomes-a-fire-risk">
                  Warning Signs of a Clogged Dryer Vent
                </Link>
              </li>
              <li>
                <Link href="/services/air-duct-cleaning">
                  Air Duct Cleaning in Miami
                </Link>
              </li>
              <li>
                <Link href="/faqs">FAQs (pricing, scope, scheduling)</Link>
              </li>
              <li>
                <Link href="/contact">Contact / Request a Quote</Link>
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
        heading="Not sure if your dryer vent needs cleaning?"
        text="Call (786) 275-7826 or message us. We’ll help you decide if an inspection or cleaning is needed."
      />
    </>
  );
}
