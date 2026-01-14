import type { Metadata } from "next";
import CTA from "@/app/components/CTA";
import { Fragment } from "react";
import ContactForm from "@/app/components/ContactForm";
import GoogleReviews from "@/app/components/GoogleReviews";
import ThumbtuckCarusel from "@/app/components/ThumbtackCarusel";
import HeroForContact from "../components/HeroForContact";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Miami Air Duct Solution for air duct cleaning, dryer vent cleaning, and more. Call (786) 275-7826.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    
    <Fragment>
      <HeroForContact
              title="Contact Us"
              description="Get a quick quote for air duct cleaning, dryer vent cleaning, commercial duct cleaning, chimney services, and attic insulation in Miami and the Metro."
              slides={[
                { src: "/hero.jpg", alt: "Air duct cleaning in Miami" },
              ]}
              badges={["Fast scheduling", "Bonded & Insured", "Satisfaction Guaranteed"]}
            />
      <div className="container">
        <div className="pageHead">
          <h1>Get in touch</h1>
          <p>
            Call <a href="tel:+17862757826">(786) 275-7826</a> or send a message below.
          </p>
        </div>

        <div className="split">
          <ContactForm />
           <GoogleReviews />
                <ThumbtuckCarusel />

          <div className="leadCard">
            <h3>Fastest way</h3>
            <p>
              📞{" "}
              <strong>
                <a href="tel:+17862757826">(786) 275-7826</a>
              </strong>
            </p>
            <p style={{ marginTop: 10, color: "var(--muted)" }}>
              Tell us: service needed, city, and home type (house/condo). We’ll
              confirm scope quickly.
            </p>
          </div>
        </div>
      </div>

      <CTA heading="Prefer a call?" text="We can confirm availability in a quick phone call." />
    </Fragment>
  );
}
