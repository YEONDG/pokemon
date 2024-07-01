import React from 'react';
import { useIsImgLoaded } from '../../hooks/useIsImgLoaded';

interface ImgProps {
  src: string | null;
  alt: string;
  className?: string;
  lazy?: boolean;
}

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  className,
  lazy = true,
}) => {
  const { elementRef, isLoaded } = useIsImgLoaded(lazy);
  const imgClasses = `${className} ${isLoaded ? '' : 'hidden'}`;

  if (!src) {
    return <div className='w-24 h-24 flex items-center justify-center'></div>;
  }

  return (
    <div
      ref={elementRef}
      className='flex items-center justify-center mx-5 w-24'
    >
      <img src={src} alt={alt} className={imgClasses} />
    </div>
  );
};
