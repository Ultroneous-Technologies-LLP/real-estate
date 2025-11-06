import { Logo, NavLinks } from "@/types";

interface Button {
  title: string;
}

export interface HeaderProps {
  logo: Logo;
  navLinks: NavLinks[];
  button: Button;
}

export interface MobileMenuProps {
  mounted: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  navLinks: NavLinks[];
}
