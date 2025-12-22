import { TabData } from "../types";

export interface BestDealCardProps {
  image: string;
  link: string;
  title: string;
}

export interface DesktopGridProps {
  items: TabData[keyof TabData];
}

export interface HorizontalTabProps {
  currentCity: string;
  tabData: Record<string, TabData>;
}

export interface MobileSliderProps {
  items: TabData[keyof TabData];
}
