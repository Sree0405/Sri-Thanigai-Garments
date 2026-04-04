"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  title: string;
  description?: string;
  image?: string;
  href: string;
  ctaText?: string;
  index?: number;
}

const CollectionCard = ({
  title,
  description,
  image,
  href,
  ctaText = "Explore",
  index = 0,
}: CollectionCardProps) => {
  const src = image || "/placeholder.svg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
    >
      <Link
        href={href}
        className="group block rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300"
      >
        <div
          className="
          relative w-full overflow-hidden bg-muted
          aspect-[5/4] max-h-[200px]
          sm:aspect-[16/10] sm:max-h-[220px]
          md:max-h-none md:aspect-[16/10]
        "
        >
          <img
            src={src}
            alt={title}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden
          />
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-gradient-primary mb-1.5 sm:mb-2 leading-snug group-hover:underline-offset-4 decoration-primary/30">
            {title}
          </h3>

          {description && (
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4 sm:mb-5">
              {description}
            </p>
          )}

          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary group-hover:gap-3 transition-all">
            {ctaText}
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;
