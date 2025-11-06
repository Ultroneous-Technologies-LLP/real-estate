"use client";

import { FC } from "react";

import { BREAK_POINT_LG } from "@/constants";
import { useMounted, useScreenSize } from "@/hooks";

import { TestimonialAnimation } from "./TestimonialAnimation";
import { TestimonialSlider } from "./TestimonialSlider";
import { SliderData } from "./types";

interface Props {
  data: SliderData[];
}

export const TestimonialDisplay: FC<Props> = ({ data }) => {
  const { width } = useScreenSize();
  const isMounted = useMounted();

  const isDesktop = width >= BREAK_POINT_LG;
  if (!isMounted) {
    return null;
  }

  return (
    <div className="pt-8 xl:pt-21.5">
      {isDesktop ? <TestimonialAnimation data={data} /> : <TestimonialSlider data={data} />}
    </div>
  );
};
