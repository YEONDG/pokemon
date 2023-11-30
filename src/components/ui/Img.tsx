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
  const imgClasses = `${className} ${isLoaded ? '' : 'hidden'}`;

  return (
    <div ref={elementRef} className='w-32 h-32'>
      <img src={src} alt={alt} className={imgClasses} />
    </div>
  );
};

export default Img;
