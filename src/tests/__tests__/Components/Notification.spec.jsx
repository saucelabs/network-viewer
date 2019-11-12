import React from 'react';
import { mount } from 'enzyme';

import Notification from './../../../Components/Notification';
import { NetworkProvider } from './../../../state/network/provider';

describe('Notification', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <Notification />
      </NetworkProvider>,
    );
  });
});
