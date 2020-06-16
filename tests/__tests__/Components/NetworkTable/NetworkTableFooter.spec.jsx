import React from 'react';
import { Map } from 'immutable';
import { mount } from 'enzyme';

import NetworkTableFooter from './../../../../src/Components/NetworkTable/NetworkTableFooter';

describe('NetworkTableFooter', () => {
  it('renders without crashing', () => {
    const element = mount(
      <div>
        <NetworkTableFooter
          dataSummary={new Map({
            totalRequests: 20,
            totalTransferredSize: 2034,
            totalUncompressedSize: 1035,
            timings: {
              onLoad: 999,
              DOMContentLoaded: 2000,
            },
          })}
          showAllInfo
        />
      </div>,
    );
    expect(element).toMatchSnapshot();
  });
});
