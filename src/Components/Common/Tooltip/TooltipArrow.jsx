import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Styles from './Tooltip.styles.scss';

const getArrowPosition = (placement) => classnames('tooltip-arrow-position', {
  [Styles['tooltip-arrow-position-right']]: placement === 'left',
  [Styles['tooltip-arrow-position-left']]: placement === 'right',
  [Styles['tooltip-arrow-position-bottom']]: placement === 'top',
  [Styles['tooltip-arrow-position-top']]: placement === 'bottom',
});

const TooltipArrow = ({
  placementAxis,
  ...props
}) => (
  <div
    className={classnames(
      Styles['tooltip-arrow'],
      getArrowPosition(placementAxis),
    )}
    {...props}
  />
);

TooltipArrow.propTypes = {
  placementAxis: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'center']),
};

TooltipArrow.defaultProps = {
  placementAxis: 'bottom',
};

export default TooltipArrow;
