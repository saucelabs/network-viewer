import React from 'react';
import { mount } from 'enzyme';

import NetworkTableContainer from './../../../src/Containers/NetworkTableContainer';
import { NetworkProvider } from './../../../src/state/network/provider';

describe('NetworkTableContainer', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <NetworkTableContainer />
      </NetworkProvider>,
    );
  });
});
