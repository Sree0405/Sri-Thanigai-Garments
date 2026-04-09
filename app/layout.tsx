import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import FloatingButtons from "@/src/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.srithanigaigarments.com"),

  title: {
    default: "Sri Thanigai Garments | Garment Manufacturer in Chennai",
    template: "%s | Sri Thanigai Garments",
  },

  description:
    "Sri Thanigai Garments is a trusted garment manufacturer in Chennai specializing in bulk apparel production for men, women and kids with modern infrastructure and export-quality manufacturing.",

  keywords: [
    "garment manufacturer Chennai",
    "apparel manufacturer India",
    "bulk garment manufacturing",
    "clothing manufacturer Chennai",
    "textile manufacturing company",
    "tshirt manufacturer Chennai",
    "garment export company India",
    "custom clothing manufacturing",
    "wholesale garment manufacturer",
  ],

  authors: [{ name: "Sri Thanigai Garments" }],
  creator: "Sri Thanigai Garments",
  publisher: "Sri Thanigai Garments",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sri Thanigai Garments | Premium Garment Manufacturer",
    description:
      "Leading garment manufacturer in Chennai delivering high-quality apparel production with modern infrastructure and strict quality control.",
    url: "https://www.srithanigaigarments.com",
    siteName: "Sri Thanigai Garments",
    images: [
      {
        url: "/images/og-factory.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Thanigai Garments Factory",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sri Thanigai Garments",
    description:
      "Premium garment manufacturing company in Chennai specializing in bulk apparel production.",
    images: ["/images/og-factory.jpg"],
  },

  category: "Manufacturing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sri Thanigai Garments",
    url: "https://www.srithanigaigarments.com",
    logo: "https://www.srithanigaigarments.com/logo.png",
    description:
      "Sri Thanigai Garments is a premium garment manufacturing company in Chennai specializing in high-quality apparel production.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "India",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
    ],
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "Products", "Manufacturing", "Gallery", "Contact"],
    url: [
      "https://www.srithanigaigarments.com/",
      "https://www.srithanigaigarments.com/products",
      "https://www.srithanigaigarments.com/manufacturing",
      "https://www.srithanigaigarments.com/gallery",
      "https://www.srithanigaigarments.com/contact",
    ],
  };

  return (
    <html lang="en">
      <body className="w-full max-w-[100vw] overflow-x-hidden">

        {children}
      <FloatingButtons />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Navigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(navigationSchema),
          }}
        />

      </body>
    </html>
  );
}