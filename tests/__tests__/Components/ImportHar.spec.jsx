import React from 'react';
import { mount } from 'enzyme';

import ImportHAR from './../../../src/Components/ImportHAR';
import NetworkProvider from './../../../src/state/network/NetworkProvider';

describe('ImportHAR', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <ImportHAR />
      </NetworkProvider>,
    );
  });
});
