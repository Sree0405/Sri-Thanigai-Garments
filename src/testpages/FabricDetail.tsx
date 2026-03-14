import { useParams, Navigate } from "react-router-dom";

import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import HeroSection from "@/src/components/layouts/HeroSection";
import ProductCard from "@/src/components/ProductCard";

import { getFabricBySlug } from "@/src/data/fabrics";
import { getProductsByFabricId } from "@/src/data/products";

import { motion } from "framer-motion";
import { Check, Droplets } from "lucide-react";
import { Helmet } from "react-helmet-async";

import heroImage from "@/src/assets/hero-factory.jpg";

const FabricDetail = () => {
  const { fabric: fabricSlug } = useParams();
  const fabric = fabricSlug ? getFabricBySlug(fabricSlug) : undefined;

  if (!fabric) return <Navigate to="/fabrics" replace />;

  const productsUsingFabric = getProductsByFabricId(fabric.id);

  return (
    <div className="min-h-screen flex flex-col">

      <Helmet>
        <title>{fabric.name} Fabric - Sri Thanigai Garments</title>
        <meta name="description" content={fabric.description} />
      </Helmet>

      <Navbar />

      <main>

        {/* Hero */}
        <HeroSection
          tag="Fabric Detail"
          title={fabric.name}
          highlight="Fabric"
          description={fabric.description}

          backgroundImage={heroImage}

          breadcrumbs={[
            { label: "Fabrics", href: "/fabrics" },
            { label: fabric.name }
          ]}

          primaryCTA={{
            text: "Contact for Fabric Options",
            link: "/contact"
          }}
        />

        {/* Fabric Details */}
        <section className="section-padding bg-background">

          <div className="container-narrow">

            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* Fabric Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >

                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-lg">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover"
                  />
                </div>

              </motion.div>


              {/* Fabric Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >

                <h2 className="font-heading font-bold text-3xl text-gradient-primary mb-4">
                  {fabric.name}
                </h2>

                <p className="text-muted-foreground text-lg mb-8">
                  {fabric.description}
                </p>


                {/* Properties */}
                <div className="mb-8">

                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-gradient-primary mb-4">
                    Fabric Properties
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {fabric.properties.map(p => (

                      <span
                        key={p}
                        className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                      >

                        <Check className="w-3.5 h-3.5" />

                        {p}

                      </span>

                    ))}

                  </div>

                </div>


                {/* Care Instructions */}
                <div className="mb-10">

                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-gradient-primary mb-4">
                    Care Instructions
                  </h3>

                  <ul className="space-y-3">

                    {fabric.careInstructions.map(c => (

                      <li
                        key={c}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >

                        <Droplets className="w-4 h-4 text-primary mt-1" />

                        {c}

                      </li>

                    ))}

                  </ul>

                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* Products Using Fabric */}
        {productsUsingFabric.length > 0 && (

          <section className="section-padding bg-muted/30">

            <div className="container-narrow">

              <h2 className="font-heading font-bold text-2xl text-gradient-primary mb-10">
                Products Using {fabric.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {productsUsingFabric.map((p, i) => (

                  <ProductCard
                    key={p.id}
                    product={p}
                    index={i}
                  />

                ))}

              </div>

            </div>

          </section>

        )}

        <CTASection />

      </main>

      <Footer />

    </div>
  );
};

export default FabricDetail;