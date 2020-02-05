import React from 'react';
import PropTypes from 'prop-types';
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import Styles from './TimelineChart.styles.scss';
import TimelineDatapoint from './TimelineDatapoint';

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
          dataKey="time"
          domain={[0, Math.floor(totalNetworkTime) + 50]}
          interval="preserveStartEnd"
          orientation="top"
          tickCount={10}
          tickLine={false}
          type="number"
          unit="ms"
        />
        <YAxis
          dataKey="index"
          domain={['auto', 'auto']}
          hide
        />
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
