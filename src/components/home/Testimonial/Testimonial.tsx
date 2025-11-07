"use client";

import { FC } from "react";

import { Container } from "@/components/common";

import { TestimonialDisplay } from "./TestimonialDisplay";
import { TestimonialProps } from "./types";

export const Testimonial: FC<TestimonialProps> = ({ sliderData, title, travelersExperience }) => (
  <Container
    aria-labelledby="testimonial-title"
    className="px-4 pt-20 pb-22.5 md:px-0 md:pt-25 md:pb-25 xl:pt-42 xl:pb-51.5"
    id="testimonials"
    role="region"
  >
    <h2
      className="font-lufga-preload text-police-blue flex flex-col gap-3 text-center text-2xl/9 xl:gap-4 xl:text-5xl/12"
      id="testimonial-title"
    >
      <span className="block">{title}</span>
      <span className="block font-semibold">{travelersExperience}</span>
    </h2>
    <TestimonialDisplay data={sliderData} />
  </Container>
);
