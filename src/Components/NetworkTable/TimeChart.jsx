import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { calcChartAttributes } from './../../utils';
import { TIME_CHART_DEFAULT_PROPS, TIME_CHART_SVG_PROPS } from './../../constants';
import TimeChartTooltip from './TimeChartTooltip';
import Tooltip from '../Common/Tooltip/Tooltip';
import Styles from './TimeChart.styles.scss';

const TimeChart = ({
  timings,
  maxTime,
}) => {
  const chartAttributes = useMemo(() => calcChartAttributes(timings, maxTime), [timings, maxTime]);

  return (
    <Tooltip
      className={Styles['time-chart-tooltip']}
      delay={300}
      placement="left"
      title={<TimeChartTooltip data={timings} />}
    >
      <svg {...TIME_CHART_SVG_PROPS}>
        <g>
          {chartAttributes.map((chartProps) => (
            <rect
              key={chartProps.key}
              {...chartProps}
              {...TIME_CHART_DEFAULT_PROPS}
            />
          ))}
        </g>
      </svg>
    </Tooltip>
  );
};

TimeChart.propTypes = {
  maxTime: PropTypes.number.isRequired,
  timings: PropTypes.object.isRequired,
};

export default TimeChart;
