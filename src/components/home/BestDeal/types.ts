/* eslint-disable @typescript-eslint/naming-convention */
import { LOCATION_OPTIONS } from "@/constants";

interface BestDealItem {
  image: string;
  link: string;
  title: string;
}

export interface TabData {
  Bungalow: BestDealItem[];
  Flat: BestDealItem[];
  Villa: BestDealItem[];
}

export interface DropdownProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export interface BestDealProps {
  description: string;
  tabData: Record<string, TabData>;
  title: string;
}

export type TabKey = keyof TabData;

export type LocationOption = (typeof LOCATION_OPTIONS)[number];
