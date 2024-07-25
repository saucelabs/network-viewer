import React from 'react';
import PropTypes from 'prop-types';

const IconResume = ({ className }) => (
  <svg
    className={className}
    height="24"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 1.06665C2 0.246202 2.88801 -0.266152 3.59754 0.144921L22.469 11.0783C23.177 11.4885 23.177 12.5115 22.469 12.9217L3.59754 23.8551C2.88801 24.2662 2 23.7538 2 22.9334V1.06665Z" />
  </svg>
);

IconResume.propTypes = {
  className: PropTypes.string,
};

IconResume.defaultProps = {
  className: '',
};

export default IconResume;
