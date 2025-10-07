import { ImageProps } from "next/image";

export interface NextImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
  alt: string;
}