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
  return (
    <section className="pb-24 pt-12 px-4 bg-white">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-4 text-gradient-primary">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Trusted by global apparel brands for reliable manufacturing,
            premium quality and timely delivery.
          </p>
        </div>

        <div className="relative px-12 testimonial">

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        <TestimonialForm />

      </div>

      <style jsx global>{`

        .testimonial .swiper{
            padding-left:50px;
            padding-right:50px;
            padding-bottom:50px;
        }

        .testimonial .swiper-button-prev,
        .testimonial .swiper-button-next {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          color: #4f46e5;
          transition: all 0.3s ease;
        }

        .testimonial .swiper-button-prev:hover,
        .testimonial .swiper-button-next:hover {
          transform: scale(1.05);
        }

        .testimonial .swiper-button-prev {
          left: 0;
        }

        .testimonial .swiper-button-next {
          right: 0;
        }

        .testimonial .swiper-pagination {
          bottom: 0;
        }

        .testimonial .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 10px;
          height: 10px;
        }

        .testimonial .swiper-pagination-bullet-active {
          background: #4f46e5;
        }

      `}</style>

    </section>
  );
};

export default TestimonialSection;