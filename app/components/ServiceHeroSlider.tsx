"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ContactForm from "@/app/components/ContactForm";

type Slide = { src: string; alt: string };

type Props = {
  title: string;
  description?: string;
  slides: Slide[];
  badges?: string[];
  intervalMs?: number;
};

export default function ServiceHeroWithForm({
  title,
  description,
  slides,
  badges = [],
  intervalMs = 6000,
}: Props) {
  const safeSlides = useMemo<Slide[]>(
    () =>
      Array.isArray(slides) && slides.length
        ? slides.filter((s): s is Slide => !!s?.src) // מוודא שאין entries ריקים
        : [{ src: "/hero.jpg", alt: title || "Hero" }],
    [slides, title]
  );

  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);

  // ✅ אם idx יצא מהטווח (אחרי HMR/שינוי slides) - נחזיר אותו ל-0
  useEffect(() => {
    if (idx >= safeSlides.length) setIdx(0);
  }, [idx, safeSlides.length]);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const t = setInterval(() => {
      setIdx((v) => (v + 1) % safeSlides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [safeSlides.length, intervalMs]);

  // ESC closes sheet
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // ✅ fallback קשיח כדי שלא יקרוס לעולם
  const current = safeSlides[idx] ?? safeSlides[0] ?? { src: "/hero.jpg", alt: title || "Hero" };

  return (
    <section className="serviceHero">
      <div className="serviceHeroMedia">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />

        <div className="serviceHeroOverlay" />

        <div className="container serviceHeroInner">
          <div className="serviceHeroText">
            <div className="kicker"></div>
            <h1>{title}</h1>
            {description ? <p>{description}</p> : null}

            {badges.length ? (
              <div className="serviceHeroBadges">
                {badges.map((b) => (
                  <span key={b} className="serviceHeroBadge">
                    {b}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="serviceHeroActions">
              <a className="secondaryBtn" href="tel:+17862757826">
                Call (786) 275-7826
              </a>
              <a className="secondaryBtn" href="/contact">
                Contact
              </a>

              <button
                type="button"
                className="primaryBtn heroQuoteBtn"
                onClick={() => setOpen(true)}
              >
                Get Quote
              </button>
            </div>
          </div>

          <aside className="serviceHeroForm" aria-label="Request a quote">
            <h3>Request a Quote</h3>
            <p>Fill the form and we’ll contact you ASAP.</p>
            <ContactForm />
          </aside>
        </div>

        <div className={`heroSheetBackdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
        <div className={`heroSheet ${open ? "open" : ""}`} role="dialog" aria-modal="true">
          <div className="heroSheetHeader">
            <div>
              <div className="heroSheetTitle">Request a Quote</div>
              <div className="heroSheetSub">We’ll get back quickly.</div>
            </div>
            <button className="heroSheetClose" type="button" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="heroSheetBody">
  <ContactForm />
</div>

        </div>
      </div>
    </section>
  );
}
