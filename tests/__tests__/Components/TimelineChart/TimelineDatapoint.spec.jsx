import React from 'react';
import { mount } from 'enzyme';

import TimelineChartDatapoint from './../../../../src/Components/TimelineChart/TimelineDatapoint';

describe('TimelineChartDatapoint', () => {
  it('renders without crashing', () => {
    mount(
      <TimelineChartDatapoint
        cx={234}
        index={5}
        maxTime={17000}
        payload={{
          timings: {
            startTime: 1200,
          },
        }}
      />);
  });
});
