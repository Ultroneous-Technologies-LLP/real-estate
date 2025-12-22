import { Image } from "@/types";

interface Description {
  id: number;
  title: string;
}

export interface HeroProps {
  description: Description[];
  image: Image;
  manageYourStay: string;
  youFocus: string;
}
