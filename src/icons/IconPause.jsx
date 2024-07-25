import React from 'react';
import PropTypes from 'prop-types';

const IconPause = ({ className }) => (
  <svg
    className={className}
    height="24"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 1C2.44772 1 2 1.44772 2 2V22C2 22.5523 2.44772 23 3 23H9C9.55228 23 10 22.5523 10 22V2C10 1.44772 9.55228 1 9 1H3Z" />
    <path d="M15 1C14.4477 1 14 1.44772 14 2V22C14 22.5523 14.4477 23 15 23H21C21.5523 23 22 22.5523 22 22V2C22 1.44772 21.5523 1 21 1H15Z" />
  </svg>
);

IconPause.propTypes = {
  className: PropTypes.string,
};

IconPause.defaultProps = {
  className: '',
};

export default IconPause;
