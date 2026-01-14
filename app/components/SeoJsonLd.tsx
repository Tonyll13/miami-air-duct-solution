export function LocalBusinessJsonLd({
  url,
}: {
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Miami Air Duct Solution",
    url,
    telephone: "+1-786-275-7826",
    areaServed: ["Miami, FL", "Sunny Isles Beach, FL", "Dania Beach, FL"],
    serviceType: [
      "Air Duct Cleaning",
      "Dryer Vent Cleaning",
      "Chimney Sweep and Repair",
      "Attic Insulation Services",
      "Commercial Duct Cleaning",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
