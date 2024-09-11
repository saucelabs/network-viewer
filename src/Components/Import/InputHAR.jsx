import React from 'react';
import { stringify } from 'qs';

import Styles from './InputHAR.styles.scss';
import URLInput from './URLInput';

const SAMPLE_HAR_URL = 'https://raw.githubusercontent.com/saucelabs/network-viewer/main/examples/src/data/network.har';

const InputHAR = () => (
  <div className={Styles['input-har-container']}>
    <h4 className={Styles['input-har-text']}>
      OR add HAR file URL in the below input box
    </h4>
    <URLInput />
    <p>
      <span>
        For Example use this har file
      </span>
      <a
        className={Styles['example-url']}
        href={SAMPLE_HAR_URL}
        rel="noopener noreferrer"
        target="_blank"
      >
        {SAMPLE_HAR_URL}
      </a>
    </p>
  </div>
);

export default InputHAR;
