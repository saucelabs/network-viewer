import React from 'react';
import PropTypes from 'prop-types';

const IconChevronDown = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M20.7774 7.21667C21.0742 7.50555 21.0742 7.97393 20.7774 8.26282L12.5374 16.2833C12.2406 16.5722 11.7594 16.5722 11.4626 16.2833L3.22259 8.26282C2.9258 7.97393 2.9258 7.50555 3.22259 7.21667C3.51939 6.92778 4.00059 6.92778 4.29738 7.21667L12 14.7141L19.7026 7.21667C19.9994 6.92778 20.4806 6.92778 20.7774 7.21667Z"
      fillRule="evenodd"
    />
  </svg>
);

IconChevronDown.propTypes = {
  className: PropTypes.string,
};

IconChevronDown.defaultProps = {
  className: '',
};

export default IconChevronDown;
