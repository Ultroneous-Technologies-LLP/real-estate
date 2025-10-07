"use client";

import { FC, useState } from "react";

import { Arrow } from "@/components/icons";
import { NextImageWithFallback } from "@/components/common";

import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ title, alt, src }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="relative w-full group"
      role="group"
      aria-label={`Experience card: ${title}`}
      tabIndex={0}
    >
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md" />
      )}
      <NextImageWithFallback
        src={src}
        width={349}
        height={517}
        alt={alt || title}
        className={`object-cover rounded-md transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 rounded-lg xl:max-w-87.5" />
      <div className="flex gap-6.5 items-center absolute bottom-6 w-fit left-4 text-white transition-opacity duration-500">
        <h3 className="text-xl/7.5 xl:text-3xl/10 font-lufga-preload font-semibold max-w-45 xl:max-w-56.5 w-full break-words">
          <span>{title}</span>
        </h3>
        <div
          className="size-14 border border-white flex justify-center items-center rounded-full"
          aria-hidden="true"
        >
          <Arrow className="text-white" />
        </div>
      </div>
    </div>
  );
};
