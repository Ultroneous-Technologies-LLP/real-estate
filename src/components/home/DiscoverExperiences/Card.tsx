"use client";

import { FC } from "react";
import Image from "next/image";

import { Arrow } from "@/components/icons";

import { CardProps } from "./types";

const Card: FC<CardProps> = ({ title, alt, src }) => {
  return (
    <div className="relative w-full">
      <Image src={src} width={349} height={517} alt={alt} />
      <div className="flex gap-6.5 items-center absolute bottom-6 w-fit left-4">
        <h3 className="text-xl/7.5 xl:text-3xl/10 text-white font-lufga-preload font-semibold max-w-45 xl:max-w-56.5 w-full break-words">
          <span>{title}</span>
        </h3>
        <div className="size-14 border border-white flex justify-center items-center rounded-full">
          <Arrow className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Card;
