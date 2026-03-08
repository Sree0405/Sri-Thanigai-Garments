import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import factoryFloor from "@/src/assets/factory-floor.jpg";
import fabricCutting from "@/src/assets/fabric-cutting.jpg";
import heroFactory from "@/src/assets/hero-factory.jpg";

const images = [
  { src: factoryFloor, alt: "Production floor at Sri Thanigai Garments" },
  { src: fabricCutting, alt: "Fabric cutting process" },
  { src: heroFactory, alt: "Factory overview" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Inside Our Facility
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-3 transition-all"
          >
            View Full Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
