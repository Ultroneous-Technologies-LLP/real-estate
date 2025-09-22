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

interface HeroSection {
  image: Image;
  youFocus: string;
  manageYourStay: string;
  description: Description[];
}

export interface HeroProps {
  data: HeroSection;
}

interface GoingOnTripSection {
  trip: string;
  yourStay: string;
  guides: Guides[];
  borderImg: Image;
}

export interface GoingOnTripProps {
  data: GoingOnTripSection;
}

export interface HomeDataType {
  heroSection: HeroSection;
  goingOnTripSection: GoingOnTripSection;
}
