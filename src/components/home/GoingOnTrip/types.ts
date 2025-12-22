import { Image } from "@/types";

interface Guides {
  alt: string;
  description: string;
  height: number;
  id: number;
  src: string;
  title: string;
  width: number;
}

export interface GoingOnTripProps {
  borderImg: Image;
  guides: Guides[];
  trip: string;
  yourStay: string;
}
