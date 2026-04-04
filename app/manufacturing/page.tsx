import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import heroImage from "@/src/assets/hero-factory.jpg";
import HeroCarousel from "@/src/components/layouts/HeroCarousel";
import { getmanufactoring } from "@/src/data/manufactor";
import ProcessTimeline from "@/src/components/ProcessTimeline";

async function Manufacturing() {
  const data = await getmanufactoring();

  const heroSlides = [
    {
      tag: "Manufacturing Process",
      title: "Precision Garment",
      highlight: "Manufacturing",
      description:
        "Our structured manufacturing workflow ensures consistent quality and reliable delivery.",
      backgroundImage: heroImage,
      primaryCTA: {
        text: "Request Manufacturing Quote",
        link: "/contact",
      },
    },
    {
      tag: "Production Excellence",
      title: "Advanced",
      highlight: "Production Line",
      description:
        "Our modern machinery and skilled workforce ensure high production efficiency.",
      backgroundImage: heroImage,
      primaryCTA: {
        text: "Explore Our Process",
        link: "/manufacturing",
      },
    },
    {
      tag: "Quality Assurance",
      title: "Trusted Global",
      highlight: "Manufacturing",
      description:
        "Strict quality checks guarantee garments that meet international standards.",
      backgroundImage: heroImage,
      primaryCTA: {
        text: "Contact us",
        link: "/contact",
      },
    },
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