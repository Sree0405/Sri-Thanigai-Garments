"use client";

import { motion } from "framer-motion";

const CollectionsInfo = () => {
  return (
    <section className="">

      <div className="container-narrow">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          <div>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gradient-primary mb-6">
              High-Quality Garment Manufacturing
            </h2>

            <p className="text-muted-foreground mb-4">
              Our collections are manufactured using advanced stitching
              techniques and carefully selected fabrics to ensure
              durability, comfort and style.
            </p>

            <p className="text-muted-foreground">
              With years of experience in the garment industry, we work
              with brands, wholesalers and exporters to deliver
              high-quality apparel in bulk quantities.
            </p>

          </div>

          <div className="rounded-2xl bg-gradient-to-r from-primary to-indigo-600 text-white p-8 shadow-xl">

            <h3 className="font-semibold text-xl mb-4">
              Why Choose Our Garments?
            </h3>

            <ul className="space-y-3 text-sm">

              <li>✔ Premium fabrics and materials</li>
              <li>✔ Advanced stitching techniques</li>
              <li>✔ Strict quality control standards</li>
              <li>✔ Bulk manufacturing capability</li>
              <li>✔ Reliable export partnerships</li>

            </ul>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CollectionsInfo;