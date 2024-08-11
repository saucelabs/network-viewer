import React from 'react';
import PropTypes from 'prop-types';

const IconCloseSign = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M3.33792 3.33794C3.82607 2.84979 4.61753 2.84979 5.10569 3.33794L12 10.2322L18.8943 3.33794C19.3824 2.84979 20.1739 2.84979 20.662 3.33794C21.1502 3.8261 21.1502 4.61755 20.662 5.10571L13.7677 12L20.662 18.8943C21.1502 19.3824 21.1502 20.1739 20.662 20.6621C20.1739 21.1502 19.3824 21.1502 18.8943 20.6621L12 13.7678L5.10569 20.6621C4.61753 21.1502 3.82607 21.1502 3.33792 20.6621C2.84976 20.1739 2.84976 19.3824 3.33792 18.8943L10.2322 12L3.33792 5.10571C2.84976 4.61755 2.84976 3.8261 3.33792 3.33794Z"
      fillRule="evenodd"
    />
  </svg>
);

IconCloseSign.propTypes = {
  className: PropTypes.string,
};

IconCloseSign.defaultProps = {
  className: '',
};

export default IconCloseSign;
