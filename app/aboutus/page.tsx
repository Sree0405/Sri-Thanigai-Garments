import Navbar from "@/src/components/layouts/Navbar";
import HeroCarousel from "@/src/components/layouts/HeroCarousel";
import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/layouts/Footer";
import productionArea from "@/src/assets/hero-factory.jpg";


import StructuredData from "@/src/seo/StructuredData";
import type { Metadata } from "next";

import AboutUs from "@/src/components/AboutUs"
export const metadata: Metadata = {
  title: "Sri Thanigai Garments | Garment Manufacturer in Chennai | Bulk Apparel Production",

  description:
    "Sri Thanigai Garments is a trusted garment manufacturer in Chennai specializing in bulk apparel production for men, women and kids. Modern manufacturing infrastructure, export-quality stitching and reliable large-scale garment production.",

  keywords: [
    "Sri Thanigai Garments",
    "garment manufacturer Chennai",
    "bulk garment manufacturing India",
    "clothing manufacturer Chennai",
    "apparel manufacturing company",
    "tshirt manufacturer Chennai",
    "garment export company India",
    "textile manufacturing Chennai",
    "custom clothing manufacturer",
    "wholesale garment production"
  ],

  authors: [{ name: "Sri Thanigai Garments" }],

  creator: "Sri Thanigai Garments",
  publisher: "Sri Thanigai Garments",

  metadataBase: new URL("https://www.srithanigaigarments.com"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true
  },

  openGraph: {
    title: "Sri Thanigai Garments | Premium Apparel Manufacturing",
    description:
      "Leading garment manufacturer in Chennai delivering high-quality apparel production with modern infrastructure and strict quality control.",
    url: "https://www.srithanigaigarments.com",
    siteName: "Sri Thanigai Garments",
    images: [
      {
        url: "/images/og-factory.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Thanigai Garments Manufacturing Factory"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Sri Thanigai Garments | Garment Manufacturer",
    description:
      "Premium garment manufacturing company specializing in bulk apparel production for global businesses.",
    images: ["/images/og-factory.jpg"]
  }
};
export default async function Home() {


 const heroSlides = [
  {
    tag: "Established 2020 • Bulk Production • Export Quality",
    highlight: " Established on 2020 • Sri Thanigai Garments",
    description:
      "A trusted Chennai-based garment manufacturer producing quality apparel for men, women and kids with scalable infrastructure, skilled workmanship and strict quality control.",
    backgroundImage: productionArea,
    primaryCTA: {
      text: "Explore Products",
      link: "/products",
    },
    secondaryCTA: {
      text: "Get a Quote",
      link: "/contact",
    },
    metrics: [
      {
        value: "2020",
        label: "Established",
      },
      {
        value: "20K+",
        label: "Monthly Capacity",
      },
      {
        value: "100%",
        label: "Quality Inspection",
      },
    ],
  },
];
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">

      <Navbar />

      <main>

        <HeroCarousel slides={heroSlides} />
        <AboutUs/>

      </main>

      <CTASection />

      <Footer />

      <StructuredData />

    </div>
  );
}