import React from 'react';

import { VIEWER_FIELDS } from './../../constants';
import Styles from './NetworkTableHeader.module.scss';

const NetworkTableHeader = () => (
  <thead className={Styles.thead}>
    <tr>
      {VIEWER_FIELDS.map(({ key, name }) => (
        <th
          key={key}
          className={Styles[key]}
        >
          {name}
        </th>
      ))}
    </tr>
  </thead>
);

export default NetworkTableHeader;
