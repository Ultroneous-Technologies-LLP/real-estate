"use client";

import clsx from "clsx";
import { FC, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

import { CustomSwiper } from "@/components/common";

import { TestimonialCard } from "./Card";
import { TESTIMONIAL_BREAKPOINTS } from "./constants";
import { TestimonialSliderProps } from "./types";

const INDEX_START = 0;
const FIRST_INDEX = 1;
const TABINDEX_INACTIVE = -1;

export const TestimonialSlider: FC<TestimonialSliderProps> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(INDEX_START);

  return (
    <div aria-label="Traveler testimonials" aria-roledescription="carousel" role="region">
      <CustomSwiper
        aria-live="polite"
        breakpoints={TESTIMONIAL_BREAKPOINTS}
        modules={[Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
      >
        {data.map((item, index) => (
          <SwiperSlide
            aria-label={`Testimonial ${index + FIRST_INDEX} of ${data.length}`}
            aria-roledescription="slide"
            key={item.id}
            role="group"
          >
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <div
        aria-label="Testimonial navigation"
        className="mt-4 flex justify-center gap-1 xl:hidden"
        role="tablist"
      >
        {data.map((_, index) => (
          <button
            aria-label={`Go to testimonial ${index + FIRST_INDEX}`}
            aria-selected={activeIndex === index}
            className={clsx(
              "cursor-pointer rounded-xl transition-all duration-700 ease-in-out md:hidden",
              activeIndex === index ? "bg-police-blue h-2 w-3.5" : "bg-police-blue/40 h-2 w-1"
            )}
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            role="tab"
            tabIndex={activeIndex === index ? INDEX_START : TABINDEX_INACTIVE}
          />
        ))}
      </div>
    </div>
  );
};
