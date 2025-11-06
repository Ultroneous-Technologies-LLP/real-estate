"use client";

import { FC, useState } from "react";

import { Container } from "@/components/common";

import { Dropdown } from "./Dropdown";
import { HorizontalTab } from "./HorizontalTab";
import { BestDealProps, LocationOption } from "./types";

export const BestDeal: FC<BestDealProps> = ({ description, tabData, title }) => {
  const [selectedCity, setSelectedCity] = useState<LocationOption>("Los Angeles");

  return (
    <Container
      aria-labelledby="best-deals-title"
      className="pt-20 pl-4 md:pl-6 xl:px-27 xl:pt-39"
      id="best-deals"
      role="region"
    >
      <div className="relative flex flex-col items-center justify-center xl:flex-row">
        <h2
          className="md:text-32/12 font-lufga-preload text-police-blue text-center text-2xl/9 xl:text-5xl/12"
          id="best-deals-title"
        >
          <span>{title}</span>
        </h2>
        <Dropdown selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      </div>
      <p className="font-lufga-preload text-cadet-blue-crayola mx-auto w-full max-w-75.5 pt-1 text-center text-xs/4.5 md:text-sm/5 xl:max-w-124.5 xl:pt-4 xl:text-2xl/6.5">
        {description}
      </p>
      <HorizontalTab currentCity={selectedCity} tabData={tabData} />
    </Container>
  );
};
