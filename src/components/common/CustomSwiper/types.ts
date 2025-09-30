import { ReactNode } from "react";
import { SwiperProps } from "swiper/react";

export interface CustomSwiperProps extends SwiperProps {
  className?: string;
  children: ReactNode;
}