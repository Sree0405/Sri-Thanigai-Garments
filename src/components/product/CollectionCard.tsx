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
  index = 0
}: CollectionCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >

      <Link
        href={href}
        className="group block bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      >

        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6">

          <h3 className="font-heading font-bold text-xl text-gradient-primary mb-2">
            {title}
          </h3>

          {description && (
            <p className="text-muted-foreground text-sm mb-5">
              {description}
            </p>
          )}

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </span>

        </div>

      </Link>

    </motion.div>
  );
};

export default CollectionCard;