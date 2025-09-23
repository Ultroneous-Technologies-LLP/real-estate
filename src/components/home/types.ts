import { Image } from "@/types/common";

interface Description {
  title: string;
  id: number;
}

interface Guides {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

interface DiscoverExperiencesSlider {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export interface HeroProps {
  image: Image;
  youFocus: string;
  manageYourStay: string;
  description: Description[];
}

export interface GoingOnTripProps {
  trip: string;
  yourStay: string;
  guides: Guides[];
  borderImg: Image;
}

interface BestDealItem {
  image: string;
  title: string;
  link: string;
}

export interface TabData {
  Flat: BestDealItem[];
  Bungalow: BestDealItem[];
  Villa: BestDealItem[];
}

export interface BestDealProps {
  title: string;
  description: string;
  tabData: Record<string, TabData>;
}

export interface DiscoverExperiencesProps {
  title: string;
  description: string;
  discoverExperiencesSlider: DiscoverExperiencesSlider[];
}

export interface HomeDataType {
  heroSection: HeroProps;
  goingOnTripSection: GoingOnTripProps;
  bestDealSection: BestDealProps;
  discoverExperiencesSection: DiscoverExperiencesProps;
}
