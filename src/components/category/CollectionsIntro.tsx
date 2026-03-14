"use client";

import { motion } from "framer-motion";

const CollectionsIntro = () => {
  return (
    <section className="pb-16">

      <div className="container-narrow">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >

          <span className="text-2xl font-semibold uppercase tracking-widest text-primary">
            Our Collections
          </span>

          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            Garment Categories We Manufacture
          </h2>

          <p className="text-muted-foreground">
            At Sri Thanigai Garments, we specialize in manufacturing a wide
            range of garments for men, women and kids. Each collection is
            designed with premium fabrics, precision stitching and strict
            quality control standards.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default CollectionsIntro;