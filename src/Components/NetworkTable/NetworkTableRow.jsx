import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { VIEWER_FIELDS, ROW_ID_PREFIX } from './../../constants';
import Styles from './NetworkTableHeader.styles.scss';
import TimeChart from './TimeChart';
import NetworkCellValue from './NetworkCellValue';
import { getStatusClass } from '../../utils';

const context = classNames.bind(Styles);

const NetworkTableRow = ({
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
      getStatusClass(entry), {
        highlight: scrollHighlight,
      }),
    id: ROW_ID_PREFIX + entry.index,
    onClick: handleSelectRequest,
  };

  return (
    <tr {...rowProps}>
      {Object.entries(VIEWER_FIELDS)
        .map(([datakey, {
          key,
          unit,
        }]) => (
          <NetworkCellValue
            key={datakey}
            datakey={key}
            payload={entry}
            unit={unit}
          />
        ))}
      <td className={Styles['timeline-header']}>
        {entry.time ? (
          <TimeChart
            maxTime={maxTime}
            timings={entry.timings}
          />
        ) : ''}
      </td>
    </tr>
  );
};

NetworkTableRow.propTypes = {
  entry: PropTypes.object.isRequired,
  maxTime: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  scrollHighlight: PropTypes.bool.isRequired,
};

export default NetworkTableRow;
