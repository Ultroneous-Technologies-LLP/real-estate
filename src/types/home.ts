type img = {
  src: string;
  alt: string;
};

export type heroSection = {
  image: img;
  youFocus: string;
  manageYourStay: string;
  description: {
    title: string;
    id: number;
  }[];
};

export type goingOnTripSection = {
  trip: string;
  yourStay: string;
  guides: {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
    width: number;
    height: number;
  }[];
  borderImg: img;
};

export type homeData = {
  heroSection: heroSection;
  goingOnTripSection: goingOnTripSection;
};
