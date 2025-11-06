"use client";

import { FC, useState } from "react";

import { NextImageWithFallback } from "@/components/common";

import { TestimonialCardProps } from "./types";

export const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  position,
  testimonial,
  src,
  alt,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="border-cadet-blue-crayola relative mx-auto min-h-50.5 w-full max-w-70 rounded-4xl border-2 py-5 pr-5 pl-16 lg:min-h-68 lg:max-w-108">
      <div className="absolute top-1/2 -left-12 z-50 h-24 w-24 -translate-y-1/2 overflow-hidden rounded-full bg-white p-2 lg:-left-14 lg:h-28 lg:w-28">
        {/* Skeleton loader for avatar */}
        {isLoading && (
          <div className="absolute inset-0 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
        )}
        <NextImageWithFallback
          src={src}
          alt={alt}
          width={96}
          height={96}
          className={`h-full w-full rounded-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
        <div
          className="border-cadet-blue-crayola pointer-events-none absolute inset-0 rounded-full border-2"
          style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)" }}
        />
      </div>
      <h3 className="text-police-blue font-lufga-preload pb-1 text-base font-semibold lg:text-xl">
        {name}
      </h3>
      <p className="text-cadet-blue-crayola font-lufga-preload mb-3 text-xs lg:mb-4.5 lg:text-base">
        {position}
      </p>
      <p className="font-lufga-preload text-xs lg:text-base">{testimonial}</p>
    </div>
  );
};
