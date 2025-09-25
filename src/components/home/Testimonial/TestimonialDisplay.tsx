"use client";

import { FC } from "react";

import { BREAK_POINT_LG } from "@/constants";
import { useMounted, useScreenSize } from "@/hooks";

import { SliderData } from "../types";
import TestimonialSlider from "./TestimonialSlider";
import TestimonialAnimation from "./TestimonialAnimation";

interface Props {
  data: SliderData[];
}

const TestimonialDisplay: FC<Props> = ({ data }) => {
  const { width } = useScreenSize();
  const mounted = useMounted();

  const isDesktop = width >= BREAK_POINT_LG;
  if (!mounted) return null;

  return (
    <div className="pt-8 xl:pt-21.5">
      {isDesktop ? (
        <TestimonialAnimation data={data} />
      ) : (
        <TestimonialSlider data={data} />
      )}
    </div>
  );
};

export default TestimonialDisplay;
