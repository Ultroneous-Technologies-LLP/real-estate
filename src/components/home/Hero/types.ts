import { Image } from "@/types";

interface Description {
  title: string;
  id: number;
}

export interface HeroProps {
  image: Image;
  youFocus: string;
  manageYourStay: string;
  description: Description[];
}
