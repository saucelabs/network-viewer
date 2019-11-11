import React from 'react';
import { mount } from 'enzyme';

import NetworkTableContainer from '../../../Containers/NetworkTableContainer';
import { NetworkProvider } from '../../../state/network/provider';

describe('NetworkTableContainer', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <NetworkTableContainer />
      </NetworkProvider>,
    );
  });
});
