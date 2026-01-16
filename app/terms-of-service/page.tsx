import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
};

export default function TermsOfServicePage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "28px 16px" }}>
      <h1 style={{ fontSize: 34, margin: "0 0 10px" }}>Terms of Service</h1>

      <p style={{ marginTop: 0 }}>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of this website
        and any services or communications you request through it.
      </p>

      <h2>Contact &amp; Service Requests</h2>
      <p>
        When you submit your information through our forms, you agree that we may
        contact you to respond, schedule, provide estimates, and send service updates.
      </p>

      <h2>SMS Terms</h2>
      <p>
        If you opt in to SMS, you agree to receive SMS communications from Miami Air Duct
        Solution, including transactional and promotional messages. Message frequency may
        vary. Message and data rates may apply.
      </p>
      <p>
        You may opt out at any time by replying <strong>STOP</strong>. Reply{" "}
        <strong>HELP</strong> for help. Consent to receive SMS messages is not a condition
        of purchase.
      </p>

      <h2>Privacy</h2>
      <p>
        Our handling of personal information is described in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        This website content is provided for general information and may be updated
        without notice. Service availability depends on location and scheduling.
      </p>

      <h2>Contact</h2>
      <p>
        For questions, contact us through the website contact form or by phone.
      </p>
    </main>
  );
}
