import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { formatValue } from '../../utils';
import Styles from './NetworkTable.styles.scss';
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
      <div className={context('value-text', datakey)}>
        {formattedValue}
      </div>
    );
  }

  return (
    <Tooltip
      delay={500}
      title={getTitle()}
    >
      <div className={context('value-text', datakey)}>
        {formattedValue}
      </div>
    </Tooltip>
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
