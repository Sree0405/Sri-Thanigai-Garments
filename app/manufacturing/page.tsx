import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import heroImage from "@/src/assets/hero-factory.jpg";
import HeroCarousel from "@/src/components/layouts/HeroCarousel";
import { getmanufactoring } from "@/src/data/manufactor";
import ProcessTimeline from "@/src/components/ProcessTimeline";

import inspectionRoom from "@/src/assets/images/inspectionRoom.jpg";
import ironingArea from "@/src/assets/images/ironingArea.jpg";
async function Manufacturing() {
  const data = await getmanufactoring();

  const heroSlides = [
    {
  tag: "Advanced Quality Inspection • Precision Checking • Zero Defect Standards",
  highlight: "Strict Quality Control At Every Stage",
  description:
    "Our dedicated inspection team ensures every garment undergoes detailed quality checks before dispatch. From stitching accuracy to fabric consistency and finishing standards, Sri Thanigai Garments maintains strict inspection protocols to deliver reliable export-quality apparel for every client.",
  backgroundImage: inspectionRoom,
  primaryCTA: {
    text: "Explore Infrastructure",
    link: "/infrastructure"  },
  secondaryCTA: {
    text: "Contact Us",
    link: "/contact"
  },
  metrics: [
    { value: "100%", label: "Quality Checked" },
    { value: "500K+", label: "Garments Inspected" },
    { value: "Zero", label: "Compromise Policy" }
  ]
},
{
  tag: "Professional Finishing • Steam Pressing • Premium Presentation",
  highlight: "Perfect Finishing Before Every Delivery",
  description:
    "Our modern ironing and finishing section ensures garments are professionally pressed, refined and prepared for final packaging. With dedicated finishing workflows and careful handling, every product is delivered with a clean, premium and market-ready presentation.",
  backgroundImage: ironingArea,
  primaryCTA: {
    text: "View Infrastructure",
    link: "/infrastructure"  },
  secondaryCTA: {
    text: "Get a Quote",
    link: "/contact"
  },
  metrics: [
    { value: "24/7", label: "Finishing Workflow" },
    { value: "500K+", label: "Garments Finished" },
    { value: "100+", label: "Client Deliveries" }
  ]
}
  ];

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        <HeroCarousel slides={heroSlides} />
        <ProcessTimeline steps={data} />
        <CTASection />

      </main>

      <Footer />

    </div>
  );
}

export default Manufacturing;