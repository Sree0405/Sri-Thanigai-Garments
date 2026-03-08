"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAssetUrl } from "@/src/lib/api";

export default function GalleryGrid({ gallery }: any) {

  const [active, setActive] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(gallery.map((item: any) => item.category)))
  ];

  const filtered =
    active === "All"
      ? gallery
      : gallery.filter((item: any) => item.category === active);

  return (
    <>

      {/* FILTER BAR */}

      <section className="relative py-16 bg-background overflow-hidden">

        {/* ambient gradient */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-primary/10 to-indigo-600/10 blur-3xl opacity-40 pointer-events-none"></div>

        <div className="container-narrow relative flex justify-center flex-wrap gap-4">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
              relative px-6 py-2.5 text-sm font-semibold rounded-full
              transition-all duration-300
              ${active === cat
                ? "gradient-custom text-white shadow-lg"
                : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-primary"}
              `}
            >
              {cat}
            </button>

          ))}

        </div>

      </section>



      {/* GALLERY GRID */}

      <section className="pb-32 bg-background">

        <div className="container-narrow">

          <motion.div
            layout
            className="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
          >

            <AnimatePresence>

              {filtered.map((item: any, i: number) => (

                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl shadow-xl"
                >

                  {/* IMAGE */}

                  <div className="relative h-[360px] overflow-hidden">

                    <img
                      src={getAssetUrl(item.images)}
                      alt={item.title}
                      // fill
                      className="
                      object-cover
                      transition-transform duration-[1400ms]
                      group-hover:scale-110
                    "
                    />

                    {/* overlay gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  </div>


                  {/* CONTENT */}

                  <div className="absolute bottom-0 p-8 w-full">

                    {/* category */}

                    <span className="
                    inline-block
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    border border-white/30
                    text-white
                    tracking-wider
                    mb-3
                    ">
                      {item.category}
                    </span>

                    {/* title */}

                    <h3 className="
                    text-white
                    text-xl
                    font-bold
                    leading-tight
                    group-hover:translate-y-[-2px]
                    transition
                    ">
                      {item.title}
                    </h3>

                  </div>


                  {/* glow hover */}

                  <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-r from-primary/10 to-indigo-600/10
                  "></div>

                </motion.div>

              ))}

            </AnimatePresence>

          </motion.div>

        </div>

      </section>

    </>
  );
}