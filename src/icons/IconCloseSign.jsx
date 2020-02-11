import React from 'react';
import PropTypes from 'prop-types';

const IconCloseSign = ({ className }) => (
  <svg
    className={className}
    height="16"
    viewBox="0 0 17 16"
    width="17"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#ACB2B8"
      strokeLinecap="round"
      transform="translate(1)"
    >
      <path d="M0 0L15.2460858 15.2460858M15.2460858 0L0 15.2460858" />
    </g>
  </svg>
);

IconCloseSign.propTypes = {
  className: PropTypes.string,
};

IconCloseSign.defaultProps = {
  className: '',
};

export default IconCloseSign;
