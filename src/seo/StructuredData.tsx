export default function StructuredData() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Sri Thanigai Garments",
    url: "https://www.srithanigaigarments.com",
    logo: "https://www.srithanigaigarments.com/logo.png",
    image: "https://www.srithanigaigarments.com/images/og-factory.jpg",
    description:
      "Sri Thanigai Garments is a premium garment manufacturing company in Chennai specializing in high-quality apparel production for men, women and kids.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "India"
    },

    areaServed: "Worldwide",

    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}