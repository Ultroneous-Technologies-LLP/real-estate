import { Logo, NavLinks } from "@/types/common";

interface Button {
  title: string;
}

interface Header {
  logo: Logo;
  navLinks: NavLinks[];
  button: Button;
}

export interface HeaderProps {
  data: Header;
}

type Footer = {
  logo: Logo;
  anyDoubts: string;
  contactUs: string;
  navLinks: NavLinks[];
};

export interface FooterProps {
  data: Footer;
}

export interface LayoutDataType {
  header: Header;
  footer: Footer;
}
