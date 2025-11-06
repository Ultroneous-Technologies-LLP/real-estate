"use client";

import { FC } from "react";

import { TestimonialCard } from "./Card";
import { TestimonialSliderProps } from "./types";

export const TestimonialAnimation: FC<TestimonialSliderProps> = ({ data }) => (
  <div
    aria-label="Traveler testimonials"
    aria-roledescription="carousel"
    className="overflow-hidden"
    role="region"
  >
    <div className="animate-marquee pause-marquee flex w-max gap-25">
      {[...data, ...data].map((item, idx) => (
        <TestimonialCard key={`${item.id}-${idx}`} {...item} />
      ))}
    </div>
  </div>
);
