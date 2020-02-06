import React from 'react';
import { mount } from 'enzyme';

import TimelineChart from './../../../../src/Components/TimelineChart/TimelineChart';

describe('TimelineChart', () => {
  it('renders without crashing', () => {
    mount(<TimelineChart
      chartData={[]}
      totalNetworkTime={17000}
    />);
  });
});
