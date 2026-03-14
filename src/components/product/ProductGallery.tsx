"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductGallery({ product }: any) {

  const images = product.images?.length
    ? product.images
    : [product.coverImage];

  return (
    <div className="space-y-4">

      <Swiper spaceBetween={20} slidesPerView={1}>

        {images.map((img: any, i: number) => (

          <SwiperSlide key={i}>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-lg">

              <img
                src={img}
                alt={product.name}
                className="w-full h-full object-cover"
              />

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      <div className="grid grid-cols-4 gap-3">

        {images.map((img: any, i: number) => (

          <div
            key={i}
            className="aspect-square rounded-lg overflow-hidden border cursor-pointer"
          >

            <img
              src={img}
              alt="thumbnail"
              className="w-full h-full object-cover"
            />

          </div>

        ))}

      </div>

    </div>
  );
}