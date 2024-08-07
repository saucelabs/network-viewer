import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { VIEWER_FIELDS, ROW_ID_PREFIX } from './../../constants';
import Styles from './NetworkTable.styles.scss';
import TimeChart from './TimeChart';
import NetworkCellValue from './NetworkCellValue';
import { getStatusClass } from '../../utils';

const context = classNames.bind(Styles);

const NetworkTableRow = ({
  columns,
  payload,
  maxTime,
  scrollHighlight,
  onSelect,
}) => {
  const handleSelectRequest = () => {
    onSelect(payload);
  };

  const rowProps = {
    className: context(
      'network-table-row',
      getStatusClass(payload),
      { highlight: scrollHighlight },
    ),
    id: ROW_ID_PREFIX + payload.index,
    onClick: handleSelectRequest,
  };

  return (
    <div {...rowProps}>
      {Object.entries(columns)
        .map(([datakey, {
          key,
          unit,
        }]) => (key === 'waterfall' && payload.time ? (
          <TimeChart
            key={key}
            maxTime={maxTime}
            timings={payload.timings}
          />
        ) : (
          <NetworkCellValue
            key={datakey}
            datakey={key}
            payload={payload}
            unit={unit}
          />
        )))}
    </div>
  );
};

NetworkTableRow.propTypes = {
  columns: PropTypes.object,
  maxTime: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  payload: PropTypes.object.isRequired,
  scrollHighlight: PropTypes.bool.isRequired,
};

NetworkTableRow.defaultProps = {
  columns: VIEWER_FIELDS,
};

export default NetworkTableRow;
