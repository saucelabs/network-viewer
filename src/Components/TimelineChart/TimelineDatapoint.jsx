import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { calcChartAttributes } from './../../utils';
import { TIMELINE_DATA_POINT_HEIGHT } from '../../constants';

const TimelineDatapoint = ({ payload, maxTime, cx, cy, index }) => {
  const { timings } = payload;
  const chartAttributes = useMemo(
    () => calcChartAttributes(timings, maxTime, cx, index, cy), [timings, maxTime],
  );
  if (!payload) {
    return null;
  }

  return (
    <g>
      {chartAttributes.map((chartProps) => (
        <rect
          key={chartProps.key}
          {...chartProps}
          height={TIMELINE_DATA_POINT_HEIGHT}
        />
      ))}
    </g>
  );
};

TimelineDatapoint.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  index: PropTypes.number,
  maxTime: PropTypes.number.isRequired,
  payload: PropTypes.object,
};

TimelineDatapoint.defaultProps = {
  cx: 0,
  cy: 0,
  index: 0,
  payload: null,
};

export default TimelineDatapoint;
