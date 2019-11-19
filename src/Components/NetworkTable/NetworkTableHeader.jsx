import React from 'react';
import classNames from 'classnames/bind';

import { VIEWER_FIELDS } from './../../constants';
import Styles from './NetworkTableHeader.styles.scss';

const context = classNames.bind(Styles);

const NetworkTableHeader = () => (
  <thead className={Styles.thead}>
    <tr>
      {VIEWER_FIELDS.map(({ key, name }) => (
        <th
          key={key}
          className={context('value-cell', key)}
        >
          {name}
        </th>
      ))}
      <th className={Styles['timeline-header']}>
        Waterfall
      </th>
    </tr>
  </thead>
);

export default NetworkTableHeader;
