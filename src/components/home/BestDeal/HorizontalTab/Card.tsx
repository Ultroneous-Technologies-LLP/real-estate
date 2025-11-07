"use client";

import Link from "next/link";
import { FC, useState } from "react";

import { NextImageWithFallback } from "@/components/common";
import { Arrow } from "@/components/icons";

import { BestDealEnum } from "../enum";

import { BestDealCardProps } from "./types";

export const BestDealCard: FC<BestDealCardProps> = ({ image, title, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group w-full" role="listitem">
      <div className="relative overflow-hidden rounded-md">
        {/* Skeleton loader */}
        {isLoading && (
          <div className="absolute inset-0 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
        )}
        <NextImageWithFallback
          alt={title}
          className={`h-full w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          height={363}
          onLoad={() => setIsLoading(false)}
          src={image}
          width={349}
        />
        <div className="absolute inset-0 rounded-lg bg-black/0 transition-colors duration-500 group-hover:bg-black/50" />
      </div>
      <h3 className="font-lufga-preload text-police-blue pt-4 text-base/6 xl:text-xl/6.5">
        {title}
      </h3>
      <div className="mt-2 flex items-center xl:mt-6">
        <Link aria-label={`Know more about ${title}`} className="flex w-full" href={link}>
          <div
            className="text-police-blue font-lufga-preload inline-block w-full max-w-50 rounded-lg border border-[#C4C4C4] px-4 
          py-2 text-base/8 font-semibold tracking-widest uppercase !no-underline transition-all duration-300 ease-in-out group-hover:rounded-full hover:underline"
          >
            {BestDealEnum.KNOW_MORE}
          </div>
          <button
            aria-label={`Go to details of ${title}`}
            className="bg-police-blue -ml-8 flex size-14 cursor-pointer items-center justify-center rounded-full"
          >
            <Arrow aria-hidden="true" className="text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
};
