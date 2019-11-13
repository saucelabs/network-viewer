import React from 'react';
import { mount } from 'enzyme';

import Notification from './../../../src/Components/Notification';
import NetworkProvider from './../../../src/state/network/NetworkProvider';

describe('Notification', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <Notification />
      </NetworkProvider>,
    );
  });
});