"use client";

import { useEffect, useRef } from "react";

type Consent = {
  smsInfoConsent: boolean;
  smsMarketingConsent: boolean;
};

export default function SmsConsentPopup({
  open,
  businessName = "Miami Air Duct Solution",
  onClose,
  consent,
  setConsent,
}: {
  open: boolean;
  businessName?: string;
  onClose: () => void;
  consent: Consent;
  setConsent: (next: Consent) => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        display: "grid",
        placeItems: "center",
        zIndex: 9999,
        padding: 16,
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="SMS consent options"
        style={{
          width: "min(720px, 100%)",
          background: "#fff",
          borderRadius: 14,
          padding: 18,
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <h3 style={{ margin: 0 }}>SMS Consent</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              border: "none",
              background: "transparent",
              fontSize: 22,
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <p style={{ marginTop: 8, marginBottom: 12 }}>
          You entered a phone number. Please choose your SMS preference(s). (Optional)
        </p>

        <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
          <input
            type="checkbox"
            checked={consent.smsInfoConsent}
            onChange={(e) => setConsent({ ...consent, smsInfoConsent: e.currentTarget.checked })}
          />
          <span>
            <strong>Optional:</strong> I agree to receive informational/transactional SMS messages
            from <strong>{businessName}</strong> related to appointment scheduling, estimates and
            service updates. Message frequency may vary. Message &amp; data rates may apply. Reply{" "}
            <strong>STOP</strong> to unsubscribe, <strong>HELP</strong> for help.
          </span>
        </label>

        <label style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <input
            type="checkbox"
            checked={consent.smsMarketingConsent}
            onChange={(e) =>
              setConsent({ ...consent, smsMarketingConsent: e.currentTarget.checked })
            }
          />
          <span>
            <strong>Optional:</strong> I agree to receive marketing SMS messages from{" "}
            <strong>{businessName}</strong> related to promotions. Message frequency may vary.
            Message &amp; data rates may apply. Reply <strong>STOP</strong> to unsubscribe,{" "}
            <strong>HELP</strong> for help.
          </span>
        </label>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 16 }}>
          <button type="button" onClick={onClose} style={{ padding: "10px 14px" }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
