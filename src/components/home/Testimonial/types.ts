export interface SliderData {
  alt: string;
  id: number;
  name: string;
  position: string;
  src: string;
  testimonial: string;
}

export interface Testimonial {
  alt: string;
  id: number;
  name: string;
  position: string;
  src: string;
  testimonial: string;
}

export interface TestimonialCardProps {
  alt: string;
  id: number;
  name: string;
  position: string;
  src: string;
  testimonial: string;
}

export interface TestimonialSliderProps {
  data: Testimonial[];
}

export interface TestimonialProps {
  sliderData: SliderData[];
  title: string;
  travelersExperience: string;
}
