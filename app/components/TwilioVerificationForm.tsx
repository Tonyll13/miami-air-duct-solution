"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./TwilioVerificationForm.module.css";

export default function TwilioVerificationForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
              />
            </div>

            <div className={styles.madGrid2}>
              <div className={styles.madField}>
                <label className={styles.madLabel} htmlFor="phone">
                  Phone Number<span className={styles.madReq}>*</span>
                </label>
                <input
                  id="phone"
                  className={styles.madInput}
                  autoComplete="tel"
                  name="phone"
                  type="tel"
                  placeholder="+1 305 555 1212"
                />
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
              />
            </div>

            <div className={styles.madConsent}>
              <div className={styles.madCheckrow}>
                <input id="smsConsent" name="smsConsent" type="checkbox" />
                <label className={styles.madConsentText} htmlFor="smsConsent">
                  <strong>Optional:</strong> I agree to receive SMS messages from{" "}
                  <strong>Miami Air Duct Solution</strong> related to appointment scheduling,
                  estimates, service updates, and promotions. Message frequency may vary. Message
                  &amp; data rates may apply. Reply <strong>STOP</strong> to unsubscribe,{" "}
                  <strong>HELP</strong> for help.
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
              Note: This form collects your information for follow-up. For SMS, you can opt out any
              time by replying STOP.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
