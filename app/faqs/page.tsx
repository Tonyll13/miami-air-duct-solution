import type { Metadata } from "next";
import CTA from "../components/CTA";
import ServiceHeroWithForm from "@/app/components/ServiceHeroSlider";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtackCarousel from "@/app/components/ThumbtackCarusel";
import { webpageSchema, faqSchema, breadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ - Miami Air Duct, Dryer Vent, Chimney & Attic Insulation",
  description:
    "FAQs about air duct cleaning, dryer vent cleaning, commercial duct cleaning, chimney services, and attic insulation in Miami. Learn pricing factors, how often to clean, warning signs, and what to expect.",
  alternates: { canonical: "/faqs" },
};

const faqs = [
  // --- Air Duct Cleaning (Miami) ---
  {
    q: "How often should air ducts be cleaned in Miami?",
    a: "Most homes consider an inspection every 12 months, especially in Miami where dust, humidity, and year-round HVAC use are common. Cleaning frequency depends on pets, allergies, renovations, visible buildup, or airflow issues.",
  },
  {
    q: "What are common signs I need air duct cleaning?",
    a: "Typical signs include increased dust inside the home, musty odors, uneven cooling, weak airflow from vents, allergy irritation, or visible buildup around registers. An inspection helps confirm whether cleaning is needed.",
  },
  {
    q: "Does air duct cleaning improve HVAC efficiency?",
    a: "It can help when buildup restricts airflow or the system is under strain. A clean airflow path supports more consistent performance and may reduce unnecessary workload on the system, especially during Miami’s long cooling season.",
  },
  {
    q: "Is air duct cleaning safe for my home?",
    a: "Yes when done properly with controlled methods and the right equipment. The goal is to remove buildup without spreading dust through the home, and to leave the work area clean when the job is done.",
  },

  // --- Dryer Vent Cleaning ---
  {
    q: "How often should dryer vents be cleaned?",
    a: "For most households, once per year is a solid baseline. If the dryer is used frequently (large households, rentals, or commercial use), many clients schedule every 6–8 months to reduce lint buildup and fire risk.",
  },
  {
    q: "What are signs my dryer vent is clogged?",
    a: "Long drying times, excessive heat in the laundry area, a burning smell, weak airflow at the exterior exhaust, or visible lint buildup are common warning signs. A professional inspection can confirm the level of blockage.",
  },
  {
    q: "Can a clogged dryer vent be a fire hazard?",
    a: "Yes. Lint is highly flammable, and restricted airflow can create overheating inside the vent line. Professional cleaning removes buildup and helps restore proper airflow.",
  },

  // --- Commercial Duct Cleaning ---
  {
    q: "Who typically needs commercial duct cleaning in Miami?",
    a: "Offices, retail spaces, property managers, multi-unit buildings, and facilities that run HVAC for long hours often benefit from inspections and scheduled maintenance—especially after renovations or tenant turnover.",
  },
  {
    q: "How often should commercial ducts be inspected or cleaned?",
    a: "Many commercial properties plan inspections every 12–24 months depending on occupancy, HVAC runtime, and the building environment. High-traffic spaces or renovation-heavy properties may need more frequent evaluations.",
  },
  {
    q: "Will commercial duct cleaning disrupt business operations?",
    a: "Most projects can be planned to minimize disruption. Scope and scheduling depend on access, layout, and business hours. The goal is a controlled, professional process that keeps the space clean and operational.",
  },

  // --- Chimney Services (Miami) ---
  {
    q: "Do chimneys in Miami still need annual inspection and cleaning?",
    a: "Yes. Miami’s humidity, rain, and salt air can impact chimney masonry and liners even if the fireplace is rarely used. Annual inspection helps catch early damage and cleaning removes hazardous soot/creosote buildup when applicable.",
  },
  {
    q: "What’s the difference between a masonry chimney and a factory-built metal chimney?",
    a: "Masonry chimneys are typically brick/mortar with clay or stainless liners and can be suitable for wood-burning when properly maintained. Many factory-built systems are designed for gas appliances or approved logs. An inspection confirms the correct system type and safe usage.",
  },
  {
    q: "Why is a chimney rain cap important in South Florida?",
    a: "A rain cap helps block water intrusion, debris, and animals. In Miami, moisture exposure is a common cause of chimney deterioration, so a properly installed cap can prevent expensive long-term damage.",
  },

  // --- Attic Insulation ---
  {
    q: "How does attic insulation help homes in Miami?",
    a: "Attic insulation reduces heat transfer from the roof into the living space, which helps the AC maintain temperature more efficiently. In Miami’s climate, it can improve comfort and support lower cooling costs when insulation is inadequate or damaged.",
  },
  {
    q: "What are signs I may need attic insulation service?",
    a: "Hot rooms, uneven temperatures, rising energy bills, or signs of moisture/condensation in the attic are common indicators. An inspection can identify low insulation levels, gaps, or compression.",
  },

  // --- Pricing / Scheduling / Service Area ---
  {
    q: "How do you price air duct or commercial duct cleaning?",
    a: "Pricing depends on layout, access, number of vents/returns, system type, and the condition of the ductwork. The fastest way to get an accurate estimate is to share your address, property type, and a few details about the HVAC setup.",
  },
  {
    q: "Do you serve areas outside Miami?",
    a: "Yes. We serve Miami and surrounding South Florida areas. If you’re in the metro region (Miami-Dade, Broward, and nearby areas), contact us and we’ll confirm availability for your location.",
  },
  {
    q: "How quickly can I schedule service?",
    a: "Scheduling depends on demand and service type, but we aim for fast availability across Miami and the surrounding metro area. Call or request a quote to see the nearest openings.",
  },
];

export default function FAQsPage() {
  return (
    <>
    <JsonLd
  data={webpageSchema({
    urlPath: "/faqs",
    name: "FAQs",
    description: "Answers to common questions about air duct cleaning and related services.",
  })}
/>
<JsonLd data={faqSchema({ urlPath: "/faqs", questions: faqs })} />
<JsonLd
  data={breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQs", path: "/faqs" },
  ])}
/>


      {/* Small hero (recommended) */}
      <ServiceHeroWithForm
        title="Frequently Asked Questions"
        description="Clear answers about air duct cleaning, dryer vent cleaning, commercial duct cleaning, chimney services, and attic insulation in Miami."
        slides={[
          { src: "/hero.jpg", alt: "Air duct cleaning in Miami" },
        ]}
        badges={["Fast scheduling", "Bonded & Insured", "Satisfaction Guaranteed"]}
      />

      <div className="container">
        <div className="pageHead">
          <h1>Frequently Asked Questions</h1>
          <p>Quick, practical answers to help you choose the right service in Miami.</p>
        </div>

        <div className="faqGrid">
          {faqs.map((f) => (
            <div key={f.q} className="card">
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews (recommended, below FAQ) */}
      <section className="svcSection">
        <div className="container">
          <h2 className="svcH2">From our clients</h2>
          <div className="svcReviewsWrap">
            <GoogleReviews />
            <ThumbtackCarousel />
          </div>
        </div>
      </section>

      <CTA
        heading="Still have questions?"
        text="Call (786) 275-7826 and we’ll help you choose the right service for your property in Miami."
      />
    </>
  );
}
