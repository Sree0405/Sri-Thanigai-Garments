import Navbar from "@/src/components/layouts/Navbar";
import HeroCarousel from "@/src/components/layouts/HeroCarousel";
import MetricCounters from "@/src/components/MetricCounters";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/layouts/Footer";
import heroImage from "@/src/assets/hero-factory.jpg";

import TestimonialSection from "@/src/components/testimonials/TestimonialSection";
import { getTestimonials } from "@/src/data/testimonial";

import StructuredData from "@/src/seo/StructuredData";
import type { Metadata } from "next";
import {  getCategories} from "@/src/data/categories";
import CollectionCard from "@/src/components/product/CollectionCard";
import CollectionsIntro from "@/src/components/category/CollectionsIntro";

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

  const testimonials = await getTestimonials();
  const categories = await getCategories();
  const heroSlides = [
    {
      tag: "Trusted Garment Manufacturer • Bulk Production • Export Quality",
      highlight: "Sri Thanigai Garments",
      description:
        "Sri Thanigai Garments is a leading garment manufacturer in Chennai delivering high-quality apparel production for men, women and kids with advanced manufacturing infrastructure and strict quality control.",
      backgroundImage: heroImage,
      primaryCTA: {
        text: "Explore Products",
        link: "/products"
      },
      secondaryCTA: {
        text: "Get a Quote",
        link: "/contact"
      },
      metrics: [
        { value: "10+", label: "Years Experience" },
        { value: "500K+", label: "Garments Produced" },
        { value: "100+", label: "Business Clients" }
      ]
    },
    {
      tag: "Trusted Garment Manufacturer • Bulk Production • Export Quality",
      highlight: "Sri Thanigai Garments Garments Garments",
      description:
        "Sri Thanigai Garments is a leading garment manufacturer in Chennai delivering high-quality apparel production for men, women and kids with advanced manufacturing infrastructure and strict quality control.",
      backgroundImage: heroImage,
      primaryCTA: {
        text: "Explore Products",
        link: "/products"
      },
      secondaryCTA: {
        text: "Get a Quote",
        link: "/contact"
      },
      metrics: [
        { value: "10+", label: "Years Experience" },
        { value: "500K+", label: "Garments Produced" },
        { value: "100+", label: "Business Clients" }
      ]
    }    
  ];

  return (
    <div className="min-h-screen">

      <Navbar />

      <main>

        <HeroCarousel slides={heroSlides} />

        <MetricCounters />
<section className="section-padding bg-background">
  <div className="container-narrow">

    <CollectionsIntro />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, i) => (
        <CollectionCard
          key={category.id}
          title={category.name}
          description={category.shortDescription}
          image={category.image ?? undefined}
          href={`/products/${category.slug}`}
          ctaText="Explore Collection"
          index={i}
        />
      ))}
    </div>

  </div>
</section>
        <WhyChooseUs />

        <TestimonialSection testimonials={testimonials}/>

      </main>

      <CTASection />

      <Footer />

      <StructuredData />

    </div>
  );
}