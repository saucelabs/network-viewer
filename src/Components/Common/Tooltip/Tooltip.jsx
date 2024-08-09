import React, { forwardRef, useRef } from 'react';
import { useTooltipTrigger } from '@react-aria/tooltip';
import { useTooltipTriggerState } from '@react-stately/tooltip';
import { useOverlayPosition } from '@react-aria/overlays';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import PropTypes from 'prop-types';

import TooltipLabel from './TooltipLabel';
import TooltipArrow from './TooltipArrow';
import TooltipTransition from './TooltipTransition';

const ARROW_CROSS_SIZE = Math.sqrt(32);

const Tooltip = forwardRef(({
  children,
  className,
  delay,
  hasArrow,
  placement,
  title,
}, forwardedRef) => {
  const targetRef = useObjectRef(forwardedRef);
  const tooltipRef = useRef(null);

  const state = useTooltipTriggerState({ delay });

  const {
    overlayProps,
    placement: arrowPlacement,
    arrowProps,
  } = useOverlayPosition({
    targetRef,
    overlayRef: tooltipRef,
    placement,
    isOpen: state.isOpen,
    arrowSize: ARROW_CROSS_SIZE, // cross size of our arrow, a 4x4 element.
    offset: (ARROW_CROSS_SIZE / 2) + 2, // cross size of our arrow, in half, plus our offset size of 2px
  });

  // Override the default close implementation to always close immediately. Standard react-aria
  //  has a minor delay onHoverEnd vs onFocusEnd.
  const close = () => state.close(true);
  const {
    tooltipProps,
    triggerProps,
  } = useTooltipTrigger(
    {
      isOpen: state.isOpen,
    },
    {
      ...state,
      close,
    },
    tooltipRef,
  );

  // If we're passed an element, make sure that we've only been given one.
  const child = typeof children === 'function' ? children : React.Children.only(children);
  // Manually include a handful of props from react-aria's triggerProps. Otherwise, they block
  // certain events from propagating which can cause conflicts with other listeners in the app.
  const eventedProps = {
    ...triggerProps,
    tabIndex: triggerProps.tabIndex,
    'aria-describedby': triggerProps['aria-describedby'],
    onBlur: triggerProps.onBlur,
    onFocus: triggerProps.onFocus,
    onMouseEnter: triggerProps.onPointerEnter,
    onMouseLeave: triggerProps.onPointerLeave,
    onPointerEnter: triggerProps.onPointerEnter,
    onPointerLeave: triggerProps.onPointerLeave,
    [typeof PointerEvent !== 'undefined' ? 'onPointerDown' : 'onClick']: close,
  };

  return (
    <>
      {typeof child === 'function' ?
        child({
          triggerProps: eventedProps,
          targetRef,
        }) :
        React.cloneElement(child, {
          ref: targetRef,
          // Merge the child's original props, with the new props provided by the trigger.
          ...mergeProps(child.props, eventedProps),
        })}
      {/* <TooltipTransition isOpen={state.isOpen}> */}
      <TooltipTransition isOpen={state.isOpen}>
        <TooltipLabel
          ref={tooltipRef}
          className={className}
          state={state}
          {...overlayProps}
          {...tooltipProps}
        >
          {hasArrow && (
            <TooltipArrow
              placementAxis={arrowPlacement}
              {...arrowProps}
            />
          )}
          {title}
        </TooltipLabel>
      </TooltipTransition>
    </>
  );
});

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  hasArrow: PropTypes.bool,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  title: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  className: '',
  delay: 100,
  hasArrow: false,
  placement: 'top',
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
