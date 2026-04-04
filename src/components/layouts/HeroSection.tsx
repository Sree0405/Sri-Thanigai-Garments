"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import BreadcrumbNav from "@/src/components/BreadcrumbNav";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

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
  /** Shorter hero on small screens — useful for product listing pages */
  compact?: boolean
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
  compact = false,
}: HeroSectionProps) {

  return (
    <section
      className={
        compact
          ? "relative min-h-[42vh] sm:min-h-[52vh] md:min-h-[72vh] lg:min-h-[80vh] flex items-center overflow-hidden"
          : "relative min-h-[65vh] md:min-h-[80vh] flex items-center overflow-hidden"
      }
    >

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

      <div
        className={
          compact
            ? "container-narrow pt-24 sm:pt-28 md:pt-36 pb-10 sm:pb-14 md:pb-24"
            : "container-narrow pt-28 md:pt-36 pb-24 md:pb-28"
        }
      >

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
            className={
              compact
                ? "font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-3 sm:mb-4"
                : "font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-4"
            }
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
              className={cn(
                "flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:gap-4",
                primaryCTA && secondaryCTA?.link && "sm:items-stretch"
              )}
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.link}
                  className={cn(
                    "inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-lg",
                    "bg-gradient-to-r from-primary to-indigo-600 px-5 py-3 text-sm font-semibold",
                    "text-white shadow-lg transition hover:scale-[1.02] sm:px-6 sm:text-base",
                    secondaryCTA?.link ? "sm:flex-1" : "sm:w-auto"
                  )}
                >
                  <span className="truncate">{primaryCTA.text}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0"
                    aria-hidden
                  />
                </Link>
              )}

              {secondaryCTA && secondaryCTA.link && (
                <Link
                  href={secondaryCTA.link}
                  className={cn(
                    "inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-lg",
                    "border border-white/35 bg-white/5 px-5 py-3 text-sm font-semibold",
                    "text-white backdrop-blur-md transition hover:bg-white/10 sm:flex-1 sm:px-6 sm:text-base"
                  )}
                >
                  <span className="truncate">{secondaryCTA.text}</span>
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
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
                "item": "https://www.srithanigaigarments.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://www.srithanigaigarments.com/contact"
              }
            ]
          })
        }}
      />
    </section>
  );
}
