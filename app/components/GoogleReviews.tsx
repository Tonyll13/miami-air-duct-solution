"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  authorAttribution?: { displayName?: string; uri?: string };
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
};

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("/api/google-reviews", { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        setReviews(data?.reviews ?? []);
      })
      .catch(() => {});
  }, []);

  function scrollByCard(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>(".reviewCard");
    const amount = (card?.offsetWidth ?? 320) + 14;

    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section className="reviewsSection">
      <div className="container">

        {/* HEADER */}
        <div className="reviewsHeader">
          <div>
            <div className="kicker">Reviews</div>
            <h2>Google Reviews</h2>
            <p>
              Rating: <strong>5.0</strong>
            </p>
          </div>

          <div className="reviewsPills">
            <span className="reviewsPill">Verified on Google</span>
            <a
              className="secondaryBtn"
              href="https://www.google.com/maps/place/Miami+Air+Duct+Solution/@26.0029808,-80.5910874,10z/data=!3m1!4b1!4m6!3m5!1s0x62cdeced65140bc5:0x12102545e7db4f6d!8m2!3d26.0033545!4d-80.261429!16s%2Fg%2F11yp5pcc39?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              target="_blank"
              rel="noreferrer"
            >
              Read on Google
            </a>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="carousel">
          <div className="carouselTrack" ref={trackRef}>
            {reviews.slice(0, 6).map((r, i) => (
              <article key={i} className="reviewCard">
                <div className="reviewTop">
                  <div className="reviewSource">
                    <span className="sourceDot" />
                    Google
                  </div>

                  <div className="reviewStars">
                    <span className="stars">
                      {"★".repeat(r.rating ?? 5)}
                      {"☆".repeat(5 - (r.rating ?? 5))}
                    </span>
                    <span className="reviewTime">
                      {r.relativePublishTimeDescription}
                    </span>
                  </div>
                </div>

                <div className="reviewName">
                  {r.authorAttribution?.displayName ?? "Google user"}
                </div>

                <p className="reviewText">
                  {r.text?.text ?? ""}
                </p>

                <div className="reviewFooter">
                  <span className="reviewsPill">Miami Air Duct Solution</span>
                  <a
                    className="reviewLink"
                    href={r.authorAttribution?.uri}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="carouselControls">
            <button
              className="carouselBtn"
              type="button"
              onClick={() => scrollByCard(-1)}
            >
              ←
            </button>
            <button
              className="carouselBtn"
              type="button"
              onClick={() => scrollByCard(1)}
            >
              →
            </button>
          </div>
        </div>

        <div className="carouselHint"></div>
      </div>
    </section>
  );
}
