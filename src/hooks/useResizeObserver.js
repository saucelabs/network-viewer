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
    const ref = elementRef?.current;
    const onResize = debounce(() => {
      if (ref) {
        setElementDims({
          width: ref.clientWidth,
          height: ref.clientHeight,
        });
      }
    }, 50);

    const resizeObserver = new ResizeObserver(() => onResize());

    if (ref) {
      resizeObserver.observe(ref);
    }

    return () => {
      if (ref) {
        resizeObserver.unobserve(ref);
      }
    };
  }, [elementRef]);

  return { elementDims };
};
