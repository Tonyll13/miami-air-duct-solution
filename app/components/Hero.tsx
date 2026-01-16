"use client";

import Image from "next/image";
import { useState } from "react";
import SmsConsentPopup from "./SmsConsentPopup"; // תתאים נתיב לפי הפרויקט שלך

export default function HeroWithForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [phone, setPhone] = useState("");
  const [showConsent, setShowConsent] = useState(false);
  const [consent, setConsent] = useState({
    smsInfoConsent: false,
    smsMarketingConsent: false,
  });

  function phoneClean(v: string) {
    return String(v ?? "").trim().replace(/[^\d+]/g, "").trim();
  }

  function maybeOpenConsent(nextPhone: string) {
    const cleaned = phoneClean(nextPhone);
    if (cleaned.length >= 7 && !(consent.smsInfoConsent || consent.smsMarketingConsent)) {
      setShowConsent(true);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    const fd = new FormData(form);

    fd.set("phone", phone);

    if (consent.smsInfoConsent) fd.set("smsInfoConsent", "on");
    else fd.delete("smsInfoConsent");

    if (consent.smsMarketingConsent) fd.set("smsMarketingConsent", "on");
    else fd.delete("smsMarketingConsent");

    const phoneC = phoneClean(String(fd.get("phone") ?? ""));
    const email = String(fd.get("email") ?? "").trim();

    const smsInfoConsent = fd.get("smsInfoConsent") === "on";
    const smsMarketingConsent = fd.get("smsMarketingConsent") === "on";

    if (!phoneC && !email) {
      setStatus("err");
      setErrorMsg("Please provide either a phone number or an email address.");
      setLoading(false);
      return;
    }

    if (phoneC && !(smsInfoConsent || smsMarketingConsent)) {
      setStatus("err");
      setErrorMsg("If you provide a phone number, please select your SMS consent preference(s).");
      setLoading(false);
      setShowConsent(true);
      return;
    }

    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        setStatus("err");
        setErrorMsg(data?.message || "Failed to send. Try again.");
        return;
      }

      setStatus("ok");
      form.reset();
      setPhone("");
      setConsent({ smsInfoConsent: false, smsMarketingConsent: false });
    } catch (err: any) {
      setStatus("err");
      setErrorMsg(err?.message || "Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="heroLead">
      <div className="container">
        <div className="heroLeadInner">
          <div className="heroMedia">
            <Image
              src="/hero.jpg"
              alt="Air duct cleaning in Miami"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="heroMediaContent">
              <h1>Air Duct Cleaning Experts in Miami</h1>
              <p>Improve airflow, comfort, and indoor air quality. Call now or request a quote.</p>
              <div className="heroMediaBadges">
                <span className="heroMediaBadge">Satisfaction Guaranteed</span>
                <span className="heroMediaBadge">Fast Scheduling</span>
                <span className="heroMediaBadge">Bonded & Insured</span>
                <span className="heroMediaBadge">Trained Technicians</span>
              </div>
            </div>
          </div>

          <aside className="leadCard" aria-label="Request form">
            <h3>Request a Quote</h3>
            <p>Fill the form and we’ll contact you ASAP.</p>

            <form className="leadForm" onSubmit={onSubmit}>
              <input name="name" placeholder="Full Name" required />

              <input
                name="phone"
                placeholder="Phone Number (optional)"
                value={phone}
                onChange={(e) => {
                  const v = e.currentTarget.value;
                  setPhone(v);
                  maybeOpenConsent(v);
                }}
                onBlur={(e) => maybeOpenConsent(e.currentTarget.value)}
                inputMode="tel"
                autoComplete="tel"
              />

              <input name="email" placeholder="Email" required inputMode="email" autoComplete="email" />

              <input name="address" placeholder="Service Address" required autoComplete="street-address" />

              <select name="service" required defaultValue="">
                <option value="" disabled>
                  Select Service
                </option>
                <option value="Air Duct Cleaning">Air Duct Cleaning</option>
                <option value="Dryer Vent Cleaning">Dryer Vent Cleaning</option>
                <option value="Chimney Sweep And Repair">Chimney Sweep And Repair</option>
                <option value="Attic Insulation Services">Attic Insulation Services</option>
                <option value="Commercial Duct Cleaning">Commercial Duct Cleaning</option>
              </select>

              <textarea name="message" placeholder="Describe what you need" required />

              <div className="leadFinePrint" style={{ marginTop: 8 }}>
                By submitting, you agree to our{" "}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
                .
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Get My Quote"}
              </button>

              {status === "ok" && <div style={{ marginTop: 10 }}>✅ Sent! We’ll contact you ASAP.</div>}
              {status === "err" && <div style={{ marginTop: 10 }}>❌ {errorMsg}</div>}

              <div className="leadFinePrint">
                Or call now: <a href="tel:+17862757826">(786) 275-7826</a>
              </div>
            </form>
          </aside>
        </div>
      </div>

      <SmsConsentPopup
        open={showConsent}
        businessName="Miami Air Duct Solution"
        consent={consent}
        setConsent={setConsent}
        onClose={() => {
          if (!(consent.smsInfoConsent || consent.smsMarketingConsent)) {
            setPhone("");
          }
          setShowConsent(false);
        }}
      />
    </section>
  );
}
