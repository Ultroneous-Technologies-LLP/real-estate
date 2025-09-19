import { image } from "@/types/common";

interface description {
  title: string;
  id: number;
}

interface HeroSection {
  image: image;
  youFocus: string;
  manageYourStay: string;
  description: description[];
}

export interface HeroProps {
  data: HeroSection;
}

export interface HomeDataType {
  heroSection: HeroSection;
}
