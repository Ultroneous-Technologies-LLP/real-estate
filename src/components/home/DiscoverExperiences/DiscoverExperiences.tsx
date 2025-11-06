import { FC } from "react";

import { Container } from "@/components/common";

import { DiscoverExperiencesProps } from "./types";
import { DiscoverExperiencesSlider } from "./DiscoverExperiencesSlider";

export const DiscoverExperiences: FC<DiscoverExperiencesProps> = ({
  title,
  description,
  discoverExperiencesSlider,
}) => (
  <Container
    className="pt-20 pl-4 md:pt-25 md:pl-6 lg:pr-6 xl:px-27 xl:pt-48"
    id="experiences"
    aria-labelledby="discover-experiences-section"
  >
    <h2
      id="discover-experiences-title"
      className="text-police-blue font-lufga-preload md:text-32/12 pb-1 text-center text-2xl/8.5 font-semibold xl:pb-4 xl:text-5xl/12"
    >
      <span>{title}</span>
    </h2>
    <p className="text-cadet-blue-crayola font-lufga-preload text-center text-xs/4.5 md:text-sm/5 xl:text-2xl/6.5">
      <span>{description}</span>
    </p>
    <DiscoverExperiencesSlider data={discoverExperiencesSlider} />
  </Container>
);
