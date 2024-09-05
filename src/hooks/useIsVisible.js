import { useEffect, useMemo, useState } from 'react';

export const useIsVisible = (elementRef) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
  ), [elementRef]);

  useEffect(() => {
    if (elementRef?.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return isIntersecting;
};
