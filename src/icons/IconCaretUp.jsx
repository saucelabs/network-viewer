import React from 'react';
import PropTypes from 'prop-types';

const IconCaretUp = ({ className }) => (
  <svg
    className={className}
    height="8"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 13 8"
    width="13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M11.547,8.008 C11.547,8.008 6.500,2.919 6.500,2.919 C6.500,2.919 1.453,8.008 1.453,8.008 C1.453,8.008 0.011,6.554 0.011,6.554 C0.011,6.554 6.500,0.011 6.500,0.011 C6.500,0.011 12.989,6.554 12.989,6.554 C12.989,6.554 11.547,8.008 11.547,8.008 Z"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

IconCaretUp.propTypes = {
  className: PropTypes.string,
};

IconCaretUp.defaultProps = {
  className: '',
};

export default IconCaretUp;
