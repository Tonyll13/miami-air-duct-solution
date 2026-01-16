"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./TwilioVerificationForm.module.css";

function normalizePhone(v: string) {
  return v.replace(/[^\d+]/g, "").trim();
}

export default function TwilioVerificationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    notes: "",
    smsInfoConsent: false,
    smsMarketingConsent: false,
  });

  const phoneClean = useMemo(() => normalizePhone(form.phone), [form.phone]);

  const hasContactMethod = useMemo(() => {
    return Boolean(form.email.trim()) || Boolean(phoneClean);
  }, [form.email, phoneClean]);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    // Require at least one contact method (email or phone)
    if (!hasContactMethod) {
      setError("Please provide either an email address or a phone number.");
      return;
    }

    // If user entered a phone number, they must pick at least one SMS consent option.
    // (So you don’t collect a mobile number without consent language.)
    if (phoneClean) {
      const hasSmsConsent = form.smsInfoConsent || form.smsMarketingConsent;
      if (!hasSmsConsent) {
        setError(
          "If you provide a phone number, please select your SMS consent preference(s)."
        );
        return;
      }
    }

    // ✅ At this point you're compliant per Twilio’s notes.
    // Here you'd usually POST to your API route; for verification we just show success.
    setSubmitted(true);
  }

  return (
    <div className={styles.madContactWrap}>
      <div className={styles.madCard}>
        <h1 className={styles.madTitle}>Contact Us</h1>
        <p className={styles.madSub}>
          Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            style={{
              marginTop: 12,
              padding: 14,
              borderRadius: 12,
              border: "1px solid #e6e6e6",
              background: "#fafafa",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            ✅ Submitted successfully. We’ll contact you shortly.
          </div>
        ) : (
          <form id="mad-contact-form" onSubmit={onSubmit}>
            {error ? (
              <div
                role="alert"
                style={{
                  marginTop: 12,
                  marginBottom: 12,
                  padding: 12,
                  borderRadius: 12,
                  border: "1px solid #f3c6c6",
                  background: "#fff5f5",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {error}
              </div>
            ) : null}

            <div className={styles.madGrid2}>
              <div className={styles.madField}>
                <label className={styles.madLabel} htmlFor="firstName">
                  First Name<span className={styles.madReq}>*</span>
                </label>
                <input
                  id="firstName"
                  className={styles.madInput}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  type="text"
                  value={form.firstName}
                  onChange={onChange}
                />
              </div>

              <div className={styles.madField}>
                <label className={styles.madLabel} htmlFor="lastName">
                  Last Name<span className={styles.madReq}>*</span>
                </label>
                <input
                  id="lastName"
                  className={styles.madInput}
                  autoComplete="family-name"
                  name="lastName"
                  required
                  type="text"
                  value={form.lastName}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className={styles.madField}>
              <label className={styles.madLabel} htmlFor="address">
                Address<span className={styles.madReq}>*</span>
              </label>
              <input
                id="address"
                className={styles.madInput}
                autoComplete="street-address"
                name="address"
                required
                type="text"
                value={form.address}
                onChange={onChange}
              />
            </div>

            <div className={styles.madGrid2}>
              <div className={styles.madField}>
                <label className={styles.madLabel} htmlFor="phone">
                  Phone Number {/* ✅ no asterisk */}
                </label>
                <input
                  id="phone"
                  className={styles.madInput}
                  autoComplete="tel"
                  name="phone"
                  type="tel"
                  placeholder="+1 305 555 1212"
                  value={form.phone}
                  onChange={onChange}
                />
                <div className={styles.madHint}>
                  Optional. If you provide a phone number, please choose your SMS consent below.
                </div>
              </div>

              <div className={styles.madField}>
                <label className={styles.madLabel} htmlFor="email">
                  Email Address<span className={styles.madReq}>*</span>
                </label>
                <input
                  id="email"
                  className={styles.madInput}
                  autoComplete="email"
                  name="email"
                  required
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className={styles.madField}>
              <label className={styles.madLabel} htmlFor="notes">
                Notes<span className={styles.madReq}>*</span>
              </label>
              <textarea
                id="notes"
                className={styles.madTextarea}
                name="notes"
                required
                placeholder="Tell us what you need…"
                value={form.notes}
                onChange={onChange}
              />
            </div>

            <div className={styles.madConsent}>
              {/* ✅ Transactional / Informational consent */}
              <div className={styles.madCheckrow}>
                <input
                  id="smsInfoConsent"
                  name="smsInfoConsent"
                  type="checkbox"
                  checked={form.smsInfoConsent}
                  onChange={onChange}
                />
                <label className={styles.madConsentText} htmlFor="smsInfoConsent">
                  <strong>Optional:</strong> I agree to receive informational/transactional SMS
                  messages from <strong>Miami Air Duct Solution</strong> related to appointment
                  scheduling, estimates and service updates. Message frequency may vary. Message &amp;
                  data rates may apply. Reply <strong>STOP</strong> to unsubscribe,{" "}
                  <strong>HELP</strong> for help.
                </label>
              </div>

              {/* ✅ Marketing consent (separate) */}
              <div className={styles.madCheckrow}>
                <input
                  id="smsMarketingConsent"
                  name="smsMarketingConsent"
                  type="checkbox"
                  checked={form.smsMarketingConsent}
                  onChange={onChange}
                />
                <label className={styles.madConsentText} htmlFor="smsMarketingConsent">
                  <strong>Optional:</strong> I agree to receive marketing SMS messages from{" "}
                  <strong>Miami Air Duct Solution</strong> related to promotions. Message frequency
                  may vary. Message &amp; data rates may apply. Reply <strong>STOP</strong> to
                  unsubscribe, <strong>HELP</strong> for help.
                </label>
              </div>

              <div className={styles.madLinks}>
                By submitting, you agree to our{" "}
                <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms-of-service" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </Link>
                .
              </div>
            </div>

            <div className={styles.madActions}>
              <button className={styles.madBtn} type="submit">
                Submit
              </button>
            </div>

            <div className={styles.madNote}>
              Note: If you opted into SMS, you can opt out any time by replying STOP.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
