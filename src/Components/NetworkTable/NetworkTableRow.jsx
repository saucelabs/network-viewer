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
  entry,
  maxTime,
  scrollHighlight,
  onSelect,
}) => {
  const handleSelectRequest = () => {
    onSelect(entry);
  };

  const rowProps = {
    className: context(
      'network-table-row',
      getStatusClass(entry),
      { highlight: scrollHighlight },
    ),
    id: ROW_ID_PREFIX + entry.index,
    onClick: handleSelectRequest,
  };

  return (
    <div {...rowProps}>
      {Object.entries(columns)
        .map(([datakey, {
          key,
          unit,
        }]) => (key === 'waterfall' && entry.time ? (
          <TimeChart
            key={key}
            maxTime={maxTime}
            timings={entry.timings}
          />
        ) : (
          <NetworkCellValue
            key={datakey}
            datakey={key}
            payload={entry}
            unit={unit}
          />
        )))}
    </div>
  );
};

NetworkTableRow.propTypes = {
  columns: PropTypes.object,
  entry: PropTypes.object.isRequired,
  maxTime: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  scrollHighlight: PropTypes.bool.isRequired,
};

NetworkTableRow.defaultProps = {
  columns: VIEWER_FIELDS,
};

export default NetworkTableRow;
