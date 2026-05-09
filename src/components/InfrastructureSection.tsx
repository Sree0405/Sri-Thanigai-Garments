"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// Related machinery images
import productionArea from "@/src/assets/images/production-area.jpg";
import production2 from "@/src/assets/images/production2.jpg";
import cuttingstorage from "@/src/assets/images/cuttingstorage.jpg";
import ironingArea from "@/src/assets/images/ironingArea.jpg";

interface EquipmentItem {
  title: string;
  image: StaticImageData;
  desc: string;
}

const equipments: EquipmentItem[] = [
  {
    title: "Single Needle Sewing Machine",
    image: productionArea,
    desc: "Single needle sewing machines are used for precision stitching across a wide range of garments. They ensure strong seams and consistent stitch quality in high-volume production.",
  },
  {
    title: "Overlock Machine",
    image: production2,
    desc: "Overlock machines are used for edge finishing and seam reinforcement. They prevent fabric fraying and improve garment durability.",
  },
  {
    title: "Industrial Fabric Cutting Machine",
    image: cuttingstorage,
    desc: "Our high-precision fabric cutting machines ensure accurate pattern cutting across multiple fabric layers, minimizing waste and maintaining uniform garment sizing.",
  },
  {
    title: "Steam Ironing & Finishing Station",
    image: ironingArea,
    desc: "Steam ironing stations are used for final finishing, ensuring garments are wrinkle-free and professionally presented before packaging.",
  },
];

const InfrastructureSection = ({
  limit = false,
}: {
  limit?: boolean;
}) => {
  const displayEquipments = limit ? equipments.slice(0, 2) : equipments;

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">

        {/* Section Heading */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-primary font-semibold uppercase text-sm tracking-widest">
            Equipment & Machinery
          </span>

          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gradient-primary mt-4">
            Modern Garment Manufacturing Equipment
          </h2>

          <p className="text-muted-foreground mt-4">
            Our facility is equipped with advanced industrial machinery that
            enables efficient production, precision stitching, and consistent
            garment quality across every manufacturing stage.
          </p>
        </div>

        {/* Equipment List */}
        <div className="space-y-24">
          {displayEquipments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >

              {/* Image */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-muted">
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <h3 className="font-heading font-bold text-2xl text-gradient-primary mb-4">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InfrastructureSection;