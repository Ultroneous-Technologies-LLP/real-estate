import { FC } from "react";

import { Container } from "@/components/common";

import { TestimonialProps } from "../types";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial: FC<TestimonialProps> = ({
  sliderData,
  title,
  travelersExperience,
}) => {
  return (
    <Container className="pt-20 md:pt-25 xl:pt-42 px-4 md:px-6 xl:pl-27 pb-22.5 md:pb-25 xl:pb-51.5">
      <h2
        id="going-on-trip-title"
        className="text-2xl/9 xl:text-5xl/12 font-lufga-preload flex flex-col gap-3 xl:gap-4 text-police-blue text-center"
      >
        <span className="block">{title}</span>
        <span className="block font-semibold">{travelersExperience}</span>
      </h2>
      <div className="pt-8 xl:pt-21.5">
        <TestimonialSlider data={sliderData} />
      </div>
    </Container>
  );
};

export default Testimonial;
