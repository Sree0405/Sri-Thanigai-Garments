"use client";

import Link from "next/link";
import { ArrowRight, Shirt, Layers, CheckCircle } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";

export default function ProductInfo({ product }: any) {

  return (
    <div className="flex flex-col justify-between h-full gap-8 lg:gap-10">

      <div className="min-w-0">
        <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-gradient-primary leading-tight mb-3 sm:mb-4">
          {product.name}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-4 sm:mb-6">
          {product.description}
        </p>

        {product.shortDescription && (
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
            {product.shortDescription}
          </p>
        )}

        <Separator className="mb-6 sm:mb-8" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm min-w-0">
            <Shirt className="text-primary w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="leading-snug">Premium Stitching</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm min-w-0">
            <Layers className="text-primary w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="leading-snug">Quality Fabrics</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm min-w-0">
            <CheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="leading-snug">Durable Finish</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm min-w-0">
            <CheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="leading-snug">Export Quality</span>
          </div>

        </div>

        {product.category && (
          <div className="mb-0 sm:mb-2 flex flex-wrap items-center gap-2">

            <span className="text-sm text-muted-foreground">
              Category:
            </span>

            <Badge variant="secondary" className="text-xs">
              {product.category.name}
            </Badge>

          </div>
        )}

      </div>


      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
        <Link
          href="/contact"
          className="
          inline-flex items-center justify-center
          gap-2
          px-6 sm:px-8 py-3
          rounded-xl
          text-white
          text-sm sm:text-base
          font-semibold
          bg-gradient-to-r from-primary to-indigo-600
          hover:opacity-90
          transition
          shadow-lg
          w-full sm:w-auto sm:min-w-[200px]
          "
        >
          Request Bulk Quote
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/products"
          className="
          inline-flex items-center justify-center
          px-6 sm:px-8 py-3
          rounded-xl
          border border-border
          text-sm font-medium
          hover:bg-muted
          transition
          w-full sm:w-auto
          "
        >
          View More Products
        </Link>

      </div>
    </div>
  );
}