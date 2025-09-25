"use client";

import clsx from "clsx";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { FC, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { TestimonialSliderProps } from "./types";

const TestimonialSlider: FC<TestimonialSliderProps> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true, spaceBetween: 8 },
          767: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: true,
            loop: true,
          },
          1024: {
            slidesPerView: 2.3,
            spaceBetween: 20,
            loop: false,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 2.7,
            spaceBetween: 10,
            loop: false,
            centeredSlides: false,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full overflow-hidden [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:transition-transform [&_.swiper-wrapper]:duration-300 [&_.swiper-wrapper]:ease-in-out [&_.swiper-wrapper]:items-stretch
         [&_.swiper-slide]:shrink-0"
      >
        {data.map((value) => (
          <SwiperSlide key={value.id} className="xl:ml-1">
            <div
              className="relative border-2 border-[#A8B1B8] rounded-4xl pl-11.5 py-4 pr-4 xl:py-5 xl:pr-5 xl:pl-16.5 flex flex-col h-full 
            max-w-70.5 md:max-w-93.5 w-full mx-auto"
            >
              <div className="absolute -left-10.5 xl:-left-[55px] top-1/2 -translate-y-1/2 z-50 bg-white">
                <Image
                  src={value.src}
                  alt={value.alt}
                  width={96}
                  height={96}
                  className="object-cover size-16 xl:size-auto"
                />
              </div>
              <h3 className="text-base/6 xl:text-xl/6.5 font-semibold text-police-blue pb-1 font-lufga-preload">
                {value.name}
              </h3>
              <p className="text-xs/4.5 xl:text-base/6.5 mb-3 xl:mb-4.5 text-[#A8B1B8] font-lufga-preload">
                {value.position}
              </p>
              <p className="text-xs/4.5 xl:text-base/6.5 font-lufga-preload">
                {value.testimonial}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-1 mt-4 xl:hidden">
        {data.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={clsx(
              "rounded-xl transition-colors duration-700 ease-in-out",
              {
                "bg-police-blue w-3.5 h-2": activeIndex === index,
                "bg-police-blue/40 w-1 h-2": activeIndex !== index,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
