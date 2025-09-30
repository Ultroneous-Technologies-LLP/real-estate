import { LOCATION_OPTIONS } from "@/constants";

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
export interface DropdownProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}
export interface BestDealProps {
  title: string;
  description: string;
  tabData: Record<string, TabData>;
}

export type TabKey = keyof TabData; // "Flat" | "Bungalow" | "Villa"

export type LocationOption = (typeof LOCATION_OPTIONS)[number];
