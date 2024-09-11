import { useEffect, useState } from 'react';

/* eslint no-underscore-dangle: 0 */

export const useResizeObserver = (elementRef) => {
  let ref = null;
  const [elementDims, setElementDims] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    ref = elementRef?.current?._outerRef || elementRef?.current;
    const onResize = () => {
      if (ref) {
        setElementDims({
          width: ref.clientWidth,
          height: ref.clientHeight,
        });
      }
    };

    const resizeObserver = new ResizeObserver(onResize);

    if (ref) {
      resizeObserver.observe(ref);
    }

    return () => {
      if (ref) {
        resizeObserver.unobserve(ref);
      }
    };
  }, [ref]);

  return { elementDims };
};
