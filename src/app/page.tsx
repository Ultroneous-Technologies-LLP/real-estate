import data from "@/content/home-page.json";
import { HomeDataType } from "@/components/home/types";
import {
  BestDeal,
  DiscoverExperiences,
  GoingOnTrip,
  Hero,
} from "@/components/home";

const Home = () => {
  const {
    bestDealSection,
    goingOnTripSection,
    heroSection,
    discoverExperiencesSection,
  }: HomeDataType = data;

  return (
    <>
      <Hero {...heroSection} />
      <GoingOnTrip {...goingOnTripSection} />
      <BestDeal {...bestDealSection} />
      <DiscoverExperiences {...discoverExperiencesSection} />
    </>
  );
};

export default Home;
