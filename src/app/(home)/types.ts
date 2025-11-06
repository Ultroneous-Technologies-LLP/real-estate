import { BestDealProps } from "@/components/home/BestDeal/types";
import { DiscoverExperiencesProps } from "@/components/home/DiscoverExperiences/types";
import { GoingOnTripProps } from "@/components/home/GoingOnTrip/types";
import { HeroProps } from "@/components/home/Hero/types";
import { TestimonialProps } from "@/components/home/Testimonial/types";
import { FooterProps } from "@/components/layout/Footer/types";
import { HeaderProps } from "@/components/layout/Header/types";

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
