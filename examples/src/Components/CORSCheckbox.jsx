import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './../../../src/Components/Common/Checkbox';
import Styles from './CORSCheckbox.styles.scss';

const CORSCheckbox = ({ isEnabled, onChange }) => {
  const handleChange = () => {
    onChange(!isEnabled);
  };

  return (
    <Checkbox
      containerClassName={Styles['cors-container']}
      isChecked={isEnabled}
      onChange={handleChange}
      title="CORS Enable"
    >
      CORS
    </Checkbox>
  );
};

CORSCheckbox.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CORSCheckbox;
