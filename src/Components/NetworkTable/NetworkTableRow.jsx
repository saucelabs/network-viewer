import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ROW_ID_PREFIX } from './../../constants';
import Styles from './NetworkTable.styles.scss';
import TimeChart from './TimeChart';
import NetworkCellValue from './NetworkCellValue';
import { getStatusClass, getViewerFields } from '../../utils';
import { useTheme } from '../../state/theme/Context';
import { useNetwork } from '../../state/network/Context';

const context = classNames.bind(Styles);

const NetworkTableRow = ({
  entry,
  maxTime,
  onSelect,
  scrollHighlight,
  style,
}) => {
  const { state } = useNetwork();
  const showReqDetail = state.get('showReqDetail');
  const { showWaterfall } = useTheme();
  const columns = getViewerFields(showReqDetail, showWaterfall);

  const rowProps = {
    className: context(
      'network-table-row',
      getStatusClass(entry),
      { highlight: scrollHighlight },
    ),
    id: ROW_ID_PREFIX + entry.index,
    onClick: () => onSelect(entry),
  };

  return (
    <div style={{ ...style }}>
      <div {...rowProps}>
        {Object.entries(columns).map(([datakey, { key, unit }]) => (
          <div
            key={key}
            className={context(
              'table-column', datakey,
              { 'limited-cols': showReqDetail },
              { 'show-waterfall': showWaterfall },
            )}
          >
            {(key === 'waterfall' && entry.time ? (
              <TimeChart
                maxTime={maxTime}
                timings={entry.timings}
              />
            ) : (
              <NetworkCellValue
                datakey={key}
                onClick={rowProps.onClick}
                payload={entry}
                unit={unit}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

NetworkTableRow.propTypes = {
  entry: PropTypes.object.isRequired,
  maxTime: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  scrollHighlight: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

NetworkTableRow.defaultProps = {
  style: {},
};

export default NetworkTableRow;
