"use client";

import { useMemo, useState } from "react";
import { Quote, Star } from "lucide-react";

import { cn } from "@/src/lib/utils";

const APPROX_CHARS_BEFORE_COLLAPSE = 260;

interface Props {
  name: string;
  company: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard = ({ name, company, rating, testimonial }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = useMemo(
    () => testimonial.trim().length > APPROX_CHARS_BEFORE_COLLAPSE,
    [testimonial]
  );

  return (
    <article
      className={cn(
        "flex h-full min-h-0 flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm",
        "ring-1 ring-black/[0.03] transition-shadow duration-300 hover:shadow-md",
        "sm:p-6 md:p-7"
      )}
    >
      <div className="mb-4 flex items-start gap-3 text-primary/90">
        <Quote
          className="mt-0.5 h-8 w-8 shrink-0 opacity-80 sm:h-9 sm:w-9"
          strokeWidth={1.25}
          aria-hidden
        />
      </div>

      <blockquote className="min-h-0 flex-1">
        <p
          className={cn(
            "text-foreground/90 text-sm sm:text-[0.9375rem] leading-relaxed text-pretty",
            !expanded && isLong && "line-clamp-5 sm:line-clamp-6"
          )}
        >
          {testimonial}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="mt-3 text-xs font-semibold text-primary hover:underline sm:text-sm"
          >
            {expanded ? "Show less" : "Read full testimonial"}
          </button>
        )}
      </blockquote>

      <footer className="mt-6 border-t border-border/60 pt-5 sm:mt-7 sm:pt-6">
        <div className="mb-2 flex gap-0.5">
          {Array.from({ length: Math.min(5, Math.max(0, rating)) }).map(
            (_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4"
                aria-hidden
              />
            )
          )}
        </div>

        <p className="font-heading font-semibold text-foreground">{name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
          {company}
        </p>
      </footer>
    </article>
  );
};

export default TestimonialCard;
