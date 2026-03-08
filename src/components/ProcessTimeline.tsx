import { motion } from "framer-motion";

import {
  ClipboardList,
  Scissors,
  Factory,
  CircleDot,
  CheckCircle2,
  Package
} from "lucide-react";

import cuttingImg from "@/src/assets/fabric-cutting.jpg";
import stitchingImg from "@/src/assets/fabric-cutting.jpg";
import qcImg from "@/src/assets/fabric-cutting.jpg";
import packingImg from "@/src/assets/fabric-cutting.jpg";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    image: cuttingImg,
    desc:
      "We begin by understanding client requirements, garment specifications and fabric preferences to ensure production aligns with brand expectations."
  },
  {
    icon: Scissors,
    title: "Fabric Cutting",
    image: cuttingImg,
    desc:
      "Fabric layers are carefully spread and cut using precision cutting machines to ensure accuracy and minimal fabric wastage."
  },
  {
    icon: Factory,
    title: "Production Line",
    image: stitchingImg,
    desc:
      "Skilled operators stitch garments using industrial sewing machines, ensuring durability, clean finishing and consistent production quality."
  },
  {
    icon: CircleDot,
    title: "Button Section",
    image: stitchingImg,
    desc:
      "Button attachment and detailing are completed using specialized machines ensuring strong and neat finishing."
  },
  {
    icon: CheckCircle2,
    title: "Quality Checking",
    image: qcImg,
    desc:
      "Each garment undergoes strict inspection to verify stitching quality, measurements and finishing standards."
  },
  {
    icon: Package,
    title: "Finishing & Packaging",
    image: packingImg,
    desc:
      "Final garments are steam pressed, folded and packed carefully for shipment according to international export standards."
  }
];

const ProcessTimeline = () => {
  return (
    <section className="section-padding bg-background">

      <div className="container-narrow">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="text-primary font-semibold uppercase text-sm tracking-widest">
            Our Production Workflow
          </span>

          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            From Fabric to Finished Garment
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Our structured 6-step manufacturing process ensures quality control,
            efficient production and timely delivery.
          </p>

        </motion.div>


        {/* Timeline Cards */}
        <div className="space-y-16">

          {steps.map((step, i) => (

            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >

              {/* Image */}
              <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>

                <div className="rounded-2xl overflow-hidden shadow-lg bg-muted">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>


              {/* Content */}
              <div className={`${i % 2 === 1 ? "lg:col-start-1" : ""}`}>

                <div className="flex items-center gap-4 mb-4">

                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  <span className="font-heading font-bold text-3xl text-muted-foreground/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                </div>

                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {step.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ProcessTimeline;