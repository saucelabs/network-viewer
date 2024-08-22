import { useEffect, useState } from 'react';

/* eslint no-underscore-dangle: 0 */

export const useResizeObserver = (elementRef) => {
  const [elementDims, setElementDims] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const onResize = () => {
      if (elementRef) {
        setElementDims({
          width: elementRef.clientWidth,
          height: elementRef.clientHeight,
        });
      }
    };
    const resizeObserver = new ResizeObserver(onResize);

    if (elementRef) {
      resizeObserver.observe(elementRef);
    }

    return () => {
      if (elementRef) {
        resizeObserver.unobserve(elementRef);
      }
    };
  }, [elementRef]);

  return { elementDims };
};
