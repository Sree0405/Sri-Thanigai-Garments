"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  product: {
    features?: string[];
  };
}

export default function ProductFeatures({ product }: Props) {

  if (!product.features || product.features.length === 0) return null;

  return (
    <section className="">

      <div className="container-narrow">

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-12"
        >

          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Product Details
          </span>

          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gradient-primary mt-3 mb-4">
            Product Features
          </h2>

          <p className="text-muted-foreground">
            Designed with precision tailoring and high-quality fabrics,
            our garments deliver durability, comfort and professional styling.
          </p>

        </motion.div>


        {/* Features Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {product.features.map((feature, index) => (

            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
              flex items-start gap-3
              p-5
              rounded-xl
              bg-white
              border border-border
              shadow-sm
              hover:shadow-md
              transition
              "
            >

              <Check className="text-primary w-5 h-5 mt-1 flex-shrink-0" />

              <span className="text-sm text-muted-foreground">
                {feature}
              </span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}