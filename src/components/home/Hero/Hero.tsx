import { FC } from "react";

import { Container, NextImageWithFallback } from "@/components/common";

import { LocationAndPropertySearch } from "./LocationAndPropertySearch";
import { HeroProps } from "./types";

export const Hero: FC<HeroProps> = ({ description, image, manageYourStay, youFocus }) => (
  <Container
    aria-label="Hero Section"
    backgroundClassName="bg-cadet-blue/15"
    className="relative flex flex-col gap-48 pt-28 md:flex-row md:gap-4 md:pt-55 md:pl-6 xl:gap-18 xl:pt-44 xl:pl-27"
    role="region"
  >
    <div className="w-full max-w-150 px-4 md:px-0 xl:pt-32">
      <h1 className="text-32/12 font-lufga-preload text-police-blue flex flex-col gap-3 pb-4 md:pb-3 xl:gap-4 xl:pb-6.5 xl:text-5xl/12">
        <span className="block">{youFocus}</span>
        <span className="block font-semibold">{manageYourStay}</span>
      </h1>
      <p
        aria-label="Hero description"
        className="font-lufga-preload text-cadet-blue-crayola w-full text-xs/3 xl:max-w-137.5 xl:space-y-3 xl:text-2xl/6"
      >
        {description.map((value) => (
          <span className="xl:block" key={value.id}>
            {value.title}&nbsp;
          </span>
        ))}
      </p>
      <LocationAndPropertySearch />
    </div>
    <div className="mx-auto max-h-75.5 w-full md:max-h-89.5 xl:max-h-fit xl:max-w-192">
      <NextImageWithFallback
        alt={image.alt}
        className="h-75.5 object-cover md:h-89.5 md:object-fill xl:h-fit xl:object-cover"
        height={724}
        priority
        src={image.src}
        title={image.alt}
        width={768}
      />
    </div>
  </Container>
);
