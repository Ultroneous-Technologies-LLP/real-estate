import {
  BestDealProps,
  DiscoverExperiencesProps,
  GoingOnTripProps,
  HeroProps,
  TestimonialProps,
} from "@/components/home/types";
import { FooterProps, HeaderProps } from "@/components/layout/types";

// Layouts Type
export interface LayoutDataType {
  header: HeaderProps;
  footer: FooterProps;
}

// Home Page Type
export interface HomeDataType {
  heroSection: HeroProps;
  goingOnTripSection: GoingOnTripProps;
  bestDealSection: BestDealProps;
  discoverExperiencesSection: DiscoverExperiencesProps;
  testimonialSection: TestimonialProps;
}
