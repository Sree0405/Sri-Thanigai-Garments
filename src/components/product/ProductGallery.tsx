"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductGallery({ product }: any) {

  const images = product.images?.length
    ? product.images
    : [product.coverImage];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-3">

      {/* Main Image */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveImage(swiper.activeIndex)}
      >

        {images.map((img: any, i: number) => (

          <SwiperSlide key={i}>

            <div
              className="
              w-full
              aspect-square sm:aspect-[4/3]
              rounded-xl
              overflow-hidden
              bg-muted
              shadow-md
            "
            >

              <img
                src={img}
                alt={`${product.name} image ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      {/* Mobile Friendly Thumbnails */}
      <div
        className="
        flex
        gap-2
        overflow-x-auto
        scrollbar-hide
        sm:grid
        sm:grid-cols-4
        sm:gap-3
        sm:overflow-visible
      "
      >

        {images.map((img: any, i: number) => (

          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`
              flex-shrink-0
              w-16 h-16
              sm:w-full sm:h-auto sm:aspect-square
              rounded-md
              overflow-hidden
              border
              transition
              ${
                activeImage === i
                  ? "border-primary ring-1 ring-primary"
                  : "border-gray-200"
              }
            `}
          >

            <img
              src={img}
              alt={`${product.name} thumbnail ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
}