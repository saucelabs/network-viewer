import React from 'react';
import classNames from 'classnames/bind';

import { VIEWER_FIELDS } from './../../constants';
import Styles from './NetworkTableHeader.styles.scss';
import { useTheme } from '../../state/theme/Context';

const context = classNames.bind(Styles);

const NetworkTableHeader = () => {
  const { showWaterfall } = useTheme();

  return (
    <thead className={Styles.thead}>
      <tr>
        {Object.entries(VIEWER_FIELDS)
          .map(([datakey, {
            key,
            name,
          }]) => (
            <th
              key={datakey}
              className={context('value-cell', key)}
            >
              {name}
            </th>
          ))}
        {showWaterfall && (
          <th className={Styles['timeline-header']}>
            Waterfall
          </th>
        )}
      </tr>
    </thead>
  );
};

export default NetworkTableHeader;
