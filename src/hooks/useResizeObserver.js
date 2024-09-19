import { useEffect, useState } from 'react';

/* eslint no-underscore-dangle: 0 */

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const useResizeObserver = (elementRef) => {
  const [elementDims, setElementDims] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = debounce(() => {
      if (elementRef) {
        setElementDims({
          width: elementRef.clientWidth,
          height: elementRef.clientHeight,
        });
      }
    }, 50);

    const resizeObserver = new ResizeObserver(() => onResize());

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
