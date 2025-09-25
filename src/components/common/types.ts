import { SwiperProps } from "swiper/react";
import { ComponentPropsWithoutRef, ReactElement, JSX, ReactNode } from "react";

export type SupportedTags = Extract<
  keyof JSX.IntrinsicElements,
  "div" | "header" | "footer" | "section"
>;

export type ContainerProps<T extends SupportedTags> = {
  as?: T;
  backgroundClassName?: string;
  children: ReactElement | ReactElement[];
  className?: string;
  id?: string;
} & ComponentPropsWithoutRef<T>;

export interface CustomSwiperProps extends SwiperProps {
  className?: string;
  children: ReactNode;
}
