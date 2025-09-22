import Image from "next/image";
import { FC } from "react";

import { HeroProps } from "@/components/home/types";
import { Container } from "@/components/common";

import LocationAndPropertySearch from "./LocationAndPropertySearch";

const Hero: FC<HeroProps> = ({ data }) => (
  <Container
    backgroundClassName="bg-cadet-blue/15"
    className="flex flex-col md:flex-row md:pl-6 xl:pl-27 pt-28 md:pt-55 xl:pt-44 gap-48 md:gap-4 xl:gap-18 relative"
  >
    <div className="max-w-150 w-full xl:pt-32 px-4 md:px-0">
      <h1 className="text-[32px]/12 xl:text-5xl/12 font-lufga-preload flex flex-col gap-3 xl:gap-4 text-police-blue pb-4 md:pb-3 xl:pb-6.5">
        <span className="block">{data.youFocus}</span>
        <span className="block font-semibold">{data.manageYourStay}</span>
      </h1>
      <p className="text-xs/3 xl:text-2xl/6 font-lufga-preload xl:max-w-137.5 w-full text-[#A8B1B8] xl:space-y-3">
        {data.description.map((value) => (
          <span key={value.id} className="xl:block">
            {value.title}&nbsp;
          </span>
        ))}
      </p>
      <LocationAndPropertySearch />
    </div>
    <div className="mx-auto w-full max-h-75.5 md:max-h-89.5 xl:max-w-192 xl:max-h-fit">
      <Image
        src={data.image.src}
        width={768}
        height={724}
        alt={data.image.alt}
        title={data.image.alt}
        priority
        className="md:object-fill object-cover xl:object-cover h-75.5 md:h-89.5 xl:h-fit"
      />
    </div>
  </Container>
);

export default Hero;
