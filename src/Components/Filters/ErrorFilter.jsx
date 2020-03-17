import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Common/Checkbox';

const ErrorFilter = ({ isError, onChange }) => {
  const handleChange = () => {
    onChange(!isError);
  };

  return (
    <Checkbox
      isChecked={isError}
      onChange={handleChange}
      title="error"
    >
      Errors Only
    </Checkbox>
  );
};

ErrorFilter.propTypes = {
  isError: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ErrorFilter;
