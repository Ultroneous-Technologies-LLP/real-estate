"use client";

import { FC, useState } from "react";

import { Arrow } from "@/components/icons";
import { NextImageWithFallback } from "@/components/common";

import Link from "next/link";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ title, alt, src, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="group relative w-full"
      role="group"
      aria-label={`Experience card: ${title}`}
      tabIndex={0}
    >
      {isLoading && (
        <div className="absolute inset-0 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
      )}
      <NextImageWithFallback
        src={src}
        width={349}
        height={517}
        alt={alt || title}
        className={`rounded-md object-cover transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 rounded-lg bg-black/0 transition-colors duration-500 group-hover:bg-black/50 xl:max-w-87.5" />
      <div className="absolute bottom-6 left-4 flex w-fit items-center gap-6.5 text-white transition-opacity duration-500">
        <h3 className="font-lufga-preload w-full max-w-45 text-xl/7.5 font-semibold break-words xl:max-w-56.5 xl:text-3xl/10">
          <span>{title}</span>
        </h3>
        <Link
          className="flex size-14 items-center justify-center rounded-full border border-white"
          aria-hidden="true"
          href={link}
        >
          <Arrow className="text-white" />
        </Link>
      </div>
    </div>
  );
};
