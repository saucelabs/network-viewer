import React from 'react';
import PropTypes from 'prop-types';

const IconCaretDown = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.04607 8.29925C4.94259 8.1833 5.02523 8 5.181 8H18.8192C18.975 8 19.0577 8.1833 18.9542 8.29925L12.1351 15.9397C12.0632 16.0201 11.937 16.0201 11.8652 15.9397L5.04607 8.29925Z" />
  </svg>
);

IconCaretDown.propTypes = {
  className: PropTypes.string,
};

IconCaretDown.defaultProps = {
  className: '',
};

export default IconCaretDown;
