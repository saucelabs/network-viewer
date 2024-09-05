import React from 'react';
import PropTypes from 'prop-types';

const IconCopy = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M14.5 0C15.3284 0 16 0.671573 16 1.5V4H22C23.1046 4 24 4.89543 24 6V22C24 23.1046 23.1046 24 22 24H10C8.89543 24 8 23.1046 8 22V20H1.5C0.671572 20 0 19.3284 0 18.5V5.34711C0 4.93755 0.167468 4.5458 0.463528 4.2628L4.4882 0.415691C4.76731 0.148892 5.13856 0 5.52467 0H14.5ZM22 6V22H10V11.2H14.9999C15.2652 11.2 15.5195 11.0946 15.707 10.9071C15.8946 10.7195 15.9999 10.4652 15.9999 10.2V6H22ZM13.9999 6H13.7252L10.3775 9.19997H13.9999V6Z"
      fillRule="evenodd"
    />
  </svg>
);

IconCopy.propTypes = {
  className: PropTypes.string,
};

IconCopy.defaultProps = {
  className: '',
};

export default IconCopy;
