import { useEffect, useState } from 'react';
import { useIsElementInViewport } from './useIsElementInViewport';

export const useIsImgLoaded = (lazy: boolean) => {
  const { elementRef, isVisible } = useIsElementInViewport({
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
  });
  const [isLoaded, setIsLoaded] = useState(!lazy);

  useEffect(() => {
    if (isLoaded || !isVisible) {
      return;
    }

    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return { elementRef, isLoaded, isVisible };
};
