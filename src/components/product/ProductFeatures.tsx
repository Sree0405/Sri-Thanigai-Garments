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
    <section className="border-t border-border/40 bg-muted/30 py-12 sm:py-16 md:py-20">

      <div className="container-narrow">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-8 sm:mb-10 md:mb-12"
        >

          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
            Product Details
          </span>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gradient-primary mt-2 sm:mt-3 mb-3 sm:mb-4">
            Product Features
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Designed with precision tailoring and high-quality fabrics,
            our garments deliver durability, comfort and professional styling.
          </p>

        </motion.div>


        {/* Features Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

          {product.features.map((feature, index) => (

            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
              flex items-start gap-3
              p-4 sm:p-5
              rounded-xl
              bg-card
              border border-border/80
              shadow-sm
              hover:shadow-md
              transition
              "
            >

              <Check className="text-primary w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />

              <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {feature}
              </span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}