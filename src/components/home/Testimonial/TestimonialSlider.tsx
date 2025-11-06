"use client";

import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FC, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";

import { CustomSwiper } from "@/components/common";

import { TestimonialSliderProps } from "./types";
import { TESTIMONIAL_BREAKPOINTS } from "./constants";
import { TestimonialCard } from "./Card";

export const TestimonialSlider: FC<TestimonialSliderProps> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Traveler testimonials">
      <CustomSwiper
        modules={[Pagination]}
        spaceBetween={10}
        breakpoints={TESTIMONIAL_BREAKPOINTS}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        aria-live="polite"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={item.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${index + 1} of ${data.length}`}
          >
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <div
        className="mt-4 flex justify-center gap-1 xl:hidden"
        role="tablist"
        aria-label="Testimonial navigation"
      >
        {data.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-selected={activeIndex === index}
            role="tab"
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={clsx(
              "cursor-pointer rounded-xl transition-all duration-700 ease-in-out md:hidden",
              activeIndex === index ? "bg-police-blue h-2 w-3.5" : "bg-police-blue/40 h-2 w-1"
            )}
          />
        ))}
      </div>
    </div>
  );
};
