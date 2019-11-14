import React from 'react';
import { mount } from 'enzyme';

import MainContainer from './../../../src/Containers/MainContainer';
import NetworkProvider from './../../../src/state/network/NetworkProvider';

describe('MainContainer', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <MainContainer />
      </NetworkProvider>,
    );
  });
});
