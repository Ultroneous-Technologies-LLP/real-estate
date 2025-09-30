import { FC } from "react";

import { Container } from "@/components/common";

import { DiscoverExperiencesProps } from "../types";
import DiscoverExperiencesSlider from "./DiscoverExperiencesSlider";

const DiscoverExperiences: FC<DiscoverExperiencesProps> = ({
  title,
  description,
  discoverExperiencesSlider,
}) => (
  <Container
    className="pt-20 md:pt-25 xl:pt-48 pl-4 md:pl-6 lg:pr-6 xl:px-27"
    id="experiences"
    aria-labelledby="discover-experiences-section"
  >
    <h2
      id="discover-experiences-title"
      className="text-center text-police-blue font-lufga-preload font-semibold text-2xl/8.5 md:text-32/12 xl:text-5xl/12 pb-1 xl:pb-4"
    >
      <span>{title}</span>
    </h2>
    <p className="text-center text-cadet-blue-crayola font-lufga-preload text-xs/4.5 md:text-sm/5 xl:text-2xl/6.5">
      <span>{description}</span>
    </p>
    <DiscoverExperiencesSlider data={discoverExperiencesSlider} />
  </Container>
);

export default DiscoverExperiences;
