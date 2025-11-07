import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import { CustomSwiper } from "@/components/common";

import { BestDealCard } from "./Card";
import { MobileSliderProps } from "./types";

export const MobileSlider: FC<MobileSliderProps> = ({ items }) => (
  <div aria-label="Best deals carousel" className="pt-8 xl:pt-11" role="region">
    <CustomSwiper slidesPerView="auto" spaceBetween={16}>
      {items.map((item, index) => (
        <SwiperSlide className="w-full max-w-70.5 md:max-w-87.5" key={index}>
          <BestDealCard image={item.image} link={item.link} title={item.title} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  </div>
);
