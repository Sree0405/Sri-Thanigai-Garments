import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import HeroSection from "@/src/components/layouts/HeroSection";

import { motion } from "framer-motion";
import { useState } from "react";

import heroFactory from "@/src/assets/hero-factory.jpg";
import factoryFloor from "@/src/assets/factory-floor.jpg";
import fabricCutting from "@/src/assets/fabric-cutting.jpg";
import mensWear from "@/src/assets/mens-wear.jpg";
import womensWear from "@/src/assets/womens-wear.jpg";
import kidsWear from "@/src/assets/kids-wear.jpg";

const images = [
  { src: heroFactory, alt: "Factory overview", category: "Factory" },
  { src: factoryFloor, alt: "Production floor", category: "Production" },
  { src: fabricCutting, alt: "Fabric cutting process", category: "Production" },
  { src: mensWear, alt: "Men's wear collection", category: "Products" },
  { src: womensWear, alt: "Women's wear collection", category: "Products" },
  { src: kidsWear, alt: "Kids wear collection", category: "Products" },
];

const categories = ["All", "Factory", "Production", "Products"];

const Gallery = () => {

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        {/* Hero */}
        <HeroSection
          tag="Gallery"
          title="Inside Our"
          highlight="Manufacturing Facility"
          description="Explore our garment manufacturing facility, production workflow and product collections through our visual gallery."

          backgroundImage={heroFactory}

          breadcrumbs={[
            { label: "Gallery" }
          ]}
        />

        {/* Filters */}
        <section className="bg-background py-12">

          <div className="container-narrow flex justify-center flex-wrap gap-3">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                  active === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {cat}
              </button>

            ))}

          </div>

        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-background pt-0">

          <div className="container-narrow">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {filtered.map((img, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                >

                  {/* Image */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">

                    <div className="glass-card p-4 rounded-xl backdrop-blur-md">

                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {img.category}
                      </span>

                      <p className="text-white text-sm mt-1">
                        {img.alt}
                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
};

export default Gallery;