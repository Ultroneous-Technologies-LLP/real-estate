import { Image } from "@/types";

interface Guides {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export interface GoingOnTripProps {
  trip: string;
  yourStay: string;
  guides: Guides[];
  borderImg: Image;
}
