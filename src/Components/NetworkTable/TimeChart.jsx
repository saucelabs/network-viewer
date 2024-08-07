import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-popover';

import { calcChartAttributes } from './../../utils';
import { TIME_CHART_DEFAULT_PROPS, TIME_CHART_SVG_PROPS } from './../../constants';
import TimeChartTooltip from './TimeChartTooltip';
import Styles from './TimeChart.styles.scss';

const TimeChart = ({
  timings,
  maxTime,
}) => {
  const chartAttributes = useMemo(() => calcChartAttributes(timings, maxTime), [timings, maxTime]);
  const [isOpen, updateOpen] = useState(false);
  const displayPopover = () => updateOpen(true);
  const hidePopover = () => updateOpen(false);

  return (
    <Popover
      body={<TimeChartTooltip data={timings} />}
      isOpen={isOpen}
      preferPlace="below"
    >
      <div
        className={Styles['time-chart']}
        onMouseOut={hidePopover}
        onMouseOver={displayPopover}
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
      </div>
    </Popover>
  );
};

TimeChart.propTypes = {
  maxTime: PropTypes.number.isRequired,
  timings: PropTypes.object.isRequired,
};

export default TimeChart;
