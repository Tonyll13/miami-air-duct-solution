// app/blog/do-you-need-chimney-cleaning-in-miami-if-you-rarely-use-it/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";

export const metadata: Metadata = {
  title: "Do You Need Chimney Cleaning in Miami If You Rarely Use It?",
  description:
    "Even rarely used chimneys in Miami can suffer from moisture, debris, and liner damage. Learn when chimney cleaning and inspection are still necessary in South Florida.",
  alternates: {
    canonical:
      "/blog/do-you-need-chimney-cleaning-in-miami-if-you-rarely-use-it",
  },
};

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="pageHead">
          <div className="kicker">Chimney Cleaning • Miami • Guide</div>
          <h1>Do You Need Chimney Cleaning in Miami If You Rarely Use It?</h1>
          <p>
            Many Miami homeowners assume chimney cleaning is only necessary if
            the fireplace is used often. In reality, South Florida’s climate
            can affect chimneys even when they’re rarely or never used.
          </p>

          <div style={{ marginTop: 10 }}>
            <Link href="/blog" className="mini">← Back to Blog</Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Why unused chimneys can still develop problems</h2>
          <p className="svcP">
            Miami’s high humidity, frequent rain, and salt air exposure can
            cause deterioration inside chimney systems over time—even without
            regular fireplace use.
          </p>
          <p className="svcP">
            Moisture entering the flue can damage liners, weaken mortar joints,
            and create conditions for mold or odor buildup inside the chimney.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Moisture, debris, and animal intrusion</h2>
          <p className="svcP">
            Chimneys that aren’t used regularly often become entry points for
            rainwater, leaves, and nesting animals if protective components are
            missing or damaged.
          </p>
          <ul className="svcList">
            <li>Water intrusion from missing or damaged chimney caps</li>
            <li>Leaves and debris collecting in the flue</li>
            <li>Birds or animals nesting inside the chimney</li>
            <li>Musty odors traveling into the home</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Why inspections still matter in South Florida</h2>
          <p className="svcP">
            Even if you rarely light a fire, a chimney inspection helps confirm
            that the structure, liner, and exterior components are still in good
            condition.
          </p>
          <p className="svcP">
            Small issues such as hairline cracks, loose caps, or early moisture
            damage are much easier and less expensive to address when caught
            early.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>How often should rarely used chimneys be checked?</h2>
          <p className="svcP">
            For most Miami-area homes, a basic chimney inspection once per year
            is a smart preventive step—even if the fireplace is rarely used.
          </p>
          <p className="svcP">
            If you plan to use the fireplace after a long period of inactivity,
            an inspection should always be performed beforehand.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>When cleaning is recommended</h2>
          <p className="svcP">
            Chimney cleaning may be recommended if debris, nesting material,
            moisture-related residue, or creosote buildup is found during the
            inspection.
          </p>
          <p className="svcP">
            Even light buildup can affect airflow and indoor air quality if the
            fireplace is eventually used.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="svcSection" style={{ paddingTop: 18 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Helpful links</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>
                <Link href="/services/chimney-sweep-and-repair">
                  Chimney Cleaning & Inspection in Miami (service page)
                </Link>
              </li>
              <li>
                <Link href="/blog/chimney-rain-caps-in-florida-why-they-matter">
                  Chimney Rain Caps in Florida: Why They Matter
                </Link>
              </li>
              <li>
                <Link href="/services/air-duct-cleaning">
                  Air Duct Cleaning in Miami
                </Link>
              </li>
              <li>
                <Link href="/faqs">FAQs (chimney inspections & maintenance)</Link>
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
        heading="Not sure if your chimney needs inspection?"
        text="Call (786) 275-7826 or message us to schedule a chimney inspection in Miami."
      />
    </>
  );
}
