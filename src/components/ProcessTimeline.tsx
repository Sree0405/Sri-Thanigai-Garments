"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Scissors,
  Factory,
  CircleDot,
  CheckCircle2,
  Package,
} from "lucide-react";

import { getAssetUrl } from "@/src/lib/api";
import { cn } from "@/src/lib/utils";

type IconName =
  | "ClipboardList"
  | "Scissors"
  | "Factory"
  | "CircleDot"
  | "CheckCircle2"
  | "Package";

const iconMap = {
  ClipboardList,
  Scissors,
  Factory,
  CircleDot,
  CheckCircle2,
  Package,
};

export interface ManufacturingStep {
  id: number | string;
  title: string;
  desc: string;
  image: string;
  icon: IconName;
}

interface ProcessTimelineProps {
  steps: ManufacturingStep[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto px-1"
        >
          <span className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-widest">
            Our production workflow
          </span>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-gradient-primary mt-3 sm:mt-4 leading-tight">
            From fabric to finished garment
          </h2>

          <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Structured manufacturing steps for consistent quality and reliable
            delivery.
          </p>
        </motion.div>

        <div>
          <ul className="space-y-12 sm:space-y-14 md:space-y-16 list-none p-0 m-0">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon];
              const reversed = i % 2 === 1;

              return (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="relative"
                >
                  <div
                    className={cn(
                      "grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 lg:items-center",
                      reversed ? "lg:grid-flow-dense" : ""
                    )}
                  >
                    {/* Image — capped width & fixed aspect so it never overwhelms the layout */}
                    <div
                      className={cn(
                        "flex justify-center lg:justify-start",
                        reversed ? "lg:col-start-2 lg:justify-end" : ""
                      )}
                    >
                      <figure className="w-full max-w-[min(100%,420px)] lg:max-w-[min(100%,460px)] xl:max-w-[min(100%,480px)] mx-auto lg:mx-0">
                        <div
                          className={cn(
                            "relative overflow-hidden rounded-xl sm:rounded-2xl",
                            "bg-muted/50 ring-1 ring-border/60",
                            "shadow-md shadow-black/[0.04]",
                            "aspect-[4/3]"
                          )}
                        >
                          <img
                            src={getAssetUrl(step.image)}
                            alt={step.title}
                            className="absolute inset-0 size-full object-cover"
                            loading={i < 2 ? "eager" : "lazy"}
                          />
                          <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"
                            aria-hidden
                          />
                          <figcaption className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-auto">
                            <span className="inline-flex items-center rounded-md bg-background/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground shadow-sm ring-1 ring-border/50 backdrop-blur-sm sm:text-xs sm:px-2.5 sm:py-1.5">
                              Step {i + 1}
                            </span>
                          </figcaption>
                        </div>
                      </figure>
                    </div>

                    {/* Copy */}
                    <div
                      className={cn(
                        "min-w-0 flex flex-col justify-center",
                        reversed ? "lg:col-start-1 lg:row-start-1" : ""
                      )}
                    >
                      <div className="flex items-start gap-3 sm:gap-4 mb-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15 sm:h-12 sm:w-12">
                          <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                        </div>
                        <div className="pt-0.5">
                          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            Phase {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-[1.65rem] text-gradient-primary mb-3 leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-prose">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
