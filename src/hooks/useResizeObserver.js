import { useEffect, useState } from 'react';

/* eslint no-underscore-dangle: 0 */

export const useResizeObserver = (elementRef) => {
  const [elementDims, setElementDims] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const element = elementRef.current;

    const onResize = () => {
      if (element._outerRef) {
        setElementDims({
          width: element._outerRef.clientWidth,
          height: element._outerRef.clientHeight,
        });
      }
    };
    const resizeObserver = new ResizeObserver(onResize);

    if (element._outerRef) {
      resizeObserver.observe(element._outerRef);
    }

    return () => {
      if (element._outerRef) {
        resizeObserver.unobserve(element._outerRef);
      }
    };
  }, [elementRef]);

  return { elementDims };
};
