import { FC } from "react";
import { Swiper } from "swiper/react";

import { CustomSwiperProps } from "./types";

export const CustomSwiper: FC<CustomSwiperProps> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <Swiper
      className={`w-full overflow-hidden [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:transition-transform [&_.swiper-wrapper]:duration-300 [&_.swiper-wrapper]:ease-in-out 
        [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:shrink-0 ${className}`}
      aria-live="polite"
      {...rest}
    >
      {children}
    </Swiper>
  );
};
