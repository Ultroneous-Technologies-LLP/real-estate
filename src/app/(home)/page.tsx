import data from "@/content/home-page.json";
import {
  Hero,
  GoingOnTrip,
  BestDeal,
  DiscoverExperiences,
  Testimonial,
} from "@/components/home";

import { HomeDataType } from "./types";

const Home = () => {
  const {
    heroSection,
    goingOnTripSection,
    bestDealSection,
    discoverExperiencesSection,
    testimonialSection,
  }: HomeDataType = data;

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
