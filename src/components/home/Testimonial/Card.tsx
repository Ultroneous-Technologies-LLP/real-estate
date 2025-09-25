"use client";

import { FC } from "react";
import Image from "next/image";

import { TestimonialCardProps } from "./types";

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  position,
  testimonial,
  src,
  alt,
}) => (
  <div className="relative border-2 border-[#A8B1B8] rounded-4xl pl-16 py-5 pr-5 max-w-[280px] lg:max-w-[432px] w-full mx-auto min-h-[201px] lg:min-h-[273px]">
    <div className="absolute -left-12 lg:-left-14 top-1/2 -translate-y-1/2 w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden p-2 bg-white z-50">
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        className="object-cover w-full h-full rounded-full"
      />
      <div
        className="absolute inset-0 pointer-events-none rounded-full border-2 border-[#A8B1B8]"
        style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)" }}
      />
    </div>
    <h3 className="text-base lg:text-xl font-semibold text-police-blue pb-1 font-lufga-preload">
      {name}
    </h3>
    <p className="text-xs lg:text-base mb-3 lg:mb-4.5 text-[#A8B1B8] font-lufga-preload">
      {position}
    </p>
    <p className="text-xs lg:text-base font-lufga-preload">{testimonial}</p>
  </div>
);

export default TestimonialCard;
