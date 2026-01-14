import Script from "next/script";

export default function ThumbtackReviews() {
  return (
    <section className="card">
      <h2 style={{ marginBottom: 12 }}>Thumbtack Reviews</h2>

      <div className="widget" id="tt-review-widget-one">
        <img
          src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg"
          alt="Thumbtack"
          style={{ height: 22, marginBottom: 10 }}
        />

        {/* Optional: placeholder content עד שהסקריפט מזריק את הווידג׳ט */}
        <div id="tt-dynamic" />
      </div>

      <Script
        src="https://www.thumbtack.com/profile/widgets/scripts/?service_pk=565059617257209864&widget_id=review&type=one"
        strategy="afterInteractive"
      />
    </section>
  );
}
