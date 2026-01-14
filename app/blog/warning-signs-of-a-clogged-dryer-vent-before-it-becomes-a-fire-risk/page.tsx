// app/blog/warning-signs-of-a-clogged-dryer-vent-before-it-becomes-a-fire-risk/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";

export const metadata: Metadata = {
  title: "Warning Signs of a Clogged Dryer Vent (Before It Becomes a Fire Risk)",
  description:
    "Learn the early warning signs of a clogged dryer vent, including long dry times, excess heat, and lint buildup — and how to prevent fire risk in Florida homes.",
  alternates: {
    canonical:
      "/blog/warning-signs-of-a-clogged-dryer-vent-before-it-becomes-a-fire-risk",
  },
};

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="pageHead">
          <div className="kicker">Dryer Vent Cleaning • Safety • Florida</div>
          <h1>Warning Signs of a Clogged Dryer Vent (Before It Becomes a Fire Risk)</h1>
          <p>
            Dryer vent clogs rarely happen overnight. In most Florida homes,
            there are clear warning signs long before lint buildup becomes a
            serious fire hazard. Knowing what to watch for can help you act
            early and avoid costly damage.
          </p>

          <div style={{ marginTop: 10 }}>
            <Link href="/blog" className="mini">← Back to Blog</Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>1. Clothes take longer than normal to dry</h2>
          <p className="svcP">
            One of the earliest and most common signs of a clogged dryer vent is
            extended drying time. When airflow is restricted, moist air cannot
            escape properly, forcing the dryer to run longer than designed.
          </p>
          <p className="svcP">
            If loads that once dried in one cycle now require two or more,
            lint buildup in the vent line is often the cause.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>2. Dryer feels unusually hot</h2>
          <p className="svcP">
            A properly vented dryer should release hot air outside your home.
            When the vent is blocked, heat gets trapped inside the appliance.
          </p>
          <p className="svcP">
            If the dryer exterior feels excessively hot or the laundry room
            temperature rises quickly, airflow may be restricted.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>3. Laundry room becomes humid or uncomfortable</h2>
          <p className="svcP">
            In Florida’s humid climate, a clogged dryer vent can make the
            laundry area feel even more damp and uncomfortable.
          </p>
          <p className="svcP">
            Moist air that cannot escape the vent often leaks back into the
            home, contributing to humidity, odors, and potential mold issues.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>4. Burning or musty smell during operation</h2>
          <p className="svcP">
            A burning smell is a serious warning sign. Lint is highly flammable,
            and trapped heat can cause it to overheat inside the vent line.
          </p>
          <p className="svcP">
            Musty odors may also indicate trapped moisture and lint buildup,
            especially in longer or vertical vent runs.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>5. Visible lint around the dryer or exterior vent</h2>
          <p className="svcP">
            Lint accumulation behind the dryer, around the vent connection,
            or at the exterior vent hood is a clear sign airflow is restricted.
          </p>
          <p className="svcP">
            Exterior vents that don’t open fully when the dryer runs often
            indicate internal blockage.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Why clogged dryer vents are a fire risk</h2>
          <p className="svcP">
            Dryer vents combine three dangerous elements: heat, lint, and
            restricted airflow. When these conditions come together, the risk
            of ignition increases significantly.
          </p>
          <p className="svcP">
            Regular inspection and cleaning dramatically reduce this risk and
            help dryers operate more efficiently.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>When to schedule a professional inspection</h2>
          <p className="svcP">
            If you notice one or more of these warning signs, it’s best to
            schedule a professional dryer vent inspection as soon as possible.
          </p>
          <p className="svcP">
            An inspection-first approach confirms whether cleaning is needed
            and identifies any airflow or installation issues before they
            become a safety concern.
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
                <Link href="/blog/how-often-should-dryer-vents-be-cleaned-in-florida">
                  How Often Should Dryer Vents Be Cleaned in Florida?
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
        heading="Concerned about dryer vent safety?"
        text="Call (786) 275-7826 or message us to schedule a dryer vent inspection and prevent fire risk."
      />
    </>
  );
}
