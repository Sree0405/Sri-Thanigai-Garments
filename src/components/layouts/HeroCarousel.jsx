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
    <div className="w-full max-w-[100vw] overflow-x-clip">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        effect="fade"
        loop={slides.length > 1}
        className="hero-carousel w-full max-w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!box-border">
            <HeroSection {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;