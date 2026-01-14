"use client";

import { useMemo, useRef } from "react";

type TTReview = {
  name: string;
  rating: number; // 1-5
  time: string;   // "11d ago"
  text: string;
  link: string;
};

const THUMBTACK_REVIEWS: TTReview[] = [
  {
    name: "Allan A.",
    rating: 5,
    time: "11d ago",
    text:
      "Moved to a new house and Tony was superb on providing me service of cleaning and sanitizing both A/C handlers and all ducts that weren’t cleaned since they were built. There was disgusting mold and mildew and the house was very stinky. Free estimate visit to diagnose the situation and was pinpoint accurate. He worked hard and after it was done my new house does not smell bad. Totally recommend Tony!!",
    link: "https://www.thumbtack.com/fl/hollywood/duct-cleaning/miami-air-duct-solution/service/565059617257209864",
  },
  {
    name: "Ekaterina S.",
    rating: 5,
    time: "3 weeks ago",
    text:
      "Their air duct cleaning was super quick and totally professional. The air in my place feels way cleaner now — real difference.",
    link: "https://www.thumbtack.com/fl/hollywood/duct-cleaning/miami-air-duct-solution/service/565059617257209864",
  },
  {
    name: "Jenni C.",
    rating: 5,
    time: "4 weeks ago",
    text:
      "The service was smooth, professional, and super efficient. If you want a team that actually shows up and gets things done right, these are your people.",
    link: "https://www.thumbtack.com/fl/hollywood/duct-cleaning/miami-air-duct-solution/service/565059617257209864",
  },
  {
    name: "Jack S.",
    rating: 5,
    time: "3 weeks ago",
    text:
      "Great crew. They checked the whole system, cleaned what needed cleaning, and left the place spotless.",
    link: "https://www.thumbtack.com/fl/hollywood/duct-cleaning/miami-air-duct-solution/service/565059617257209864",
  },
  {
    name: "Harri L.",
    rating: 5,
    time: "3 weeks ago",
    text:
      "Booked a full system clean last weekend and Miami Air Duct Solution knocked it out of the park.",
    link: "https://www.thumbtack.com/fl/hollywood/duct-cleaning/miami-air-duct-solution/service/565059617257209864",
  },
];

function clampRating(n: number) {
  if (Number.isNaN(n)) return 5;
  return Math.max(1, Math.min(5, n));
}

function stars(n: number) {
  const r = clampRating(n);
  return "★★★★★".slice(0, r) + "☆☆☆☆☆".slice(0, 5 - r);
}

export default function ThumbtackReviews() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const reviews = useMemo(() => THUMBTACK_REVIEWS, []);

  function scrollByCard(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>(".reviewCard");
    const gap = 14; // חייב להתאים ל-gap ב-css שלך
    const amount = (card?.offsetWidth ?? 320) + gap;

    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section className="reviewsSection">
      <div className="container">
        <div className="reviewsHeader">
          <div>
            <div className="kicker">Reviews</div>
            <h2>Thumbtack Reviews</h2>
            <p>Verified on Thumbtack</p>
            <p>
              Rating: <strong>5.0</strong>
            </p>
          </div>

          <div className="reviewsPills">
            <span className="reviewsPill">Thumbtack</span>
            <a
              className="secondaryBtn"
              href="https://www.thumbtack.com/fl/hollywood/duct-cleaning/miami-air-duct-solution/service/565059617257209864"
              target="_blank"
              rel="noreferrer"
            >
              See all
            </a>
          </div>
        </div>

        <div className="carousel">
          {/* arrows (כמו גוגל) */}
          <div className="carouselControls" aria-label="Thumbtack carousel controls">
            <button
              className="carouselBtn"
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous review"
            >
              ←
            </button>
            <button
              className="carouselBtn"
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next review"
            >
              →
            </button>
          </div>

          <div className="carouselTrack" ref={trackRef}>
            {reviews.map((r, idx) => (
              <article className="reviewCard" key={`${r.name}-${idx}`}>
                <div className="reviewTop">
                  <div className="reviewSource">
                    <span className="sourceDot thumbtack" />
                    Thumbtack
                  </div>

                  <div className="reviewStars">
                    <span className="stars" aria-label={`${clampRating(r.rating)} out of 5 stars`}>
                      {stars(r.rating)}
                    </span>
                    <span className="reviewTime">{r.time}</span>
                  </div>
                </div>

                <div className="reviewName">{r.name}</div>

                <p className="reviewText">{r.text}</p>

                <div className="reviewFooter">
                  <span className="reviewsPill">Miami Air Duct Solution</span>
                  <a className="reviewLink" href={r.link} target="_blank" rel="noreferrer">
                    View
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="carouselHint"></div>
      </div>
    </section>
  );
}
