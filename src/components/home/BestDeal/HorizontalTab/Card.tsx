"use client";

import { FC, useState } from "react";
import Link from "next/link";

import { Arrow } from "@/components/icons";
import { NextImageWithFallback } from "@/components/common";

import { BestDealEnum } from "../enum";
import { BestDealCardProps } from "./types";

export const BestDealCard: FC<BestDealCardProps> = ({ image, title, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full group" role="listitem">
      <div className="relative rounded-md overflow-hidden">
        {/* Skeleton loader */}
        {isLoading && (
          <div className="absolute inset-0 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
        <NextImageWithFallback
          src={image}
          width={349}
          height={363}
          alt={title}
          className={`object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-md ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 rounded-lg" />
      </div>
      <h3 className="pt-4 text-base/6 xl:text-xl/6.5 font-lufga-preload text-police-blue">
        {title}
      </h3>
      <div className="flex items-center mt-2 xl:mt-6">
        <Link
          href={link}
          aria-label={`Know more about ${title}`}
          className="text-police-blue hover:underline py-2 px-4 border border-[#C4C4C4] text-base/8 font-semibold font-lufga-preload 
            inline-block max-w-50 w-full rounded-lg group-hover:rounded-full tracking-widest uppercase transition-all duration-300 ease-in-out"
        >
          {BestDealEnum.KNOW_MORE}
        </Link>
        <button
          aria-label={`Go to details of ${title}`}
          className="size-14 bg-police-blue rounded-full flex justify-center items-center -ml-8"
        >
          <Arrow className="text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
