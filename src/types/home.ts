export type heroSection = {
  image: {
    src: string;
    alt: string;
  };
  youFocus: string;
  manageYourStay: string;
  description: {
    title: string;
    id: number;
  }[];
};

export type homeData = {
  heroSection: heroSection;
};
