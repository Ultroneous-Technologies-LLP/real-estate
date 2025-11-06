export interface CardProps {
  alt: string;
  link: string;
  src: string;
  title: string;
  id?: number;
}

interface DiscoverExperiencesSlider {
  alt: string;
  id: number;
  link: string;
  src: string;
  title: string;
}

export interface DiscoverExperiencesSliderProps {
  data: CardProps[];
}

export interface DiscoverExperiencesProps {
  description: string;
  discoverExperiencesSlider: DiscoverExperiencesSlider[];
  title: string;
}
