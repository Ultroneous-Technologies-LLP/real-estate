"use client";

import Image from "next/image";
import { useState, FC } from "react";

import { NextImageWithFallbackProps } from "./types";

const DEFAULT_FALLBACK = "/assets/images/fall-back-image.avif";

export const NextImageWithFallback: FC<NextImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<null | string>(null);

  const handleError = () => {
    //EARLY RETURN
    if (!imgSrc) return;

    if (imgSrc !== (fallbackSrc || DEFAULT_FALLBACK)) {
      setImgSrc(fallbackSrc || DEFAULT_FALLBACK);
    }
  };

  return <Image {...props} src={imgSrc ? imgSrc : src} alt={alt} onError={handleError} />;
};
