import React from 'react';
import classNames from 'classnames/bind';

import { VIEWER_FIELDS } from './../../constants';
import Styles from './NetworkTable.styles.scss';

const context = classNames.bind(Styles);

const NetworkTableHeader = () => (
  <div className={Styles['network-table-header']}>
    {Object.entries(VIEWER_FIELDS)
      .map(([datakey, {
        key,
        name,
      }]) => (
        <div
          key={datakey}
          className={context(Styles['table-cell'], key)}
        >
          {name}
        </div>
      ))}
  </div>
);

export default NetworkTableHeader;
