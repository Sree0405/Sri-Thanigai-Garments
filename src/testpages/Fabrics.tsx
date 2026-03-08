import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import HeroSection from "@/src/components/layouts/HeroSection";

import { fabrics } from "@/src/data/fabrics";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

import heroImage from "@/src/assets/hero-factory.jpg";

const Fabrics = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Helmet>
        <title>
          Fabric Catalogue - Sri Thanigai Garments | Premium Fabrics
        </title>

        <meta
          name="description"
          content="Explore our premium fabric catalogue including cotton, linen, polyester-cotton blends, rayon, twill and flannel used in our garment manufacturing."
        />
      </Helmet>

      <Navbar />

      <main>

        {/* Hero */}
        <HeroSection
          tag="Fabric Catalogue"
          title="Premium Fabrics"
          highlight="We Use"
          description="We source high-quality fabrics to ensure durability, comfort and premium finish in every garment we manufacture."

          backgroundImage={heroImage}

          breadcrumbs={[
            { label: "Fabrics" }
          ]}

          primaryCTA={{
            text: "Contact for Fabric Options",
            link: "/contact"
          }}
        />

        {/* Fabric Grid */}
        <section className="section-padding bg-background">

          <div className="container-narrow">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >

              <span className="text-primary font-semibold uppercase text-sm tracking-widest">
                Fabric Types
              </span>

              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-4 mb-4">
                High-Quality Fabrics for Durable Garments
              </h2>

              <p className="text-muted-foreground">
                Our garments are crafted using carefully selected fabrics that
                balance comfort, durability and premium finishing.
              </p>

            </motion.div>

            {/* Fabric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {fabrics.map((fabric, i) => (

                <motion.div
                  key={fabric.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >

                  <Link
                    to={`/fabrics/${fabric.slug}`}
                    className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
                  >

                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={fabric.image}
                        alt={fabric.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">

                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                        {fabric.name}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {fabric.description}
                      </p>

                      {/* Fabric Properties */}
                      <div className="flex flex-wrap gap-2 mb-5">

                        {fabric.properties.slice(0, 3).map(p => (
                          <span
                            key={p}
                            className="text-xs px-2.5 py-1 rounded-full bg-accent/20 text-accent-foreground"
                          >
                            {p}
                          </span>
                        ))}

                      </div>

                      {/* CTA */}
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>

                    </div>

                  </Link>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        <CTASection />

      </main>

      <Footer />

    </div>
  );
};

export default Fabrics;