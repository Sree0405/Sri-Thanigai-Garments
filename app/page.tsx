
import Navbar from "@/src/components/layouts/Navbar";
import HeroSection from "@/src/components/layouts/HeroSection";
import MetricCounters from "@/src/components/MetricCounters";
import ProductShowcase from "@/src/components/ProductShowcase";
import InfrastructureSection from "@/src/components/InfrastructureSection";
import GalleryPreview from "@/src/components/GalleryPreview";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/layouts/Footer";
import heroImage from "@/src/assets/hero-factory.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection
          tag="Trusted Garment Manufacturer • Bulk Production • Export Quality"
          title="Premium Garment Manufacturing"
          highlight="Built for Quality & Scale"
          description="Sri Thanigai Garments delivers high-quality apparel manufacturing for men, women and kids with modern infrastructure and strict quality control."
          backgroundImage={heroImage}
          primaryCTA={{
            text: "Explore Products",
            link: "/products"
          }}
          secondaryCTA={{
            text: "Get a Quote",
            link: "/contact"
          }}
          metrics={[
            { value: "10+", label: "Years Experience" },
            { value: "500K+", label: "Garments Produced" },
            { value: "100+", label: "Business Clients" }
          ]}
        />
        <MetricCounters />
         <ProductShowcase />
       {/* <InfrastructureSection limit={true}/>
        <GalleryPreview />
        <WhyChooseUs />
        <CTASection /> */}
      </main>
      <CTASection/>
      <Footer />
    </div>
  );
}
