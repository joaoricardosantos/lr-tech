import { photos, site } from "../data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["ElectronicsStore", "LocalBusiness"],
    name: site.name,
    description:
      "Assistência técnica especializada e loja de smartphones na Cidade da Esperança, Natal-RN.",
    telephone: "+5584987671450",
    image: photos.brand.src,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: "Natal",
      addressRegion: "RN",
      postalCode: "59070-200",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleRating,
      reviewCount: site.googleReviewCount,
      bestRating: 5,
    },
    sameAs: [site.mapsUrl, site.reviewsUrl, site.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
