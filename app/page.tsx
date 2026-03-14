import Navbar from "@/src/components/layouts/Navbar";
import HeroCarousel from "@/src/components/layouts/HeroCarousel";
import MetricCounters from "@/src/components/MetricCounters";
import ProductShowcase from "@/src/components/ProductShowcase";
import InfrastructureSection from "@/src/components/InfrastructureSection";
import GalleryPreview from "@/src/components/GalleryPreview";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/layouts/Footer";
import heroImage from "@/src/assets/hero-factory.jpg";

import { getmanufactoring } from "@/src/data/manufactor";
import ProcessTimeline from "@/src/components/ProcessTimeline";
import TestimonialSection from "@/src/components/testimonials/TestimonialSection";
import { getTestimonials } from "@/src/data/testimonial";

export default async function Home() {

  const data = await getmanufactoring();
  const testimonials = await getTestimonials();
  const heroSlides = [
    {
      tag: "Trusted Garment Manufacturer • Bulk Production • Export Quality",
      // title: "Premium Garment Manufacturing",
      highlight: "Sri Thanigai Garments",
      description:
        "Sri Thanigai Garments delivers high-quality apparel manufacturing for men, women and kids with modern infrastructure and strict quality control.",
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
      title: "Premium Garment Manufacturing",
      highlight: "Built for Quality & Scale",
      description:
        "Sri Thanigai Garments delivers high-quality apparel manufacturing for men, women and kids with modern infrastructure and strict quality control.",
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
      title: "Premium Garment Manufacturing",
      highlight: "Built for Quality & Scale",
      description:
        "Sri Thanigai Garments delivers high-quality apparel manufacturing for men, women and kids with modern infrastructure and strict quality control.",
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
  ];

  return (
    <div className="min-h-screen">

      <Navbar />

      <main>

        {/* HERO CAROUSEL */}
        <HeroCarousel slides={heroSlides} />

        <MetricCounters />

        <ProductShowcase />


        {/* <GalleryPreview /> */}

        <WhyChooseUs />
        <TestimonialSection testimonials={testimonials}/>
      </main>

      <CTASection />

      <Footer />

    </div>
  );
}