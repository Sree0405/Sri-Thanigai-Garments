"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import BreadcrumbNav from "@/src/components/BreadcrumbNav";
import Image from "next/image";
interface Breadcrumb {
  label: string
  href?: string
}

interface CTA {
  text: string
  link: string
}

interface Metric {
  value: string
  label: string
}

interface HeroSectionProps {
  title: string
  highlight?: string
  description?: string
  tag?: string
  backgroundImage: any
  breadcrumbs?: Breadcrumb[]
  primaryCTA?: CTA
  secondaryCTA?: CTA
  metrics?: Metric[]
}
export default function HeroSection({
  title,
  highlight,
  description,
  tag,
  backgroundImage,
  breadcrumbs = [],
  primaryCTA,
  secondaryCTA,
  metrics = [],
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">

        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        {/* subtle blur layer */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

      </div>

      <div className="container-narrow pt-36 pb-24">

        <div className="max-w-3xl">

          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-white/70"
            >
              <BreadcrumbNav items={breadcrumbs} />
            </motion.div>
          )}

          {/* Tag */}
          {tag && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
              inline-block
              px-4 py-1.5
              rounded-full
              bg-white/10
              border border-white/20
              backdrop-blur-md
              text-sm font-semibold
              text-white/90
              mb-6
            "
            >
              {tag}
            </motion.span>
          )}

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6"
          >
            {title}{" "}
            {highlight && (
              <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-5"
            >

              {primaryCTA && (
                <Link
                  href={primaryCTA.link}
                  className="
                  inline-flex items-center justify-center gap-2
                  bg-gradient-to-r from-primary to-indigo-600
                  text-white
                  px-8 py-4
                  rounded-xl
                  font-semibold
                  hover:scale-[1.04]
                  transition-all
                  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                "
                >
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}

              {secondaryCTA && secondaryCTA.link && (
                <Link
                  href={secondaryCTA.link}
                  className="
                  inline-flex items-center justify-center gap-2
                  border border-white/30
                  backdrop-blur-md
                  text-white
                  px-8 py-4
                  rounded-xl
                  font-semibold
                  hover:bg-white/10
                  transition
                "
                >
                  {secondaryCTA.text}
                  <Phone className="w-5 h-5" />
                </Link>
              )}

            </motion.div>
          )}

          {/* Metrics */}
          {metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-8 mt-16"
            >
              {metrics.map((item, index) => (
                <div
                  key={index}
                  className="
                  px-6 py-4
                  rounded-xl
                  bg-white/10
                  backdrop-blur-lg
                  border border-white/20
                "
                >
                  <p className="text-3xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-white/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </div>
      <script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context":"https://schema.org",
"@type":"BreadcrumbList",
"itemListElement":[
{
"@type":"ListItem",
"position":1,
"name":"Home",
"item":"https://sri-thanigai-garments.vercel.app"
},
{
"@type":"ListItem",
"position":2,
"name":"Contact",
"item":"https://sri-thanigai-garments.vercel.app/contact"
}
]
})
}}
/>
    </section>
  );
}