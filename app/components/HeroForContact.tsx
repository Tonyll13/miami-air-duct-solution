"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = { src: string; alt: string };

type Props = {
  title: string;
  description?: string;
  slides: Slide[];
  badges?: string[];
  intervalMs?: number;
};

export default function HeroForContact({
  title,
  description,
  slides,
  badges = [],
  intervalMs = 6000,
}: Props) {
  const safeSlides = useMemo(
    () => (slides?.length ? slides : [{ src: "/hero.jpg", alt: title }]),
    [slides, title]
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const t = setInterval(
      () => setIdx((v) => (v + 1) % safeSlides.length),
      intervalMs
    );
    return () => clearInterval(t);
  }, [safeSlides.length, intervalMs]);

  return (
    <section className="serviceHero">
      <div className="serviceHeroMedia">
        <Image
          src={safeSlides[idx].src}
          alt={safeSlides[idx].alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="serviceHeroOverlay" />

        <div className="container serviceHeroInner">
          <div className="serviceHeroText">
            <h1>{title}</h1>
            {description && <p>{description}</p>}

            {badges.length > 0 && (
              <div className="serviceHeroBadges">
                {badges.map((b) => (
                  <span key={b} className="serviceHeroBadge">
                    {b}
                  </span>
                ))}
              </div>
            )}

            <div className="serviceHeroActions">
              <a className="secondaryBtn" href="tel:+17862757826">
                Call (786) 275-7826
              </a>
              <a className="secondaryBtn" href="#contact-form">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
