import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { formatValue } from '../../utils';
import Styles from './NetworkTableHeader.styles.scss';
import { VIEWER_FIELDS } from '../../constants';
import Tooltip from '../Common/Tooltip/Tooltip';

const context = classNames.bind(Styles);

const NetworkCellValue = ({
  datakey,
  unit,
  payload,
}) => {
  const formattedValue = formatValue(datakey, payload[datakey], unit, payload);
  const shouldDisplayTooltip = (
    datakey === VIEWER_FIELDS.file.key ||
    payload.error
  );

  const getTitle = () => {
    if (datakey === VIEWER_FIELDS.file.key) {
      return payload.url;
    }
    if (payload.error) {
      return payload.error;
    }

    return formattedValue;
  };

  if (!shouldDisplayTooltip) {
    return (
      <td className={context('value-cell', datakey)}>
        <div className={Styles['value-text']}>
          {formattedValue}
        </div>
      </td>
    );
  }

  return (
    <td className={context('value-cell', datakey)}>
      <Tooltip
        delay={500}
        title={getTitle()}
      >
        <span className={Styles['value-text']}>
          {formattedValue}
        </span>
      </Tooltip>
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
