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
      getStatusClass(payload), {
        highlight: scrollHighlight,
      }),
    id: ROW_ID_PREFIX + payload.index,
    onClick: handleSelectRequest,
  };

  return (
    <tr {...rowProps}>
      {Object.entries(VIEWER_FIELDS).map(([datakey, { key, unit }]) => (
        <NetworkCellValue
          key={datakey}
          datakey={key}
          payload={payload}
          unit={unit}
        />
      ))}
      <td className={Styles['timeline-header']}>
        {payload.time ? (
          <TimeChart
            maxTime={maxTime}
            timings={payload.timings}
          />
        ) : ''}
      </td>
    </tr>
  );
};

NetworkTableRow.propTypes = {
  maxTime: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  payload: PropTypes.object.isRequired,
  scrollHighlight: PropTypes.bool.isRequired,
};

export default NetworkTableRow;
