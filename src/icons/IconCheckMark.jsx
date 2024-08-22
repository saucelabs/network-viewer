import React from 'react';
import PropTypes from 'prop-types';

const IconCheckMark = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M23.5789 2.30868C24.0956 2.75821 24.1435 3.53404 23.6857 4.04153L7.48717 22L0.313554 14.0321C-0.143724 13.5242 -0.0951526 12.7485 0.42204 12.2994C0.939233 11.8503 1.7292 11.898 2.18648 12.4059L7.48892 18.2954L21.8143 2.41361C22.2721 1.90612 23.0621 1.85914 23.5789 2.30868Z"
      fillRule="evenodd"
    />
  </svg>
);

IconCheckMark.propTypes = {
  className: PropTypes.string,
};

IconCheckMark.defaultProps = {
  className: '',
};

export default IconCheckMark;
