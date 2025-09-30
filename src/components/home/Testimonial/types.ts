export interface SliderData {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  src: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  src: string;
  alt: string;
}

export interface TestimonialCardProps {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  src: string;
  alt: string;
}

export interface TestimonialSliderProps {
  data: Testimonial[];
}

export interface TestimonialProps {
  title: string;
  travelersExperience: string;
  sliderData: SliderData[];
}
