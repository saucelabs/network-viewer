import React from 'react';
import { mount } from 'enzyme';

import ImportHAR from '../../../Components/ImportHAR';
import { NetworkProvider } from '../../../state/network/provider';

describe('ImportHAR', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <ImportHAR />
      </NetworkProvider>,
    );
  });
});
