import React, { useState } from 'react';

import Styles from './URLInput.styles.scss';
import Button from './../../../src/Components/Common/Button';
import CORSCheckbox from './CORSCheckbox';
import { useNetwork } from '../../state/network/Context';

const URLInput = () => {
  const { actions } = useNetwork();
  const [url, setURL] = useState('');
  const [isCORSEnabled, setCORS] = useState(false);
  const handleInputChange = ({ target }) => {
    setURL(target.value);
  };

  const handleSubmit = () => {
    actions.fetchFile({
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
        name="har-url"
        onChange={handleInputChange}
        placeholder="HAR file URL"
        type="text"
        value={url}
      />
      <Button
        className={Styles['postpend-button']}
        onClick={handleSubmit}
      >
        GO
      </Button>
    </div>
  );
};

export default URLInput;
