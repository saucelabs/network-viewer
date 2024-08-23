import React from 'react';
import PropTypes from 'prop-types';

const IconCaretRight = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 25 24"
    width="25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.42327 18.954C8.30732 19.0575 8.12402 18.9748 8.12402 18.8191L8.12402 5.18082C8.12402 5.02505 8.30732 4.9424 8.42327 5.04589L16.0637 11.865C16.1441 11.9368 16.1441 12.0631 16.0637 12.1349L8.42327 18.954Z" />
  </svg>

);

IconCaretRight.propTypes = {
  className: PropTypes.string,
};

IconCaretRight.defaultProps = {
  className: '',
};

export default IconCaretRight;
