import React from 'react';
import PropTypes from 'prop-types';

const IconUpload = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 16.8C9 16.9105 9.08954 17 9.2 17H14.8C14.9105 17 15 16.9105 15 16.8V8H18.8C18.974 8 19.0651 7.78851 18.9475 7.65731L12.1477 0.0663729C12.0684 -0.0221243 11.932 -0.0221243 11.8527 0.0663729L5.05292 7.65731C4.93539 7.78851 5.0264 8 5.20039 8H9V16.8Z" />
    <path d="M2.5 19.25C2.5 18.5596 1.94036 18 1.25 18C0.559644 18 0 18.5596 0 19.25V22.75C0 23.4404 0.559644 24 1.25 24H22.75C23.4404 24 24 23.4404 24 22.75V19.25C24 18.5596 23.4404 18 22.75 18C22.0596 18 21.5 18.5596 21.5 19.25V21.5H2.5V19.25Z" />
  </svg>
);

IconUpload.propTypes = {
  className: PropTypes.string,
};

IconUpload.defaultProps = {
  className: '',
};

export default IconUpload;
