import React, { forwardRef } from 'react';
import { useTooltip } from '@react-aria/tooltip';
import { mergeProps } from '@react-aria/utils';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Styles from './Tooltip.styles.scss';

const TooltipLabel = forwardRef(({
  state,
  className,
  children,
  isOpen,
  ...props
}, ref) => {
  const { tooltipProps } = useTooltip(props, state);
  return (
    <div
      ref={ref}
      className={classnames(
        className,
        Styles['tooltip-label'],
        { [Styles['tooltip-visible']]: isOpen },
      )}
      {...mergeProps(props, tooltipProps)}
    >
      <span className={Styles['tooltip-label-box']}>
        {children}
      </span>
    </div>
  );
});

TooltipLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  state: PropTypes.object.isRequired,
};

TooltipLabel.defaultProps = {
  className: '',
  isOpen: false,
};

export default TooltipLabel;
