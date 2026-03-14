"use client";

import Link from "next/link";
import { ArrowRight, Shirt, Layers, CheckCircle } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";

export default function ProductInfo({ product }: any) {

  return (
    <div className="flex flex-col justify-between h-full">

      {/* Product Title */}
      <div>

        <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gradient-primary leading-tight mb-4">
          {product.name}
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Short Description */}
        {product.shortDescription && (
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            {product.shortDescription}
          </p>
        )}

        <Separator className="mb-8" />

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-4 mb-8">

          <div className="flex items-center gap-3 text-sm">
            <Shirt className="text-primary w-5 h-5" />
            Premium Stitching
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Layers className="text-primary w-5 h-5" />
            Quality Fabrics
          </div>

          <div className="flex items-center gap-3 text-sm">
            <CheckCircle className="text-primary w-5 h-5" />
            Durable Finish
          </div>

          <div className="flex items-center gap-3 text-sm">
            <CheckCircle className="text-primary w-5 h-5" />
            Export Quality
          </div>

        </div>

        {/* Category Badge */}
        {product.category && (
          <div className="mb-8 flex items-center gap-2">

            <span className="text-sm text-muted-foreground">
              Category:
            </span>

            <Badge variant="secondary" className="text-xs">
              {product.category.name}
            </Badge>

          </div>
        )}

      </div>


      {/* CTA Block */}
      <div className="flex flex-col sm:flex-row gap-4">

        <Link
          href="/contact"
          className="
          inline-flex items-center justify-center
          gap-2
          px-8 py-3
          rounded-xl
          text-white
          font-semibold
          bg-gradient-to-r from-primary to-indigo-600
          hover:opacity-90
          transition
          shadow-lg
          "
        >
          Request Bulk Quote
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/products"
          className="
          inline-flex items-center justify-center
          px-6 py-3
          rounded-xl
          border border-border
          text-sm font-medium
          hover:bg-muted
          transition
          "
        >
          View More Products
        </Link>

      </div>
    </div>
  );
}