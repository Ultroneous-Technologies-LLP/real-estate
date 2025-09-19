import { logo, navLinks } from "@/types/common";

interface Header {
  logo: logo;
  navLinks: navLinks[];
  button: {
    title: string;
  };
}

export interface HeaderProps {
  data: Header;
}

type Footer = {
  logo: logo;
  anyDoubts: string;
  contactUs: string;
  navLinks: navLinks[];
};

export interface FooterProps {
  data: Footer;
}

export interface layoutDataType {
  header: Header;
  footer: Footer;
}
