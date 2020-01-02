import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { VIEWER_FIELDS } from './../../constants';
import Styles from './NetworkTableHeader.styles.scss';

const context = classNames.bind(Styles);

const NetworkTableHeader = ({
  showAllCols,
}) => (
  <thead className={Styles.thead}>
    {showAllCols ? (
      <tr>
        {Object.entries(VIEWER_FIELDS).map(([datakey, { key, name }]) => (
          <th
            key={datakey}
            className={context('value-cell', key)}
          >
            {name}
          </th>
        ))}
        <th className={Styles['timeline-header']}>
          Waterfall
        </th>
      </tr>
    ) : (
      <tr>
        <th className={Styles['name-header']}>
          {VIEWER_FIELDS.file.name}
        </th>
      </tr>
    )}
  </thead>
);

NetworkTableHeader.propTypes = {
  showAllCols: PropTypes.bool.isRequired,
};

export default NetworkTableHeader;
