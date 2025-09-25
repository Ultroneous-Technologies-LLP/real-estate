import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import CustomSwiper from "@/components/common/CustomSwiper";

import BestDealCard from "./Card";
import { MobileSliderProps } from "../types";

const MobileSlider: FC<MobileSliderProps> = ({ items }) => (
  <div role="region" aria-label="Best deals carousel" className="pt-8 xl:pt-11">
    <CustomSwiper spaceBetween={16} slidesPerView="auto">
      {items.map((item, index) => (
        <SwiperSlide key={index} className="max-w-70.5 w-full md:max-w-87.5">
          <BestDealCard
            image={item.image}
            title={item.title}
            link={item.link}
          />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  </div>
);

export default MobileSlider;
