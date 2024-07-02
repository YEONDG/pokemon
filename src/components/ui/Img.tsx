import React from "react";
import { useIsImgLoaded } from "../../hooks/useIsImgLoaded";

interface ImgProps {
  src: string | null;
  alt: string;
  className?: string;
  lazy?: boolean;
}

const ImgComponent: React.FC<ImgProps> = ({
  src,
  alt,
  className = "",
  lazy = true,
}) => {
  const { elementRef, isLoaded } = useIsImgLoaded(lazy);
  const imgClasses = `${className} ${isLoaded ? "" : "hidden"}`;

  if (!src) return null;

  return (
    <div
      ref={elementRef}
      className={`flex h-24 w-24 items-center justify-center`}
    >
      <img src={src} alt={alt} className={imgClasses} />
    </div>
  );
};

export const Img = React.memo(ImgComponent);
