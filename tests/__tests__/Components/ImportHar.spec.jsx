import React from 'react';
import { mount } from 'enzyme';

import ImportHAR from './../../../src/Components/ImportHAR';
import { NetworkProvider } from './../../../src/state/network/provider';

describe('ImportHAR', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <ImportHAR />
      </NetworkProvider>,
    );
  });
});
