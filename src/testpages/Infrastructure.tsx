import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import HeroSection from "@/src/components/layouts/HeroSection";
import InfrastructureSection from "@/src/components/InfrastructureSection";
import CTASection from "@/src/components/CTASection";

import heroImage from "@/src/assets/hero-factory.jpg";

const Infrastructure = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        <HeroSection
          tag="Manufacturing Infrastructure"
          title="Advanced Garment"
          highlight="Production Facility"
          description="Our production facility is equipped with modern industrial machines designed for precision garment manufacturing and scalable production."

          backgroundImage={heroImage}

          breadcrumbs={[
            { label: "Infrastructure" }
          ]}

          primaryCTA={{
            text: "Request Manufacturing Quote",
            link: "/contact"
          }}
        />

        <InfrastructureSection />

        <CTASection />

      </main>

      <Footer />

    </div>
  );
};

export default Infrastructure;