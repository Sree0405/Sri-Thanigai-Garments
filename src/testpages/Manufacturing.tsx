import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import HeroSection from "@/src/components/layouts/HeroSection";
import ProcessTimeline from "@/src/components/ProcessTimeline";
import CTASection from "@/src/components/CTASection";

import heroImage from "@/src/assets/hero-factory.jpg";

const Manufacturing = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        <HeroSection
          tag="Manufacturing Process"
          title="Precision Garment"
          highlight="Manufacturing"
          description="Our structured manufacturing workflow ensures consistent quality, efficient production and reliable delivery for every order."

          backgroundImage={heroImage}

          breadcrumbs={[
            { label: "Manufacturing" }
          ]}

          primaryCTA={{
            text: "Request Manufacturing Quote",
            link: "/contact"
          }}
        />

        <ProcessTimeline />

        <CTASection />

      </main>

      <Footer />

    </div>
  );
};

export default Manufacturing;