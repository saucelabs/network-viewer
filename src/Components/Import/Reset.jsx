import React from 'react';
import PropTypes from 'prop-types';

import Button from './../Common/Button';

const Reset = ({ className, onReset }) => {
  const handleURLReset = () => {
    window.history.pushState({}, document.title, '/');
  };

  const handleReset = () => {
    handleURLReset();
    onReset();
  };

  return (
    <Button
      className={className}
      onClick={handleReset}
    >
      Reset
    </Button>
  );
};

Reset.propTypes = {
  className: PropTypes.string,
  onReset: PropTypes.func.isRequired,
};

Reset.defaultProps = {
  className: '',
};

export default Reset;
