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
      className="smsModal"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="smsPanel"
        role="dialog"
        aria-modal="true"
        aria-label="SMS consent options"
      >
        <div className="smsHeader">
          <h3 className="smsTitle">SMS Consent</h3>

          <button
            type="button"
            className="smsClose"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <p className="smsDesc">
          You entered a phone number. Please choose your SMS preference(s). (Optional)
        </p>

        <label className="smsRow">
          <input
            className="smsCheck"
            type="checkbox"
            checked={consent.smsInfoConsent}
            onChange={(e) =>
              setConsent({ ...consent, smsInfoConsent: e.currentTarget.checked })
            }
          />
          <span className="smsText">
            <strong>Optional:</strong> I agree to receive informational/transactional SMS messages
            from <strong>{businessName}</strong> related to appointment scheduling, estimates and
            service updates. Message frequency may vary. Message &amp; data rates may apply. Reply{" "}
            <strong>STOP</strong> to unsubscribe, <strong>HELP</strong> for help.
          </span>
        </label>

        <label className="smsRow">
          <input
            className="smsCheck"
            type="checkbox"
            checked={consent.smsMarketingConsent}
            onChange={(e) =>
              setConsent({ ...consent, smsMarketingConsent: e.currentTarget.checked })
            }
          />
          <span className="smsText">
            <strong>Optional:</strong> I agree to receive marketing SMS messages from{" "}
            <strong>{businessName}</strong> related to promotions. Message frequency may vary.
            Message &amp; data rates may apply. Reply <strong>STOP</strong> to unsubscribe,{" "}
            <strong>HELP</strong> for help.
          </span>
        </label>

        <div className="smsActions">
          <button type="button" className="smsDone" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
