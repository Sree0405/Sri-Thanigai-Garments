"use client"

import { motion } from "framer-motion"
import {
  ClipboardList,
  Scissors,
  Factory,
  CircleDot,
  CheckCircle2,
  Package
} from "lucide-react"

import { getAssetUrl } from "@/src/lib/api"

type IconName =
  | "ClipboardList"
  | "Scissors"
  | "Factory"
  | "CircleDot"
  | "CheckCircle2"
  | "Package"

const iconMap = {
  ClipboardList,
  Scissors,
  Factory,
  CircleDot,
  CheckCircle2,
  Package
}

export interface ManufacturingStep {
  id: number | string
  title: string
  desc: string
  image: string
  icon: IconName
}

interface ProcessTimelineProps {
  steps: ManufacturingStep[]
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase text-sm tracking-widest">
            Our Production Workflow
          </span>

          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gradient-primary mt-4">
            From Fabric to Finished Garment
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Our structured manufacturing workflow ensures consistent quality and reliable delivery.
          </p>
        </motion.div>

        <div className="space-y-16">

          {steps.map((step, i) => {

            const Icon = iconMap[step.icon]

            return (
              <motion.div
                key={step.id}
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
                      src={getAssetUrl(step.image)}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">

                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <span className="font-heading font-bold text-3xl text-muted-foreground/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h3 className="font-heading font-bold text-2xl text-gradient-primary mb-4">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.desc}
                  </p>

                </div>

              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline