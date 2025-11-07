import {
  BestDealProps,
  DiscoverExperiencesProps,
  FooterProps,
  GoingOnTripProps,
  HeaderProps,
  HeroProps,
  TestimonialProps,
} from "@/components";

export interface LayoutProps {
  footer: FooterProps;
  header: HeaderProps;
}

export interface HomePageDataProps {
  bestDealSection: BestDealProps;
  discoverExperiencesSection: DiscoverExperiencesProps;
  goingOnTripSection: GoingOnTripProps;
  heroSection: HeroProps;
  testimonialSection: TestimonialProps;
}
