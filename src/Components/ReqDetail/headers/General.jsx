import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';
import { GENERAL_HEADERS } from '../../../constants';

const General = ({ data }) => (
  <div className={Styles['header-detail']}>
    {Object.entries(GENERAL_HEADERS).map(([dataKey, { key, name }]) => (
      <div
        key={dataKey}
        className={Styles['info-row']}
      >
        <span className={Styles['info-caption']}>
          {`${name}:`}
        </span>
        <span className={Styles['info-value']}>
          {key === 'status' && data.error ? data.error : data[key]}
        </span>
      </div>
    ))}
  </div>
);

General.propTypes = {
  data: PropTypes.object,
};

General.defaultProps = {
  data: null,
};

export default General;
