"use client";

import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import { CustomSwiper } from "@/components/common";
import { BREAK_POINT_LG } from "@/constants";
import { useMounted, useScreenSize } from "@/hooks";

import { Card } from "./Card";
import { DiscoverExperiencesSliderProps } from "./types";

export const DiscoverExperiencesSlider: FC<DiscoverExperiencesSliderProps> = ({ data }) => {
  const isMounted = useMounted();
  const { width } = useScreenSize();
  const isDesktop = width >= BREAK_POINT_LG;

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full pt-6 xl:pt-26">
      {isDesktop ? (
        <div
          aria-label="Discover experiences list"
          className="grid grid-cols-3 gap-10 [@media(min-width:1380px)]:gap-21.5"
          role="list"
        >
          {data.map((item) => (
            <div key={item.id} role="listitem">
              <Card alt={item.alt} link={item.link} src={item.src} title={item.title} />
            </div>
          ))}
        </div>
      ) : (
        <CustomSwiper slidesPerView="auto" spaceBetween={16}>
          {data.map((item) => (
            <SwiperSlide
              aria-label={item.title}
              aria-roledescription="slide"
              className="w-full max-w-70.5 md:max-w-fit"
              key={item.id}
              role="group"
            >
              <Card alt={item.alt} link={item.link} src={item.src} title={item.title} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      )}
    </div>
  );
};
