"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Keyboard } from "swiper/modules";
import "swiper/css";

import type { Product } from "@/src/data/products";
import { cn } from "@/src/lib/utils";

type Props = { product: Product };

/** Viewport-relative slide height: readable on phones, scales up on larger screens */
const SLIDE_AREA =
  "h-[min(52dvh,320px)] min-[400px]:h-[min(56dvh,380px)] sm:h-[min(58dvh,420px)] md:h-[min(62dvh,480px)] lg:h-[min(64dvh,540px)]";

export default function ProductGallery({ product }: Props) {
  const images =
    product.images.length > 0
      ? product.images
      : product.cover_image
        ? [product.cover_image]
        : ["/placeholder.svg"];

  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const multi = images.length > 1;

  const goTo = (i: number) => {
    swiperRef.current?.slideTo(i);
    setActiveIndex(i);
  };

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none space-y-3 sm:space-y-4">
      <div
        className={cn(
          "relative rounded-2xl sm:rounded-3xl overflow-hidden",
          "bg-muted/40",
          "ring-1 ring-border/60 shadow-lg shadow-black/[0.04]",
          "dark:shadow-black/25"
        )}
      >
        <Swiper
          modules={[Keyboard]}
          slidesPerView={1}
          spaceBetween={0}
          speed={380}
          keyboard={{ enabled: true }}
          className="product-gallery-swiper w-full [&_.swiper-slide]:h-auto"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map((img, i) => (
            <SwiperSlide key={`${img}-${i}`} className="box-border">
              <div
                className={cn(
                  "relative w-full",
                  SLIDE_AREA,
                  "flex items-center justify-center"
                )}
              >
                <img
                  src={img}
                  alt={`${product.name} — image ${i + 1}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "block max-h-full max-w-full object-contain",
                    "px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5",
                    "select-none"
                  )}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {multi && (
          <>
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-background/50 to-transparent sm:h-16"
              aria-hidden
            />
            <div className="absolute bottom-2.5 left-1/2 z-[2] flex -translate-x-1/2 gap-1 sm:bottom-3">
              {images.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  aria-pressed={activeIndex === i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    activeIndex === i
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-primary/30 hover:bg-primary/50"
                  )}
                />
              ))}
            </div>
            <div className="absolute top-2.5 right-2.5 z-[2] sm:top-3 sm:right-3">
              <span className="inline-flex rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-semibold tabular-nums text-foreground shadow-sm ring-1 ring-border/60 backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-xs">
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </>
        )}
      </div>

      {multi && (
        <div className="px-0.5">
          <p className="sr-only">Select an image to view in the gallery</p>
          <div
            className={cn(
              "flex gap-2 overflow-x-auto pb-0.5 -mx-1 px-1",
              "snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
              "sm:grid sm:grid-cols-4 sm:gap-2.5 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0 md:gap-3"
            )}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {images.map((img, i) => (
              <button
                type="button"
                key={`thumb-${img}-${i}`}
                onClick={() => goTo(i)}
                className={cn(
                  "relative flex-shrink-0 snap-start overflow-hidden rounded-lg sm:rounded-xl",
                  "ring-2 transition-all duration-200 outline-none",
                  "focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  "size-14 min-[400px]:size-[4.25rem]",
                  "sm:size-auto sm:aspect-square sm:min-h-0",
                  activeIndex === i
                    ? "ring-primary shadow-md z-[1]"
                    : "ring-transparent opacity-75 hover:opacity-100 hover:ring-border/80"
                )}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover"
                />
                {activeIndex === i && (
                  <span
                    className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-inset ring-primary/50 sm:rounded-xl"
                    aria-hidden
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
