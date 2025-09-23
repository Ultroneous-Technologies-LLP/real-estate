export interface CardProps {
  src: string;
  alt: string;
  title: string;
  id?: number;
}

export interface DiscoverExperiencesSliderProps {
  data: CardProps[];
}
