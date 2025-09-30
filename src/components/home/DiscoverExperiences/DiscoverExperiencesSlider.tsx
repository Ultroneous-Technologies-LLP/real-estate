"use client";

import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import { BREAK_POINT_LG } from "@/constants";
import { useMounted, useScreenSize } from "@/hooks";
import { CustomSwiper } from "@/components/common/CustomSwiper";

import { Card } from "./Card";
import { DiscoverExperiencesSliderProps } from "./types";

export const DiscoverExperiencesSlider: FC<DiscoverExperiencesSliderProps> = ({
  data,
}) => {
  const mounted = useMounted();
  const { width } = useScreenSize();
  const isDesktop = width >= BREAK_POINT_LG;

  if (!mounted) return null;

  return (
    <div className="w-full pt-6 xl:pt-26">
      {isDesktop ? (
        <div
          className="grid grid-cols-3 gap-10 [@media(min-width:1380px)]:gap-21.5"
          role="list"
          aria-label="Discover experiences list"
        >
          {data.map((item) => (
            <div key={item.id} role="listitem">
              <Card title={item.title} alt={item.alt} src={item.src} />
            </div>
          ))}
        </div>
      ) : (
        <CustomSwiper spaceBetween={16} slidesPerView="auto">
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              role="group"
              aria-roledescription="slide"
              aria-label={item.title}
              className="max-w-70.5 w-full md:max-w-fit"
            >
              <Card title={item.title} alt={item.alt} src={item.src} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      )}
    </div>
  );
};
