import data from "@/content/home-page.json";
import { HomeDataType } from "@/components/home/types";
import { BestDeal, GoingOnTrip, Hero } from "@/components/home";

const Home = () => {
  const { bestDealSection, goingOnTripSection, heroSection }: HomeDataType =
    data;

  return (
    <>
      <Hero data={heroSection} />
      <GoingOnTrip data={goingOnTripSection} />
      <BestDeal data={bestDealSection} />
    </>
  );
};

export default Home;
