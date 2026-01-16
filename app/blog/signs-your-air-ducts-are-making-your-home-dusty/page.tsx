// app/blog/signs-your-air-ducts-are-making-your-home-dusty/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import { webpageSchema, blogPostingSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Signs Your Air Ducts Are Making Your Home Dusty",
  description:
    "Learn the most common signs your air ducts may be contributing to a dusty home, including airflow issues, buildup around vents, and HVAC filter problems.",
  alternates: {
    canonical: "/blog/signs-your-air-ducts-are-making-your-home-dusty",
  },
};

export default function Page() {
  return (
    <>
    <JsonLd
  data={webpageSchema({
    urlPath: "/blog/signs-your-air-ducts-are-making-your-home-dusty",
    name: "Signs Your Air Ducts Are Making Your Home Dusty",
    description: "Common signs of duct buildup and when a professional inspection makes sense.",
  })}
/>

<JsonLd
  data={blogPostingSchema({
    urlPath: "/blog/signs-your-air-ducts-are-making-your-home-dusty",
    headline: "Signs Your Air Ducts Are Making Your Home Dusty",
    description: "Common signs of duct buildup and when a professional inspection makes sense.",
    datePublished: "2026-01-15",
  })}
/>

<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Signs Your Air Ducts Are Making Your Home Dusty", path: "/blog/signs-your-air-ducts-are-making-your-home-dusty" },
  ])}
/>

      <div className="container">
        <div className="pageHead">
          <div className="kicker">Air Duct Cleaning • South Florida • Signs</div>
          <h1>Signs Your Air Ducts Are Making Your Home Dusty</h1>
          <p>
            If your home gets dusty quickly even after cleaning, your HVAC system and ductwork might be part of the
            problem. Here are the most common signs to look for — and what usually fixes it.
          </p>

          <div style={{ marginTop: 10 }}>
            <Link href="/blog" className="mini">
              ← Back to Blog
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>1) Dust builds up fast after you clean</h2>
          <p className="svcP">
            If you wipe surfaces and the dust returns quickly (especially on shelves, vents, and furniture), it can
            be a clue that dust is being circulated through the HVAC system. This doesn’t always mean the ducts need
            cleaning — but it does mean you should check the basics.
          </p>
          <ul className="svcList">
            <li>Dust returns within 24–72 hours after cleaning</li>
            <li>Dust appears near supply vents or return grilles</li>
            <li>More dust in bedrooms or rooms far from the air handler</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>2) Visible buildup around vents and registers</h2>
          <p className="svcP">
            A simple inspection you can do: look at the vent covers and the surrounding ceiling/wall area. Dark
            dust marks or heavy buildup can indicate airflow issues, filter problems, or debris inside the system.
          </p>
          <ul className="svcList">
            <li>Dust rings around vent covers</li>
            <li>Dark streaking near registers</li>
            <li>Dust clumps inside returns</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>3) Weak airflow or uneven cooling</h2>
          <p className="svcP">
            Dust issues often show up together with airflow problems. If some rooms feel warmer or vents feel weak,
            the HVAC system may be working harder — and more particles can circulate.
          </p>
          <ul className="svcList">
            <li>Some rooms cool slower than others</li>
            <li>Airflow feels weak from certain vents</li>
            <li>System runs longer than normal to reach temperature</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>4) Filters clog quickly (or you’re using the wrong type)</h2>
          <p className="svcP">
            A clogged filter can reduce airflow and increase dust movement through the system. In South Florida,
            many homes benefit from consistent filter changes because HVAC systems run so often.
          </p>
          <ul className="svcList">
            <li>Filter looks dirty well before 30–60 days</li>
            <li>You notice more dust when the AC is running</li>
            <li>Filter doesn’t fit tightly (air bypass around the edges)</li>
          </ul>
          <p className="svcP">
            Even a “good” filter won’t help if it’s installed incorrectly or the size isn’t sealed properly.
          </p>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>5) Musty/stale odors when the AC turns on</h2>
          <p className="svcP">
            Odors don’t always come from ducts, but if you notice a stale smell when the system starts, it’s worth
            checking returns, filters, and the air handler area. An inspection can help identify the source.
          </p>
          <ul className="svcList">
            <li>Stale smell on startup</li>
            <li>Musty odor in specific rooms</li>
            <li>Odors that get worse when the system runs longer</li>
          </ul>
        </section>

        <section className="card">
          <h2 style={{ marginTop: 0 }}>What to do next (inspection-first)</h2>
          <p className="svcP">
            The best move is an inspection-first approach. Sometimes the fix is as simple as filter changes and
            sealing gaps — and sometimes a full duct cleaning is the right next step. A quick inspection helps
            confirm the right scope before spending money.
          </p>
          <ul className="svcList">
            <li>Check and replace filters regularly</li>
            <li>Look for visible buildup around vents/returns</li>
            <li>Schedule an inspection if dust + airflow issues are happening together</li>
          </ul>
        </section>

        {/* INTERNAL LINKS */}
        <section className="svcSection" style={{ paddingTop: 18 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Helpful links</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>
                <Link href="/services/air-duct-cleaning">Air Duct Cleaning in Miami (service page)</Link>
              </li>
              <li>
                <Link href="/blog/how-often-should-air-ducts-be-cleaned-in-miami-homes">
                  How Often Should Air Ducts Be Cleaned in Miami Homes?
                </Link>
              </li>
              <li>
                <Link href="/services/dryer-vent-cleaning">Dryer Vent Cleaning (fire-risk prevention)</Link>
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
        heading="Not sure if ducts are the problem?"
        text="Call (786) 275-7826 or message us. We’ll recommend the right next step based on your symptoms and setup."
      />
    </>
  );
}
