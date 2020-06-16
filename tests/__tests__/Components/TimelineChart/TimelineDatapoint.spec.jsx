import React from 'react';
import { mount } from 'enzyme';

import TimelineChartDatapoint from './../../../../src/Components/TimelineChart/TimelineDatapoint';

describe('TimelineChartDatapoint', () => {
  it('renders without crashing', () => {
    const element = mount(
      <svg>
        <TimelineChartDatapoint
          cx={234}
          index={5}
          maxTime={17000}
          payload={{
            timings: {
              startTime: 1200,
            },
          }}
        />
      </svg>,
    );
    expect(element).toMatchSnapshot();
  });
});
