"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import mensWear from "@/src/assets/mens-wear.jpg";
import womensWear from "@/src/assets/womens-wear.jpg";
import kidsWear from "@/src/assets/kids-wear.jpg";

const categories = [
  {
    name: "Men & Boys Wear",
    examples: ["Formal Shirts", "Casual Shirts", "Cotton Shirts"],
    image: mensWear,
  },
  {
    name: "Women & Girls Wear",
    examples: ["Tops", "Dresses", "Nightwear"],
    image: womensWear,
  },
  {
    name: "Kids Wear",
    examples: ["Casual Wear", "Comfort Clothing"],
    image: kidsWear,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const ProductShowcase = () => {
  return (
    <section className="relative py-32 bg-muted overflow-hidden">

      {/* ambient gradient background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-primary/20 to-indigo-600/20 blur-3xl opacity-40 pointer-events-none"></div>

      <div className="container-narrow relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.35em]">
            Our Products
          </span>

          <h2 className="font-heading text-gradient-primary font-extrabold text-4xl md:text-6xl mt-5 leading-tight">
            Crafted for
              Every Category
          </h2>

          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            From premium formal shirts to comfortable kids' wear,
            we manufacture across all garment categories with
            precision, quality and scale.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {categories.map((cat, i) => (

            <motion.div
              key={cat.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group perspective"
            >

              <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-700 group-hover:-translate-y-2">

                {/* image */}
                <div className="relative h-[420px]">

                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                </div>

                {/* content */}
                <div className="absolute bottom-0 p-10 w-full">

                  <h3 className="text-white text-3xl font-bold mb-5 tracking-tight">
                    {cat.name}
                  </h3>

                  {/* examples */}
                  <div className="flex flex-wrap gap-2 mb-6">

                    {cat.examples.map((ex) => (
                      <span
                        key={ex}
                        className="
                        text-xs
                        px-3 py-1
                        rounded-full
                        bg-white/20
                        backdrop-blur-md
                        border border-white/20
                        text-white
                        tracking-wide
                      "
                      >
                        {ex}
                      </span>
                    ))}

                  </div>

                  {/* CTA */}
                  <Link
                    href="/products"
                    className="
                    inline-flex items-center gap-2
                    text-white
                    font-semibold
                    text-sm
                    group-hover:gap-4
                    transition-all duration-300
                  "
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary/10 to-indigo-600/10"></div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductShowcase; 