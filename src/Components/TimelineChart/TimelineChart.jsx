import React from 'react';
import PropTypes from 'prop-types';
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

import Styles from './TimelineChart.styles.scss';
import TimelineDatapoint from './TimelineDatapoint';
import { formatTime } from '../../utils';
import TimelineTooltip from './TimelineTooltip';

const TimelineChart = ({ chartData, totalNetworkTime }) => (
  <div className={Styles['chart-container']}>
    <ResponsiveContainer
      height={100}
      width="100%"
    >
      <ScatterChart
        className={Styles['scatter-chart']}
      >
        <XAxis
          axisLine={false}
          dataKey="timings.startTime"
          domain={[0, totalNetworkTime]}
          interval="preserveStartEnd"
          orientation="top"
          tickCount={10}
          tickFormatter={formatTime}
          tickLine={false}
          type="number"
        />
        <YAxis
          dataKey="index"
          domain={['min', 'max']}
          hide
          reversed
        />
        <Tooltip content={<TimelineTooltip />} />
        <Scatter
          data={chartData}
          shape={(
            <TimelineDatapoint
              maxTime={totalNetworkTime}
            />
          )}
        />
      </ScatterChart>
    </ResponsiveContainer>
  </div>
);

TimelineChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  totalNetworkTime: PropTypes.number.isRequired,
};

export default TimelineChart;
