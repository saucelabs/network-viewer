import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// import Styles from './TimelineDatapoint.styles.scss';
import { TIME_CHART_DEFAULT_PROPS } from './../../constants';
import { calcChartAttributes } from './../../utils';

const TimelineDatapoint = ({ points, index, maxTime, cx, cy }) => {
  const { timings } = points[index];
  const chartAttributes = useMemo(() => calcChartAttributes(timings, maxTime), [timings, maxTime]);
  if (!points || !index) {
    return null;
  }

  return (
    <g
      transform={`translate(${cx},${(((cy) % 5) * 10) + 35})`}
    >
      {chartAttributes.map((chartProps) => (
        <rect
          key={chartProps.key}
          {...chartProps}
          {...TIME_CHART_DEFAULT_PROPS}
          height="5"
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
  points: PropTypes.array,
};

TimelineDatapoint.defaultProps = {
  cx: 0,
  cy: 0,
  index: null,
  points: null,
};

export default TimelineDatapoint;
