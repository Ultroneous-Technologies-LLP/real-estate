import { TabData } from "../types";

export interface BestDealCardProps {
  image: string;
  title: string;
  link: string;
}

export interface DesktopGridProps {
  items: TabData[keyof TabData];
}

export interface HorizontalTabProps {
  tabData: Record<string, TabData>;
  currentCity: string;
}

export interface MobileSliderProps {
  items: TabData[keyof TabData];
}
