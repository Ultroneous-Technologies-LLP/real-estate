
type navLinks = {
    id: number;
    links: string;
    title: string;
}[];

export type header = {
  logo: {
    title: string;
    src: string;
    alt: string;
    link: string;
  };
  navLinks: navLinks
  button: {
    title: string;
  };
};

export type footer = {
  logo: {
    title: string;
    src: string;
    alt: string;
    link: string;
  };
  anyDoubts: string;
  contactUs: string;
  navLinks: navLinks
}

export type layoutData = {
  header: header;
  footer:footer
};
