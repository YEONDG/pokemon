import React from 'react';
import { useIsImgLoaded } from '../../hooks/useIsImgLoaded';

interface ImgProps {
  src: string;
  alt: string;
  className: string;
  lazy?: boolean;
}

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  className,
  lazy = true,
}) => {
  const { elementRef, isLoaded } = useIsImgLoaded(lazy);

  const isHidden = isLoaded ? '' : 'hidden';
  const css = className + isHidden;
  return <img src={src} alt={alt} className={css} ref={elementRef} />;
};

export default Img;
