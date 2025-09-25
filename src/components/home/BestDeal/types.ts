import { LOCATION_OPTIONS } from "@/constants";

import { TabData } from "../types";

export interface DropdownProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export interface HorizontalTabProps {
  tabData: Record<string, TabData>;
  currentCity: string;
}

export interface MobileSliderProps {
  items: TabData[keyof TabData];
}

export interface DesktopGridProps {
  items: TabData[keyof TabData];
}

export interface BestDealCardProps {
  image: string;
  title: string;
  link: string;
}

export type TabKey = keyof TabData; // "Flat" | "Bungalow" | "Villa"

export type LocationOption = (typeof LOCATION_OPTIONS)[number];
