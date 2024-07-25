import React from 'react';
import PropTypes from 'prop-types';

const IconDownload = ({ className }) => (
  <svg
    className={className}
    height="24"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 0.2C9 0.0895429 9.08954 0 9.2 0H14.8C14.9105 0 15 0.0895431 15 0.2V10H18.8C18.974 10 19.0651 10.2115 18.9475 10.3427L12.1477 17.9336C12.0684 18.0221 11.932 18.0221 11.8527 17.9336L5.05292 10.3427C4.93539 10.2115 5.0264 10 5.20039 10H9V0.2Z" />
    <path d="M2.5 19.25C2.5 18.5596 1.94036 18 1.25 18C0.559644 18 0 18.5596 0 19.25V22.75C0 23.4404 0.559644 24 1.25 24H22.75C23.4404 24 24 23.4404 24 22.75V19.25C24 18.5596 23.4404 18 22.75 18C22.0596 18 21.5 18.5596 21.5 19.25V21.5H2.5V19.25Z" />
  </svg>
);

IconDownload.propTypes = {
  className: PropTypes.string,
};

IconDownload.defaultProps = {
  className: '',
};

export default IconDownload;
