import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Styles from './URLInput.styles.scss';
import Button from './../../../src/Components/Common/Button';
import CORSCheckbox from './CORSCheckbox';

const URLInput = ({ onSubmit }) => {
  const [url, setURL] = useState('');
  const [isCORSEnabled, setCORS] = useState(false);
  const handleInputChange = ({ target }) => {
    setURL(target.value);
  };

  const handleSubmit = () => {
    onSubmit({
      file: url,
      isCORSEnabled,
    });
  };

  return (
    <div className={Styles['url-input-container']}>
      <CORSCheckbox
        isEnabled={isCORSEnabled}
        onChange={setCORS}
      />
      <input
        className={Styles.input}
        onChange={handleInputChange}
        placeholder="HAR file URL"
        type="text"
        value={url}
      />
      <Button
        category="default"
        className={Styles['postpend-button']}
        material
        onClick={handleSubmit}
        raised
        size="sm"
      >
        GO
      </Button>
    </div>
  );
};

URLInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default URLInput;
