"use client";

import { FC } from "react";

import { TestimonialCard } from "./Card";
import { TestimonialSliderProps } from "./types";

export const TestimonialAnimation: FC<TestimonialSliderProps> = ({ data }) => (
  <div
    role="region"
    aria-roledescription="carousel"
    aria-label="Traveler testimonials"
    className="overflow-hidden"
  >
    <div className="flex gap-25 w-max animate-marquee pause-marquee">
      {[...data, ...data].map((item, idx) => (
        <TestimonialCard key={`${item.id}-${idx}`} {...item} />
      ))}
    </div>
  </div>
);
