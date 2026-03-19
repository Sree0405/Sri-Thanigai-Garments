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
    <section className="relative min-h-[65vh] md:min-h-[80vh] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">

        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

      </div>

      <div className="container-narrow pt-28 md:pt-36 pb-16 md:pb-24">

        <div className="max-w-2xl">

          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 text-white/70 text-xs sm:text-sm"
            >
              <BreadcrumbNav items={breadcrumbs} />
            </motion.div>
          )}

          {/* Tag */}
          {tag && (
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
              inline-block
              px-3 py-1
              rounded-full
              bg-white/10
              border border-white/20
              backdrop-blur-md
              text-xs sm:text-sm
              font-semibold
              text-white/90
              mb-4
            "
            >
              {tag}
            </motion.span>
          )}

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              font-heading font-bold
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              leading-tight
              text-white
              mb-4
            "
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
              text-sm sm:text-base md:text-lg
              text-white/80
              leading-relaxed
              mb-6
              max-w-lg
            "
            >
              {description}
            </motion.p>
          )}

          {/* CTA */}
          {(primaryCTA || secondaryCTA) && (
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex flex-row gap-3 sm:gap-4"
>

  {primaryCTA && (
    <Link
      href={primaryCTA.link}
      className="
        inline-flex items-center justify-center gap-2
        bg-gradient-to-r from-primary to-indigo-600
        text-white
        px-6 py-3
        w-1/2
        rounded-lg
        text-sm sm:text-base
        font-semibold
        hover:scale-[1.03]
        transition
        shadow-lg
      "
    >
      {primaryCTA.text}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )}

  {secondaryCTA && secondaryCTA.link && (
    <Link
      href={secondaryCTA.link}
      className="
        w-1/2
        inline-flex items-center justify-center gap-2
        border border-white/30
        backdrop-blur-md
        text-white
        px-6 py-3
        rounded-lg
        text-sm sm:text-base
        font-semibold
        hover:bg-white/10
        transition
      "
    >
      {secondaryCTA.text}
      <Phone className="w-4 h-4" />
    </Link>
  )}

</motion.div>
          )}

          {/* Metrics */}
          {metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="
                grid grid-cols-3
                gap-3 sm:gap-6
                mt-10 sm:mt-14
                max-w-md
              "
            >
              {metrics.map((item, index) => (
                <div
                  key={index}
                  className="
                  px-3 py-3 sm:px-5 sm:py-4
                  rounded-lg
                  bg-white/10
                  backdrop-blur-lg
                  border border-white/20
                  text-center
                "
                >
                  <p className="text-lg sm:text-2xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wide text-white/70">
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
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://sri-thanigai-garments.vercel.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://sri-thanigai-garments.vercel.app/contact"
              }
            ]
          })
        }}
      />
    </section>
  );
}
