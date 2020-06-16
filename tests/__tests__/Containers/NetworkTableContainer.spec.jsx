import React from 'react';
import { mount } from 'enzyme';

import NetworkTableContainer from './../../../src/Containers/NetworkTableContainer';
import NetworkProvider from './../../../src/state/network/NetworkProvider';

describe('NetworkTableContainer', () => {
  it('renders without crashing', () => {
    const element = mount(
      <NetworkProvider>
        <NetworkTableContainer />
      </NetworkProvider>,
    );
    expect(element).toMatchSnapshot();
  });
});
