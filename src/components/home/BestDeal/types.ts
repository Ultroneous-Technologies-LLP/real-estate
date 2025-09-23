import { TabData } from "../types";
import { LOCATION_OPTIONS } from "./constants";

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

export type TabKey = keyof TabData; // "Flat" | "Bungalow" | "Villa"

export type LocationOption = (typeof LOCATION_OPTIONS)[number];
