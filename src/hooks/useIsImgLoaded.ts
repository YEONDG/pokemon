import { useEffect, useState } from 'react';
import { useIsElementInViewport } from './useIsElementInViewport';

export const useIsImgLoaded = (lazy: boolean) => {
  const { elementRef, isVisible } = useIsElementInViewport({
    rootMargin: '300px 0px 300px 0px',
    threshold: 1,
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
