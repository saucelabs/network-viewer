import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { formatValue } from '../../utils';
import Styles from './NetworkTableHeader.styles.scss';

const context = classNames.bind(Styles);

const NetworkCellValue = ({ datakey, unit, payload }) => (
  <td className={context('value-cell', datakey)}>
    <span className={Styles['value-text']}>
      {formatValue(datakey, payload[datakey], unit)}
    </span>
  </td>
);

NetworkCellValue.propTypes = {
  datakey: PropTypes.string.isRequired,
  payload: PropTypes.object,
  unit: PropTypes.string,
};

NetworkCellValue.defaultProps = {
  payload: {},
  unit: null,
};

export default NetworkCellValue;
