import { FC, PropsWithChildren } from "react";

import { BestDeal, DiscoverExperiences, GoingOnTrip, Hero, Testimonial } from "@/components/home";
import data from "@/content/home-page.json";

import { HomePageDataProps } from "./types";

const Home: FC<PropsWithChildren> = () => {
  const {
    heroSection,
    goingOnTripSection,
    bestDealSection,
    discoverExperiencesSection,
    testimonialSection,
  }: HomePageDataProps = data;

  return (
    <>
      <Hero {...heroSection} />
      <GoingOnTrip {...goingOnTripSection} />
      <BestDeal {...bestDealSection} />
      <DiscoverExperiences {...discoverExperiencesSection} />
      <Testimonial {...testimonialSection} />
    </>
  );
};

export default Home;
