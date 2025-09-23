type img = {
  src: string;
  alt: string;
};

export type heroSection = {
  image: img;
  youFocus: string;
  manageYourStay: string;
  description: {
    title: string;
    id: number;
  }[];
};

export type goingOnTripSection = {
  trip: string;
  yourStay: string;
  guides: {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
    width: number;
    height: number;
  }[];
  borderImg: img;
};

export type BestDealItem = {
  image: string;
  title: string;
  link: string;
};

export type TabData = {
  Flat: BestDealItem[];
  Bungalow: BestDealItem[];
  Villa: BestDealItem[];
};

export type BestDealSection = {
  title: string;
  description: string;
  tabData: Record<string, TabData>; // city name as key
};

export interface BestDealProps {
  data: BestDealSection;
}

export type homeData = {
  heroSection: heroSection;
  goingOnTripSection: goingOnTripSection;
  BestDealSection: BestDealSection;
};
