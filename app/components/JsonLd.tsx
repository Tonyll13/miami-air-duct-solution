import { cleanJsonLd } from "@/app/lib/jsonld";

export default function JsonLd({ data }: { data: unknown }) {
  const safe = cleanJsonLd(data);
  return (
    <script
      type="application/ld+json"
      // חייב להיות stringify, בלי trailing commas
      dangerouslySetInnerHTML={{ __html: JSON.stringify(safe) }}
    />
  );
}
