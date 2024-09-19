import React, { useState } from 'react';
import { stringify } from 'qs';

import Styles from './URLInput.styles.scss';
import Button from './../../../src/Components/Common/Button';
import CORSCheckbox from './CORSCheckbox';

const URLInput = () => {
  const [url, setURL] = useState('');
  const [isCORSEnabled, setCORS] = useState(false);
  const handleInputChange = ({ target }) => {
    setURL(target.value);
  };

  const handleSubmit = () => {
    const { origin, pathname } = document.location;
    const newURL = `${origin}${pathname}?${stringify({
      file: url,
      isCORSEnabled,
    })}`;
    document.location.href = newURL;
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
