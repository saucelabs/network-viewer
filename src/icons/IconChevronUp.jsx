import React from 'react';
import PropTypes from 'prop-types';

const IconChevronUp = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M20.7774 16.7833C21.0742 16.4944 21.0742 16.0261 20.7774 15.7372L12.5374 7.71667C12.2406 7.42778 11.7594 7.42778 11.4626 7.71667L3.22259 15.7372C2.9258 16.0261 2.9258 16.4944 3.22259 16.7833C3.51939 17.0722 4.00059 17.0722 4.29738 16.7833L12 9.2859L19.7026 16.7833C19.9994 17.0722 20.4806 17.0722 20.7774 16.7833Z"
      fillRule="evenodd"
    />
  </svg>

);

IconChevronUp.propTypes = {
  className: PropTypes.string,
};

IconChevronUp.defaultProps = {
  className: '',
};

export default IconChevronUp;
