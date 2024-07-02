import { useEffect, useState } from 'react';
import { useIsElementInViewport } from './useIsElementInViewport';

export const useIsImgLoaded = (lazy: boolean) => {
  const { elementRef, isVisible } = useIsElementInViewport({
    rootMargin: '1000px 0px 1000px 0px',
    threshold: 0,
  });
  const [isLoaded, setIsLoaded] = useState(!lazy);

  useEffect(() => {
    if (isLoaded || !isVisible) {
      return;
    }

    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return { elementRef, isLoaded };
};
