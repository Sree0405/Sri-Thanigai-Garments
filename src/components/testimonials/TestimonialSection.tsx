"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialCard from "./TestimonialCard";
import TestimonialForm from "./Testimonialsform";

import { Testimonial } from "@/src/data/testimonial";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  if (!testimonials.length) {
    return (
      <section className="border-t border-border/40  py-16 md:py-20">
        <div className="container-narrow max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gradient-primary">
              What our clients say
            </h2>
          </div>
          <TestimonialForm />
        </div>
      </section>
    );
  }

  const canLoop = testimonials.length >= 4;

  return (
    <section className="border-t border-border/40  py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="container-narrow w-full max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-14 px-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
            Testimonials
          </p>
          <h2 className="font-heading font-bold text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] mt-2 sm:mt-3 text-gradient-primary">
            What our clients say
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base leading-relaxed">
            Trusted by apparel brands for reliable manufacturing, quality, and
            on-time delivery.
          </p>
        </div>

        {/* Wider cards: at most 2 slides on xl so quotes aren’t a tall narrow column */}
        <div className="relative px-0 sm:px-11 md:px-12 lg:px-14">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={canLoop}
            speed={600}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              1100: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
            }}
            className="testimonial-swiper !pb-11 sm:!pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="h-full pb-1">
                  <TestimonialCard {...item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 mx-auto w-full max-w-5xl px-0">
          <TestimonialForm />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
