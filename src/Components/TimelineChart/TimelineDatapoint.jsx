import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { calcChartAttributes } from './../../utils';

const TimelineDatapoint = ({ payload, maxTime, cx, index }) => {
  const { timings } = payload;
  const chartAttributes = useMemo(
    () => calcChartAttributes(timings, maxTime, cx, index), [timings, maxTime],
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
        />
      ))}
    </g>
  );
};

TimelineDatapoint.propTypes = {
  cx: PropTypes.number,
  index: PropTypes.number,
  maxTime: PropTypes.number.isRequired,
  payload: PropTypes.object,
};

TimelineDatapoint.defaultProps = {
  cx: 0,
  index: 0,
  payload: null,
};

export default TimelineDatapoint;
