import { Logo, NavLinks } from "@/types/common";

interface Button {
  title: string;
}

export interface HeaderProps {
  logo: Logo;
  navLinks: NavLinks[];
  button: Button;
}

export interface FooterProps {
  logo: Logo;
  anyDoubts: string;
  contactUs: string;
  navLinks: NavLinks[];
}
export interface MobileMenuProps {
  mounted: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  navLinks: NavLinks[];
}

export interface LayoutDataType {
  header: HeaderProps;
  footer: FooterProps;
}
