"use client";

import { useState } from "react";
import GoogleReviews from "./GoogleReviews";
import ThumbtuckCarusel from "./ThumbtackCarusel";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    const fd = new FormData(form);
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
        <input name="phone" placeholder="Phone number" required />
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

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send message"}
        </button>

        {status === "ok" && (
          <div style={{ marginTop: 10 }}>✅ Sent! We’ll contact you ASAP.</div>
        )}

        {status === "err" && (
          <div style={{ marginTop: 10 }}>❌ {errorMsg}</div>
        )}

        <div className="leadFinePrint">
          By submitting, you agree to be contacted by phone/SMS about your request.
        </div>
      </form>
    </div>
  );
}
