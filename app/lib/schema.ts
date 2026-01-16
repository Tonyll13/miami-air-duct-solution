// app/lib/schema.ts
const SITE = "https://miamiairductsolution.com";
const BRAND = "Miami Air Duct Solution";

// אם יש לך לוגו אמיתי ב-public (מומלץ): /logo.png
const LOGO_URL = `${SITE}/logo.jpeg`;

// טלפון בפורמט E.164 (כבר יש לך)
const PHONE_E164 = "+17862757826";

type BreadcrumbItem = { name: string; path: string };

function absUrl(path: string) {
  if (!path.startsWith("/")) path = "/" + path;
  return `${SITE}${path}`;
}

export function webpageSchema(params: {
  urlPath: string;
  name: string;
  description?: string;
}) {
  const url = absUrl(params.urlPath);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: params.name,
    description: params.description,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#localbusiness` },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE}#breadcrumbs-${items.map((i) => i.path).join("|")}`,
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

export function serviceSchema(params: {
  urlPath: string; // "/services/air-duct-cleaning"
  name: string; // "Air Duct Cleaning"
  serviceType?: string; // optional
  description?: string;
  areaServed?: string[]; // optional (locations pages should set 1 city)
}) {
  const url = absUrl(params.urlPath);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: params.name,
    serviceType: params.serviceType ?? params.name,
    description: params.description,
    url,
    provider: { "@id": `${SITE}/#localbusiness` },
    areaServed:
      params.areaServed ?? ["Miami-Dade County, FL", "Broward County, FL", "Palm Beach County, FL"],
  };
}

export function blogPostingSchema(params: {
  urlPath: string; // "/blog/slug"
  headline: string;
  description?: string;
  datePublished: string; // "YYYY-MM-DD"
  dateModified?: string; // "YYYY-MM-DD"
  imagePath?: string; // "/blog/xxx.jpg" (אופציונלי אבל מומלץ)
}) {
  const url = absUrl(params.urlPath);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    mainEntityOfPage: url,
    headline: params.headline,
    description: params.description,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    author: { "@type": "Organization", "@id": `${SITE}/#org`, name: BRAND },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: BRAND,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    image: params.imagePath ? absUrl(params.imagePath) : undefined,
    url,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#localbusiness` },
  };
}

export function blogIndexSchema() {
  const url = absUrl("/blog");
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name: `${BRAND} Blog`,
    publisher: { "@id": `${SITE}/#org` },
  };
}

export function contactPageSchema(params: {
  urlPath: string; // "/contact"
  name?: string;
}) {
  const url = absUrl(params.urlPath);

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contactpage`,
    url,
    name: params.name ?? "Contact",
    about: { "@id": `${SITE}/#localbusiness` },
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#localbusiness`,
      name: BRAND,
      url: SITE,
      telephone: PHONE_E164,
    },
  };
}

export function faqSchema(params: {
  urlPath: string; // "/faqs"
  questions: { q: string; a: string }[];
}) {
  const url = absUrl(params.urlPath);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    mainEntity: params.questions.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

// אופציונלי: VideoObject אם תרצה לעשות schema לסרטונים (לא חובה כדי להגיע ל-0 errors)
export function videoSchema(params: {
  urlPath: string;
  name: string;
  description?: string;
  embedUrl: string; // https://www.youtube.com/embed/...
}) {
  const url = absUrl(params.urlPath);
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${url}#video-${encodeURIComponent(params.embedUrl)}`,
    name: params.name,
    description: params.description,
    embedUrl: params.embedUrl,
    url,
    publisher: { "@id": `${SITE}/#org` },
  };
}
export function localBusinessSchema(params?: {
  addressLocality?: string; // "Miami"
  addressRegion?: string;   // "FL"
  postalCode?: string;      // אופציונלי
  addressCountry?: string;  // "US"
  priceRange?: string;      // "$$"
  imagePath?: string;       // "/logo.jpeg"
  hasMapUrl?: string;       // לינק לגוגל מפות
}) {
  const p = params ?? {};

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE}/#localbusiness`,
    name: BRAND,
    url: SITE,
    telephone: PHONE_E164,

    // ✅ SAB: כתובת "מינימלית" בלי רחוב
    address: {
      "@type": "PostalAddress",
      addressLocality: p.addressLocality ?? "Miami",
      addressRegion: p.addressRegion ?? "FL",
      addressCountry: p.addressCountry ?? "US",
      ...(p.postalCode ? { postalCode: p.postalCode } : {}),
    },

    // ✅ מומלץ כדי שגוגל לא יזרוק warnings
    image: absUrl(p.imagePath ?? "/logo.jpeg"),
    logo: LOGO_URL,
    priceRange: p.priceRange ?? "$$",

    // ✅ SAB מתאים מאוד
    areaServed: [
      "Miami-Dade County, FL",
      "Broward County, FL",
      "Palm Beach County, FL",
    ],

    serviceType: [
      "Air Duct Cleaning",
      "Dryer Vent Cleaning",
      "Chimney Sweep and Repair",
      "Attic Insulation Services",
      "Commercial Duct Cleaning",
    ],

    ...(p.hasMapUrl ? { hasMap: p.hasMapUrl } : {}),
  };
}


