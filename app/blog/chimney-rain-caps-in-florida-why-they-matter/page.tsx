// app/blog/chimney-rain-caps-in-florida-why-they-matter/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";

export const metadata: Metadata = {
  title: "Chimney Rain Caps in Florida: Why They Matter",
  description:
    "Chimney rain caps help protect Florida homes from moisture, animals, and debris. Learn why rain caps are essential for chimneys in Miami and South Florida.",
  alternates: {
    canonical: "/blog/chimney-rain-caps-in-florida-why-they-matter",
  },
};

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="pageHead">
          <div className="kicker">Chimney • Florida • Safety Guide</div>
          <h1>Chimney Rain Caps in Florida: Why They Matter</h1>
          <p>
            In Florida’s humid and rainy climate, chimney rain caps play a much
            bigger role than many homeowners realize. A properly installed rain
            cap helps protect your chimney system from moisture, debris, and
            unwanted animals.
          </p>

          <div style={{ marginTop: 10 }}>
            <Link href="/blog" className="mini">← Back to Blog</Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>What is a chimney rain cap?</h2>
          <p className="svcP">
            A chimney rain cap is a protective metal cover installed at the top
            of the chimney. It allows smoke and gases to exit while preventing
            rainwater, debris, and animals from entering the flue.
          </p>
          <p className="svcP">
            In South Florida, rain caps are especially important due to frequent
            storms, high humidity, and strong winds.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Why rain caps matter in Florida’s climate</h2>
          <p className="svcP">
            Without a rain cap, water can enter the chimney during heavy rain
            and storms. Over time, moisture can damage the flue liner, weaken
            masonry, and lead to costly repairs.
          </p>
          <ul className="svcList">
            <li>Prevents rainwater from entering the flue</li>
            <li>Reduces moisture-related liner and masonry damage</li>
            <li>Helps prevent rust on metal components</li>
            <li>Limits mold and musty odors inside the chimney</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>Keeping animals and debris out</h2>
          <p className="svcP">
            Chimneys without caps often become nesting spots for birds, rodents,
            and other animals. Leaves and debris can also collect inside the
            flue, blocking airflow.
          </p>
          <p className="svcP">
            A properly fitted rain cap acts as a barrier, helping maintain
            clear airflow and reducing the risk of blockages.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>How rain caps support chimney safety</h2>
          <p className="svcP">
            By keeping moisture and debris out, rain caps help preserve proper
            draft and airflow. This is especially important when fireplaces are
            used occasionally during cooler months.
          </p>
          <p className="svcP">
            Even if you rarely use your fireplace, protecting the chimney system
            helps extend its lifespan and reduces long-term maintenance costs.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>When should a rain cap be inspected or replaced?</h2>
          <p className="svcP">
            Rain caps should be inspected during routine chimney inspections.
            In Florida, corrosion, loose fittings, or storm damage can reduce
            effectiveness over time.
          </p>
          <p className="svcP">
            If your chimney does not have a cap—or if the existing one is
            damaged—installation or replacement is strongly recommended.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="svcSection" style={{ paddingTop: 18 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Helpful links</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>
                <Link href="/services/chimney-sweep-and-repair">
                  Chimney Cleaning & Inspection in Miami
                </Link>
              </li>
              <li>
                <Link href="/blog/do-you-need-chimney-cleaning-in-miami-if-you-rarely-use-it">
                  Do You Need Chimney Cleaning If You Rarely Use It?
                </Link>
              </li>
              <li>
                <Link href="/services/air-duct-cleaning">
                  Air Duct Cleaning in Miami
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  FAQs (chimney inspections & maintenance)
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact / Request a Quote
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
        heading="Need a chimney inspection or rain cap?"
        text="Call (786) 275-7826 or message us to schedule chimney service in Miami."
      />
    </>
  );
}
