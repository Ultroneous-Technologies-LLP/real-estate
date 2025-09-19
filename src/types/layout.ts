export type header = {
  logo: {
    title: string;
    src: string;
    alt: string;
    link: string;
  };
  navLinks: {
    id: number;
    links: string;
    title: string;
  }[];
  button: {
    title: string;
  };
};

export type layoutData = {
  header: header;
};
