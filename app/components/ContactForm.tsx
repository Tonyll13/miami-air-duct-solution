"use client";

import { useState } from "react";
import SmsConsentPopup from "./SmsConsentPopup"; // תתאים נתיב לפי הפרויקט שלך

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ controlled phone + consent
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

    // תוכל לשחק עם הסף. 7 עובד טוב (לא קופץ על "1")
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

    // ✅ use the controlled phone (יותר אמין)
    fd.set("phone", phone);

    // ✅ stamp consent into the payload (hidden style)
    if (consent.smsInfoConsent) fd.set("smsInfoConsent", "on");
    else fd.delete("smsInfoConsent");

    if (consent.smsMarketingConsent) fd.set("smsMarketingConsent", "on");
    else fd.delete("smsMarketingConsent");

    const phoneRaw = String(fd.get("phone") ?? "").trim();
    const emailRaw = String(fd.get("email") ?? "").trim();
    const phoneC = phoneClean(phoneRaw);

    const smsInfoConsent = fd.get("smsInfoConsent") === "on";
    const smsMarketingConsent = fd.get("smsMarketingConsent") === "on";

    // ✅ Require at least one contact method
    if (!phoneC && !emailRaw) {
      setLoading(false);
      setStatus("err");
      setErrorMsg("Please provide either a phone number or an email address.");
      return;
    }

    // ✅ If phone provided, require at least one SMS consent checkbox
    if (phoneC && !(smsInfoConsent || smsMarketingConsent)) {
      setLoading(false);
      setStatus("err");
      setErrorMsg("If you provide a phone number, please select your SMS consent preference(s).");
      // פותח פופאפ כדי שיבחר מהר
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
    <div className="leadCard">
      <h3>Contact form</h3>
      <p>Send us the details and we’ll get back quickly.</p>

      <form className="leadForm" onSubmit={onSubmit}>
        <input name="name" placeholder="Full name" required />

        {/* ✅ controlled phone */}
        <input
          name="phone"
          placeholder="Phone number (optional)"
          value={phone}
          onChange={(e) => {
            const v = e.currentTarget.value;
            setPhone(v);
            maybeOpenConsent(v);
          }}
          onBlur={(e) => {
            // עדין יותר: אם הוא הדביק מספר ולא הקליד הרבה
            maybeOpenConsent(e.currentTarget.value);
          }}
          inputMode="tel"
          autoComplete="tel"
        />

        <input
          name="email"
          placeholder="Email (optional)"
          inputMode="email"
          autoComplete="email"
        />

        <input
          name="address"
          placeholder="City / Address (optional)"
          autoComplete="street-address"
        />

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

        <textarea name="message" placeholder="How can we help?" />

        {/* ✅ Keep fine print (no SMS mixing here, just legal links) */}
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
          {loading ? "Sending..." : "Send message"}
        </button>

        {status === "ok" && <div style={{ marginTop: 10 }}>✅ Sent! We’ll contact you ASAP.</div>}
        {status === "err" && <div style={{ marginTop: 10 }}>❌ {errorMsg}</div>}
      </form>

      {/* ✅ Popup */}
      <SmsConsentPopup
        open={showConsent}
        businessName="Miami Air Duct Solution"
        consent={consent}
        setConsent={setConsent}
        onClose={() => {
          // אם הוא סגר בלי לבחור כלום → מנקה את הטלפון כדי שלא יהיה “phone without consent”
          if (!(consent.smsInfoConsent || consent.smsMarketingConsent)) {
            setPhone("");
          }
          setShowConsent(false);
        }}
      />
    </div>
  );
}
