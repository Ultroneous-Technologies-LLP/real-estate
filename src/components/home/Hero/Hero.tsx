import { FC } from "react";

import { Container, NextImageWithFallback } from "@/components/common";

import { HeroProps } from "./types";
import { LocationAndPropertySearch } from "./LocationAndPropertySearch";

export const Hero: FC<HeroProps> = ({
  description,
  image,
  manageYourStay,
  youFocus,
}) => (
  <Container
    backgroundClassName="bg-cadet-blue/15"
    className="flex flex-col md:flex-row md:pl-6 xl:pl-27 pt-28 md:pt-55 xl:pt-44 gap-48 md:gap-4 xl:gap-18 relative"
    role="region"
    aria-label="Hero Section"
  >
    <div className="max-w-150 w-full xl:pt-32 px-4 md:px-0">
      <h1 className="text-32/12 xl:text-5xl/12 font-lufga-preload flex flex-col gap-3 xl:gap-4 text-police-blue pb-4 md:pb-3 xl:pb-6.5">
        <span className="block">{youFocus}</span>
        <span className="block font-semibold">{manageYourStay}</span>
      </h1>
      <p
        className="text-xs/3 xl:text-2xl/6 font-lufga-preload xl:max-w-137.5 w-full text-cadet-blue-crayola xl:space-y-3"
        aria-label="Hero description"
      >
        {description.map((value) => (
          <span key={value.id} className="xl:block">
            {value.title}&nbsp;
          </span>
        ))}
      </p>
      <LocationAndPropertySearch />
    </div>
    <div className="mx-auto w-full max-h-75.5 md:max-h-89.5 xl:max-w-192 xl:max-h-fit">
      <NextImageWithFallback
        src={image.src}
        width={768}
        height={724}
        alt={image.alt}
        title={image.alt}
        priority
        className="md:object-fill object-cover xl:object-cover h-75.5 md:h-89.5 xl:h-fit"
      />
    </div>
  </Container>
);
