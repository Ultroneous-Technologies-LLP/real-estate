import data from "@/content/home-page.json";
import { HomeDataType } from "@/components/home/types";
import {
  Hero,
  GoingOnTrip,
  BestDeal,
  DiscoverExperiences,
  Testimonial,
} from "@/components/home";

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
