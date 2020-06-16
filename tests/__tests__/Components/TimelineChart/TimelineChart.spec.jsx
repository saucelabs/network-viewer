import React from 'react';
import { mount } from 'enzyme';

import TimelineChart from './../../../../src/Components/TimelineChart/TimelineChart';

describe('TimelineChart', () => {
  it('renders without crashing', () => {
    const element = mount(<TimelineChart
      chartData={[]}
      totalNetworkTime={17000}
    />);
    expect(element).toMatchSnapshot();
  });
});
