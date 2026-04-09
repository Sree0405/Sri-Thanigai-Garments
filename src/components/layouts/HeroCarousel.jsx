"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import HeroSection from "./HeroSection";

const HeroCarousel = ({ slides }) => {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, dynamicBullets: true }}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        effect="fade"
        loop={slides.length > 1}
        className="hero-carousel w-full max-w-full overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!box-border !w-full !max-w-full !shrink-0">
            <HeroSection {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;