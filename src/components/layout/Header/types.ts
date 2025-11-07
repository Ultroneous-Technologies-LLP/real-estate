import { Logo, NavLinks } from "@/types";

interface Button {
  title: string;
}

export interface HeaderProps {
  button: Button;
  logo: Logo;
  navLinks: NavLinks[];
}

export interface MobileMenuProps {
  isMenuOpen: boolean;
  mounted: boolean;
  navLinks: NavLinks[];
  setIsMenuOpen: (open: boolean) => void;
}
