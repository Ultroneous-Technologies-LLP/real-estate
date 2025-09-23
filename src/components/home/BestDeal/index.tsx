"use client";

import { FC, useState } from "react";

import { Container } from "@/components/common";

import Dropdown from "./Dropdown";
import { BestDealProps } from "../types";
import HorizontalTab from "./HorizontalTab";
import { LocationOption } from "./types";

const BestDeal: FC<BestDealProps> = ({ description, tabData, title }) => {
  const [selectedCity, setSelectedCity] =
    useState<LocationOption>("Los Angeles");

  return (
    <Container className="pt-20 xl:pt-39 pl-4 md:pl-6 xl:px-27" id="best-deals">
      <div className="relative flex flex-col xl:flex-row items-center justify-center">
        <h2 className="text-2xl/9 md:text-[32px]/12 xl:text-5xl/12 font-lufga-preload text-police-blue text-center">
          <span>{title}</span>
        </h2>
        <Dropdown
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </div>
      <p className="text-xs/4.5 md:text-sm/5 xl:text-2xl/6.5 font-lufga-preload text-[#A8B1B8] max-w-75.5 xl:max-w-124.5 mx-auto w-full pt-1 xl:pt-4 text-center">
        {description}
      </p>
      <HorizontalTab tabData={tabData} currentCity={selectedCity} />
    </Container>
  );
};

export default BestDeal;
