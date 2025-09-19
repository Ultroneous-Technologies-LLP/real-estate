import data from "@/content/home-page.json";
import { HomeDataType } from "@/components/home/types";
import { Hero } from "@/components/home";

const Home = () => {
  const homeData: HomeDataType = data;
  return <Hero data={homeData.heroSection} />;
};

export default Home;
