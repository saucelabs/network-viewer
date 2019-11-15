import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';

import Styles from './TimeChart.styles.scss';
import { TIMINGS } from '../../constants';
import TimeChartTooltip from './TimeChartTooltip';

const timeStyle = {
  zIndex: 10,
};

const TimeChart = ({ timings, maxTime }) => (
  <div className={Styles['timechart-container']}>
    <ResponsiveContainer
      height={30}
      width="100%"
    >
      <BarChart
        data={[timings]}
        layout="vertical"
      >
        <XAxis
          domain={[-timings.startTime, maxTime]}
          hide
          type="number"
        />
        <YAxis
          dataKey="name"
          hide
          type="category"
        />
        <Tooltip
          content={<TimeChartTooltip />}
          cursor={false}
          wrapperStyle={timeStyle}
        />
        {Object.keys(TIMINGS).map((key) => (
          <Bar
            key={TIMINGS[key].dataKey}
            {...TIMINGS[key]}
            stackId="timing"
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  </div>
);

TimeChart.propTypes = {
  maxTime: PropTypes.number.isRequired,
  timings: PropTypes.object.isRequired,
};

export default TimeChart;
