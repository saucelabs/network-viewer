import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { formatValue } from '../../utils';
import Styles from './NetworkTableHeader.styles.scss';
import { VIEWER_FIELDS } from '../../constants';

const context = classNames.bind(Styles);

const NetworkCellValue = ({ datakey, unit, payload }) => {
  const formatedValue = formatValue(datakey, payload[datakey], unit);
  const title = datakey === VIEWER_FIELDS.file.key ? payload.url : formatedValue;

  return (
    <td className={context('value-cell', datakey)}>
      <label title={title}>
        {formatedValue}
      </label>
    </td>
  );
};

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
