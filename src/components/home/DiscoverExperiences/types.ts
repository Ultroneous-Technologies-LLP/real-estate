export interface CardProps {
  src: string;
  alt: string;
  title: string;
  id?: number;
}

interface DiscoverExperiencesSlider {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export interface DiscoverExperiencesSliderProps {
  data: CardProps[];
}

export interface DiscoverExperiencesProps {
  title: string;
  description: string;
  discoverExperiencesSlider: DiscoverExperiencesSlider[];
}
