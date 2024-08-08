import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { VIEWER_FIELDS } from './../../constants';
import Styles from './NetworkTable.styles.scss';

const context = classNames.bind(Styles);

const NetworkTableHeader = ({ columns }) => (
  <div className={Styles['network-table-header']}>
    {Object.entries(columns)
      .map(([datakey, {
        key,
        name,
      }]) => (
        <div
          key={datakey}
          className={context(Styles['value-cell'], key)}
        >
          {name}
        </div>
      ))}
  </div>
);

NetworkTableHeader.propTypes = {
  columns: PropTypes.object,
};

NetworkTableHeader.defaultProps = {
  columns: VIEWER_FIELDS,
};

export default NetworkTableHeader;
