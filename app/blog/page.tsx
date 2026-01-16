// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/app/components/CTA";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import BlogSearchClient, { BlogPost } from "@/app/components/BlogSearchClient";
import { blogIndexSchema, webpageSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Helpful articles about air duct cleaning, dryer vent safety, chimney maintenance, attic insulation, and commercial duct cleaning in Miami & South Florida.",
  alternates: { canonical: "/blog" },
};

const posts: BlogPost[] = [
  {
    title: "How Often Should Air Ducts Be Cleaned in Miami Homes?",
    slug: "/blog/how-often-should-air-ducts-be-cleaned-in-miami-homes",
    desc: "A practical schedule based on humidity, dust, pets, and HVAC usage in South Florida.",
    category: "Air Duct Cleaning",
    location: "Miami",
    intent: "Guide",
    keywords: ["air duct cleaning miami", "how often clean air ducts", "indoor air quality miami"],
  },
  {
    title: "Air Duct Cleaning Cost in Miami: What Affects the Price?",
    slug: "/blog/air-duct-cleaning-cost-in-miami-what-affects-the-price",
    desc: "The biggest factors that change duct cleaning pricing (access, layout, vents, condition).",
    category: "Air Duct Cleaning",
    location: "Miami",
    intent: "Cost",
    keywords: ["air duct cleaning cost miami", "duct cleaning price"],
  },
  {
    title: "Signs Your Air Ducts Are Making Your Home Dusty",
    slug: "/blog/signs-your-air-ducts-are-making-your-home-dusty",
    desc: "Common warning signs: visible buildup, musty odors, airflow issues, and allergy irritation.",
    category: "Air Duct Cleaning",
    location: "South Florida",
    intent: "Signs",
    keywords: ["dusty house air ducts", "dirty ducts signs"],
  },

  {
    title: "How Often Should Dryer Vents Be Cleaned in Florida?",
    slug: "/blog/how-often-should-dryer-vents-be-cleaned-in-florida",
    desc: "A safety-first guide for Miami homes, rentals, and high-usage households.",
    category: "Dryer Vent Cleaning",
    location: "South Florida",
    intent: "Guide",
    keywords: ["dryer vent cleaning miami", "how often clean dryer vent"],
  },
  {
    title: "Warning Signs of a Clogged Dryer Vent (Before It Becomes a Fire Risk)",
    slug: "/blog/warning-signs-of-a-clogged-dryer-vent-before-it-becomes-a-fire-risk",
    desc: "Long dry times, excess heat, lint buildup, and what to do next.",
    category: "Dryer Vent Cleaning",
    location: "Miami",
    intent: "Safety",
    keywords: ["clogged dryer vent signs", "dryer vent fire risk"],
  },

  {
    title: "Do You Need Chimney Cleaning in Miami If You Rarely Use It?",
    slug: "/blog/do-you-need-chimney-cleaning-in-miami-if-you-rarely-use-it",
    desc: "Humidity, rain, and salt air can still damage masonry and liners—even when unused.",
    category: "Chimney",
    location: "Miami",
    intent: "Guide",
    keywords: ["chimney cleaning miami", "chimney inspection miami"],
  },
  {
    title: "Chimney Rain Caps in Florida: Why They Matter",
    slug: "/blog/chimney-rain-caps-in-florida-why-they-matter",
    desc: "How rain caps help block water, debris, and animals—and reduce long-term damage.",
    category: "Chimney",
    location: "South Florida",
    intent: "Safety",
    keywords: ["chimney rain cap florida", "chimney cap installation"],
  },

  {
    title: "Does Attic Insulation Lower Energy Bills in Miami?",
    slug: "/blog/does-attic-insulation-lower-energy-bills-in-miami",
    desc: "How insulation supports HVAC efficiency, comfort, and humidity control in South Florida.",
    category: "Attic Insulation",
    location: "Miami",
    intent: "Guide",
    keywords: ["attic insulation miami", "reduce energy bills miami"],
  },
  {
    title: "Signs Your Home Is Losing Cool Air Through the Attic",
    slug: "/blog/signs-your-home-is-losing-cool-air-through-the-attic",
    desc: "Hot rooms, high bills, and uneven cooling—what to look for and how to fix it.",
    category: "Attic Insulation",
    location: "South Florida",
    intent: "Signs",
    keywords: ["attic insulation signs", "uneven cooling"],
  },

  {
    title: "How Often Should Commercial Air Ducts Be Cleaned?",
    slug: "/blog/how-often-should-commercial-air-ducts-be-cleaned",
    desc: "A maintenance guide for offices, retail, and multi-unit properties in Miami.",
    category: "Commercial",
    location: "Miami",
    intent: "Guide",
    keywords: ["commercial duct cleaning miami", "office duct cleaning"],
  },
  {
    title: "Post-Construction Duct Cleaning for Commercial Properties",
    slug: "/blog/post-construction-duct-cleaning-for-commercial-properties",
    desc: "Why construction dust matters and how to protect airflow and equipment performance.",
    category: "Commercial",
    location: "South Florida",
    intent: "Safety",
    keywords: ["post construction duct cleaning", "commercial hvac cleaning"],
  },
];

export default function BlogPage() {
  return (
    <>
    <JsonLd data={blogIndexSchema()} />
<JsonLd
  data={webpageSchema({
    urlPath: "/blog",
    name: "Blog",
    description: "Air quality, duct cleaning, dryer vents, insulation, and chimney tips.",
  })}
/>
<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ])}
/>


      {/* HERO */}
      <section className="serviceHero">
        <div className="serviceHeroMedia" style={{ minHeight: "52vh", position: "relative" }}>
          <Image
            src="/hero.jpg"
            alt="Miami Air Duct Solution blog"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="serviceHeroOverlay" />

          <div
            className="container serviceHeroInner"
            style={{ minHeight: "52vh", padding: "92px 0 34px", position: "relative", zIndex: 2 }}
          >
            <div className="serviceHeroText" style={{ maxWidth: 760 }}>
              <div className="kicker"></div>
              <h1>Tips & Guides for South Florida Homes & Businesses</h1>
              <p>
                Practical articles about <strong>air duct cleaning</strong>, <strong>dryer vent safety</strong>,
                <strong> chimney maintenance</strong>, <strong>attic insulation</strong>, and{" "}
                <strong>commercial duct cleaning</strong> in Miami & the surrounding metro.
              </p>

              <div className="serviceHeroActions">
                <a className="secondaryBtn" href="/services/air-duct-cleaning">
                  Air Duct Cleaning
                </a>
                <a className="secondaryBtn" href="/services/dryer-vent-cleaning">
                  Dryer Vent Cleaning
                </a>
                <a className="secondaryBtn" href="/contact">
                  Contact
                </a>
              </div>
            </div>

            <aside className="serviceHeroForm" aria-label="Quick links" style={{ maxWidth: 520 }}>
              <h3>Popular pages</h3>
              <p>Quick shortcuts to our most requested services.</p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>
                  <Link href="/services/air-duct-cleaning">Air Duct Cleaning</Link>
                </li>
                <li>
                  <Link href="/services/dryer-vent-cleaning">Dryer Vent Cleaning</Link>
                </li>
                <li>
                  <Link href="/services/chimney-sweep-and-repair">Chimney Sweep & Repair</Link>
                </li>
                <li>
                  <Link href="/services/attic-insulation-services">Attic Insulation</Link>
                </li>
                <li>
                  <Link href="/services/commercial-duct-cleaning">Commercial Duct Cleaning</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container">
        <div className="pageHead">
          <div className="kicker"></div>
          <h2>Find a topic fast</h2>
          <p>Search by problem (dust, odor, airflow), service, or location (Miami / South Florida).</p>
        </div>

        {/* ✅ Client Component: real filtering */}
        <BlogSearchClient posts={posts} />

        {/* Internal links section (SEO) */}
        <section className="svcSection" style={{ paddingTop: 28 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Helpful links</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>
                <Link href="/services/air-duct-cleaning">Air Duct Cleaning in Miami</Link>
              </li>
              <li>
                <Link href="/services/dryer-vent-cleaning">Dryer Vent Cleaning (Fire-Risk Prevention)</Link>
              </li>
              <li>
                <Link href="/services/commercial-duct-cleaning">Commercial Duct Cleaning</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs (Pricing, scheduling, scope)</Link>
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
          <h2 className="svcH2">Trusted by homeowners across South Florida</h2>
          <div className="svcReviewsWrap">
            <GoogleReviews />
            <ThumbtackCarousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        heading="Need help choosing the right service?"
        text="Call (786) 275-7826 or send a message. We’ll recommend the right next step for your home or business."
      />
    </>
  );
}
