import React from 'react';
import { mount } from 'enzyme';

import MainContainer from './../../../src/Containers/MainContainer';
import NetworkProvider from './../../../src/state/network/NetworkProvider';

describe('MainContainer', () => {
  it('renders without crashing', () => {
    const element = mount(
      <NetworkProvider>
        <MainContainer />
      </NetworkProvider>,
    );
    expect(element).toMatchSnapshot();
  });
});
