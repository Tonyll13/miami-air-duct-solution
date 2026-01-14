import Link from "next/link";

export default function CTA({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ padding: 18 }}>
          <div className="split">
            <div>
              <div className="kicker">Ready to schedule?</div>
              <h2 style={{ margin: "8px 0 10px" }}>{heading}</h2>
              <p style={{ margin: 0, color: "var(--muted)" }}>{text}</p>
            </div>
            <div className="ctaRow" style={{ justifyContent: "flex-end", alignItems: "center" }}>
              <p></p>
              <a className="secondaryBtn" href="tel:+17862757826">Call Now</a>
              <p></p>
              <Link className="secondaryBtn" href="#contact">Contact Form</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
